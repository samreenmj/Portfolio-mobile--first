const menu = document.querySelector('.menu_list');
const menuItems = document.querySelectorAll('.link_item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const menuIcon = document.querySelector('.open');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    hamburger.classList.remove('closingIcon');
    document.body.classList.remove('hide_y_scroll');
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    hamburger.classList.add('closingIcon');
    document.body.classList.add('hide_y_scroll');
  }
}

hamburger.addEventListener('click', toggleMenu);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});