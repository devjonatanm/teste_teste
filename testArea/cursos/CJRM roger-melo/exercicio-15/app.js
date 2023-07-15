/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/
const li = document.querySelectorAll('li')
for (let i = 0; i < document.querySelectorAll('li').length; i++) {
  document.querySelectorAll('li')[i].classList.add('video')
}

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/
console.log(document.querySelector('h2').parentElement)

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/
console.log(document.querySelector('h1').nextElementSibling)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/
console.log(document.querySelector('ul').previousElementSibling)


/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

for (let i = 0; i < document.querySelectorAll('li').length; i++) {
  document.querySelectorAll('li')[i].addEventListener('click', e => {
    return console.log(document.querySelectorAll('li')[i])
  })
}


/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

const button = document.querySelector('button')
let contador = 0
button.addEventListener('click', e => {
  const ul = document.querySelector('ul')

  if (videos[contador] !== undefined) {
    const li_add = document.createElement('li') // criando elemento
    li_add.innerHTML = `<li class="video">${videos[contador].name}</li>`
    ul.appendChild(li_add)
    contador++;
  }
})

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const h1 = document.querySelector('h1')
const body = document.querySelector('body')
h1.addEventListener('click', event => {
  return body.innerHTML = '' // REMOVE TODOS ELEMENTOS FILHOS DE BODY
})