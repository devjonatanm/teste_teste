const numeros = [10, 30, 15, 25, 50, 40, 5]

function buscNum(valor){
	if(valor % 2 === 1)
	return valor
}

const impares = numeros.filter(buscNum)

console.log(impares)