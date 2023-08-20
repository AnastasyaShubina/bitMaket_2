import 'normalize.css/normalize.css'
import '../sass/style.sass'
import { onDocumentReady, importAll } from './functions.js'
import { modal } from './modal'
import { sliderCharts } from './sliderCharts'
import { sliderAbout } from './sliderAbout'
import { animation, animation2 } from './animation'
import { modalContactUs } from './modalContactUs'


importAll(
  require.context(
    '../../public',
    true,
    /\.(png|svg|jpg|jpe?g|gif|mov|mp4|ico|webmanifest|xml)$/
  )
)

onDocumentReady(function () {
  console.log('hello.')
})



var currentPageUrl = window.location.href;
if (currentPageUrl.includes('about')) {
  sliderAbout()
  animation()
  // animation2()
} else {
  sliderCharts()
  
  function updateDates() {
    var currentDate = new Date();
    var nextDate = new Date(currentDate);

    var text1 = document.getElementById("text1");
    text1.textContent = currentDate.toDateString();

    for (var i = 2; i <= 6; i++) {
      nextDate.setDate(nextDate.getDate() + 1);
      var currentText = document.getElementById("text" + i);
      currentText.textContent = nextDate.toDateString();
    }
  }
  // Этот код будет выполнен при загрузке SVG
  // Здесь мы вызываем функцию updateDates
  updateDates();
}

modal()
modalContactUs()

// animation2()