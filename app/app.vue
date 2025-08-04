<template>
  <Body class="flex flex-col p-10">
    <h1 class="font-mono text-4xl">kalf.no</h1>

    <div class="flex flex-col items-center justify-center flex-grow">

      <button id="kalf-drawing" class="flex items-center justify-center w-64 h-64 cursor-default touch-manipulation">
        kalf drawing goes here ...
      </button>

      <p id="kalf-credit" class="h-10 mb-6 text-sm text-center text-gray-600">
        drawing credit goes here ...
      </p>

      <div>
        <button id="kalf-prev" class="p-4 text-gray-600 underline touch-manipulation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
          </svg>
        </button>

        <button id="kalf-draw" class="p-4 text-black underline transition duration-300 touch-manipulation">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>

        <button id="kalf-next" class="p-4 text-gray-600 underline touch-manipulation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

    </div>

    <footer>
      <p>Kasper Alfarnes</p>
      <p class="text-gray-500">Freelance Developer</p>
    </footer>

  </Body>
</template>

<script lang="ts" setup>
useHead({
  script: [
    { defer: true, src: 'https://plausible.kakk.dev/js/script.js', 'data-domain': 'kalf.no' }
  ]
})

import kalfKasper from '/kasper.svg?raw';
import kalfDana from '/dana.svg?raw';
import kalfEva from '/eva.svg?raw';
import kalfSerban from '/serban.svg?raw';
import kalfManos from '/manos.svg?raw';
import kalfRobin from '/robin.svg?raw';
import kalfNikola from '/nikola.svg?raw';
import kalfAna from '/ana.svg?raw';
import kalfOscar from '/oscar.svg?raw';
import kalfAlina from '/alina.svg?raw';
import kalfEnis from '/enis.svg?raw';
import kalfFridth from '/fridth.svg?raw';
import kalfSander from '/sander.svg?raw';
import kalfEmma from '/emma.svg?raw';
import kalfFrida from '/frida.svg?raw';
import kalfHans from '/hans.svg?raw';
import kalfHenrik from '/henrik.svg?raw';
import kalfAasmund from '/aasmund.svg?raw';

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
  { svg: kalfOscar, credit: { by: '@oscar', byLink: 'https://instagram.com/oscar.def', date: '2024-06-29'} },
  { svg: kalfAlina, credit: { by: '@alisha', byLink: 'https://www.instagram.com/alinaakopian22/', date: '2024-06-29'} },
  { svg: kalfEnis, credit: { by: 'eniSALIMSADEH', date: '2025-07-13'} },
  { svg: kalfFridth, credit: { by: 'FQ', date: '2025-07-13'} },
  { svg: kalfSander, credit: { by: '@sa.schroder', byLink: 'https://www.instagram.com/sa.schroder', date: '2025-07-13'} },
  { svg: kalfEmma, credit: { by: '@emmaeffie', byLink: 'https://www.instagram.com/emmaeffie', date: '2025-07-13'} },
  { svg: kalfFrida, credit: { by: '@fridahansenhh', byLink: 'https://www.instagram.com/fridahansenhh', date: '2025-07-13'} },
  { svg: kalfHans, credit: { by: '@zvanz.mp3', byLink: 'https://www.instagram.com/zvanz.mp3', date: '2025-07-13'} },
  { svg: kalfHenrik, credit: { by: '@henrikoellestad', byLink: 'https://www.instagram.com/henrikoellestad', date: '2025-07-13'} },
  { svg: kalfAasmund, credit: { by: '@oppned_studio', byLink: 'https://www.instagram.com/oppned_studio', date: '2025-07-13'} },
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
  const randomDrawing = drawings[drawingIndex] as KalfSubmission;
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
  drawKalf()
})

// load previous drawing
prevButton.addEventListener('click', () => {
  index = index == 0 ? drawings.length - 1 : index - 1;
  console.log(index)
  loadKalf(index);
  drawKalf()
})

drawButton.addEventListener('click', drawKalf)
drawingContainer.addEventListener('click', jumpKalf)
</script>

<style>
  /* https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser/72245072#72245072 */
  body {
    height: 100dvh;
  }
  a {
    text-decoration: underline;
  }
</style>
