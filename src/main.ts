import './index.css';

const newButton = document.getElementById('kalf-new');
const drawing = document.getElementById('kalf-drawing');

const drawings = [
  '/drawing-1.svg',
  '/drawing-2.svg',
  '/drawing-3.svg',
  '/drawing-4.svg',
]
let idx = Math.floor(Math.random() * drawings.length);

drawing.src = drawings[idx];

newButton?.addEventListener('click', () => {
  idx = (idx + 1) % drawings.length;
  drawing.src = drawings[idx];
});
