window.onload = init;

function init() {
  const teclado = document.getElementById('teclado');
  const inputClave = document.querySelector('.clave');
  const numeros = ['1','2','3','4','5','6','7','8','9','0'];
  const teclas = [];


  const numerosBarajados = numeros.slice().sort(() => Math.random() - 0.5);

  numerosBarajados.forEach(num => {
    const btn = document.createElement('input');
    btn.type = 'button';
    btn.value = num;
    btn.className = 'tecla';
    teclas.push(btn);
    teclado.appendChild(btn);
    btn.addEventListener('click', () => {
      inputClave.value += num;
    });
  });


  const btnBorrar = document.createElement('input');
  btnBorrar.type = 'button';
  btnBorrar.value = 'Borrar';
  btnBorrar.className = 'tecla borrar';
  teclado.appendChild(btnBorrar);
  btnBorrar.addEventListener('click', () => {
    inputClave.value = inputClave.value.slice(0, -1);
  });


  teclas.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      teclas.forEach(t => t.value = '*');
    });
    btn.addEventListener('mouseleave', () => {
      teclas.forEach((t, i) => t.value = numerosBarajados[i]);
    });
  });
}