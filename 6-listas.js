console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`, `Patos`); // Adicionando elemento na nossa lista.
console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(4,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[3]);