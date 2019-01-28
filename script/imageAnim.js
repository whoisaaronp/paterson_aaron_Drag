(() => {
	console.log('fired');

	const theButton = document.querySelector("#buttonHolder img")

	// set up the puzzle pieces and boards
	
	
	// when its done loading change to headline.
	function changeHeadline() {
		document.querySelector("h1").textContent = "Hello there!";
		document.querySelector("p").textContent = "Hello again!";

	}
	// event handling in the bottom
	// how it works in the way the user interacts with it.
	// think through the 'think' about how you want the functions work.
	theButton.addEventListener("click", changeHeadline);
	


})();
