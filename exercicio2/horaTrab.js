//Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.

const ValorHora = Number(prompt("Digite quantos voce ganha por hora:"));
const ValorHorasTrab = Number(prompt("Digite quantas horas voce trabalhou no mes:"));
const Salario = ValorHora * ValorHorasTrab;

alert(" Seu salario no final do mes: R$" + Salario);