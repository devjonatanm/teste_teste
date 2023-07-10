/*
Durante a resolução desta bateria de exercícios você verá 
erros no console do navegador. 

Fazer os erros desaparecerem é parte da resolução dos 
exercícios. 

Importante: o número da linha na qual o erro é lançado 
é exibida ao lado da mensagem no console. Caso não consiga 
descobrir como resolver o erro, comente a linha 
que está lançando o erro e vá para o próximo exercício.
*/

/*
01

A expressão abaixo da declaração do array está lançando um 
erro no console. 

Conserte o erro. 

Após consertar, a expressão deve retornar o número 7.
*/

const objs = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 5, y: 6 },
    { x: 7, y: 8 }
]
//objs[4].x
//console.log(objs[3].x)

/*
02

A expressão abaixo da declaração do objeto está lançando 
um erro no console. 

Faça os 2 únicos ajustes necessários para consertar o erro.

Após consertar, a expressão deve retornar o caractere w.
*/

const obj = {
    x: () => 'y',
    y: function () {
        'w'
    },
    w() {
        return 'w'
    }
}

//obj.z()  <<
//console.log(obj.w())

/*
03

Crie uma função que retorna um boolean indicando se o 
argumento que a função recebeu é null.

Invoque a função 3x. A cada invocação, o argumento deve 
ser um valor diferente do anterior. 

Faça com que uma das invocações retorne true.
*/
const eNull = arg => arg === null // corrigido pelo Roger

//console.log sempre retorna undefined
function boo(x) {
    return null === x // fez antes do retorno
}
//console.log(boo(0))
//console.log(boo(null))
//console.log(boo(5))


/*
04

Crie uma função com as seguintes características:

1. A função deve receber 3 argumentos;

2. Se qualquer um dos três argumentos não estiverem 
preenchidos, a função deve retornar a string abaixo:

'Insira todos os argumentos!'

3. O retorno da função deve ser a multiplicação dos 3 
argumentos.
*/

// pode ser utilzado includes
function multTres(x = 'Insira todos os argumentos!', y = 'Insira todos os argumentos!', z = 'Insira todos os argumentos!') {
    return console.log(x * y * z)
}
//multTres(2, 4, 2)

const multiplicar = (a, b, c) => {  // corrigido pelo Roger
    if (a === undefined || b === undefined || c === undefined) {
        return 'Insira todos os argumentos!'
    }
}
//console.log(multiplicar())
//console.log(multiplicar(1))


/*
05

Descomente o console.log do código abaixo. OK

Ifs aninhados tendem a deixar a leitura do código mais 
complexa. Por isso, sua missão neste exercício é refatorar 
a função abaixo para que ela tenha apenas um if e continue 
funcionando como já está. OK

Deixe a expressão/condição do if mais fácil de ser lida. 

Não mexa na invocação da função. Sua refatoração deve 
envolver apenas as linhas de código dentro do bloco da 
função. 
*/

const y = w => {
    if (w[2] === false && 'b' === w[0] && w[1] === 3) {
        console.log('Executou if!')
    }
}
// extensa e mais legivel
// const y = w => { // corrigido pelo Roger
//     const eIgualFalse = w[2] === false
//     const eIgualB = 'b' === w[0]
//     const eIgual3 = w[1] === 3

//     if (eIgualFalse && eIgualB && eIgual3) {
//         console.log('Executou if!')
//     }
// }

const a = 'b'
const b = false
const c = 3

//y([a, c, b])

/*
06

Crie uma função com as seguintes características:

1. A função deve receber 3 argumentos.

2. Se somente um argumento for passado, retorne o valor do 
argumento. OK

3. Se dois argumentos forem passados, retorne a soma dos 
dois argumentos.OK

4. Se todos os argumentos forem passados, retorne a soma do 
primeiro com o terceiro.OK

5. Se nenhum argumento for passado, retorne o valor booleano 
false. OK

6. E ainda, se nenhuma das condições acima forem atendidas, 
retorne null.
*/
// const triArgs = (x, y, z) => {
//     if (x !== 1 && y === undefined && z === undefined) {
//         return x
//     } else if (x !== 1 && y !== 0 && z === undefined) {
//         return x + y
//     } else if (x !== 1 && y !== 0 && z !== 0) {
//         return x + z
//     } else if (x === undefined && y === undefined && z === undefined) {
//         return false
//     }
// }

const triArgs = (x, y, z) => {
    let a = 0
    let xIsNumber = typeof x === "number"
    let yIsNumber = typeof y === "number"
    let zIsNumber = typeof z === "number"

    let xDifentUndef = x !== undefined
    let yDifentUndef = y !== undefined
    let zDifentUndef = z !== undefined

    let xEqualUnd = x === undefined
    let yEqualUnd = y === undefined
    let zEqualUnd = z === undefined


    if (xIsNumber && xDifentUndef && yEqualUnd && zEqualUnd) {
        a = x
    } else if (xIsNumber && yIsNumber && xDifentUndef && yDifentUndef && zEqualUnd) {
        a = x + y
    } else if (xIsNumber && zDifentUndef && xDifentUndef && yDifentUndef && zDifentUndef) {
        a = x + z
    } else if (xEqualUnd && yEqualUnd && zEqualUnd) {
        a = false
    } else {
        a = null
    }

    return a
}

/*
07

Invoque a função acima testando as possibilidades abaixo: 

- Com nenhum argumento;
- Com um argumento;
- Com dois argumentos;
- Com três argumentos.
*/
console.log(triArgs())
console.log(triArgs('ss',[],{}))
console.log(triArgs(2, 6))
console.log(triArgs(2, 3, 8))