const btnFilters = document.querySelectorAll('.btn')
const elementPriceTotal = document.querySelector('#valor_total_livros_disponiveis')

btnFilters.forEach(btn => filterBook(btn));

function filterBook(btn){
  btn.addEventListener('click', (e) => {
    if (e.target.id === "btnOrdenarPorPreco"){
      orderBooks()
    }
    else if (e.target.value === "disponivel") {
      const filtered = Books.filter((book)=> book.quantidade > 0)
      createBooks(filtered)
      showScreenTotal(filtered)
    }
    else {
      const filtered = Books.filter((book)=> book.categoria === e.target.value)
      createBooks(filtered)
    }
  })
}

function orderBooks() {
  const ordened = Books.sort((a, b) => a.preco - b.preco);
  createBooks(ordened)
}

function showScreenTotal(filtered){
   const totalBooks = filtered.reduce((acc, item) => acc + item.preco, 0);
  elementPriceTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalBooks.toFixed(2)}</span></p>
    </div>
  `;
}


