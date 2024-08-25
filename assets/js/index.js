$(document).ready(function() {
	const dirs = window.dirs;

	let stack = [];
	try {
		stack = JSON.parse(window.location.search.substring(1));
	} catch {}

	const container = $("#container");

	function update() {
		let page = dirs;
		for(let i of stack) page = page[i].contents;
		container.empty();
		if(stack.length > 0) {
			let back = $(`<a class="back" href="?[${stack.slice(0, -1)}]">Назад</a>`);
			container.append(back);
		} else $("h1").show();
		for(let j in page) {
			let link = page[j];
			let a;
			if (!link.hasOwnProperty("contents"))
				a = $(`<a>${link.name}</a>`); // empty text
			else if(typeof link.contents === "string")
				a = $(`<a href="renderer.html?[${stack.concat([j])}]">${link.name}</a>`); // link to a file
			else
				a = $(`<a href="?[${stack.concat([j])}]">${link.name}</a>`); // another folder
			
			container.append(a);
		}
	}

	update();
});