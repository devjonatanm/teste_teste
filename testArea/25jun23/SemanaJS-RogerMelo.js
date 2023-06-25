/*Estes exercícios aprendi na Semana no JS,
treinamento do Roger Melo pude praticar os fundamentos do JS*/
//**EXERCÍCIO 1**
const n = [10, 30, 15, 25, 50, 40, 5]

let a = function(x){
	if(x%2 === 1){
		return x
	}
}
console.log(n.filter(a))

//**EXERCÍCIO 2**
// menores de 501
const n = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691, 1,504]

let a = (x)=>{
	if(x<501){
		return x
	}
}
b = n.filter(a)
console.log(b.length)

//**EXERCÍCIO 3**
const n = [5, 7, 3, 9, 25]

console.log(n.map(x => x ** 2))

//**EXERCÍCIO 4**
const tarantinoMovies = [
  { name: 'Bastardos inglÃ³rios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'CÃ£es de Aluguel', release: 1992 },
  { name: 'Ã Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

let a = function (x){
  if(x.release < 2000){
    return x
  }
}
console.log(tarantinoMovies.filter(a))

//**EXERCÍCIO 5**
const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]
console.log(tvShows.map(x => x.name))

//**EXERCÍCIO 6**
const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

//so_nome = cart.map(x => x.name).join(" \n-")
so_name = cart.map(x => x.name)
tranf = so_name.map(x => `- ${x}`).join('\n')

console.log(tranf)

/*==========================================
for(let i=0;i<6;i++){
	console.log("//**EXERCÍCIO "+(i+1)+"**")
}
