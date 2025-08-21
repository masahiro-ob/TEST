document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.hb-icon');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const closeIcon = document.querySelector('.close-icon');

  // メニューボタンがクリックされたらハンバーガーメニューを表示
  if (menuIcon && hamburgerMenu) {
    menuIcon.addEventListener('click', function () {
      hamburgerMenu.classList.add('is-open');
    });
  }

  // 閉じるボタンがクリックされたらハンバーガーメニューを非表示
  if (closeIcon && hamburgerMenu) {
    closeIcon.addEventListener('click', function () {
      hamburgerMenu.classList.remove('is-open');
    });
  }

  // メニューの外側をクリックしたら閉じる（任意で追加可）
  hamburgerMenu.addEventListener('click', function (e) {
    if (e.target === hamburgerMenu) {
      hamburgerMenu.classList.remove('is-open');
    }
  });
});