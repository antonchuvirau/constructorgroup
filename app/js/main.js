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
const projectHeroSliderBox = document.querySelector(`.project-hero-slider__box`);
const projectVideoCarousel = document.querySelector(`.project-video-section__carousel`);
const projectRoadCarousel = document.querySelector(`.project-road-section__carousel`);
const projectOnlineCarousel = document.querySelector(`.project-online-section__carousel`);

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
    if (projectHeroSliderBox) {
        new Swiper(projectHeroSliderBox, {
            pagination: {
                el: projectHeroSliderBox.closest(`.project-hero-slider`).querySelector(`.project-hero-slider__pagination`)
            }
        });
    }
    if (projectVideoCarousel) {
        new Swiper(projectVideoCarousel, {
            slidesPerView: `auto`,
            spaceBetween: 30,
            navigation: {
                prevEl: projectVideoCarousel.closest(`.section`).querySelector(`button[data-direction="prev"]`),
                nextEl: projectVideoCarousel.closest(`.section`).querySelector(`button[data-direction="next"]`)
            }
        });
    }
    if (projectRoadCarousel) {
        new Swiper(projectRoadCarousel, {
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                prevEl: projectRoadCarousel.closest(`.section`).querySelector(`button[data-direction="prev"]`),
                nextEl: projectRoadCarousel.closest(`.section`).querySelector(`button[data-direction="next"]`)
            }
        });
    }
    if (projectOnlineCarousel) {
        new Swiper(projectOnlineCarousel, {
            effect: `fade`,
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: projectOnlineCarousel.closest(`.section`).querySelector(`.swiper-pagination`)
            },
            navigation: {
                prevEl: projectOnlineCarousel.closest(`.section`).querySelector(`button[data-direction="prev"]`),
                nextEl: projectOnlineCarousel.closest(`.section`).querySelector(`button[data-direction="next"]`)
            }
        });
    }
});

// События
if (heroSliderBox) {
    heroSliderBox.addEventListener(`click`, onHeroSliderBoxClickHandler);
}