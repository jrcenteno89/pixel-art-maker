function makeGrid() {
  const canvas = document.querySelector('#pixelCanvas');
  //Variables store the user selected height and width of the grid
  let gridHeight = document.querySelector('#inputHeight').value;
  let gridWidth = document.querySelector('#inputWidth').value;
  //Nested for loops add rows to canvas and fill each row with cells
  for(var h = 0; h < gridHeight; h++) {
    const row = document.createElement('tr');
    canvas.appendChild(row);
    for (var w = 0; w < gridWidth; w++) {
      const cell = document.createElement('td');
      row.appendChild(cell);
      //Clicking on a cell changes its color to the selected color input
      cell.addEventListener('click', function changeColor() {
        const color = document.querySelector('#colorPicker').value;
        cell.style.backgroundColor = color;
      });
    }
  }
}

//Removes existing grid and replaces with new one on submit event
document.addEventListener('submit', function() {
  const rows = document.querySelectorAll('tr');
  rows.forEach(function(element) {
    element.remove();
  });
  makeGrid();
  //Stops submit event from refreshing the page and erasing new grid
  event.preventDefault();
});
