import * as flsFunctions from "./modules/functions.js";

import { Inputmask } from "inputmask";
import Swiper, { Navigation, Pagination } from 'swiper';
import JustValidate from 'just-validate';
import wNumb from 'wnumb';
import Choices from 'choices.js';
import bootstrap from 'bootstrap';




// //==============Модальные окна

// function OpenModalWindow(el) {
//   CloseModalWindow();
//   let modal = $('.modal-block');
//   modal.addClass('open');
//   el.show();
// } 

// function CloseModalWindow() {
//   let modal = $('.modal-block');
//   let forms = $('form', modal);
//   let formsBlocks = $('.modal-window-content > div', modal)
//   modal.removeClass('open');
//   forms.each(function () { this.reset() });
//   formsBlocks.each(function () { $(this).hide() });
// }
// $('#consultModalBtn').on('click', function (event) {
//   event.preventDefault();
//   OpenModalWindow($('.consult-modal'));
// })
// $('#consultEarnBtn').on('click', function (event) {
//   event.preventDefault();
//   OpenModalWindow($('.consult-earn'));
// })
// $('.consult-button').on('click', function (event) {
//   event.preventDefault();
//   OpenModalWindow($('.main-consult-modal'));
// })

// $('#modalCurrencyHistory').on('click', function (event) {
//   event.preventDefault();
//   OpenModalWindow($('.currency-history-modal'));
// })

// $(document).on('click', '.btn-close, .modal-bg', function () {
//   CloseModalWindow();
// });
// $(document).on('click', '.modal-window', function (e) {
//   e.stopPropagation();
// });
// //================================================



//=====================
Swiper.use([Navigation, Pagination])

//======включаем создание WEbp ====
// flsFunctions.isWebp()
//======включаем создание === 
const burger = document.querySelector('.header-burger');
const greyBackground = document.querySelector('.grey-background-640px');
const nav = document.querySelector('.header__nav-app-list');



//==============================
// $("#header-burger").on("click", function () {
//   $(".header__nav-app-list").slideToggle("up");
//   $(" .header-burger-marker, .header-burger").toggleClass("is-active");
//   $("#window__account-app").hide(500);
// });
// $("#closeHeaderNavApp").on("click", function () {
//   $(".header__nav-app-list").slideToggle();
// });
// $("#btnOpen").on("click", function () {
//   $("#window__account-app").slideToggle("down")
//   $(".header__nav-app-list").hide(500);
// });
// $("#closeWindowAccountApp").on("click", function () {
//   $("#window__account-app").slideToggle();

// });

// $(".fa-search").on("click", function () {
//   $(".wrap").toggle("drop");
//   $(".wrap, .input, .fa").toggleClass("active");
// });


//=============Появление Header при скролле
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () =>  window.pageYOffset || document.documentElement.scrollTop;
const containHeight = () => header.classList.contains('header-hide');

window.addEventListener('scroll', () => {
  if(scrollPosition() > lastScroll && !containHeight() && scrollPosition() > defaultOffset) {
    header.classList.add('header-hide');
    // header.style.boxShadow = '0px -2px 5px rgb(0 0 0 / 69%)';
  } 
  else if (scrollPosition() < lastScroll && containHeight()) {
    header.classList.remove('header-hide');
   
  }
  
  
  lastScroll = scrollPosition()
})




// //===========swiper ideas======
// const ideasSwiper = new Swiper('.ideas-swiper', {
//   modules: [Navigation, Pagination],
//   slideClass: 'ideas__slide',
//   slidesPerView: 1,
//   slidesPerGroup: 1,
//   slidesPerColumn: 1,

//   // spaceBetween: 16,
//   // modifierClass: 'ideas-swiper-pagination',
//   pagination: {
//     el: '.ideas-swiper-pagination',
//     clickable: true,
//     bulletClass: 'ideas-swiper-pagination-bullet',
//     horizontalClass: 'ideas-swiper-pagination-horizontal',
//     bulletActiveClass: 'swiper-bullet-active'
//   },
//   navigation: {
//     hideOnClick: true,
//     clickable: true,
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     1176: {
//       slidesPerView: 3,
//       slidesPerGroup: 3,
//       centeredSlides: false,
//       slidesPerColumn: 3,
//       spaceBetween: 32,
//     },
//     595: {
//       slidesPerView: 2,
//       slidesPerGroup: 1,
//       centeredSlides: false,
//       slidesPerColumn: 2,
//       spaceBetween: 16,
//     },

//     324: {
//       slidesPerView: "auto",
//       centeredSlides: true,
//       slidesPerGroup: 1,
//       slidesPerColumn: 1,
//       spaceBetween: 16
//     }
//   }
// })

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

// //=======Валидация
// try {
//   const validation = new JustValidate('#accountform', {
//     errorFieldCssClass: 'is-invalid',
//     errorLabelStyle: {
//       fontSize: '14px',
//       color: '#dc3545',
//     },
//     successFieldCssClass: 'is-valid',
//     successLabelStyle: {
//       fontSize: '14px',
//       color: '#20b418',

//     },
//     successFieldStyle: {
//       border: '1px solid #44953D',
//     },
//     focusInvalidField: true,
//     lockForm: true,
//   });
//   validation
//     .addField('#firstname', [
//       {
//         rule: 'minLength',
//         value: 3,
//         errorMessage: 'Фамилия должна содержать не менее 3-х символов ',
//       },
//       {
//         rule: 'maxLength',
//         value: 30,
//       },
//       {
//         rule: 'required',
//         errorMessage: 'Обязательное поле',
//       },
//     ])
//     .addField('#secondname', [
//       {
//         rule: 'minLength',
//         value: 2,
//         errorMessage: 'Имя должно содержать не менее 2-х символов ',
//       },
//       {
//         rule: 'maxLength',
//         value: 30,
//       },
//       {
//         rule: 'required',
//         errorMessage: 'Обязательное поле',
//       },
//     ])
//     .addField('#surname', [
//       {
//         rule: 'minLength',
//         value: 3,
//         errorMessage: 'Отчество должно содержать не менее 3-х символов ',
//       },
//       {
//         rule: 'maxLength',
//         value: 30,
//       },
//       {
//         rule: 'required',
//         errorMessage: 'Обязательное поле',
//       },
//     ])
//     .addField('#mail', [
//       {
//         rule: 'required',
//         errorMessage: 'Обязательное поле',
//       },
//       {
//         rule: 'email',
//         errorMessage: 'Не валидный Email',
//       },
//     ])
//     .addField('#tel', [
//       {
//         rule: 'required',
//         errorMessage: 'Обязательное поле',
//       },
//     ])
//     .addField('#accountCheck', [
//       {
//         rule: 'required',
//         errorMessage: 'Подтвердите',
//       },
//     ])
//     // {
//     //   successMessage: 'Силён! с первой попытки'
//     // }
//     .onSuccess((ev) => {
//       ev.preventDefault();
//       window.showNotification();
//     });
// } catch (error) {

// }

