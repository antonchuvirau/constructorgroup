'use strict';

const heroSliderBox = document.querySelector(`.hero-slider__box`);

document.addEventListener(`DOMContentLoaded`, () => {
    // Инициализация главного слайдера
    if (heroSliderBox) {
        new Swiper(heroSliderBox, {
            slidesPerView: `auto`
        });
    }
});