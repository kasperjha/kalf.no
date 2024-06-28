import './index.css';

import kalfKasper from '/kasper.svg?raw';
import kalfDana from '/dana.svg?raw';
import kalfEva from '/eva.svg?raw';
import kalfSerban from '/serban.svg?raw';
import kalfManos from '/manos.svg?raw';
import kalfRobin from '/robin.svg?raw';
import kalfNikola from '/nikola.svg?raw';
import kalfAna from '/ana.svg?raw';

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
  { svg: kalfKasper, credit: { by: 'kasper', byLink: 'https://kakka.dev', date: '2024-06-22' } },
  { svg: kalfDana, credit: { by: '@dana_krm', byLink: 'https://instagram.com/dana_krm', date: '2024-06-23'} },
  { svg: kalfEva, credit: { by: '@evastk', byLink:'https://www.instagram.com/evahstk/', date: '2024-06-27'} },
  { svg: kalfSerban, credit: { by: '@serbbi', byLink: 'https://instagram.com/serbbi', date: '2024-06-28'} },
  { svg: kalfManos, credit: { by: '@manoskalostypis', byLink: 'https://instagram.com/manoskalostypis', date: '2024-06-28'} },
  { svg: kalfRobin, credit: { by: 'robin', byLink: 'https://rzbin.com/', date: '2024-06-28'} },
  { svg: kalfNikola, credit: { by: '@nikola', byLink: 'https://instagram.com/nikolazxvkovic', date: '2024-06-28'} },
  { svg: kalfAna, credit: { by: '@ana', byLink: 'https://instagram.com/ana_pintilie__', date: '2024-06-28'} },
];

const drawingContainer = document.getElementById('kalf-drawing') as HTMLDivElement;
const prevButton = document.getElementById('kalf-prev') as HTMLButtonElement;
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
  drawButton.disabled = true;
  const duration = 2500;

  setTimeout(() => {
    drawButton.disabled = false;
  }, duration);

  const path = drawingContainer.querySelector('path') as SVGPathElement;

  drawPath(path, duration, 25);
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

function loadKalf(drawingIndex: number) {
  const randomDrawing = drawings[drawingIndex];
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

// load a random drawing to begin with
let index = Math.floor(Math.random() * drawings.length);
loadKalf(index);
drawKalf()

// load next drawing
nextButton.addEventListener('click', () => {
  index = (index + 1) % drawings.length;
  loadKalf(index);
})

// load previous drawing
prevButton.addEventListener('click', () => {
  index = index == 0 ? drawings.length - 1 : index - 1;
  console.log(index)
  loadKalf(index);
})

drawButton.addEventListener('click', drawKalf)
drawingContainer.addEventListener('click', jumpKalf)

