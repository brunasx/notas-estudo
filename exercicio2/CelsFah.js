//Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5

const Celsius = Number(prompt('digite a temperatura em graus celsius '));
// Passo 1: multiplica por 9
// Passo 2: soma 160
// Passo 3: divide por 5
const Fahrenheit = ((9 / 5 * Celsius) + 32);


alert("A temperatura do Fahrenheit é: " + Fahrenheit);

