import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto as ProdutoType } from '../types'
import { RootState } from './index'

interface CartState {
  items: ProdutoType[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // Reducers são as funções que podem alterar o estado
  reducers: {
    // Esta é a função que seu `adicionarAoCarrinho` vai chamar
    addItem: (state, action: PayloadAction<ProdutoType>) => {
      state.items.push(action.payload)
      // Você pode adicionar lógicas mais complexas aqui,
      // como verificar se o item já existe, etc.
    }
    // Adicione outros reducers se precisar (ex: removeItem)
  }
})

// Exporta as "ações" (addItem) para usar nos componentes
export const { addItem } = cartSlice.actions

// Exporta o reducer para a store
export default cartSlice.reducer

// (Opcional) Um "seletor" para ler os dados do carrinho
export const selectCartItems = (state: RootState) => state.cart.items
