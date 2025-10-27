// src/App.tsx
import React, { useState } from 'react'

// Importações de componentes (ajuste os caminhos se necessário)
import Header from './components/Header' // Supondo o caminho
import Produtos from './containers/Produtos'

// Importação do Tipo (agora do seu arquivo 'types.ts')
import { Produto as ProdutoType } from './types'

// (Você pode ter um import de estilos globais aqui, como ./styles)
// import GlobalStyle from './styles'

function App() {
  // --- ESTADO REMOVIDO ---
  // O 'useState' de 'produtos' e o 'useEffect' (com o fetch)
  // foram removidos. O RTK Query (apiSlice) agora cuida disso.

  // --- ESTADO MANTIDO ---
  // O estado 'favoritos' ainda está sendo gerenciado aqui,
  // exatamente como o 'Produtos.tsx' esperava.
  const [favoritos, setFavoritos] = useState<ProdutoType[]>([])

  // --- FUNÇÃO REMOVIDA ---
  // A função 'adicionarAoCarrinho' foi removida.
  // O componente 'Produtos.tsx' agora usa o 'useDispatch' do Redux.

  // --- FUNÇÃO MANTIDA ---
  // A função 'favoritar' continua aqui, pois 'Produtos.tsx' ainda a recebe.
  const favoritar = (produto: ProdutoType) => {
    const produtoJaFavoritado = favoritos.find((f) => f.id === produto.id)

    if (produtoJaFavoritado) {
      // Se já está favoritado, remove da lista
      setFavoritos(favoritos.filter((f) => f.id !== produto.id))
    } else {
      // Se não está, adiciona na lista
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    // ...
    <>
      {/* <GlobalStyle /> */}

      {/* AQUI ESTÁ A PRIMEIRA PARTE DA CORREÇÃO:
        Passe a prop 'favoritos' para o Header.
      */}
      <Header favoritos={favoritos} />

      <div className="container">
        {/* (Aqui está o código do Produtos que já corrigimos) */}
        <Produtos favoritos={favoritos} favoritar={favoritar} />
      </div>
    </>
  )
}

export default App
