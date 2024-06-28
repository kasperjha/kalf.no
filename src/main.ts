import './index.css';

import kalfOne from '/drawing-1.svg?raw';
import kalfTwo from '/drawing-2.svg?raw';
import kalfThree from '/drawing-3.svg?raw';
import kalfFour from '/drawing-4.svg?raw';
import kalfDana from '/dana.svg?raw';
import kalfEva from '/eva.svg?raw';
import kalfSerban from '/serban.svg?raw';
import kalfManos from '/manos.svg?raw';
import kalfRobin from '/robin.svg?raw';

interface KalfCredit {
  by: string,
  byLink?: string,
  date?: string,
}

interface KalfSubmission {
  svg: string
  credit?: KalfCredit
}

const drawings: KalfSubmission[] = [
  { svg: kalfOne },
  { svg: kalfTwo },
  { svg: kalfThree },
  { svg: kalfFour },
  { svg: kalfDana, credit: { by: '@dana_krm', byLink: 'https://instagram.com/dana_krm', date: '2024-06-23'} },
  { svg: kalfEva, credit: { by: '@evastk', byLink:'https://www.instagram.com/evahstk/', date: '2024-06-27'} },
  { svg: kalfSerban, credit: { by: '@serbbi', byLink: 'https://instagram.com/serbbi', date: '2024-06-28'} },
  { svg: kalfManos, credit: { by: '@manoskalostypis', byLink: 'https://instagram.com/manoskalostypis', date: '2024-06-28'} },
  { svg: kalfRobin, credit: { by: 'robin', byLink: 'https://rzbin.com/', date: '2024-06-28'} },
];

const drawingContainer = document.getElementById('kalf-drawing') as HTMLDivElement;
const drawButton = document.getElementById('kalf-draw') as HTMLButtonElement;
const nextButton = document.getElementById('kalf-next') as HTMLButtonElement;
const creditContainer = document.getElementById('kalf-credit') as HTMLDivElement;

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
  // TODO: use svg animate for perf
  const path = drawingContainer.querySelector('path') as SVGPathElement;
  drawPath(path, 2500, 25);
}

function updateCredits(credit?: KalfCredit) {
  if(credit) {
    const nameHTML = credit.byLink ? `<a href="${credit.byLink}">${credit.by}</a>` : credit.by;
    const dateHTML = credit.date? `<br>${credit.date}` : '';
    creditContainer.innerHTML = 'by ' + nameHTML + dateHTML;
  } else {
    creditContainer.innerHTML = '';
  }
}

function loadKalf() {
  const randomDrawing = drawings[Math.floor(Math.random() * drawings.length)];
  drawingContainer.innerHTML = randomDrawing.svg;
  updateCredits(randomDrawing.credit);
}

function jumpKalf() {
  drawingContainer.style.transitionDuration = '150ms';
  drawingContainer.style.transitionTimingFunction = 'ease-out';
  drawingContainer.style.transitionProperty = 'transform';
  drawingContainer.style.transform = 'translateY(-50px)';
  setTimeout(() => {
    drawingContainer.style.transitionDuration = '100ms';
    drawingContainer.style.transitionTimingFunction = 'ease-in'
    drawingContainer.style.transform = 'translateY(0px)'
  }, 150);
}

nextButton.addEventListener('click', loadKalf)
drawButton.addEventListener('click', drawKalf)
drawingContainer.addEventListener('click', jumpKalf)
loadKalf()
drawKalf()
