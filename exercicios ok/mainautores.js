const listaDeLivros = JSON.stringify(autores)
const listaDeLivrosJs = JSON.parse(listaDeLivros)

const insertRows = bunda => {
  let table = ''
  bunda.forEach((livro) => {
    table+= `
      <tr>
        <td>${livro.livro}</td>
        <td>${livro.autor}</td>
        <td>${livro.genero}</td>
      </tr>
    `
  })
  return table
}

const ordenarLivro = document.getElementById("ordenar-livro")

ordenarLivro.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
    if(livroA.livro.toLowerCase() < livroB.livro.toLowerCase()){
      return -1
    }
    if(livroA.livro.toLowerCase() > livroB.livro.toLowerCase()){
      return 1
    }
    return 0
  })
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

document.getElementById("table-section").innerHTML = insertRows(listaDeLivrosJs.livros)

// ordenar autor

const ordenarAutor = document.getElementById("ordenar-autor")
ordenarAutor.addEventListener("click", (e) => {
    const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) =>{
        if(livroA.autor.toLowerCase() < livroB.autor.toLowerCase()){
            return -1
        }
        if(livroA.autor.toLowerCase() > livroB.autor.toLowerCase()){
            return 1
        }
        return 0
    })
    
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})
document.getElementById("table-section").innerHTML = insertRows(listaDeAutor.livros)

// ordenar genero
const ordenarGenero = document.getElementById("ordenar-genero")
ordenarGenero.addEventListener("click", (e) => {
    const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) =>{
        if(livroA.genero.toLowerCase() < livroB.genero.toLowerCase()){
            return -1
        }
        if(livroA.genero.toLowerCase() > livroB.genero.toLowerCase()){
            return 1
        }
        return 0
    })
    
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})
document.getElementById("table-section").innerHTML = insertRows(listaDeAutor.livros)

// const createTable = livro =>{
//   let table = ''
//   livro.forEach((item) => {
//     table += `
//       <tr>
//         <td>${item.livro}</td>
//         <td>${item.autor}</td>
//         <td>${item.genero}</td>
//       </tr>
//     `
//   })
//   return table
// }

// const orderByAutor = document.getElementById("autor")

// orderByAutor.addEventListener("click", (e) => {
//   const listaOrdenada = autores.livros.sort((elementoAnterior, proximoElemento) =>  {
//     return elementoAnterior.autor.toUpperCase() < proximoElemento.autor.toUpperCase() ? -1 : 1
//   })
//   document.getElementById("table-section").innerHTML = createTable(listaOrdenada)
// })
s
// document.getElementById("table-section").innerHTML = createTable(autores.livros)