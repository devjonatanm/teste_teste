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