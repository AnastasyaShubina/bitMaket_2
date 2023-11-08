import { accum, config, data, down, up } from "./chart";



export const sliderCharts = () => {

  let myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  let myChart2 = new Chart(
    document.getElementById('myChart2'),
    config
  );
  let myChart3 = new Chart(
    document.getElementById('myChart3'),
    config
  );
  const today = new Date(); // Получаем сегодняшнюю дату


  const swiper = new Swiper(".sliderCharts", {
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: 1,
  });

  const btn1Slider = document.querySelector('.btn1-slider')
  btn1Slider.addEventListener('click', function (e) {
    myChart.destroy();
    data.length = 0;
    const now = new Date(); // Получаем текущую дату и время

    for (let i = 0; i < 100; i++) {
      const date = new Date(now);
      date.setMinutes(now.getMinutes() + i * 15); // Увеличиваем дату на i * 15 минут
      data.push({ x: date, y: up[i] });
    }    

    myChart3.data.datasets[0].borderColor = '#0FFBE4';
    myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

    e.preventDefault();
    swiper.slideTo(0, 0);
  });

  const btn2Slider = document.querySelector('.btn2-slider')
  btn2Slider.addEventListener('click', function (e) {
    myChart2.destroy();
    data.length = 0;
    const now = new Date(); // Получаем текущую дату и время

    for (let i = 0; i < 100; i++) {
      const date = new Date(now);
      date.setMinutes(now.getMinutes() + i * 15); // Увеличиваем дату на i * 15 минут
      data.push({ x: date, y: accum[i] });
    }    

    myChart3.data.datasets[0].borderColor = '#FF7A00';
    myChart2 = new Chart(
      document.getElementById('myChart2'),
      config
    );

    e.preventDefault();
    swiper.slideTo(1, 0);
  });

  const btn3Slider = document.querySelector('.btn3-slider')
  btn3Slider.addEventListener('click', function (e) {
    myChart3.destroy();
    data.length = 0;
    const now = new Date(); // Получаем текущую дату и время

    for (let i = 0; i < 100; i++) {
      const date = new Date(now);
      date.setMinutes(now.getMinutes() + i * 15); // Увеличиваем дату на i * 15 минут
      data.push({ x: date, y: down[i] });
    }

    myChart3.data.datasets[0].borderColor = '#FF3628';
    myChart3 = new Chart(
      document.getElementById('myChart3'),
      config
    );
    e.preventDefault();
    swiper.slideTo(2, 0);
  });

  btn1Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider active'

  swiper.on('slideChange', function (e) {
    if (e.activeIndex === 0) {

      btn1Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider active'

      btn2Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider'
      btn3Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn2-slider'
    }
    if (e.activeIndex === 1) {
      btn2Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn2-slider active'

      btn1Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider'
      btn3Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn3-slider'
    }
    if (e.activeIndex === 2) {
      btn3Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn3-slider active'

      btn1Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider'
      btn2Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn2-slider'
    }
  });

}