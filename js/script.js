// Скролл в выпадающем списке в header

document.querySelectorAll(".menu__list").forEach((el) => {
  new SimpleBar(el, {
    scrollbarMinSize: 28,
    scrollbarMaxSize: 28,
    autoHide: false,
  });
});

// Выпадающий список в header

let headerBottomBtn = document.querySelectorAll(".header-bottom__btn");
let menuList = document.querySelectorAll(".menu__list");

document.addEventListener("DOMContentLoaded", () => {
  for (let el of headerBottomBtn) {
    el.addEventListener("click", () => {
      let btn = el;
      let dropdown = el.parentElement.querySelector(".menu__list");

      for (let elem of headerBottomBtn) {
        if (elem != btn) {
          elem.classList.remove("header-bottom__btn-active");
        }
      }
      for (let elem of menuList) {
        if (elem != dropdown) {
          elem.classList.remove("menu__list-active");
        }
      }
      btn.classList.toggle("header-bottom__btn-active");
      dropdown.classList.toggle("menu__list-active");
    });
  }

  document.addEventListener("click", (e) => {
    let target = e.target;
    if (!target.closest(".header-bottom__list")) {
      for (el of menuList) {
        el.classList.remove("menu__list-active");
      }
      for (el of headerBottomBtn) {
        el.classList.remove("header-bottom__btn-active");
      }
    }
  });
});

// swiper in hero

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
});

// swiper in gallery

const gallerySwiper = new Swiper(".gallery__swiper", {
  wrapperClass: "gallery__wrapper",
  slideClass: "gallery__slide",
  calculateHeight: true,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },
});

// фильтр в галереи

const element = document.querySelector(".gallery__select");

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  allowHTML: true,
});

// модальное окно в галерее

const modal = new GraphModal();

// свайпер в галереи

document.querySelector(".gallery__slide").addEventListener("click", () => {
  let path = e.currentTarget.getAttribute("data-graph-path");
  new GraphModal().open(`[data-graph-target="${path}"]`);
});

// аккардион в каталоге

$("#accordion").accordion({
  animate: 5,
  heightStyle: "content",
  collapsible: true,
});

// табы в каталоге

let catalogName = document.querySelectorAll(".catalog__name");
let tabs = document.querySelectorAll(".tabs__content");

catalogName.forEach((el) => {
  el.addEventListener("click", (e) => {
    const path = e.currentTarget.dataset.tabsPath;

    tabs.forEach((element) => {
      element.classList.remove("tabs__content--active");
    });
    document
      .querySelector(`[data-tabs-target="${path}"]`)
      .classList.add("tabs__content--active");
  });
});

// свайпер в событиях

const swiperDevelopment = new Swiper(".developments__swiper", {
  wrapperClass: "developments__swiper-wrapper",
  slideClass: "developments__swiper-slide",
  slidesPerView: 3,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".developments__swiper-button-next",
    prevEl: ".developments__swiper-button-prev",
  },
  pagination: {
    el: ".developments__swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
  },
});

// свайпер в проектах

const swiperProject = new Swiper(".project__swiper", {
  wrapperClass: "project__wrapper",
  slideClass: "project__slide",
  disabledClass: "project-disable",
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".project__swiper-button-next",
    prevEl: ".project__swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
  },
});

// карта

let center = [55.75846806898367, 37.60108849999989];

ymaps.ready(init);

function init() {
  // Создание карты.
  let myMap = new ymaps.Map("map", {
    center: center,
    zoom: 15,
  });

  let myPlacemark = new ymaps.Placemark(
    center,
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../img/map.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -11],
    }
  );

  myMap.controls.remove("searchControl"); // удаляем поиск
  myMap.controls.remove("trafficControl"); // удаляем контроль трафика
  myMap.controls.remove("typeSelector"); // удаляем тип
  myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove("rulerControl"); // удаляем контрол правил
  myMap.behaviors.disable(["scrollZoom"]);

  myMap.geoObjects.add(myPlacemark);
}

// tooltip

tippy(".project__tooltip-one", {
  animation: "scale",
  content: "Пример современных тенденций — современная методология разработки",
  maxWidth: 264,
  arrow: true,
  theme: "amethyst",
  trigger: "click",
});

tippy(".project__tooltip-two", {
  animation: "scale",
  content:
    "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
  maxWidth: 264,
  arrow: true,
  theme: "amethyst",
  trigger: "click",
});

tippy(".project__tooltip-three", {
  animation: "scale",
  content: "В стремлении повысить качество",
  maxWidth: 264,
  arrow: true,
  theme: "amethyst",
  trigger: "click",
});

// форма обратный звонок

const formTel = document.querySelector(".form__tel");
const inputMask = new Inputmask("+7 (999) 999-99-99");

inputMask.mask(formTel);

const validation = new JustValidate("#form", {
  errorFieldCssClass: "is-invalid",
});

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Обязательное поле",
    },
    {
      validator: (value) => {
        const re = /[a-zA-Zа-яА-я]/g;
        return Boolean(!value.search(re));
      },
      errorMessage: "Недопустимый формат",
    },
    {
      validator: (value) => {
        return Boolean(value.length < 16);
      },
      errorMessage: "Слишком длинное имя",
    },
    {
      validator: (value) => {
        return Boolean(value.length > 2);
      },
      errorMessage: "Слишком короткое имя",
    },
  ])
  .addField("#tel", [
    {
      validator: (value) => {
        const phone = formTel.inputmask.unmaskedvalue();
        return Boolean(+phone && phone.length > 0);
      },
      errorMessage: "Обязательное поле",
    },
    {
      validator: (value) => {
        const phone = formTel.inputmask.unmaskedvalue();
        return Boolean(+phone && phone.length === 10);
      },
      errorMessage: "Введите полный номер",
    },
  ]);

// поиск header 1400px

const headerOpen = document.querySelector(".header__btn-open");
const headerClose = document.querySelector(".close");
const headerWrapper = document.querySelector(".header-top__wrapper");
const headerLogo = document.querySelector(".header__logo");

headerOpen.addEventListener("click", () => {
  headerWrapper.classList.add("header-top__wrapper-active");
  headerOpen.classList.add("header__btn-opening");
  burger.classList.add("burger-none");
  headerLogo.classList.add("header__logo-none");
});

headerClose.addEventListener("click", () => {
  headerWrapper.classList.remove("header-top__wrapper-active");
  headerOpen.classList.remove("header__btn-opening");
  burger.classList.remove("burger-none");
  headerLogo.classList.remove("header__logo-none");
});

// burger 1400 px
const burger = document.querySelector(".burger");
const hederList = document.querySelector(".header__list");
const headerBtn = document.querySelector(".header__btn");
const burgerLine = document.querySelectorAll(".burger__line");
const heroWrap = document.querySelector(".hero__wrapper");

burger.addEventListener("click", () => {
  for (let elem of burgerLine) {
    elem.classList.toggle("burger__line-active");
  }
  burger.classList.toggle("burger-active");
  hederList.classList.toggle("header__list-active");
  headerBtn.classList.toggle("header__btn-active");
  document.body.classList.toggle("stop-scroll");
  heroWrap.classList.toggle("hero__wrapper-active");
});
