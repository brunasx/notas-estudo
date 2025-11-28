//peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.

const peso1 = Number(prompt("Digite o peso da primeira pessoa:"));
const peso2 = Number(prompt("Digite o peso da segunda pessoa:"));
const peso3 = Number(prompt("Digite o peso da terceira pessoa:"));
const peso4 = Number(prompt("Digite o peso da quarta pessoa:"));
const peso5 = Number(prompt("Digite o peso da quinta pessoa:"));

const MediaPeso = (peso1 + peso2 + peso3 + peso4 + peso5) / 5;

alert('A media dos pesos é: ' + MediaPeso)


