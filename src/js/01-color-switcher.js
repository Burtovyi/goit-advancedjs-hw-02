const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
let timerBgColor = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startTimerChangeColor() {
  timerBgColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}

function stopChangeColor() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(timerBgColor);
}
refs.btnStart.addEventListener('click', startTimerChangeColor);
refs.btnStop.addEventListener('click', stopChangeColor);
