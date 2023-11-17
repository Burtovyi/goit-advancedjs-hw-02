import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  inputDate: document.querySelector('input[type="text"]'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.btnStart.disabled = true;
let timer = null;
let time;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkDate(selectedDates[0].getTime());
  },
};

flatpickr(refs.inputDate, options);

function checkDate(date) {
  if (new Date().getTime() > date) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
    });
  } else {
    iziToast.success({
      title: 'OK',
      message: 'Let`s go!',
    });
    time = date;
    refs.btnStart.disabled = false;
  }
}

refs.btnStart.addEventListener('click', () => {
  refs.inputDate.disabled = true;
  refs.btnStart.disabled = true;

  timer = setInterval(() => {
    let checkTime = time - new Date().getTime();
    if (checkTime >= 0) {
      let countdownTime = convertMs(checkTime);
      fillResultDisplay(countdownTime);
    } else {
      clearInterval(timer);
      refs.inputDate.disabled = false;
      return iziToast.warning({
        title: 'Time is up',
        message: 'Shall we do it again?',
      });
    }
  }, 1000);
});

function fillResultDisplay({ days, hours, minutes, seconds }) {
  if (days.length >= 3) {
    refs.days.textContent = days;
  } else {
    refs.days.textContent = addLeadingZero('' + days);
  }
  refs.hours.textContent = addLeadingZero('' + hours);
  refs.minutes.textContent = addLeadingZero('' + minutes);
  refs.seconds.textContent = addLeadingZero('' + seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value.length === 1) {
    return value.padStart(2, '0');
  } else {
    return value;
  }
}
