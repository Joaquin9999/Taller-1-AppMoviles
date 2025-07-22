const campoTexto = document.getElementById('campoTexto');
const contador = document.getElementById('contador');

campoTexto.addEventListener('input', function() {
  contador.textContent = campoTexto.value.length;
});