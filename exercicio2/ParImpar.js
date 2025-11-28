//Peça um número inteiro e diga se ele é par ou ímpar.    (Dica: se o número dividido por 2 tiver resto 0, é par)
// const = algo fixo
// let = nao fixo / variavel
// var = erro
//eplicar dentro do prompt do que se trata a solicitacao

const num = Number(prompt('digitee um numero, vou validar se é par ou impar:'))

//processamento
//normalmenteee sao calculos aqui
//variaveis pode ser usadas
// faz divisao e pega o resto
const resto = num % 2

//saida
//mostra o resultado
// para usa o resultado usa o alert
if (resto == 0) {
    alert("o numero informado é par")
} else {
    alert('o numero informado é impar')
}
























