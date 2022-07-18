// 1° Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos.
// var tempo = new Date();

/*
O método getHours() retorna a hora para a data especificada, de acordo com a hora local.

tempo.getHours();

O método getMinutes() retorna a hora para a data especificada, de acordo com a hora local.
tempo.getMinutes();

O método getSeconds() retorna a hora para a data especificada, de acordo com a hora local.
tempo.getSeconds();
*/

function mostraTempo() {
  var display = document.querySelector(".display");
  var tempo = new Date();
  var hora =
    adionaZeroNaFrente(tempo.getHours()) +
    ":" +
    adionaZeroNaFrente(tempo.getMinutes()) +
    ":" +
    adionaZeroNaFrente(tempo.getSeconds());

  display.textContent = hora;
}
mostraTempo();
setInterval(mostraTempo, 1000);

function adionaZeroNaFrente(numero) {
  if (numero < 10) {
    numero = "0" + numero;
  }
  return numero;
}
