// src/containers/Produtos/Produtos.tsx

// 1. IMPORTAR OS NOVOS HOOKS E AÇÕES DO REDUX
import { useAppDispatch } from '../store/hooks'
import { addItem } from '../store/cartSlice'
import { useGetProductsQuery } from '../store/apiSlice'

// (Seus outros imports)
import { Produto as ProdutoType } from '../types' // Ajuste o caminho se precisar (ex: ../../types)
import Produto from '../components/Produto'
import * as S from './styles'

// 2. TIPO DE PROPS ATUALIZADO
//    Removemos 'produtos' e 'adicionarAoCarrinho'
//    (Vamos manter 'favoritos' por enquanto, como estava)
type Props = {
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
}

// 3. COMPONENTE ATUALIZADO
//    Removemos 'produtos' e 'adicionarAoCarrinho' das props recebidas
const ProdutosComponent = ({ favoritos, favoritar }: Props) => {
  // 4. USAR OS HOOKS DO REDUX
  // A. Busca os produtos usando RTK Query (substitui a prop 'produtos')
  const { data: produtos, isLoading } = useGetProductsQuery()

  // B. Pega a função 'dispatch' (substitui a prop 'adicionarAoCarrinho')
  const dispatch = useAppDispatch()

  // 5. FUNÇÃO LOCAL PARA ADICIONAR AO CARRINHO
  //    Esta função vai "disparar" a ação do Redux
  const handleAdicionarAoCarrinho = (produto: ProdutoType) => {
    dispatch(addItem(produto))
  }

  // (Sua função de favoritos continua a mesma)
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  // 6. ADICIONA UM ESTADO DE CARREGAMENTO
  if (isLoading) {
    return (
      <S.Produtos>
        <h2>Carregando produtos...</h2>
      </S.Produtos>
    )
  }

  return (
    <>
      <S.Produtos>
        {/* 7. USA OS 'produtos' VINDOS DO REDUX 
            (O 'produtos &&' é importante, pois 'data' pode ser undefined) */}
        {produtos &&
          produtos.map((produto) => (
            <Produto
              estaNosFavoritos={produtoEstaNosFavoritos(produto)}
              key={produto.id}
              produto={produto}
              favoritar={favoritar}
              // 8. PASSA A NOVA FUNÇÃO LOCAL
              aoComprar={handleAdicionarAoCarrinho}
            />
          ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
