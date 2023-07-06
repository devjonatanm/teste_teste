const o = {
name: "Brendan"
};
const s = JSON.parse(JSON.stringify(o));
const result = s === o;

let b= JSON.stringify(o) //JSON
let c= JSON.parse(JSON.stringify(o)) //objeto

console.log(result, typeof b, typeof c, {}==={})

// será o endereço de memória?
// nenhum objeto é igual a outro por caus do endereço de minoria?