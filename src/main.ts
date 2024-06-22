import './index.css';

import kalfOne from '/drawing-1.svg?raw';
import kalfTwo from '/drawing-2.svg?raw';
import kalfThree from '/drawing-3.svg?raw';
import kalfFour from '/drawing-4.svg?raw';

const drawings = [kalfOne, kalfTwo, kalfThree, kalfFour];
const drawingContainer = document.getElementById('kalf-drawing') as HTMLDivElement;
const newButton = document.getElementById('kalf-new') as HTMLButtonElement;

function drawPath(path: SVGPathElement, duration: number, delay: number) {
  let pathLength = path.getTotalLength();
  path.style.strokeDasharray = pathLength.toString();
  path.style.strokeDashoffset = pathLength.toString();

  let numSteps = (duration / delay);

  const step = () => {
    pathLength -= pathLength / numSteps;
    path.style.strokeDashoffset = pathLength.toString();

    if(1 <= numSteps ) {
      numSteps -= 1;
      setTimeout(step, delay);
    }
  }

  step()
}

function drawKalf() {
  const path = drawingContainer.querySelector('path') as SVGPathElement;
  drawPath(path, 2500, 5);
}

function loadKalf() {
  const randomDrawing = drawings[Math.floor(Math.random() * drawings.length)];
  drawingContainer.innerHTML = randomDrawing;
}

newButton.addEventListener('click', loadKalf)
loadKalf()
drawKalf()
