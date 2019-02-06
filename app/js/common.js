$(function() {

	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {myFunction()};

	// Get the navbar
	var tips = document.getElementById("wehave");
	var navbar = document.getElementById("navbar");

	// Get the offset position of the navbar
	var showMenu = tips.offsetTop;

	// Add the sticky class to the navbar
	function myFunction() {
		if (window.pageYOffset >= showMenu) {
			navbar.classList.add("showMenu")
		} else {
			navbar.classList.remove("showMenu");
		}
	}

});
