'use strict';

function onHeroSliderBoxClickHandler(evt) {
    const target = evt.target;
    const heroSliderItems = document.querySelectorAll(`.hero-slider__item`);
    const heroSliderTargetItem = target.closest(`.hero-slider__item`);

    utilsModule.changeDOMCollectionClass(heroSliderTargetItem, heroSliderItems, `hero-slider__item_active`);
}
function getContainerOffset() {
    return ((window.innerWidth - container.offsetWidth+ 30) / 2).toFixed(2);
}
function updateServiceSectionTitlesHeight() {
    const serviceSectionTitles = servicesSectionCarousel.querySelectorAll(`.box__title`);
    
    for (const serviceTitle of serviceSectionTitles) {
        if (window.innerWidth < CUSTOM_CONTAINER_WIDTH) {
            serviceTitle.parentElement.style.transform = `translateY(calc(100% - ${serviceTitle.offsetHeight + CUSTOM_MOBILE_TITLE_STEP}px))`;
        }
        else {
            serviceTitle.parentElement.style.transform = `translateY(calc(100% - ${serviceTitle.offsetHeight + CUSTOM_TITLE_STEP}px))`;
        }
    }
}
function onDocumentClickHandler(evt) {
    const target = evt.target;

    if (target.matches(`.header__menu-button`)) {
        headerButtonMenuOpen.classList.toggle(`header__menu-button_active`);
        navigationElement.classList.toggle(`navigation_open`);
        document.documentElement.classList.toggle(`is-locked`);
    }
    if (!target.matches(`.header__menu-button`) && navigationElement.classList.contains(`navigation_open`) && !navigationElement.contains(target)) {
        headerButtonMenuOpen.classList.remove(`header__menu-button_active`);
        navigationElement.classList.remove(`navigation_open`);
        document.documentElement.classList.remove(`is-locked`);
    }
}
function initMap() {
    const myMap = new ymaps.Map(mapBox, {
        center: [55.765676, 37.525235],
        zoom: 17,
        controls: ['smallMapDefaultSet']
    });
    myMap.behaviors.disable(['scrollZoom', 'multiTouch']);
    myPlacemarkWithContent = new ymaps.Placemark([55.765676, 37.525235], {
        hintContent: 'ООО “КОНСТРУКТОР групп” - Генеральный Подрядчик',
    }, {});
    myMap.geoObjects.add(myPlacemarkWithContent)
}
function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
}

// Constants
const TIMER_SECONDS = 20000;
const CUSTOM_STEP = 50;
const CUSTOM_CONTAINER_WIDTH = 1440;
const CONTAINER_WIDTH = .86;
const CUSTOM_TITLE_STEP = 75;
const CUSTOM_MOBILE_TITLE_STEP = 65;
// Modules
const utilsModule = window.utils;
// Variables
const heroSliderBox = document.querySelector(`.hero-slider`);
const projectsSectionCarousel = document.querySelector(`.projects-section__carousel`);
const servicesSectionCarousel = document.querySelector(`.services-section__carousel`);
const projectHeroSliderBox = document.querySelector(`.project-hero-slider__box`);
const projectVideoCarousel = document.querySelector(`.project-video-section__carousel`);
const projectRoadCarousel = document.querySelector(`.project-road-section__carousel`);
const projectOnlineCarousel = document.querySelector(`.project-online-section__carousel`);
const headerButtonMenuOpen = document.querySelector(`.header__menu-button`);
const navigationElement = document.querySelector(`.navigation`);
const container = document.querySelector(`.header`).querySelector(`.container`);
const sliderBox = document.querySelector(`.slider__box`);
const mapBox = document.querySelector(`#map`);
const counterBox = document.querySelector(`.counter`);
let isCounterCompleted = false;

