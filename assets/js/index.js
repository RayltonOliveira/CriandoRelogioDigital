// Criar a função para mostrar a hora
function mostraTempo() {
  // criar variavel para pega o display da tela
  var display = document.querySelector(".display");
  //   Criar variavel do new date
  var tempo = new Date();
  //   Criar variavel da hora chamando a função get
  var hora = tempo.getHours + ":" + tempo.getMinutes + ":" + tempo.getSeconds;
  //   chamar a função para mostrar a hora na tela
  display.textContent = hora;
}
mostraTempo();
// função para executar o intervalo e continuar a contagem
setInterval(mostraTempo, 1000);
// Criar função para adicionar o zero antes
function adicionaZeroNaFrente(numero) {
  if (numero < 10) {
    numero = "0" + numero;
  }
  return numero;
}
