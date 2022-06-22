var ler_dados = require("readline-sync");

function CalcPadrao() {
  //clear();
  console.log(
    "\n\n                                               Calculadora padrão"
  );
  console.log(
    "\n---------------------------------------------------------------------------------------------------------------------"
  );
  var num1 = parseInt(ler_dados.question("\n\nDigite o primeiro valor: "));
  var num2 = parseInt(ler_dados.question("\nDigite o segundo valor: "));
  var op = ler_dados.question("\nDigite a operacao ( + | - | * | / ): ");

  switch (op) {
    case "+":
      var soma = num1 + num2;
      console.log("\n\n" + num1 + " + " + num2 + " = " + soma);
      break;

    case "-":
      var subtracao = num1 - num2;
      console.log("\n\n" + num1 + " - " + num2 + " = " + subtracao);
      break;

    case "*":
      var multiplicacao = num1 * num2;
      console.log("\n\n" + num1 + " * " + num2 + " = " + multiplicacao);
      break;

    case "/":
      var divisao = num1 / num2;
      if (num2 == 0) {
        console.log("\n\nErro! div por 0");
      } else console.log("\n\n" + num1 + " / " + num2 + " = " + divisao);
      break;

    default:
      console.log("\n\nOp Invalida");
      break;
  }
}

function Quadrado() {
  //clear();
  console.log(
    "\n\n                                         Calculadora Quadrado"
  );
  console.log(
    "\n---------------------------------------------------------------------------------------------------------------"
  );
  var L = parseInt(
    ler_dados.question("\n\nDigite o valor do lado do quadrado: ")
  );
  var area = parseInt(L * L);
  var perimetro = parseInt(L * 4);
  console.log(
    "\n\nA area do quadrado é " + area + "\ne o perimetro é " + perimetro
  );
}

function Retangulo() {
  //clear();
  console.log(
    "\n\n                                      Calculadora Retangulo"
  );
  console.log(
    "\n-----------------------------------------------------------------------------------------------------------"
  );
  var H = parseInt(
    ler_dados.question("\n\nDigite o valor da altura do retangulo: ")
  );
  var B = parseInt(
    ler_dados.question("\nDigite o valor da base do retangulo: ")
  );
  area = parseInt(B * H);
  perimetro = parseInt(B * 2 + H * 2);
  console.log(
    "\n\nA area do retangulo é " + area + "\ne o perimetro é " + perimetro
  );
}

function Triangulo() {
  //clear();
  console.log(
    "\n\n                                           Calculadora Triagulo"
  );
  console.log(
    "\n--------------------------------------------------------------------------------------------------------------"
  );
  var H = parseInt(
    ler_dados.question("\n\nDigite o valor da altura do triangulo: ")
  );
  var B = parseInt(
    ler_dados.question("\nDigite o valor da base do triangulo: ")
  );
  area = parseInt((B * H) / 2);
  console.log("\n\nA area do triangulo é " + area);
}

function Circulo() {
  //clear();
  console.log(
    "\n\n                                         Calculadora Circulo"
  );
  console.log(
    "\n-----------------------------------------------------------------------------------------------------------------"
  );
  var Pi = parseFloat(3.14);
  var R = parseInt(
    ler_dados.question("\n\nDigite o valor do raio do circulo: ")
  );
  var area = parseInt(Pi * (R * R));
  var comprimento = parseInt(2 * Pi * R);
  console.log(
    "\n\nA area do circulo é " +
      area +
      "\ne o comprimento da circunferencia é " +
      comprimento
  );
}

function Trapezio() {
  //clear();
  console.log(
    "\n\n                                             Calculadora Trapezio"
  );
  console.log(
    "\n-----------------------------------------------------------------------------------------------------------------"
  );
  var B = parseInt(
    ler_dados.question("\n\nDigite o valor da base maior do trapezio: ")
  );
  var b = parseInt(
    ler_dados.question("\nDigite o valor da base menor do trapezio: ")
  );
  var H = parseInt(
    ler_dados.question("\nDigite o valor da altura do trapezio: ")
  );
  if (b >= B) {
    console.log("\nOperação impossivel! Tente novamente");
  } else {
    var area = parseInt((B * b * H) / 2);
    console.log("\n\nA area do trapezio é " + area);
  }
}

do {
  var calc;
  console.log("\n\n                                        Calculadora geral");
  console.log(
    "\n------------------------------------------------------------------------------------------------------------"
  );
  console.log("\n\n1_Calculadora Padrão");
  console.log("\n2_Calculadora quadrado");
  console.log("\n3_Calculadora retangulo");
  console.log("\n4_Calculadora triangulo");
  console.log("\n5_Calculadora circulo");
  console.log("\n6_Calculadora trapezio");
  console.log("\n7_Sair");
  calc = parseInt(ler_dados.question("\n\nEscolha uma dessas calculadoras: "));

  switch (calc) {
    case 1:
      CalcPadrao();
      break;

    case 2:
      Quadrado();
      break;

    case 3:
      Retangulo();
      break;

    case 4:
      Triangulo();
      break;

    case 5:
      Circulo();
      break;

    case 6:
      Trapezio();
      break;

    case 7:
      console.log("\n\nSaindo.....");
      break;

    default:
      console.log("\n\nErro! selecione uma calculadora valida");
      break;
  }
  if (calc != 7) {
    var resp = ler_dados.question("\n\nQuer rodar o app novamente? (s/n): ");
  } else console.log("\nTchau");
} while ((resp == "s") & (calc != 7));
