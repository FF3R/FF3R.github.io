// js/soundboard.js
const botones = document.querySelectorAll('#soundboard button');
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const sonido = new Audio(boton.dataset.sound);
    sonido.currentTime = 0;
    sonido.play();
  });
});
