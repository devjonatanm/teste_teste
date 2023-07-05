// pag 62
// trabalhando com getters e setters
// diferenças entre get, set e underscore
// As classes JavaScript contam com dois métodos especiais: um com o prefixo get que tem a função de retornar um valor, e outro precedido pela palavra set que serve para atribuir um valor.
// As próprias palavras em inglês estabelecem a função dos métodos: "set" significa "colocar, estabelecer" (um valor ao campo); "get" significa "obter" (o valor do campo).

class Person {
  constructor(name) {
    this._name = name; // {1}
  }
  get name() { // {2}
    return this._name;
  }
  set name(value) { // {3}
    this._name = value;
  }
}
let lotrChar = new Person('Frodo');
console.log(lotrChar.name); // {4}

lotrChar.name = 'Gandalf'; // {5}
console.log(lotrChar.name);

lotrChar._name = 'Sam'; // {6}
console.log(lotrChar.name);
