'use strict';
class Clock {
  async getQuote() {
    const response = await fetch('https://api.quotable.io/random');

    const responseData = response.json();

    return responseData;
  }
  async getTimeZone() {
    const response = await fetch('https://worldtimeapi.org/api/ip');
    const responseData = response.json();
    return responseData;
  }
  async getLocation() {
    // var myHeaders = new Headers();
    // myHeaders.append(
    //   'Cookie',
    //   '__cfduid=db832e6fa3cc7636182a9a8ee23d0b3561617746510'
    // );

    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow',
    // };
    const response = await fetch('https://freegeoip.app/json/');
    const responseData = response.json();
    return responseData;
  }
}
