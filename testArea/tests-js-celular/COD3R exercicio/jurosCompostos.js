const js = (cp,tx,tp) => {
  let jc = (cp*tx*tp)
  let ms = cp + jc
  return `Montante juros simples ${ms.toFixed(2)}`
}
const jc = (cp,tx,tp) => {
    mc = cp*(1+tx)**tp //montante juros compostos
    return `Montante juros compostos ${mc.toFixed(2)}`
}
console.log(js(1000,0.05,6))
console.log(jc(1000,0.2,6))