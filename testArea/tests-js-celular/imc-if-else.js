let nome = "Jonatan"
let peso = 92
let altura = 1.76

imc = peso/(altura*altura)
if(imc < 18.5){
	console.log(`${nome} seu imc é ${imc.toFixed(2)} está na Magreza.`)
}else if(imc >=18.5 && imc < 24.9){
	console.log(`${nome} seu imc é ${imc.toFixed(2)} está Saudável.`)
}else if(imc >=25 && imc < 29.9){
	console.log(`${nome} seu imc é ${imc.toFixed(2)} está no Sobrepeso.`)
}else if(imc >=30 && imc < 34.9){
	console.log(`${nome} seu imc é ${imc.toFixed(2)} está na Obesidade Grau 1`)
}else if(imc >=35 && imc < 39.9){
	console.log(`${nome} seu imc é ${imc.toFixed(2)} está na Obesidade Grau 2 (severa)`)
}else{
	console.log(`${nome} seu imc é ${imc.toFixed(2)} está na Obesidade Grau 3 (morbida)`)
}
