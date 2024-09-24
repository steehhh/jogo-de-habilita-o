alert("Boas vindas ao nosso site!");

let nome = "Lua";

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

let mensagemDeERRO = "Erro! Preencha Todos os Campos!";

alert("Erro! Preencha Todos os Campos!");

nome = prompt("Qual o Seu Nome de Usuario?");

idade = prompt("Agora Digite a Sua Idade!"); 

if(idade >= 18) {
    alert("Pode Tirar a Habilitação!")
}

else {alert("Você nao poderá tirar sua habilitação, pois você é de menor!")}