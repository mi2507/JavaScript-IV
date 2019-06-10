const listaDeLivros = JSON.stringify(autores)
const listaDeLivrosJs = JSON.parse(listaDeLivros)


const insertRows = bunda => {
  let table = ''
  bunda.forEach((livro) => {
    table+= `
      <tr>
        <td>${livro.livro}</td>
      </tr>
    `
  })
  return table
}


const ordenarLivro = document.getElementById("ordenar-livro")
ordenarLivro.addEventListener("click", (e) => {
    const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
        if (livroA.livro.toLowerCase() < livroB.livro.toLowerCase()) {
            return -1
        }
        if (livroA.livro.toLowerCase() > livroB.livro.toLowerCase()) {
            return 1
        }
        return 0
    })
    document.getElementById("disponibilidade").innerHTML = insertRows(listaOrdenada)
})

const insertAutor = bunda => {
    let table = ''
    bunda.forEach((livro) => {
      table+= `
        <tr>
          <td>${livro.autor}</td>
        </tr>
      `
    })
    return table
  }
  
  
  const ordenarAutor = document.getElementById("ordenar-autor")
  ordenarAutor.addEventListener("click", (e) => {
      const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
          if (livroA.livro.toLowerCase() < livroB.livro.toLowerCase()) {
              return -1
          }
          if (livroA.livro.toLowerCase() > livroB.livro.toLowerCase()) {
              return 1
          }
          return 0
      })
      document.getElementById("disponibilidade").innerHTML = insertAutor(listaOrdenada)
  })

  const insertGenero = bunda => {
    let table = ''
    bunda.forEach((livro) => {
      table+= `
        <tr>
          <td>${livro.genero}</td>
        </tr>
      `
    })
    return table
  }
  
  
  const ordenarGenero = document.getElementById("ordenar-genero")
  ordenarGenero.addEventListener("click", (e) => {
      const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
          if (livroA.livro.toLowerCase() < livroB.livro.toLowerCase()) {
              return -1
          }
          if (livroA.livro.toLowerCase() > livroB.livro.toLowerCase()) {
              return 1
          }
          return 0
      })
      document.getElementById("disponibilidade").innerHTML = insertGenero(listaOrdenada)
  })
  
