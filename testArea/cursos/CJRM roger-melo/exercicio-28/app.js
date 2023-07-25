/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/
/* fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => {
      response.json()
      .then(data => console.log(data))
    }) */

/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/
const pessoa = {
  nome: 'Jonatan',
  sobrenome: 'Marques',
  sexo: 'masculino',
  idade: 28,
  altura: 1.76,
  peso: 89.9,
  estaAndando: false,
  metrosCaminhados: 0,
  maisAno() { return ++this.idade }
}

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/
pessoa.maisAno()
pessoa.maisAno()
pessoa.maisAno()
pessoa.maisAno()
pessoa.maisAno()
// console.log(pessoa)

/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/
pessoa.andando = metros => {
  if (pessoa.metrosCaminhados !== 0) {
    pessoa.estaAndando = true
  }
  return pessoa.metrosCaminhados += metros
}
pessoa.andando(1)
// pessoa.andando(2)
// pessoa.andando(3)
// pessoa.andando(7)

// console.log(pessoa.metrosCaminhados)
// console.log(pessoa.estaAndando)

/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/
pessoa.descricao = _ => {

  return `Oi. Eu sou ${pessoa.sexo === 'masculino' ? 'o' : 'a'} ${pessoa.nome}, tenho ${pessoa.idade} ${pessoa.idade === 1 ? 'ano' : 'anos'}, ${pessoa.altura} metros de altura, 
  peso ${pessoa.peso} quilos e, só hoje, eu já caminhei ${pessoa.metrosCaminhados} 
  ${pessoa.metrosCaminhados === 1 ? 'metro' : 'metros'}.`
}
// console.log(pessoa.descricao())

/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/
const teste = item => {
  return !!item
}
// console.log('falsos')
// console.log(teste(null))
// console.log(teste(undefined))
// console.log(teste(0))
// console.log(teste(''))
// console.log(teste(NaN))
// console.log('verdadeiros')
// console.log(teste([]))
// console.log(teste({}))
// console.log(teste(' '))
// console.log(teste(1))

/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/
const livro = nomeLivro => {
  const obj = {
    'Mindset: A Nova Psicologia do Sucesso': {
      quantPaginas: 347,
      autor: 'Carol Dweck',
      editora: 'Objetiva'
    },
    'O Efeito Cumulativo': {
      quantPaginas: 176,
      autor: 'Darren Hardy',
      editora: 'Alta Life'
    },
    'Especialista em pessoas': {
      quantPaginas: 224 ,
      autor: 'Tiago Brunet',
      editora: 'Academia'
    }
  }

  if(Object.keys(obj).includes(nomeLivro)){
    return obj[nomeLivro]
  }

  return obj
}

// console.log(livro('O Efeito Cumulativo'))
// console.log(livro())
