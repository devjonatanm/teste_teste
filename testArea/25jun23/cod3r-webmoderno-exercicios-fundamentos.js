/* 
- EXERCÍCIO 1:
const arit = (x,y)=>{
  return `A soma de ${x} e ${y} é ${x+y}.
A subtração de ${x} e ${y} é ${x-y}.
A multiplicação de ${x} e ${y} é ${x*y}.
A divisão de ${x} e ${y} é ${x/y}.`
}
console.log(arit(5,10))

- EXERCÍCIO 2:
function triangulo(x,y,z){
  if(x == y && x == z && z == y){
    return (`Triângulo é Equilátero\n(todos os lados são iguais).`)
  } else if(x==y||x==z||y==x||y==z||z==x||z==y){
    return (`Triângulo é Isósceles\n(dois lados são iguais).`)
  } else {
    return (`Triângulo é Escaleno\n(todos os lados são diferentes).`)
  }
}
console.log(triangulo(9,9,9))

- EXERCÍCIO 3:
const exp = (base,expoente) => {
  return base ** expoente
}
console.log(exp(8,4))

- EXERCÍCIO 4:
const div = (x, y) => {
  return `${x} divido por ${y} é ${x/y},
e o resto dessa divisão é ${x%y}`
}
console.log(div(7,5))

- EXERCÍCIO 5:
const form = (x) => {
  return "R$ "+x.toFixed(2).toLocaleString('PT')
    // x.toString().replace('.', ',')
}
console.log(form(Math.PI))

- EXERCÍCIO 6:
const js = (cp,tx,tp) => {
  jc = (cp*tx*tp)
  ms = cp + jc
  return `Montante juros simples ${ms}`
}
const jc = (cp,tx,tp) => {
    mc = cp*(1+tx)**tp //montante juros compostos
    return `Montante juros compostos ${mc}`
}
console.log(js(1000,0.1,6))
//console.log(jc(1000,0.1,6))

- EXERCÍCIO 7:
const bask = (a, b, c) => {
  delta = b**2-4*a*c
  quad = Math. sqrt(delta)

  x1 = (-b+quad)/(2*a) //positivo
  x2 = (-b-quad)/(2*a) //negativo 

  if (delta < 0){
    return "Delta é negativo!"
  }else{
    return [x1,x2]
  }
}
console.log(bask(-4,1,5))

- EXERCÍCIO 8:

- EXERCÍCIO 9:
- EXERCÍCIO 10:
- EXERCÍCIO 11:
- EXERCÍCIO 12:
- EXERCÍCIO 13:
- EXERCÍCIO 14:
- EXERCÍCIO 15:
- EXERCÍCIO 16:
- EXERCÍCIO 17:
- EXERCÍCIO 18:
- EXERCÍCIO 19:
- EXERCÍCIO 20:
- EXERCÍCIO 21:
- EXERCÍCIO 22:
- EXERCÍCIO 23:
- EXERCÍCIO 24:
- EXERCÍCIO 25:
- EXERCÍCIO 26:
- EXERCÍCIO 27:
- EXERCÍCIO 28:
- EXERCÍCIO 29:
- EXERCÍCIO 30:
- EXERCÍCIO 31:
- EXERCÍCIO 32:
- EXERCÍCIO 33:
- EXERCÍCIO 34:
- EXERCÍCIO 35:
- EXERCÍCIO 36:
- EXERCÍCIO 37:
- EXERCÍCIO 38:
- EXERCÍCIO 39:
- EXERCÍCIO 40:
for(let i=1;i<=40;i++){
  console.log(`- EXERCÍCIO ${i}:`)
}
*/
