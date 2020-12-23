function onHeroSliderBoxClickHandler(evt) {
    const target = evt.target;
    const heroSliderItems = document.querySelectorAll(`.hero-slider__item`);
    const heroSliderTargetItem = target.closest(`.hero-slider__item`);

    utilsModule.changeDOMCollectionClass(heroSliderTargetItem, heroSliderItems, `hero-slider__item_active`);
}

const utilsModule = window.utils;
const heroSliderBox = document.querySelector(`.hero-slider`);
const projectsSectionCarousel = document.querySelector(`.projects-section__carousel`);

document.addEventListener(`DOMContentLoaded`, () => {
    if (projectsSectionCarousel) {
        new Swiper(projectsSectionCarousel, {
            slidesPerView: 3
        });
    }
});

// События
if (heroSliderBox) {
    heroSliderBox.addEventListener(`click`, onHeroSliderBoxClickHandler);
}