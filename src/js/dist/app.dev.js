"use strict";

require("normalize.css/normalize.css");

require("../sass/style.sass");

var _functions = require("./functions.js");

var _modal = require("./modal");

var _sliderCharts = require("./sliderCharts");

var _sliderAbout = require("./sliderAbout");

var _animation = require("./animation");

var _modalContactUs = require("./modalContactUs");

var _header2 = require("./header");

var _updateDates = require("./updateDates.js");

(0, _functions.importAll)(require.context('../../public', true, /\.(png|svg|jpg|jpe?g|gif|mov|mp4|ico|webmanifest|xml)$/));
(0, _functions.onDocumentReady)(function () {
  (0, _header2.header)();
  (0, _modal.modal)();
  (0, _modalContactUs.modalContactUs)();
});
var currentPageUrl = window.location.href;

if (currentPageUrl.includes('about')) {
  (0, _sliderAbout.sliderAbout)();
  (0, _animation.animation)();
  (0, _animation.animation2)();
  var dateId = document.querySelector('#date');
  var date = new Date();
  dateId.textContent = date.toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).toUpperCase();
} else if (currentPageUrl.includes('cookiePolicy') || currentPageUrl.includes('privacyPolicy') || currentPageUrl.includes('termsOfUse')) {
  var _header = document.querySelector('.header');

  _header.classList.add('blackHead');
} else {
  (0, _sliderCharts.sliderCharts)();
  (0, _updateDates.updateDates)();
  Chart.defaults.font.family = 'Milligram';
  Chart.defaults.borderColor = '#3D3D3D';
  Chart.defaults.color = '#3D3D3D';
}