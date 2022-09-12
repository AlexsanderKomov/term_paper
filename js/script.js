// Скролл в выпадающем списке в header

document.querySelectorAll('.menu__list').forEach(el => {
  new SimpleBar(el, {
    scrollbarMinSize: 28,
    scrollbarMaxSize: 28,
  });
});

// Выпадающий список в header

let headerBottomItem = document.querySelectorAll('.header-bottom__item');
let menuList = document.querySelectorAll('.menu__list');
const header = document.querySelector('.header__top')
const hero = document.querySelector('.hero')

header.addEventListener('click', () => {
  removeClass()
})

hero.addEventListener('click', () => {
  removeClass()
})

headerBottomItem.forEach(el => {
  el.addEventListener('click', () => {
    const menuListIn = el.querySelector('.menu__list');

    if (menuListIn.classList.contains('menu__list-visibility')) {
      removeClass()
    } else {
      removeClass()
      menuListIn.classList.add('menu__list-visibility')
    }
  });
});

function removeClass() {
  for (const menus of menuList) {
    menus.className = 'menu__list';
  }
}

// swiper in hero

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
});

// swiper in gallery

const gallerySwiper = new Swiper('.gallery__swiper', {
  wrapperClass: 'gallery__wrapper',
  slideClass: 'gallery__slide',
  slidesPerView: 3,
  spaceBetween: 50,
  calculateHeight:true,
  slidesPerGroup: 3,
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

// фильтр в галереи

const element = document.querySelector('.gallery__select');

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  allowHTML: true,
});

// модальное окно в галерее

const modal = new GraphModal();

// свайпер в галереи

document.querySelector('.gallery__slide').addEventListener('click', (e) => {
  let path = e.currentTarget.getAttribute('data-graph-path');
	new GraphModal().open(`[data-graph-target="${path}"]`);
});

// аккардион в каталоге

$( "#accordion" ).accordion({
  animate: 5,
  heightStyle: "content",
  collapsible: true
});

// табы в каталоге

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

// свайпер в событиях

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

// свайпер в проектах

const swiperProject = new Swiper('.project__swiper', {
  wrapperClass: 'project__wrapper',
  slideClass: 'project__slide',
  disabledClass: 'project-disable',
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: '.project__swiper-button-next',
    prevEl: '.project__swiper-button-prev',
  },
})

// карта

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

        // myMap.controls.remove('geolocationControl'); // удаляем геолокацию
        myMap.controls.remove('searchControl'); // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        // myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
        myMap.controls.remove('rulerControl'); // удаляем контрол правил
        myMap.behaviors.disable(['scrollZoom']);

        myMap.geoObjects.add(myPlacemark);
    }

// tooltip

tippy('.project__tooltip-one', {
  animation: 'scale',
  content: 'Пример современных тенденций — современная методология разработки',
  maxWidth: 264,
  arrow: true,
  theme: 'amethyst',
  trigger: 'click'
});

tippy('.project__tooltip-two', {
  animation: 'scale',
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  maxWidth: 264,
  arrow: true,
  theme: 'amethyst',
  trigger: 'click',
});

tippy('.project__tooltip-three', {
  animation: 'scale',
  content: 'В стремлении повысить качество',
  maxWidth: 264,
  arrow: true,
  theme: 'amethyst',
  trigger: 'click',
});

// форма обратный звонок

const telSelector = document.querySelector("input[type='tel']");
const inputMask = new Inputmask("+7 (999) 999-99-99");
const nameSelector = document.querySelector("input[name='name']");

inputMask.mask(telSelector);

  // new window.JustValidate('.connection__form', {

  //   rules: {
  //     tel: {
  //       required: true,
  //       function: () => {
  //         const phone = telSelector.inputMask.unmaskedvalue();
  //         return +phone && phone.length === 10;
  //       }
  //     },
  //     name: {
  //       rule: 'minLength',
  //       value: 3,
  //     }
  //   },
  //   messages: {
  //     tel: {
  //       required: 'Вы не ввели телефон',
  //       function: 'Введите телефон из 10 символов не считая +7'
  //     },
  //     name: {
  //       required: 'Вы не ввели имя',
  //       minLength: 'Введите минимум 3 символа',
  //     }
  //   },
  //   colorWrong: '#d11616'
  // })


const validation = new JustValidate('.connection__form')

validation
  .addField('nameSelector'), [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 15,
    }
  ]

// function validateForm(selector, rules) {
//   new window.JustValidate(selector, {
//     rules: rules
//   })
// }

// validateForm('.connection__form', {
//   tel: {
//     required: true,
//     function: () => {
//       const phone = telSelector.inputMask.unmaskedvalue();
//       return +phone && phone.length === 10;
//     }
//   },
//   name: {
//     required: true,
//     function: () => {
//       let myRe = /[a-zA-Z-а-яА-я]+/
//       return (nameSelector.value.search(myRe) != -1)
//     }
//   }
// })
