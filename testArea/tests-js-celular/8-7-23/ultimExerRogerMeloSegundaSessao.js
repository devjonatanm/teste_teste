const nome = 'homem da cabeça raspada';
const separadas = nome.split(" ");

for (let j = 0; j < separadas.length; j++) {
  separadas[j] = separadas[j].charAt(0).toUpperCase() + separadas[j].slice(1);
}
const juntas = separadas.join(" ");
console.log(juntas);