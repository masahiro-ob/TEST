document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.hb-icon');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const closeIcon = document.querySelector('.close-icon');

  if (menuIcon && hamburgerMenu) {
    menuIcon.addEventListener('click', function () {
      hamburgerMenu.classList.add('is-active');
    });
  }

  if (closeIcon && hamburgerMenu) {
    closeIcon.addEventListener('click', function () {
      hamburgerMenu.classList.remove('is-active');
    });
  }

  // メニュー外クリックで閉じる（任意）
  hamburgerMenu.addEventListener('click', function (e) {
    if (e.target === hamburgerMenu) {
      hamburgerMenu.classList.remove('is-active');
    }
  });
});
