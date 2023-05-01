const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const menu = document.querySelector('.header__menu')
const list = document.querySelector('.header__list')

menu.addEventListener('click', () =>{
  menu.classList.toggle('active')
  list.classList.toggle('active')
})


const span = document.querySelectorAll('.quest__text-span')
const pluses = document.querySelectorAll('.fa-plus')
const icons = document.querySelectorAll('.quest__icon')

icons.forEach((icon, index) => {
  icon.addEventListener('click', (e) => {
    pluses[index].classList.toggle('active')
    span[index].classList.toggle('active')
  })
})