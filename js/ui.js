'use strict';
class UI {
  constructor() {
    this.author = document.querySelector('.author');
    this.quote = document.querySelector('.quote');
    this.background = document.querySelector('.background');
    this.icon = document.querySelector('.header-icon');
    this.greeting = document.querySelector('.header-currently');
    this.detail = document.querySelector('.details');
    this.period = document.querySelector('.period');
    this.time = document.querySelector('.time-now');
    this.zones = document.querySelector('#timezone');
    this.day = document.querySelector('#year-day');
    this.week = document.querySelector('#week-day');
    this.weekNumber = document.querySelector('#week-number');
    this.location = document.querySelector('.locate');
    this.region = document.querySelector('.reg');
    this.top = document.querySelector('#top-widgets');
    this.arrow = document.querySelector('.arrow');
    this.expand = document.querySelector('.expand');
    this.refresh = document.querySelector('#refresh');
    this.btn = document.querySelector('.btn-text');
    this.loadContain = document.querySelector('.loader-container');
    this.container = document.querySelector('.main-content');
    this.square = document.querySelector('.square-spinner');
  }
  paint(quote) {
    // this.author.textContent = quote.author;
    if (this.author === null) {
      this.author.textContent = 'Unknown author';
    } else {
      this.author.textContent = quote.author;
    }
    this.quote.textContent = quote.content;
  }
  zone(zones) {
    // Local timezone
    this.region.textContent = zones.abbreviation;
    this.zones.textContent = zones.timezone;
    this.day.textContent = zones.day_of_year;
    this.week.textContent = zones.day_of_week;
    this.weekNumber.textContent = zones.week_number;
    // this.region.textContent = 'why are you running';
  }
  locate(loc) {
    const name = loc.region_name;
    const country = loc.country_code;
    this.location.textContent = `in, ${name}, ${country}`;
  }
}
