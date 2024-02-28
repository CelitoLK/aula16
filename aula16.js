const nome = '***';
const sobrenome = '#';
const idade = 33;
const peso = 68;
const altura = 1.71;
let imc;
let anoNascimento;

imc = peso / (altura**2);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg`);
console.log(`tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu no ano de  ${anoNascimento}`)
