export const sliderAbout = () => {
  const swiper = new Swiper(".sliderAbout", {
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: 0.9,
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

  const btn4Slider = document.querySelector('.btn4-slider')
  btn4Slider.addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(3, 0);
  });

  btn1Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn1-slider active'

  swiper.on('slideChange', function (e) {
    console.log(e)
    if (e.activeIndex === 0) {
      btn1Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn1-slider active'

      btn2Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn2-slider'
      btn3Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn3-slider'
      btn4Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn4-slider'
    }
    if (e.activeIndex === 1) {
      btn2Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn2-slider active'

      btn1Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn1-slider'
      btn3Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn3-slider'
      btn4Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn4-slider'
    }
    if (e.activeIndex === 2) {
      btn3Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn3-slider active'

      btn1Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn1-slider'
      btn2Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn2-slider'
      btn4Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn4-slider'
    }
    if (e.activeIndex === 3) {
      btn4Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn4-slider active'

      btn1Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn1-slider'
      btn2Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn2-slider'
      btn3Slider.className = 'whiteBlock--howItWork__container--slider__tabs--item btn3-slider'
    }
  });

}