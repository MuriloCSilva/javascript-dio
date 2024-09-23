const precoCombustivel = 4.55;
const kmPorLitro = 2;
const distanciaViagem = 10;

const litrosConsumidos = distanciaViagem / kmPorLitro;

const valorDaViagem = litrosConsumidos * precoCombustivel;

console.log(`O valor da viagem vai ser R$${valorDaViagem}`);