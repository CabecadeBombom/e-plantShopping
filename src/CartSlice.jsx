import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Inicializa o array de itens como vazio
  },
  reducers: {
    // Adiciona um item ao carrinho ou incrementa a quantidade se o item já estiver no carrinho
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove um item do carrinho com base no nome
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Atualiza a quantidade de um item no carrinho
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Exporta as ações para que possam ser utilizadas em outros componentes
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporta o reducer como default, para ser usado no store
export default CartSlice.reducer;
