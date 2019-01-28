(() => {
	console.log('fired');

	// set up the puzzle pieces and the boards.
	// mmake and array called ...
	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// get a reference to the drag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");

	// get a reference to the buttons at the bottoms as we change the puzzle.
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	// function go in the middle 
	function createPuzzlePieces(pictureIndex) {
		// generate images here and put in the container. --> need to make (top, left, right, bottom left and botrom right)
		// debugger;
		// loop through the image and refs and generate one for each
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" 
			src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});
	}

	function resetPuzzlePieces(){
		// change teh current puzzle, regenerate the pieces.
		// debugger;
		// clean out the puzzle pieces div
		piecesBoard.innerHTML = "";

		createPuzzlePieces(this.dataset.puzzleref);
	}


	// event handling goes here.
	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));

	// call the function to set up / generate the pieces
	createPuzzlePieces(0);

})();
