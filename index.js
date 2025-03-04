const menuBtn = document.querySelector('.menu');
let optionButtons = document.querySelectorAll('#link');

menuBtn.addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('nav--open');
  menuBtn.innerHTML = menuBtn.innerHTML === 'Menu' ? 'Close' : 'Menu';
});

optionButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('nav--open');
  });
});