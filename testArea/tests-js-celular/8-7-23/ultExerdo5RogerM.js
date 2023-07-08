const aleat = [37,48,23,56,25,92]
let imp = []
let par = []
for (let i = 0; i < aleat.length; i++) {
  if (aleat[i] % 2 === 0) {
    imp.push(aleat[i])
  } else {
    par.push(aleat[i])
  }
}
console.log(`Impares: ${aleat[0]}, XX e XX. Pares: XX, XX e XX.`)
