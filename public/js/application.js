"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  function changeDOMCollectionClass(DOMElement, DOMCollection, className) {
    var _iterator = _createForOfIteratorHelper(DOMCollection),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        element.classList.remove(className);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    DOMElement.classList.add(className);
  }

  window.utils = {
    changeDOMCollectionClass: changeDOMCollectionClass
  };
})();
"use strict";
"use strict";

function onHeroSliderBoxClickHandler(evt) {
  var target = evt.target;
  var heroSliderItems = document.querySelectorAll(".hero-slider__item");
  var heroSliderTargetItem = target.closest(".hero-slider__item");
  utilsModule.changeDOMCollectionClass(heroSliderTargetItem, heroSliderItems, "hero-slider__item_active");
}

var utilsModule = window.utils;
var heroSliderBox = document.querySelector(".hero-slider");
var projectsSectionCarousel = document.querySelector(".projects-section__carousel");
var servicesSectionCarousel = document.querySelector(".services-section__carousel");
var projectHeroSliderBox = document.querySelector(".project-hero-slider__box");
var projectVideoCarousel = document.querySelector(".project-video-section__carousel");
var projectRoadCarousel = document.querySelector(".project-road-section__carousel");
var projectOnlineCarousel = document.querySelector(".project-online-section__carousel");
document.addEventListener("DOMContentLoaded", function () {
  if (projectsSectionCarousel) {
    new Swiper(projectsSectionCarousel, {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        prevEl: projectsSectionCarousel.closest(".section").querySelector("button[data-direction=\"prev\"]"),
        nextEl: projectsSectionCarousel.closest(".section").querySelector("button[data-direction=\"next\"]")
      }
    });
  }

  if (servicesSectionCarousel) {
    new Swiper(servicesSectionCarousel, {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        prevEl: servicesSectionCarousel.closest(".section").querySelector("button[data-direction=\"prev\"]"),
        nextEl: servicesSectionCarousel.closest(".section").querySelector("button[data-direction=\"next\"]")
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        576: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 4
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
        el: projectHeroSliderBox.closest(".project-hero-slider").querySelector(".project-hero-slider__pagination")
      }
    });
  }

  if (projectVideoCarousel) {
    new Swiper(projectVideoCarousel, {
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        prevEl: projectVideoCarousel.closest(".section").querySelector("button[data-direction=\"prev\"]"),
        nextEl: projectVideoCarousel.closest(".section").querySelector("button[data-direction=\"next\"]")
      }
    });
  }

  if (projectRoadCarousel) {
    new Swiper(projectRoadCarousel, {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        prevEl: projectRoadCarousel.closest(".section").querySelector("button[data-direction=\"prev\"]"),
        nextEl: projectRoadCarousel.closest(".section").querySelector("button[data-direction=\"next\"]")
      }
    });
  }

  if (projectOnlineCarousel) {
    new Swiper(projectOnlineCarousel, {
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: projectOnlineCarousel.closest(".section").querySelector(".swiper-pagination")
      },
      navigation: {
        prevEl: projectOnlineCarousel.closest(".section").querySelector("button[data-direction=\"prev\"]"),
        nextEl: projectOnlineCarousel.closest(".section").querySelector("button[data-direction=\"next\"]")
      }
    });
  }
}); // События

if (heroSliderBox) {
  heroSliderBox.addEventListener("click", onHeroSliderBoxClickHandler);
}