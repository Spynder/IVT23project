$(document).ready(function() {
	let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
		
	if(localStorage.getItem("darkMode") !== null) {
		darkMode = localStorage.getItem("darkMode") == "dark";
	}

	if (darkMode) {
		$("html").toggleClass("dark-mode");
		$("#darkmode").attr("checked", true);
	}

	$("#darkmode").click(function() {
		$("html").get(0).style.setProperty("--transition-time", "0.25s");
		$("html").toggleClass("dark-mode");
		let isDark = $("html").hasClass("dark-mode");
		localStorage.setItem("darkMode", isDark ? "dark" : "light");
	});
});