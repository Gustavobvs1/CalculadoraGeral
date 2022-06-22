from ast import While
from asyncio import sleep


def CalcPadrao():
    num1 = int(input("Digite o primeiro numero: "))
    sinal = input("Qual operacao você deseja ( + | - | * | / |): ")
    num2 = int(input("Digite o segundo numero: "))
    print()

    if num1 & num2 != int:
        print("Erro digite um numero por favor!")

    else:
        if sinal == "+":
            resultado = (num1 + num2)
            print(num1, " + ", num2, " = ", resultado)

        elif sinal == "-":
            resultado = int(num1 - num2)
            print(num1, " - ", num2, " = ", resultado)

        elif sinal == "*":
            resultado = int(num1 * num2)
            print(num1, " * ", num2, " = ", resultado)

        elif sinal == "/":
            if num2 == 0:
                print("Erro! impossivel dividir por 0")
            else:
                resultado = int(num1 / num2)
                print(num1, "/", num2, " = ", resultado)

        else:
            print("Erro! Digite uma operacao valida")


def CalcQuadrado():
    print()
    L = int(input("Digite o valor do lado do quadrado: "))

    print("O valor do perimetro do quadrado é ", L*4)
    print("\nE o valor da area do quadrado é ", L*L)


def CalcRetang():
    print()
    B = int(input("Digite o valor da base do retangulo: "))
    H = int(input("Digite o valor da altura do retangulo: "))
    print()
    perimetro = B * 2 + H * 2
    area = B * H
    print("O perimetro do retangulo é ", perimetro, "e a area dele é ", area)


def CalcTriang():
    print()
    B = int(input("Digite o valor da base do triangulo: "))
    H = int(input("Digite o valor da altura do triangulo: "))
    print()
    area = (B * H) / 2
    print("O valor da area do triangulo é ", area)


def CalcCirc():
    print()
    PI = int(3.14)
    R = int(input("Digite o valor do raio do circulo: "))
    circ = 2 * PI * R
    print("O comprimento da circunferencia do circulo é ", circ)


def CalcTrape():
    print()
    B = int(input("Digite o valor da base maior: "))
    b = int(input("Digite o valor da base menor: "))
    H = int(input("Digite o valor da altura: "))
    print()
    area = ((B + b) * H) / 2
    print("O valor da area do trapézio é ", area)


def Sair():
    print("Saindo...")
    sleep(3)
    exit()


print()
print("Calculadora Geral")
print()

print("1. Calculadora Padrao")
print("2. Calculadora de Quadrados")
print("3. Calculadora de Retangulos")
print("4. Calculadora de Triangulos")
print("5. Calculadora de Circulos")
print("6. Calculadora de Trapézios")
print("7. Sair")
print()
Calc = int(input("Escolha uma dessas calculadoras: "))


if(Calc == 1):
    CalcPadrao()

elif(Calc == 2):
    CalcQuadrado()

elif(Calc == 3):
    CalcRetang()

elif(Calc == 4):
    CalcTriang()

elif(Calc == 5):
    CalcCirc()

elif(Calc == 6):
    CalcTrape()

elif(Calc == 7):
    Sair()

resp = input("Quer rodar novamente (s/n): ")
