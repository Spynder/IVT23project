$(document).ready(function() {
	console.log("ready");

	const btnGeometry = $("#btn-geometry");
	const btnAlgebra = $("#btn-algebra");
	const btnProblems = $("#btn-problems");
	const btnBack = $(".btn-back");

	const pageStart = $("#start");
	const pageGeometry = $("#geometry");
	const pageAlgebra = $("#algebra");
	const pageProblems = $("#problems");

	btnAlgebra.click(function() {
		pageStart.hide();
		pageAlgebra.show();
	});

	btnGeometry.click(function() {
		pageStart.hide();
		pageGeometry.show();
	});

	btnProblems.click(function() {
		pageStart.hide();
		pageProblems.show();
	})

	btnBack.click(function() {
		pageAlgebra.hide();
		pageGeometry.hide();
		pageProblems.hide();
		pageStart.show();
	})
});