document.addEventListener(`DOMContentLoaded`, () => {
    // Инициализация AOS
    AOS.init({
        offset: 100,
        duration: 500,
        offset: 50,
        easing: 'ease-in-out-quad',
        delay: 100
    });
    if (counterBox) {
        const counterBoxBoundingClientRect = counterBox.getBoundingClientRect();
        const counterBoxOffsetTop = counterBoxBoundingClientRect.top;
        const windowHeight = window.innerHeight;

        if (counterBoxOffsetTop < windowHeight && !isCounterCompleted) {
            // start all the timers
            $('.timer').each(count);
            isCounterCompleted = true;
            let timer = setInterval(() => {
                $('.timer').each(count);
            }, TIMER_SECONDS);
        }
    }
    if (projectsSectionCarousel) {
        new Swiper(projectsSectionCarousel, {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                prevEl: projectsSectionCarousel.closest(`.section`).querySelector(`button[data-direction="prev"]`),
                nextEl: projectsSectionCarousel.closest(`.section`).querySelector(`button[data-direction="next"]`)
            },
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1200: {
                    slidesPerView: 3
                }
            }
        });
    }
    if (servicesSectionCarousel) {
        new Swiper(servicesSectionCarousel, {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
                el: servicesSectionCarousel.closest(`.section`).querySelector(`.swiper-pagination`)
            },
            navigation: {
                prevEl: servicesSectionCarousel.closest(`.section`).querySelector(`button[data-direction="prev"]`),
                nextEl: servicesSectionCarousel.closest(`.section`).querySelector(`button[data-direction="next"]`)
            },
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2,
                },
                1440: {
                    slidesPerView: 4
                }
            }
        });
        // Обновляем высоту заголовка
        updateServiceSectionTitlesHeight();
    }
    if (projectHeroSliderBox) {
        new Swiper(projectHeroSliderBox, {
            autoplay: {
                delay: 3500
            },
            pagination: {
                el: projectHeroSliderBox.closest(`.project-hero-slider`).querySelector(`.project-hero-slider__pagination`),
                clickable: true
            }
        });
    }
    if (projectVideoCarousel) {
        new Swiper(projectVideoCarousel, {
            slidesPerView: `auto`,
            spaceBetween: 30,
            // slidesOffsetBefore: getContainerOffset(),
            navigation: {
                prevEl: projectVideoCarousel.closest(`.section`).querySelector(`button[data-direction="prev"]`),
                nextEl: projectVideoCarousel.closest(`.section`).querySelector(`button[data-direction="next"]`)
            },
            breakpoints: {
                320: {
                    spaceBetween: 20
                },
                992: {
                    spaceBetween: 30
                }
            }
        });
    }
    if (projectRoadCarousel) {
        new Swiper(projectRoadCarousel, {
            slidesPerView: 4,
            spaceBetween: 4,
            autoplay: {
                delay: 3000
            },
            navigation: {
                prevEl: projectRoadCarousel.closest(`.section`).querySelector(`button[data-direction="prev"]`),
                nextEl: projectRoadCarousel.closest(`.section`).querySelector(`button[data-direction="next"]`)
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 4
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 4
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 4
                }
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
    if (navigationElement) {
        const navigationSections = document.querySelectorAll(`.navigation__section`);

        for (const section of navigationSections) {
            section.style.paddingRight = `${getContainerOffset()}px`;
        }
    }
    if (sliderBox) {
        new Swiper(sliderBox, {
            autoplay: {
                delay: 3500
            },
            pagination: {
                el: sliderBox.closest(`.slider`).querySelector(`.slider__pagination`)
            }
        });
    }
    if (mapBox) {
        ymaps.ready(initMap);
    }
});

document.addEventListener(`click`, onDocumentClickHandler);

window.addEventListener(`resize`, () => {
    if (projectVideoCarousel) {
        projectVideoCarousel.swiper.update();
    }
    if (servicesSectionCarousel) {
        updateServiceSectionTitlesHeight();
    }
    if (navigationElement) {
        const navigationSections = document.querySelectorAll(`.navigation__section`);

        for (const section of navigationSections) {
            section.style.paddingRight = `${getContainerOffset()}px`;
        }
    }
});

window.addEventListener(`scroll`, () => {
    if (counterBox) {
        const counterBoxBoundingClientRect = counterBox.getBoundingClientRect();
        const counterBoxOffsetTop = counterBoxBoundingClientRect.top;
        const windowHeight = window.innerHeight;

        if (windowHeight > (counterBoxOffsetTop + CUSTOM_STEP) && !isCounterCompleted) {
            // start all the timers
            $('.timer').each(count);
            let timer = setInterval(() => {
                $('.timer').each(count);
            }, TIMER_SECONDS);
            isCounterCompleted = true;
        }
        // else if (windowHeight < (counterBoxOffsetTop + CUSTOM_STEP) && isCounterCompleted) {
        //     isCounterCompleted = false;
        // }
    }
});

// События
if (heroSliderBox) {
    heroSliderBox.addEventListener(`click`, onHeroSliderBoxClickHandler);
}