lista = [1,2,3,4,5,6,7,8,9]

lista.push(10,11)
console.log(lista.join()) // até 11

lista.pop() // tira último
console.log(lista.join()) // até 10

lista.shift() // tira primeiro
console.log(lista.join()) // 2 até 10

lista.concat(10,11)
console.log(lista.join()) // 
