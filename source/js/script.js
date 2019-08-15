  var navMain = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".main-nav__toogle");

  navMain.classList.remove("main-nav--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });

// Вот что я нашёл

'use strict';

(function () {
  // Progress block

  var progress = document.querySelector('.demo__progress');

  if (progress) {
    var btnBefore = progress.querySelector('.demo__progress-button--before');
    var btnAfter = progress.querySelector('.demo__progress-button--after');

    btnBefore.addEventListener('click', function () {
      if (progress.classList.contains('demo__progress--after')) {
        progress.classList.remove('demo__progress--after');
      }
    })

    btnAfter.addEventListener('click', function () {
      if (!progress.classList.contains('demo__progress--after')) {
        progress.classList.add('demo__progress--after');
      }
    })

    if (docWidth >= tabletWidth) {
      var imgBefore = progress.querySelector('.demo__illustration--before');
      var imgAfter = progress.querySelector('.demo__illustration--after');
      var scale = progress.querySelector('.demo__progress-bar');
      var range = scale.querySelector('.demo__range');

      range.addEventListener('input', function() {
        imgBefore.style.width = (100 - range.value) + '%';
        imgAfter.style.width = range.value + '%';
      })

      btnBefore.addEventListener('click', function () {
        imgBefore.style.width = '100%';
        imgAfter.style.width = '0%';
        range.value = 0;
      })

      btnAfter.addEventListener('click', function () {
        imgBefore.style.width = '0%';
        imgAfter.style.width = '100%';
        range.value = 100;
      })
    }
  }

})();
