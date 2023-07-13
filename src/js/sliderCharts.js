export const sliderCharts = () => {
  const swiper = new Swiper(".sliderCharts", {
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: 1,
  });

  const btn1Slider = document.querySelector('.btn1-slider')
  btn1Slider.addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(0, 0);
  });

  const btn2Slider = document.querySelector('.btn2-slider')
  btn2Slider.addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(1, 0);
  });

  const btn3Slider = document.querySelector('.btn3-slider')
  btn3Slider.addEventListener('click', function (e) {
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