import './index.css';

import kalfOne from '/drawing-1.svg?raw';
import kalfTwo from '/drawing-2.svg?raw';
import kalfThree from '/drawing-3.svg?raw';
import kalfFour from '/drawing-4.svg?raw';

const drawings = [kalfOne, kalfTwo, kalfThree, kalfFour];
const drawingContainer = document.getElementById('kalf-drawing') as HTMLDivElement;
const newButton = document.getElementById('kalf-new') as HTMLButtonElement;

function loadRandomDrawing() {
  const randomDrawing = drawings[Math.floor(Math.random() * drawings.length)];
  drawingContainer.innerHTML = randomDrawing;
}

newButton.addEventListener('click', loadRandomDrawing)
loadRandomDrawing()
