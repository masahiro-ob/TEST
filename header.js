fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    // ここにheader.jsの内容をコピペしてもOK
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

    hamburgerMenu.addEventListener('click', function (e) {
      if (e.target === hamburgerMenu) {
        hamburgerMenu.classList.remove('is-active');
      }
    });
  });
