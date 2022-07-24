// 1° criar uma função para o relogio
// 2° criar uma variavel para pegar a tag display do html para o js
// 3° criar a variavel do new Date
// 4° Criar a variavel do get
// 5° mostrar na tela a hora com textContent
// 6° setinterval 1000
// 7° Criar uma função adicionar o 0 antes dos números até o 10

function mostraTempo() {
  var display = document.querySelector(".display");
  var tempo = new Date();
  var hora =
    adcionaZeroNaFrente(tempo.getHours()) +
    ":" +
    adcionaZeroNaFrente(tempo.getMinutes()) +
    ":" +
    adcionaZeroNaFrente(tempo.getSeconds());

  display.textContent = hora;
}
mostraTempo();
setInterval(mostraTempo, 1000);

function adcionaZeroNaFrente(numero) {
  if (numero < 10) {
    numero = "0" + numero;
  }
  return numero;
}
