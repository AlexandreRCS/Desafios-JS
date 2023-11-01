alert("Hello World!!")

let numero1 = Number(prompt("Digite o primeriro numero: "))
let numero2 = Number(prompt("Digte o segundo numero: "))

alert(`A soma entre os numeros é ${numero1 + numero2}`)

//Crie um script que declare uma variavel e verifique se seu valor é um numero

let isNumber = prompt("Digite algo: ")

alert( isNaN(isNumber)? "Não e um numero" : "É um numero")

//Crie um script que declare uma variável e verifique se o seu valor é uma string.

let isString = prompt("Digite algo: ")

alert(isNaN(isString) ? "É uma string" : "Não e string")

//Crie umscript que declare duas variável e exiba o seultado da subtração entre eles

alert(`A Subtração entre os numeros são ${numero1 - numero2}`)

//Crie um script que dclare duas variável e exiba o resultado dq multiplicação 

alert(`A Multiplicação entre os numeros digitados são ${numero1 * numero2}`)

//Crie um script que declare duas variável e exiba o resultado da divisão entre eles

alert(`A Divisão entre entre os numeros digitados são ${numero1 / numero2}`)


let parImpar = Number(prompt("Digite um numero e eu vou dizer se ele e Par ou Ímpar......"))


alert(parImpar % parImpar ==  2 ? "O numero digitado e Par" : "O numero digitado e Ímpar")