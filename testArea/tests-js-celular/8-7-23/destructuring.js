let obj = {
	nome: "Jonatan",
	idade: 27,
	pais: "Brazil"
}

//Destructuring é extração de dados de objetos e arrays para variáveis
let {nome, idade, pais} = obj

console.log(nome)

let array = [1,2,3,4,5,6]

let [n,z,m] = array
console.log(m)