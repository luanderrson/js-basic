console.log("Atribuição de Variáveis");
const primeiroNome = "Luanderson"; 
const sobrenome = "Bruno";
// console.log(primeiroNome + " " + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu Nome Completo é ${primeiroNome} ${sobrenome}`); //São duas crases pra trás

//outras informações
let contador = 0 //Nesse caso estamos usando o LET pq nossa variavel poderá ser reescrita.
contador = contador +1;
const nomeCompleto = primeiroNome + sobrenome; //Melhor pratica é sempre criar variaveis CONST p/ que nao possam ser alteradas.
console.log(nomeCompleto);

let idade; //Declarando variavel
idade = 26 // Atribuindo valor
idade = idade+1;
console.log(idade);