window.onscroll = function() {
  var header = document.querySelector('.wrapper_page'); // замените '.header' на селектор вашего хедера

  if (window.pageYOffset > 50) { // замените '50' на значение, которое вам нужно
    header.classList.add('on');
  } else {
    header.classList.remove('on');
  }
};