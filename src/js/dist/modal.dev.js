"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modal = void 0;

var modal = function modal() {
  var contactUsBtn = document.querySelector('.headerWhite--container__menuMobile');
  var modal = document.querySelector('.modal');
  var modalCloseBtn = document.querySelector('.close');
  var html = document.querySelector('html');
  contactUsBtn.addEventListener('click', function () {
    modal.style.transform = "translateX(0px)";
    modal.classList.add('bounce'); // html.style.overflowY = 'hidden';
  });
  modal.addEventListener('click', function (e) {
    if (e.target === modal || e.target === modalCloseBtn) {
      modal.style.transform = "translateX(1000px)";
      modal.classList.remove('bounce'); // html.style.overflowY = 'auto';
    }
  });
};

exports.modal = modal;