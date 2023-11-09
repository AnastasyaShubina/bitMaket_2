import 'normalize.css/normalize.css'
import '../sass/style.sass'
import { onDocumentReady, importAll } from './functions.js'
import { modal } from './modal'
import { sliderCharts } from './sliderCharts'
import { sliderAbout } from './sliderAbout'
import { animation, animation2 } from './animation'
import { modalContactUs } from './modalContactUs'
import { header } from './header'
import { updateDates } from './updateDates.js'

importAll(
  require.context(
    '../../public',
    true,
    /\.(png|svg|jpg|jpe?g|gif|mov|mp4|ico|webmanifest|xml)$/
  )
)

onDocumentReady(function () {
  header()
  modal()
  modalContactUs()
})

var currentPageUrl = window.location.href;
if (currentPageUrl.includes('about')) {
  sliderAbout()
  animation()
  animation2()
  const dateId = document.querySelector('#date')
  const date = new Date()
  dateId.textContent = date.toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).toUpperCase()
} else if (currentPageUrl.includes('cookiePolicy') || currentPageUrl.includes('privacyPolicy') || currentPageUrl.includes('termsOfUse')) {
  const header = document.querySelector('.header')
  header.classList.add('blackHead')
} else {
  sliderCharts()
  updateDates()
  Chart.defaults.font.family = 'Milligram';
  Chart.defaults.borderColor = '#3D3D3D';
  Chart.defaults.color = '#3D3D3D';
}

