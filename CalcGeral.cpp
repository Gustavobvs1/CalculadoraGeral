#include<iostream.h>
#include<stdio.h>
#include<dos.h>
#include<ctype.h>
#include<conio.h>
#include<string.h>
#include<stdlib.h>


void CalcPadrao ();
void quadrado ();
void retangulo ();
void triangulo ();
void circulo ();
void trapezio ();
void beep ();

void
main ()
{
  do
    {
      clrscr ();
      char op;
      cout << "\n\n                              CalculadoraGeral";
      cout <<
	"\n\n ------------------------------------------------------------------------------";
      cout << "\n 1_Calculadora Padrao";
      cout << "\n 2_Quadrado";
      cout << "\n 3_Retangulo";
      cout << "\n 4_Triangulo";
      cout << "\n 5_Circulo";
      cout << "\n 6_Trapezio";
      cout << "\n 7_Sair";
      cout << "\n\n Escolha uma das opcoes: ";
      cin >> op;
      fflush (stdin);

      if (op == '1')
	{
	  CalcPadrao ();
	}
      if (op == '2')
	{
	  quadrado ();
	}
      if (op == '3')
	{
	  retangulo ();
	}
      if (op == '4')
	{
	  triangulo ();
	}
      if (op == '5')
	{
	  circulo ();
	}
      if (op == '6')
	{
	  trapezio ();
	}
      if (op == '7')
	{
	  cout << "Saindo.....";
	  beep ();
	}
      else
	{
	  cout << "Op invalido, tente novamente!";
	}
  cout << "\n\nQuer rodar o app de novo? (s/n)";
  }
  while (tolower (getch () == 's'));
  }

  void CalcPadrao ()
  {
    clrscr ();
    int num1, num2, resultado;
    char Op;
    cout << "\n\n                              CalculadoraPadrao";
    cout <<
      "\n\n ------------------------------------------------------------------------------";
    cout << "\nDigite o primeiro numero: ";
    cin >> num1;

    cout << "\nDigite o segundo numero: ";
    cin >> num2;

    cout << "\nDigite a operacao ( + | - | * | / ): ";
    cin >> Op;

    switch (Op)
      {
      case '+':
	resultado = num1 + num2;
	cout << "\n" << num1 << " + " << num2 << " = " << resultado;
	break;

      case '-':
	resultado = num1 - num2;
	cout << "\n" << num1 << " - " << num2 << " = " << resultado;
	break;

      case '*':
	resultado = num1 * num2;
	cout << "\n" << num1 << " * " << num2 << " = " << resultado;
	break;

      case '/':
	resultado = num1 / num2;
	cout << "\n" << num1 << " / " << num2 << " = " << resultado;
	break;

      default:
	cout << "\noperacao invalida!";
	break;
      }
    getch ();
  }

  void quadrado ()
  {
    clrscr ();
    int L;
    cout << "\n\n                              CalculadoraQuadrado";
    cout <<
      "\n\n ------------------------------------------------------------------------------";
    cout << "\nDigite o valor do lado do quadrado: ";
    cin >> L;
    cout << "\n\n O valor da area do quadrado eh: " << L * L <<
      "\n E o valor do perimetro eh: " << L * 4;
    getch ();
  }

  void retangulo ()
  {
    clrscr ();
    int B, H;
    cout << "\n\n                              CalculadoraRetangulo";
    cout <<
      "\n\n ------------------------------------------------------------------------------";
    cout << "\nDigite o valor da base: ";
    cin >> B;
    cout << "\nDigite o valor da altura: ";
    cin >> H;
    cout << "\n O valor da area do retangulo eh: " << B * H <<
      "\n\n E o valor do perimetro eh: " << B * 2 + H * 2;
    getch ();
  }

  void triangulo ()
  {
    clrscr ();
    int B, H;
    cout << "\n\n                              CalculadoraTriangulo";
    cout <<
      "\n\n ------------------------------------------------------------------------------";
    cout << "\nDigite o valor da base: ";
    cin >> B;
    cout << "\nDigite o valor da altura: ";
    cin >> H;
    cout << "\n O valor da area do triangulo eh: " << B * H / 2;
    getch ();
  }

  void circulo ()
  {
    clrscr ();
    float r, pi = 3.14;
    cout << "\n\n                              CalculadoraCirculo";
    cout <<
      "\n\n ------------------------------------------------------------------------------";
    cout << "\nDigite o valor do raio: ";
    cin >> r;
    cout << "\n\n O valor da area circunferencia eh: " << pi * (r * r);
    getch ();
  }

  void trapezio ()
  {
    clrscr ();
    int B, b, H;
    cout << "\n\n                               CalculadoraTrapezio";
    cout <<
      "\n\n ------------------------------------------------------------------------------";
    cout << "\nDigite o valor da base maior: ";
    cin >> B;
    cout << "\nDigite o valor da base menor: ";
    cin >> b;
    cout << "\nDigite o valor da altura: ";
    cin >> H;
    if (b > B)
      {
	cout << "\nOperacao impossivel! tente novamente";
      }
    else
      {
	cout << "\nO valor da area do trapezio eh " << ((B + b) * H) / 2;
      }
    getch ();
  }

  void beep ()
  {
    clrscr ();
    delay (400);
    sound (300);
    sound (100);
    delay (200);
  }
