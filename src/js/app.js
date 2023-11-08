import 'normalize.css/normalize.css'
import '../sass/style.sass'
import { onDocumentReady, importAll } from './functions.js'
import { modal } from './modal'
import { sliderCharts } from './sliderCharts'
import { sliderAbout } from './sliderAbout'
import { animation } from './animation'
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
  const dateId = document.querySelector('#date')
  const date = new Date();
  dateId.textContent = date.toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).toUpperCase();
  var header = document.querySelector('.header');
  header.classList.add('blackHead');
  // animation2()
} else {
  sliderCharts()
  Chart.defaults.font.family = 'Milligram';
  Chart.defaults.borderColor = '#3D3D3D';
  Chart.defaults.color = '#3D3D3D';


  function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;
    return day + '/' + month;
  }

  function updateDates() {
    var currentDate = new Date();
    var nextDate = new Date(currentDate);

    for (var i = 1; i <= 6; i++) {
      var endDate = new Date(nextDate.getTime() + 6 * 24 * 60 * 60 * 1000);

      var currentText = document.getElementById("text" + i);
      currentText.textContent = formatDate(nextDate) + ' - ' + formatDate(endDate);

      nextDate.setDate(nextDate.getDate() + 7);
    }
  }

  updateDates();

}

var blackElements = document.querySelectorAll('.change-black-element'); // Получаем все элементы с классом 'change-black-element'
var header = document.querySelector('.header');
var classChange = 'blackHead';

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY; // Получаем позицию скролла

    header.classList.remove(classChange); // Удаляем класс, если он уже присвоен

    blackElements.forEach(function(element) {
        var blackBlockTop = element.getBoundingClientRect().top + window.scrollY; // Получаем начало блока
        var blackBlockBottom = blackBlockTop + element.offsetHeight; // Получаем конец блока

        if (scrollPosition >= blackBlockTop && scrollPosition <= blackBlockBottom) {
            header.classList.add(classChange);
        }
    });
});

modal()
modalContactUs()

// animation2()