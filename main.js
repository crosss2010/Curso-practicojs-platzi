const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');

const toggleProductDetail = () => {
  asideProductDetail.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('inactive');
  asideProductDetail.classList.add('inactive');
} 
const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle('inactive');
  asideProductDetail.classList.add('inactive');  
}

navbarEmail.addEventListener('click', toggleDesktopMenu)
hamMenu.addEventListener('click', toggleMobileMenu)
navbarShoppingCart.addEventListener('click', toggleProductDetail)
