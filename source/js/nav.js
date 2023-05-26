const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('.page__body');
const overlay = document.querySelector('.navigation__overlay');
const menuItems = document.querySelectorAll('.navigation__item');
const header = document.querySelector('.page-header');

const headerHeight = header.offsetHeight;
console.log(headerHeight);
const windowHeight = document.documentElement.offsetHeight;
console.log(windowHeight);
const delta = windowHeight - headerHeight;
const demension = document.documentElement.offsetWidth;

if(demension < 768) {
  navigation.setAttribute('style', `height : ${delta}px`);
}

function onEscPress(evt){
  if (evt.keyCode === 27) {
    burger.classList.remove('burger--active');
    navigation.classList.remove('navigation--visible');
    body.classList.remove('no-scroll');
  }
}

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  navigation.classList.toggle('navigation--visible');
  body.classList.toggle('no-scroll');
});

overlay.addEventListener('click', () => {
  burger.classList.remove('burger--active');
  navigation.classList.remove('navigation--visible');
  body.classList.remove('no-scroll');
});

menuItems.forEach(el => {
  el.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    navigation.classList.remove('navigation--visible');
    body.classList.remove('no-scroll');
  })
});

document.addEventListener(`keydown`, onEscPress);
