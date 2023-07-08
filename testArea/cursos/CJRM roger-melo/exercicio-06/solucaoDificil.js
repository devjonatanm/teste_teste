const randomNumbers = [73, 4, 67, 10, 31, 58];
const numerosImpares = [];
const numerosPares = [];

for (let i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] % 2 === 0) {
    numerosPares.push(randomNumbers[i]);
  } else {
    numerosImpares.push(randomNumbers[i]);
  }
}

const frase =
  "Numeros ímpares: " +
  numerosImpares.join(", ") +
  ". Números pares: " +
  numerosPares.join(", ") +
  ".";

console.log(frase);
