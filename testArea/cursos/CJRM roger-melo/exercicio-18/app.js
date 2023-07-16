/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;✅
    - Apenas letras maiúsculas e/ou minúsculas;✅
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";✅
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";✅
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.✅
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;✅
*/
document.querySelector('form').addEventListener('click', e => {
  e.preventDefault()
})

const regex = /^([A-Za-z]{1,})$/
const button = document.querySelector('button')

document.getElementById("username").addEventListener("keypress", e => {

  for (let i = 0; i < document.querySelectorAll('p').length; i++) {
    if (document.getElementById("username").value !== '' || document.querySelectorAll('p').length !== 0) {
      document.querySelectorAll('p')[i].remove()
    }
  }

  if (document.getElementById("username").value.length > 4 && regex.test(document.getElementById("username").value)) {
    button.insertAdjacentHTML('afterend', '<p class="username-success-feedback">Username válido =)</p>')
  } else {
    button.insertAdjacentHTML('afterend', '<p class="username-help-feedback">O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas</p>')
  }
})

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

// usar addEvent no button...
button.addEventListener('click', event => {
  for (let i = 0; i < document.querySelectorAll('p').length; i++) {
    if (document.getElementById("username").value !== '' || document.querySelectorAll('p').length !== 0) {
      document.querySelectorAll('p')[i].remove()
    }
  }

  if (document.getElementById("username").value.length >= 6 && regex.test(document.getElementById("username").value)) {
    button.insertAdjacentHTML('afterend', '<p class="submit-success-feedback">Dados enviados =)</p>')
  } else {
    button.insertAdjacentHTML('afterend', '<p class="submit-help-feedback">Por favor, insira um username válido</p>')
  }
})

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/

//metodo some
const numeros = [1, 2, 3, 4, 5, 6, 8, 9]
const some = (array, number) => {
    let isSome = false
    for (let i = 0; i < array.length; i++) {
        if(array[i] === number){
            isSome = true
            return isSome
        }else{
            isSome = false
        }
    }
    return isSome
}
console.log(some(numeros, 8))
