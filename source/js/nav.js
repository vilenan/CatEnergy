const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('.page__body');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  navigation.classList.toggle('navigation--visible');
  body.classList.toggle('no-scroll')

})
