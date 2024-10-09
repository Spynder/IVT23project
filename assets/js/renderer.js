const imagePath = "assets/img/";
const mdsPath = "assets/mds/";

const imageRegex = /\!\[([^\]]+)\]\]/g; // ![[...]]
const notesRegex = /\[\!([^\]]+)\]/g; // [!...]
const noteLinkRegex = /\[\[\[.*\]\]\]/g; // [[[...]]]

const preamble = `$$
	\\require{physics}
	\\DeclareMathOperator{\\tg}{tg}
	\\DeclareMathOperator{\\ctg}{ctg}
	\\DeclareMathOperator{\\arctg}{arctg}
	\\DeclareMathOperator{\\arcctg}{arcctg}
	\\DeclareMathOperator{\\const}{const}
	\\DeclareMathOperator{\\prj}{{\\large\\style{font-family:Times}{\\text{пр }}}}
	\\DeclareMathOperator{\\rg}{Rg}
	\\DeclareMathOperator{\\im}{Im}
	\\DeclareMathOperator{\\ort}{ort}
	\\DeclareMathOperator{\\pr}{pr}
$$`;

$(window).on("load", function() {
	window.loaded = true;
});

$(document).ready(function() {
	const dirs = window.dirs;
	const area = $("#mdfile");

	let url = "404";
	let err = false;
	let directory = undefined; // to know how many pages are there
	let arr = undefined; // GET parameter array, without the last page
	let page = undefined; // that one last page
	try { // if there's GET parameter in the link, retrieve it. It should be an array of indices.
		arr = JSON.parse(window.location.search.substring(1));
		url = dirs;
		page = arr.pop();
		for(let i of arr) {
			url = url[i].contents;
		}
		directory = url;
		url = url[page].contents
		if(url === undefined) {
			url = "middle";
			err = true;
		}

		if(directory && page > 0) $("#prevLink").css("visibility", "visible");
		$("#prevLink").click(function() {
			open(`?[${arr.concat([page-1])}]`, "_self");
		});
		
		if(directory && page+1 < directory.length) $("#nextLink").css("visibility", "visible");
		$("#nextLink").click(function() {
			open(`?[${arr.concat([page+1])}]`, "_self");
		});
	} catch(e) {
		url = "404";
		err = true;
	}

	$("#back").click(function() {
		if(arr !== undefined) {
			open(`/?[${arr}]`, "_self"); // go to previous directory if we came from it
		} else
			open(`/`, "_self"); // otherwise go to the main page

	});

	// https://stackoverflow.com/a/14880260
	String.prototype.replaceBetween = function(start, end, what) {
		return this.substring(0, start) + what + this.substring(end);
	}

	fetch(mdsPath + url + ".md").then(res => res.text()).then(function(txt) {
		if(page !== undefined && !err) txt = "\n" + "# " + directory[page].name + "\n\n" + txt;
		else txt = "\n" + txt;
		let result;

		// Rewrite image links from obsidian-style to <img> tags
		while ((result = imageRegex.exec(txt))) {
			let index = result.index;
			let link = result[0].substring(3, result[0].length-2);
			
			// Detect image size if it comes as an alt text after '|'.
			let sizeIndex = link.indexOf("|");
			let size = "";
			if(sizeIndex === -1) sizeIndex = link.length;
			else size = `width="${link.substring(sizeIndex+1)}"`;

			let path = link.substring(0, sizeIndex);
			if(path.substring(0, 4) !== "http") path = imagePath + path; // local or hyperlink

			txt = txt.replaceBetween(index, index+result[0].length, `<img src=${path} alt=${link} referrerpolicy="no-referrer" ${size}>`);
		}

		while ((result = noteLinkRegex.exec(txt))) {
			let index = result.index;
			let link = result[0].substring(3, result[0].length-3);

			txt = txt.replaceBetween(index, index+result[0].length, `(renderer.html?&#91;${link}&#93;)`);
		}

		// Remove all note tags from obsidian-style .md file. (Maybe return to this later and implement custom tags)
		while ((result = notesRegex.exec(txt))) txt = txt.replace(result[0], "");
		
		// Add preamble
		txt = preamble + txt;
		area.text(txt);

		texme.setOption("onRenderPage", function() {
			$("main").insertBefore('body:eq(0)');
		})

		if(window.loaded)
			texme.renderPage();
		else $(window).on("load", function() {
			texme.renderPage();
		});
	})
});