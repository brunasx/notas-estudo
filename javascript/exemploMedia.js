// entrada = variaveis 
// Media aritmetica de tres notas:
//  menor que 3 = horrivel
//menor que 7 da pra melhorar
//maior que 7 = congratulations

const nota1 = Number(prompt("digite a primeira nota"))
const nota2 = Number(prompt("digite a primeira nota"))
const nota3 = Number(prompt("digite a primeira nota"))

//processamento 

const soma = nota1 + nota2 + nota3
const media = soma / 3

//media menor que 3
//media menor qe 7 
//media maior que 7 
if (media < 3) {
    alert("Media é insuficiente " + media + " horrivel ")
} else if (media < 7) {
    alert("Media é insuficiente " + media + " - da pra melhorar ")
} else {
    alert("Media é insuficiente " + media + "  - show de bolas ")

}

