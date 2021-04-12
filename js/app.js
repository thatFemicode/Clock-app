'use strict';

const clock = new Clock();
const ui = new UI();
function getQuote() {
  clock
    .getQuote()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
getQuote();

// console.log(ui.timezone.textContent);
const getTime = function () {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();

  let greet = '';
  if (hour >= 5 && hour <= 11) {
    greet = 'Morning';
  } else if (hour >= 12 && hour <= 17) {
    greet = 'Afternoon';
  } else {
    greet = 'Evening';
  }
  ui.greeting.textContent = `good ${greet}`;

  // background and icon
  if (hour >= 5 && hour <= 17) {
    ui.background.classList.add('day');
    ui.icon.src = '../dist/assets/desktop/icon-sun.svg';
    ui.icon.setAttribute('alt', 'sun icon');
  } else {
    ui.background.classList.add('night');
    ui.icon.src = '../dist/assets/desktop/icon-moon.svg';
    ui.icon.setAttribute('alt', 'moon icon');
    ui.detail.style.color = '#fff';
    ui.detail.style.background = 'rgba(0, 0, 0, 0.75)';
  }
  // TIME SETUP
  if (minute < 10) {
    minute = '0' + minute;
  }

  if (hour === 0) {
    hour = 12;
    ui.period.textContent = 'am';
  } else if (hour === 12) {
    ui.period.textContent = 'pm';
  } else if (hour > 12) {
    hour -= 12;
    ui.period.textContent = 'pm';
  } else {
    ui.period.textContent = 'am';
  }

  ui.time.textContent = `${hour}:${minute}`;
  let interval = (60 - new Date().getSeconds()) * 1000 + 5;
  // console.log(interval);
  // console.log(new Date().getSeconds());
  setTimeout(getTime, interval);
};
getTime();
function getTimezone() {
  clock
    .getTimeZone()
    .then((results) => {
      console.log(results);
      ui.zone(results);
    })
    .catch((err) => console.log(err));
}
getTimezone();
function getLocation() {
  clock
    .getLocation()
    .then((results) => {
      console.log(results);
      ui.locate(results);
    })
    .catch((err) => console.log(err));
}
getLocation();
// function to show details
function showDetails() {
  ui.top.classList.toggle('transform');
  ui.detail.classList.toggle('transform');

  // if (ui.expand.firstChild.nodeValue === 'More') {
  //   ui.expand.firstChild.nodeValue = 'Less';
  // } else {
  //   ui.expand.firstChild.nodeValue = 'More';
  // }
  if (ui.btn.innerHTML === 'Less') {
    ui.btn.innerHTML = 'More';
  } else {
    ui.btn.innerHTML = 'Less';
  }
  // let valentine = ui.expand.firstChild.nodeValue;
  // // console.log(valentine);
  // let bev = valentine === 'More' ? valentine : 'Less';
  // console.log(bev);
  // valentine === 'More' ? valentine : valentine === 'Less';
  // valentine === 'More' ? 'Less' : 'More';
  // let tip = valentine === 'More' ? 'Less' : 'More';
  // valentine = tip;

  ui.arrow.classList.toggle('rotate');
}
// console.log(ui.expand.firstChild.nodeValue);

ui.expand.addEventListener('click', showDetails);
ui.refresh.addEventListener('click', getQuote);

const showPage = () => {
  ui.loadContain.style.display = 'none';
  ui.container.style.display = 'block';
};
const timeout = () => {
  setTimeout(showPage, 3000);
};
window.onload = () => {
  timeout();
};
