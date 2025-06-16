const display = document.getElementById('display');
let operacion = '';

document.querySelectorAll('.calculadora button').forEach(boton => {
  boton.addEventListener('click', () => {
    const valor = boton.textContent;

    if (valor === 'C') {
      operacion = '';
      display.value = '';
      return;
    }

    if (valor === '=') {
      try {
        operacion = eval(operacion).toString();
        display.value = operacion;
      } catch {
        display.value = 'Error';
        operacion = '';
      }
      return;
    }

    operacion += valor;
    display.value = operacion;
  });
});
