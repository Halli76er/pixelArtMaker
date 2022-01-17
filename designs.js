// const Data
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
const colorPicker = document.querySelector('#colorPicker');

// ADD EventListener submit
sizePicker.addEventListener('submit', makeGrid);

// When size is submitted by the user, call makeGrid()

// Function for EventListener
function makeGrid(event) {
	event.preventDefault();

	// Delete Grid
	while (pixelCanvas.firstChild) {
		pixelCanvas.removeChild(pixelCanvas.firstChild);
	}

	// Create Grid row and cell
	for (let i = 1; i <= inputHeight.value; i++) {
		const row = document.createElement('tr');
		pixelCanvas.appendChild(row);
		for (let j = 1; j <= inputWidth.value; j++) {
			const cell = document.createElement('td');
			row.appendChild(cell);
		}
	}

	// new Grid in const 
	const tableCell = document.querySelectorAll('td');

	// Select color input
	tableCell.forEach(cell => {
		// ADD EventListener colorPicker
		cell.addEventListener('click', function(event) {
			if (event.target.style.backgroundColor === "") {
				event.target.style.backgroundColor = colorPicker.value;
			} else {
				event.target.style.backgroundColor = "";
			}
		});
	});
}