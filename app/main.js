const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let = Books = new Array()
const descount = 0.3
const elementBook = document.querySelector('#livros')

async function getBooks(){
  const data = await fetch(endpoint)
  Books = await data.json()

  let = booksDiscout = addDiscount(Books)

  createBooks(booksDiscout)
  console.log(Books)

}
getBooks()

function createBooks(Books){
  elementBook.innerHTML = ""
  elementPriceTotal.innerHTML = ""
  Books.forEach((item) => {
    let classeImage = item.quantidade > 0 ? "livro__imagens" : "livros__imsgens indisponivel"
    return elementBook.innerHTML += `
      <div class="livro">
        <img class="${classeImage}" src="${item.imagem}" alt="${item.alt}" />
        <h2 class="livro__titulo">${item.titulo}</h2>
        <p class="livro__descricao">${item.autor}</p>
        <p class="livro__preco" id="preco">R$: ${item.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${item.categoria}</span>
        </div>
      </div>
    `;
  });
}

function addDiscount(Books){
  return Books.map(function(book){
    return {
      ...book,
      preco: book.preco - (book.preco * descount)
    }
  })
}
