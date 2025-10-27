// src/containers/Header/index.tsx (ou o caminho do seu arquivo)

import * as S from './styles'

// 1. MUDAR A IMPORTAÇÃO DO TIPO
//    Em vez de pegar de 'App', pegue do seu novo arquivo 'types.ts'
//    Ajuste o caminho '../..' se o Header não estiver em 'src/containers/Header'
import { Produto } from '../../types'

// 2. IMPORTAR O HOOK DO REDUX
import { useAppSelector } from '../../store/hooks' // (Ajuste o caminho se necessário)

import cesta from '../../assets/cesta.png'
// 3. AJUSTAR CAMINHO (Provavelmente)
//    O componente 'Produto' está em 'src/components/Produto'
import { paraReal } from '../../components/Produto'

// 4. REMOVER 'itensNoCarrinho' DAS PROPS
type Props = {
  // itensNoCarrinho: Produto[] // << REMOVIDO
  favoritos: Produto[]
}

// 5. REMOVER 'itensNoCarrinho' DOS ARGUMENTOS
const Header = ({ favoritos }: Props) => {
  // 6. USAR O 'useAppSelector' PARA BUSCAR O CARRINHO DO REDUX
  const itensNoCarrinho = useAppSelector((state) => state.cart.items)

  // 7. A SUA LÓGICA ORIGINAL AGORA FUNCIONA COM OS DADOS DO REDUX
  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {/* 8. TUDO AQUI FUNCIONA IGUAL, MAS COM O ESTADO DO REDUX */}
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
