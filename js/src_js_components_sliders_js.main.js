"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_sliders_js"],{

/***/ "./src/js/components/sliders.js":
/*!**************************************!*\
  !*** ./src/js/components/sliders.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
// Подключение свайпера

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);
const portfolioSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.portfolio-section__items', {
  slidesPerView: 1,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev'
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});
const testimonialsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.testimonials__items', {
  slidesPerView: 1,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev'
  }
});
const relatedSlider = document.querySelector('.related-projects__items');

if (relatedSlider) {
  const relatedProjSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](relatedSlider, {
    slidesPerView: 1,
    spaceBetween: gap,
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    },
    on: {
      init: function () {
        const activeSlide = relatedSlider.querySelector('.swiper-slide-active');
        const nextActiveSlide = activeSlide.nextElementSibling;
        const nextNextActiveSlide = nextActiveSlide.nextElementSibling;
        activeSlide.classList.add('slider-visible');
        nextActiveSlide.classList.add('slider-visible');
        nextNextActiveSlide.classList.add('slider-visible');
      }
    },
    navigation: {
      nextEl: '.related-projects__next',
      prevEl: '.related-projects__prev'
    }
  });
  document.querySelector('.related-projects__prev').addEventListener('click', () => {
    const activeSlide = relatedSlider.querySelector('.swiper-slide-next');
    document.querySelectorAll('.related-projects__items .swiper-slide').forEach(el => {
      el.classList.remove('slider-visible');
    });

    if (activeSlide.previousElementSibling) {
      const nextActiveSlide = activeSlide.previousElementSibling;
      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      activeSlide.nextElementSibling.classList.add('slider-visible');
    }
  });
  document.querySelector('.related-projects__next').addEventListener('click', () => {
    const activeSlide = relatedSlider.querySelector('.swiper-slide-active');
    const nextActiveSlide = activeSlide.nextElementSibling;
    const nextNextActiveSlide = nextActiveSlide.nextElementSibling;
    document.querySelectorAll('.related-projects__items .swiper-slide').forEach(el => {
      el.classList.remove('slider-visible');
    });
    activeSlide.classList.add('slider-visible');
    nextActiveSlide.classList.add('slider-visible');
    nextNextActiveSlide.classList.add('slider-visible');
  });
}

const workImages = document.querySelector('.work-images-slider');

if (workImages) {
  const workSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.work-images-nav', {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6
      },
      768: {
        slidesPerView: 10
      }
    }
  });
  const workSliderNav = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](workImages, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prev"
    },
    thumbs: {
      swiper: workSlider
    }
  });
}

const historySlider = document.querySelector('.history-slider');

if (historySlider) {
  const workSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](historySlider, {
    spaceBetween: 1,
    slidesPerView: 1,
    navigation: {
      nextEl: ".history__next",
      prevEl: ".history__prev"
    }
  });
  workSlider.on('slideChange', function () {
    console.log(workSlider.realIndex);
    historyBtns.forEach(el => {
      el.classList.remove('history-nav__btn--active');
    });
    document.querySelector(".history-nav__btn[data-index=\"".concat(workSlider.realIndex, "\"]")).classList.add('history-nav__btn--active');
  });
  const historyBtns = document.querySelectorAll('.history-nav__btn');
  historyBtns.forEach((el, idx) => {
    el.setAttribute('data-index', idx);
    el.addEventListener('click', e => {
      const index = e.currentTarget.dataset.index;
      historyBtns.forEach(el => {
        el.classList.remove('history-nav__btn--active');
      });
      e.currentTarget.classList.add('history-nav__btn--active');
      workSlider.slideTo(index);
    });
  });
}

const heroSliderSpeed = 1500;
const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed'); //get

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms'); //set

const heroSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.hero-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev'
  },
  speed: heroSliderSpeed,
  autoplay: {
    delay: 1000
  },
  pagination: {
    el: '.hero__pag',
    type: 'bullets',
    clickable: true
  },
  on: {
    init: function () {
      const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet');
      paginationBullets.forEach(el => {
        el.innerHTML = "<span class=\"hero__bar\"></span>";
      });
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_sliders_js.main.js.map