function onHeroSliderBoxClickHandler(evt) {
    const target = evt.target;
    const heroSliderItems = document.querySelectorAll(`.hero-slider__item`);
    const heroSliderTargetItem = target.closest(`.hero-slider__item`);

    utilsModule.changeDOMCollectionClass(heroSliderTargetItem, heroSliderItems, `hero-slider__item_active`);
}

const utilsModule = window.utils;
const heroSliderBox = document.querySelector(`.hero-slider`);
const projectsSectionCarousel = document.querySelector(`.projects-section__carousel`);
const servicesSectionCarousel = document.querySelector(`.services-section__carousel`);

document.addEventListener(`DOMContentLoaded`, () => {
    if (projectsSectionCarousel) {
        new Swiper(projectsSectionCarousel, {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                prevEl: projectsSectionCarousel.closest(`.section`).querySelector(`button[data-direction="prev"]`),
                nextEl: projectsSectionCarousel.closest(`.section`).querySelector(`button[data-direction="next"]`)
            }
        });
    }
    if (servicesSectionCarousel) {
        new Swiper(servicesSectionCarousel, {
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                prevEl: servicesSectionCarousel.closest(`.section`).querySelector(`button[data-direction="prev"]`),
                nextEl: servicesSectionCarousel.closest(`.section`).querySelector(`button[data-direction="next"]`)
            },
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3
                },
                1440: {
                    slidesPerView: 4
                }
            }
        });
    }
});

// События
if (heroSliderBox) {
    heroSliderBox.addEventListener(`click`, onHeroSliderBoxClickHandler);
}