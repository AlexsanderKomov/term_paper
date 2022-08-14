document.querySelectorAll('.menu__list').forEach(el => {
  new SimpleBar(el, {
    scrollbarMinSize: 28,
    scrollbarMaxSize: 28,
  });
});


let headerBottomItem = document.querySelectorAll('.header-bottom__item');
let body = document.querySelector('.body');
let menuList = document.querySelectorAll('.menu__list');

headerBottomItem.forEach(el => {
  el.addEventListener('click', () => {
    const menuList = el.querySelector('.menu__list');


    el.classList.toggle('header-bottom__item-default');
    el.classList.toggle('header-bottom__item-active');

    menuList.classList.toggle('menu__list-visibility');
  });
});

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
});

const gallerySwiper = new Swiper('.gallery__swiper', {
  wrapperClass: 'gallery__wrapper',
  slideClass: 'gallery__slide',
  slidesPerView: 3,
  spaceBetween: 50,
  calculateHeight:true,
  slidesPerGroup: 3,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  }
});

const element = document.querySelector('.gallery__select');

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  allowHTML: true,
});

const modal = new GraphModal();

document.querySelector('.gallery__slide').addEventListener('click', () => {
  let path = e.currentTarget.getAttribute('data-graph-path');
	new GraphModal().open(`[data-graph-target="${path}"]`);
});

$( "#accordion" ).accordion({
  animate: 5,
  heightStyle: "content",
  collapsible: true
});

let catalogName = document.querySelectorAll('.catalog__name');
let tabs = document.querySelectorAll('.tabs__content');

catalogName.forEach((el) => {
  el.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.tabsPath;

    tabs.forEach((element) => {
      element.classList.remove('tabs__content--active');
    });
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
  });
});


const swiperDevelopment = new Swiper('.developments__swiper', {
  wrapperClass: 'developments__swiper-wrapper',
  slideClass: 'developments__swiper-slide',
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: '.developments__swiper-button-next',
    prevEl: '.developments__swiper-button-prev',
  },

});

const swiperProject = new Swiper('.project__swiper', {
  wrapperClass: 'project__wrapper',
  slideClass: 'project__slide',
  disabledClass: 'project-disable',
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: '.project__swiper-button-next',
    prevEl: '.project__swiper-button-prev',
  },
})

let center = [55.75846806898367,37.60108849999989];

ymaps.ready(init);

    function init(){
        // Создание карты.
        let myMap = new ymaps.Map("map", {
            center: center,
            zoom: 16
        });

        let myPlacemark = new ymaps.Placemark(center, {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/map.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-4, -10]
        });

        myMap.geoObjects.add(myPlacemark);
    }


