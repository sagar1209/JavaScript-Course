'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
///////////////////////////////////////
// Modal window

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//      console.log(e.target);
//      const id = e.target.getAttribute('href');
//      console.log(id)
//      document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   });
// });

// 1. Add event listener to common perent element
// 2. determine what element originated the event
// event delegation

document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault()
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
     document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
});

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);
    if(!clicked) return;
    if(clicked){
      tabs.forEach(t=>t.classList.remove('operations__tab--active'));

      tabsContent.forEach(t=>t.classList.remove('operations__content--active'))

      clicked.classList.add('operations__tab--active') 
      
       document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
    }
    
});


// menu fade animation




/// lecture

// DOM traversing

// const h1 = document.querySelector('h1');

// child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// console.log(h1.childNodes);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);

// parents

// console.log(h1.parentElement);
// console.log(h1.parentNode)

// console.log(h1.closest('header'));   // closest is use to find parent element as not need hpw  longer
// // queryselector is use to find child element as not neeed to how deeper

// console.log(h1.parentElement.children);

// // console.log(h1.previousElementSibling);
// console.log(h1.previousSibling);
// // console.log(h1.nextElementSibling)

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });


// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body);

// // selecting element

// console.log(document.querySelector('.header'));
// console.log(document.querySelectorAll('.section'));
// console.log(document.getElementById('section--1'));
// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByClassName('btn'));

// creating and inserting element

//  insertAdjacentHTML use in movements

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// delete element

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// //  style
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height)  // not to give bcz you can diretly acces to html and css code

// console.log(getComputedStyle(message))  // this style to browser calculate and give us

// message.style.height = Number.parseFloat(getComputedStyle(message).height)+40+'px';

// document.documentElement.style.setProperty('--color-primary','orangered');

// //Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);

// console.log(logo.desiner); // not ans bcz its a not standard attributs

// console.log(logo.getAttribute('desiner'));
// console.log(logo.getAttribute('src'))  // give me who contex write in the text
// console.log(logo.src);;  // this give me original contex

// logo.setAttribute('company',"banking");
// console.log(logo.getAttribute('company'));

// // data attribute

// console.log(logo.dataset.versionNumber);

// /// class

// logo.classList.add(' ')
// logo.classList.remove(' ')
// logo.classList.toggle(' ')
// logo.classList.contains(' ')



// const execute = function(){
//   alert("mouseenter")
//   // h1.removeEventListener('mouseenter',execute)
// }
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter',execute);

// setTimeout(() => {
//    h1.removeEventListener('mouseenter',execute)
// }, 3000);

// h1.onmouseenter = function(){
//   alert("mounse")
// }

//  three phase of accuring event
// 1 -  capturing phase - //event started in root
// 2 - target phase -  // evenet go on  the target root use of parent root and execute callback function
// 3 - bubling phase -- ///after executing evenet go on root than complated the event
// 2 and 3 phase to execute the event

// event propogation

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

//   document.querySelector('.nav__link').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK', e.target, e.currentTarget);
//     // console.log(e.currentTarget === this);

//     // Stop propagation
//     // e.stopPropagation();
//   });

//   document.querySelector('.nav__links').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK', e.target, e.currentTarget);
//     // console.log(e.currentTarget === this);
    
//     // Stop propagation
//     // e.stopPropagation();
//   });
//   document.querySelector('.nav').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK', e.target, e.currentTarget);
//     // console.log(e.currentTarget === this);
    
//     // Stop propagation
//     // e.stopPropagation();
//   // },true);  when you write a true that time event execute on cpturing time and by default false
//   });

  // second and third event exucuting bcz use of bubling phase