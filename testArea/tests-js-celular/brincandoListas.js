let lista = [1,2,3,4,5]

let outra = [...lista,6,7,8,9]


let [a,b,c,d,f] = outra

let text = ''
for(let i in outra){
	text += outra[i]
}
console.log(text)

let outtxt = ''
for(let i=0;i<=200;i++){
	outtxt += i
}
console.log(outtxt)
