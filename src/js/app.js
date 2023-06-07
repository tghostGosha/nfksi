import * as flsFunctions from "./modules/functions.js";
import $ from "jquery";
import {
  Inputmask
} from "inputmask";
import Swiper, {
  Autoplay,
  Navigation,
  Pagination
} from 'swiper';
import JustValidate from 'just-validate';
import wNumb from 'wnumb';
import Choices from 'choices.js';
import bootstrap from 'bootstrap';




// //==============Модальные окна

function OpenModalWindow(el) {
  CloseModalWindow();
  let modal = $('.modal-block');
  modal.addClass('open');
  el.show();
}

function CloseModalWindow() {
  let modal = $('.modal-block');
  let forms = $('form', modal);
  let formsBlocks = $('.modal-window-content > div', modal)
  modal.removeClass('open');
  forms.each(function () {
    this.reset()
  });
  formsBlocks.each(function () {
    $(this).hide()
  });
}

$('.application').on('click', function (event) {
  event.preventDefault();
  OpenModalWindow($('.application-modal'));
})
$('.consult-button').on('click', function (event) {
  event.preventDefault();
  OpenModalWindow($('.main-consult-modal'));
})


$(document).on('click', '.btn-close, .modal-bg', function () {
  CloseModalWindow();
});
$(document).on('click', '.modal-window', function (e) {
  e.stopPropagation();
});
//================================================


//======включаем создание WEbp ====
flsFunctions.isWebp()
// //======включаем создание === 
// const burger = document.querySelector('.header-burger');
// const greyBackground = document.querySelector('.grey-background-640px');
// const nav = document.querySelector('.header__nav-app-list');



//==============================
$("#header-burger").on("click", function () {
  // $(".header__nav-app-list").slideToggle("up");
  $(".header-burger, .header__nav-app").toggleClass("is-active");
  // $("#window__account-app").hide(500);
});




//=============Появление Header при скролле
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHeight = () => header.classList.contains('header-hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHeight() && scrollPosition() > defaultOffset) {
    header.classList.add('header-hide');
    // header.style.boxShadow = '0px -2px 5px rgb(0 0 0 / 69%)';
  } else if (scrollPosition() < lastScroll && containHeight()) {
    header.classList.remove('header-hide');

  }

  lastScroll = scrollPosition()
})
const heroSwiper = new Swiper('.big__banner-swiper', {
  modules: [Pagination, Autoplay, Navigation],
  loop: true,
  spaceBetween: 50,
  freeMode: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  
});

//===========swiper ======

let swiper = Swiper;
let init = false;

function swiperCard() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");

  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        modules: [Navigation],
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 16,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  } else if (init){
    swiper.destroy();
    init = false;
  }
}
try {

  swiperCard();
  window.addEventListener("resize", swiperCard);
} catch (error ){

}

// //====делаем первую букву  в Верхнем регистре
// const regex = /[A-Za-z0-0]/;
// let firstLetterToUpperCase = (className) => {
//   const inputs = document.getElementsByClassName(className)


//   for (let i = 0; i < inputs.length; ++i) {
//     inputs[i].onblur = () => {
//       // if (regex.test(inputs[i].value)) inputs[i].value='';
//       if (inputs[i].value === '') return;

//       let str = inputs[i].value
//         .trim()
//         .replace(/-+/g, '-')
//         .replace(/^-|-$/g, '')
//         .replace(/\s+/g, ' ')
//         .trim()
//       inputs[i].value = str[0].toUpperCase() + str.substr(1).toLowerCase()
//     }
//   }

// }
// firstLetterToUpperCase('form-control')



// //=====Input mask
// const mask = event => {
//   const { target, keyCode, type } = event;

//   const pos = target.selectionStart;
//   if (pos < 3) event.preventDefault();
//   const matrix = '+7 (___) ___-__-__';
//   let i = 0;
//   const def = matrix.replace(/\D/g, '');
//   const val = target.value.replace(/\D/g, '');
//   let newValue = matrix.replace(/[_\d]/g,
//     a => (i < val.length ? val[i++] || def[i] : a));
//   i = newValue.indexOf('_');
//   if (i !== -1) {
//     i < 5 && (i = 3);
//     newValue = newValue.slice(0, i);
//   }
//   let reg = matrix.substring(0, target.value.length).replace(/_+/g,
//     (a) => `\\d{1,${a.length}}`).replace(/[+()]/g, '\\$&');
//   reg = new RegExp(`^${reg}$`);
//   if (!reg.test(target.value) || target.value.length < 5 ||
//     keyCode > 47 && keyCode < 58) {
//     target.value = newValue;
//   }
//   if (type === 'blur' && target.value.length < 5) target.value = '';
// };

// const input = document.getElementById('exampleFormControlInput');

// if (input.type === 'tel') {
//   input.addEventListener('input', mask);
//   input.addEventListener('focus', mask);
//   input.addEventListener('blur', mask);
//   input.addEventListener('keydown', mask);
// }





// //========Валидация формы открытия счета и маска================
// //======маска телефон
// try {

//   const accountFormTel = document.getElementById('tel');
//   if (accountFormTel.type === 'tel') {
//     accountFormTel.addEventListener('input', mask);
//     accountFormTel.addEventListener('focus', mask);
//     accountFormTel.addEventListener('blur', mask);
//     accountFormTel.addEventListener('keydown', mask);
//   }
// } catch (error) {

// }

// //======заглавная буква
// try {

//   firstLetterToUpperCase('account__form-input');
// } catch (error) {

// }

//=======Валидация 'Оставить заявку'
try {
  const validation = new JustValidate('#applicationForm', {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      fontSize: '14px',
      color: '#dc3545',
    },
    successFieldCssClass: 'is-valid',
    successLabelStyle: {
      fontSize: '14px',
      color: '#20b418',

    },
    successFieldStyle: {
      border: '1px solid #44953D',
    },
    focusInvalidField: true,
    lockForm: true,
  });
  validation
    .addField('#application-name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Фамилия должна содержать не менее 3-х символов ',
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Обязательное поле',
      },
    ])
   
    .addField('#application-tel', [
      {
        rule: 'required',
        errorMessage: 'Обязательное поле',
      },
    ])
    .addField('#applicationCheckChecked', [
      {
        rule: 'required',
        errorMessage: 'Подтвердите',
      },
    ])
    .onSuccess((ev) => {
      ev.preventDefault();
      window.showNotification();
    });
} catch (error) {

}
// Валидация 'Консультация'
try {
  const validation = new JustValidate('#consultForm', {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      fontSize: '14px',
      color: '#dc3545',
    },
    successFieldCssClass: 'is-valid',
    successLabelStyle: {
      fontSize: '14px',
      color: '#20b418',

    },
    successFieldStyle: {
      border: '1px solid #44953D',
    },
    focusInvalidField: true,
    lockForm: true,
  });
  validation
    .addField('#consultName', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Фамилия должна содержать не менее 3-х символов ',
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Обязательное поле',
      },
    ])
   
    .addField('#consultTel', [
      {
        rule: 'required',
        errorMessage: 'Обязательное поле',
      },
    ])
    .addField('#flexCheckChecked', [
      {
        rule: 'required',
        errorMessage: 'Подтвердите',
      },
    ])
    .onSuccess((ev) => {
      ev.preventDefault();
      window.showNotification();
    });
} catch (error) {

}
