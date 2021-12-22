// Строгий режим
'use strict';

const button = document.querySelector('.button');
const list = document.querySelector('.list');
const listItems = document.querySelectorAll('.list__item');
button.innerHTML = 'Показать';

listItems.forEach(listItem => {
  listItem.addEventListener('click', function () {
    listItem.classList.toggle('_active');
  });
});

if (button) {
  button.addEventListener("click", function (e) {
    button.classList.toggle('_clicked-button');
    list.classList.toggle('_clicked-menu');

    if (button.classList.contains('_clicked-button')) {
      button.innerHTML = 'Скрыть';
    } else {
      button.innerHTML = 'Показать';
    }
  });
}