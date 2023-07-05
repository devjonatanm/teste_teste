// pag 44
// testando uma função tradicional no JS
// alterando seus valores com a notação ponto

function Book(title, pages, isbn) {
 this.title = title;
 this.pages = pages;
 this.isbn = isbn;
}

var book = new Book('title', 'pag', 'isbn');

console.log(book.title); // exibe o título do livro
book.title = 'new title'; // atualiza o valor do título do livro
console.log(book.title); // exibe o valor atualizado
