console.log(`Trabalhando comCondicionais`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);
const idadeComprador = 21;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log(`Comprador maior de idade e a viagem comprada foi ${listaDeDestinos[1]}`);
//   listaDeDestinos.splice(1, 1); //Removendo item
// } else if (estaAcompanhada) {
//   console.log(`Comprador está acompanhado`);
//   listaDeDestinos.splice(1, 1); //Removendo item
// } else {
//   console.log(`Comprador menor de idade :(`);
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log(`Comprador maior de idade boa viagem a ${listaDeDestinos[1]}`);
  listaDeDestinos.splice(1, 1); //Removendo item
} else {
  console.log(`Comprador menor de idade e zero está acompanhado`);
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada == true){
  console.log("Boa Viagem");
}else{
  console.log("Não pode embarcar bacana...");
}

console.log(listaDeDestinos);