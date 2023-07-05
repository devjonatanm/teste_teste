//JAVASCRIPT CURSO BONIEKY 

//CALCULAR PERCENTAGEM
function calcPct(x,y) {
	return `${(y/x)*100}% de ${x} é ${y}`
}
console.log(calcPct(10000,10)) 

//CALCULAR IMÓVEL 
function calcImo(m,q){
	let preco = 3000*m
	if(q==2){
		preco*=1.2
	}else if(q==3){
		preco*=1.5
	}
	return preco
}
console.log(calcImo(123,2))

//VALIDAR USUÁRIO
function validarUsuario(n,s){
	if(n =='jonatan' && s == 1234){
		return "Acesso concedido!"
	}else{
		return "Acesso NEGADO!"
	}
}
const v = validarUsuario("jonatan",1234)
console.log(v)








