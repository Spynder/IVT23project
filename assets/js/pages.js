$(document).ready(function() {
	console.log("ready");

	let btnGeometry = $("#btn-geometry");
	let btnAlgebra = $("#btn-algebra");
	let btnBack = $(".btn-back");

	let pageStart = $("#start");
	let pageGeometry = $("#geometry");
	let pageAlgebra = $("#algebra");

	btnAlgebra.click(function() {
		pageStart.hide();
		pageAlgebra.show();
	});

	btnGeometry.click(function() {
		pageStart.hide();
		pageGeometry.show();
	});

	btnBack.click(function() {
		pageAlgebra.hide();
		pageGeometry.hide();
		pageStart.show();
	})
});