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
// .then((cr) => console.log(cr));
window.onload = () => {
  timeout();
  // getCode();
  // access().then((results) => {
  //   console.log(results);
  // });
  // .catch((err) => console.log(err));
  // if (window.location.search.length > 0) {
  //   handleRedirect();
  // } else {
  //   console.log('you are worong');
  // }
};
const rotate = () => {
  anime({
    targets: '.header-icon',
    rotateY: 360,
    // keyframes: [{ rotate: 0 }, { rotate: 30 }, { rotate: 0 }],
    // translateY: 400,
    // duration: 400,
    // scale: 2,
    // easing: 'linear',
    duration: 1000,
    endDelay: 300,
    scale: 0.5,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
  });
};
// @keyframes rotation {
//   0% {
//     transform: rotate(0deg);
//   }
//   50% {
//     transform: rotate(30deg);
//   }
//   100% {
//     transform: rotate(0deg);
//   }
// }
rotate();

// Spotify API atuff

// const auth = async () => {
//   let client_id = '3ae4ec3b888546b5a540e1f73d131efc';
//   let urls = 'https://accounts.spotify.com/authorize';
//   let redirect_uri = 'http://127.0.0.1:5501/index.html';

//   urls += '?client_id=' + client_id;
//   urls += '&response_type=code';
//   urls += '&redirect_uri=' + encodeURI(redirect_uri);
//   urls += '&state';
//   urls += '&show_dialog=true';
//   urls +=
//     '&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private';
//   // const rush = await fetch(urls);
//   window.location.href = urls;
// };
// document.querySelector('.author').addEventListener('click', auth);
// console.log(auth);

// https://accounts.spotify.com/en/authorize?client_id=3ae4ec3b888546b5a540e1f73d131efc&response_type=code&redirect_uri=https:%2F%2F127.0.0.1:5500%2Fcallback&show_dialog=true&scope=user-read-private%20user-read-email%20user-modify-playback-state%20user-read-playback-position%20user-library-read%20streaming%20user-read-playback-state%20user-read-recently-played%20playlist-read-private

// https://127.0.0.1:5500/callback?code=AQDH84nmDdzf1tFyRzte_DA_u7PAOVlTntwVZd_FmsmLsRF13eRv4Dvu4VJbNn9Wk3nJ3jiUD-ZpokLbz9CZo7tS305tZxj0m3Yjs1ft3ABoaZWM7ixKQc2r5J6u9h5q7s4ootImn_gy7_O4ltqL5P7jmacCEKOMpwXTCu2OCsYSYWrlCVZE3vhWQQA6J_cOXrbKhVvZl8DbfpF3T1zSBmmUFumLyQEbgx1u5EVjh7-yEhiVvNDifgzKehCU7dE7l66Z_R_Rk-8gKbnpnA4XPvtxToL5i6phqtw_Q60hy6j5VIJjqMnYFHpsouxqOHIIxbw9SMO0rygNiNDrqFWTyOZb_2b1szbHwABDMCgFz4WYUIwpzhThasfzAs4Sz7o0GfaFMiGHK0J5LKvEYtnQ5EaZmh0hcEZ5jbFHIZ24MnX4l0NcbayZYXZY
// http://127.0.0.1:5501/index.html?code=AQC-RikADoDDsIB8ul3X50PN22PY0gXaq0AYlkkIl0OjxrP1GHHbprYsqkNjHx6boTofT0JMCVszdCveTNB6ny2em74_NWFuObAg0O6aQODAOOIaCGg9wgVMFvwBn5yuJMnarvBjAZgdM9LED4XBORCMACiopHyVuzO1KEVDGN2kYeW_Bhzas5u2SFn8l5RVgJYJ8_hpOMwyb3LBWqZ_Mrn7osEhpRuHCCzkW5SdwCGkClmASSF9NX6SU32kJEZ6eQJeG-O_sXlSYrbBilTTrdEZ9JBrqcycuj81zRMJtOvMgymipZUYk4SBnr7oq-MFJKNuAQvUgMtFQb9rLn-6WEWHvDh28Se2UBFoyXgBlkrvXd7VlUnx9CsBX2VivcL0Q6eJuQahoUINiHrsDhCSJoHfkyzju8n7vQs-lO_k34ZHt6MjWxNsTbBLqg
// Function to get code when the page loads again
// const getCode = async () => {
//   let code = '';
//   const queryString = window.location.search;
//   if (queryString.length > 0) {
//     const urlParams = new URLSearchParams(queryString);
//     // console.log(urlParams);
//     code = urlParams.get('code');
//   }
//   // console.log(code);
//   return code;
// };
// console.log(getCode());
// function getAccess() {
//   clock
//     .access()
//     .then((results) => {
//       console.log(results);
//       // ui.locate(results);
//     })
//     .catch((err) => console.log(err));
// }
// function getAccess() {
//   clock.access().then((results) => {
//     console.log(results);
//   });
//   // .catch((err) => console.log(err));
// }
// getAccess();
// const access = async () => {
//   let client_id = '3ae4ec3b888546b5a540e1f73d131efc';
//   let client_secret = '7013e495793b4abdb3a1004b049cc2ad';
//   let myHeaders = new Headers();
//   let urlencoded = new URLSearchParams();
//   myHeaders.append(
//     'Authorization',
//     'Basic ' + btoa(client_id + ':' + client_secret)
//   );
//   urlencoded.append('grant_type', 'authorization_code');
//   urlencoded.append('code', code);
//   let redirect_uri = 'http://127.0.0.1:5501/index.html';
//   urlencoded.append('redirect_uri', redirect_uri);
//   // let body = 'grant_type=authorization_code';
//   // body += '&code=' + code;
//   // body += '&redirect_uri=' + encodeURI(redirect_uri);
//   // body += '&client_id=' + client_id;
//   // body += '&client_secret=' + client_secret;
//   // code = getCode();
//   let requestedOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: urlencoded,
//   };
//   const response = await fetch(
//     'https://accounts.spotify.com/api/token',
//     requestedOptions
//   );
//   const data = await response.json();
//   return data;
// };

// const handleRedirect = () => {
//   // let code = await fetch(getCode());
//   let code = getCode();
//   let redirect_uri = 'http://127.0.0.1:5501/index.html';
//   console.log(code);
//   access()
//     .then((results) => {
//       console.log(results);
//     })
//     .catch((err) => console.log(err));
//   window.history.pushState('', '', redirect_uri);
// };
// const firm = {
//   title: 'The firm',
//   author: 'John',
//   yearOfRelease: 1991
//   getYearOfRelease(){
//     return this.yearOfRelease
//   }
// };

// const thatdavinci = {
//   title: "The Da vinci Code",
//   author: "Dan",
//   yearOfRelease: 2003

// }
