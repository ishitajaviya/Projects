// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : {},  
//   subtotals: {},  
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const { userId, product } = action.payload;
//       if (!state.carts[userId]) {
//         state.carts[userId] = [];
//       }

//       const existingProduct = state.carts[userId].find(p => p._id === product._id);
//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         state.carts[userId].push({ ...product, quantity: 1 });
//       }

//       localStorage.setItem('carts', JSON.stringify(state.carts));  
//     },
    
//     incrementQuantity(state, action) {
//       const { userId, productId } = action.payload;
//       const product = state.carts[userId]?.find(p => p._id === productId);
//       if (product) {
//         product.quantity += 1;
//         localStorage.setItem('carts', JSON.stringify(state.carts));  
//       }
//     },
    
//     decrementQuantity(state, action) {
//       const { userId, productId } = action.payload;
//       const product = state.carts[userId]?.find(p => p._id === productId);
//       if (product && product.quantity > 1) {
//         product.quantity -= 1;
//       } else if (product && product.quantity === 1) {
//         state.carts[userId] = state.carts[userId].filter(p => p._id !== productId); 
//       }

//       localStorage.setItem('carts', JSON.stringify(state.carts));  
//     },
    
//     removeFromCart(state, action) {
//       const { userId, productId } = action.payload;
//       state.carts[userId] = state.carts[userId].filter(product => product._id !== productId);
//       localStorage.setItem('carts', JSON.stringify(state.carts));  // Save updated cart
//     },
    
//     clearCart(state, action) {
//       const userId = action.payload;
//       state.carts[userId] = [];   
//     },
    
//     calculateSubtotal(state, action) {
//       const userId = action.payload;
//       state.subtotals[userId] = state.carts[userId]?.reduce((acc, product) => {
//         return acc + product.price * product.quantity;
//       }, 0) || 0;
//     },
    
//     restoreCartFromStorage(state, action) {
//       const userId = action.payload;
//       const storedCarts = JSON.parse(localStorage.getItem('carts')) || {};
//       if (storedCarts[userId]) {
//         state.carts[userId] = storedCarts[userId];  
//       }
//     },
    
//     isProductInCart(state, action) {
//       const { userId, productId } = action.payload;
//       return state.carts[userId]?.some(product => product._id === productId);
//     }
//   },
// });

// export const {
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart,
//   clearCart,
//   calculateSubtotal,
//   restoreCartFromStorage,
//   isProductInCart  
// } = cartSlice.actions;

// export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : {},  
//   subtotals: {},  
// };

// const updateLocalStorage = (carts) => {
//   localStorage.setItem('carts', JSON.stringify(carts));  // Centralized localStorage update
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const { userId, product } = action.payload;
//       if (!state.carts[userId]) {
//         state.carts[userId] = [];
//       }

//       const existingProduct = state.carts[userId].find(p => p._id === product._id);
//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         state.carts[userId].push({ ...product, quantity: 1 });
//       }

//       updateLocalStorage(state.carts);  // Update localStorage after every change
//       state.subtotals[userId] = state.carts[userId].reduce((acc, product) => acc + product.price * product.quantity, 0);
//     },
    
//     incrementQuantity(state, action) {
//       const { userId, productId } = action.payload;
//       const product = state.carts[userId]?.find(p => p._id === productId);
//       if (product) {
//         product.quantity += 1;
//       }

//       updateLocalStorage(state.carts);
//       state.subtotals[userId] = state.carts[userId].reduce((acc, product) => acc + product.price * product.quantity, 0);
//     },
    
//     decrementQuantity(state, action) {
//       const { userId, productId } = action.payload;
//       const product = state.carts[userId]?.find(p => p._id === productId);
//       if (product && product.quantity > 1) {
//         product.quantity -= 1;
//       } else if (product && product.quantity === 1) {
//         state.carts[userId] = state.carts[userId].filter(p => p._id !== productId); 
//       }

//       updateLocalStorage(state.carts);
//       state.subtotals[userId] = state.carts[userId].reduce((acc, product) => acc + product.price * product.quantity, 0);
//     },
    
//     removeFromCart(state, action) {
//       const { userId, productId } = action.payload;
//       state.carts[userId] = state.carts[userId].filter(product => product._id !== productId);

//       updateLocalStorage(state.carts);
//       state.subtotals[userId] = state.carts[userId].reduce((acc, product) => acc + product.price * product.quantity, 0);
//     },
    
//     clearCart(state, action) {
//       const userId = action.payload;
//       state.carts[userId] = [];
//       state.subtotals[userId] = 0;

//       updateLocalStorage(state.carts);  // Clear from localStorage as well
//     },
    
//     calculateSubtotal(state, action) {
//       const userId = action.payload;
//       state.subtotals[userId] = state.carts[userId]?.reduce((acc, product) => {
//         return acc + product.price * product.quantity;
//       }, 0) || 0;
//     },
    
//     restoreCartFromStorage(state, action) {
//       const userId = action.payload;
//       const storedCarts = JSON.parse(localStorage.getItem('carts')) || {};
//       if (storedCarts[userId]) {
//         state.carts[userId] = storedCarts[userId];  
//       }
//     },
//   },
// });

// // Remove `isProductInCart` from the reducers and make it a selector:
// export const isProductInCart = (state, userId, productId) => {
//   return state.cart.carts[userId]?.some(product => product._id === productId);
// };

// export const {
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart,
//   clearCart,
//   calculateSubtotal,
//   restoreCartFromStorage,
// } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : {},  
  subtotals: {},  
};

const updateLocalStorage = (carts) => {
  localStorage.setItem('carts', JSON.stringify(carts));  // Centralized localStorage update
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { userId, product } = action.payload;
      if (!state.carts[userId]) {
        state.carts[userId] = [];
      }

      const existingProduct = state.carts[userId].find(p => p._id === product._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        // Use newPrice instead of price for cart
        state.carts[userId].push({ ...product, quantity: 1 });
      }

      updateLocalStorage(state.carts);  
      state.subtotals[userId] = state.carts[userId].reduce((acc, product) => acc + product.newPrice * product.quantity, 0);
    },
    
    incrementQuantity(state, action) {
      const { userId, productId } = action.payload;
      const product = state.carts[userId]?.find(p => p._id === productId);
      if (product) {
        product.quantity += 1;
      }

      updateLocalStorage(state.carts);
      state.subtotals[userId] = state.carts[userId].reduce((acc, product) => acc + product.newPrice * product.quantity, 0);
    },
    
    decrementQuantity(state, action) {
      const { userId, productId } = action.payload;
      const product = state.carts[userId]?.find(p => p._id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else if (product && product.quantity === 1) {
        state.carts[userId] = state.carts[userId].filter(p => p._id !== productId); 
      }

      updateLocalStorage(state.carts);
      state.subtotals[userId] = state.carts[userId].reduce((acc, product) => acc + product.newPrice * product.quantity, 0);
    },
    
    removeFromCart(state, action) {
      const { userId, productId } = action.payload;
      state.carts[userId] = state.carts[userId].filter(product => product._id !== productId);

      updateLocalStorage(state.carts);
      state.subtotals[userId] = state.carts[userId].reduce((acc, product) => acc + product.newPrice * product.quantity, 0);
    },
    
    clearCart(state, action) {
      const userId = action.payload;
      state.carts[userId] = [];
      state.subtotals[userId] = 0;

      updateLocalStorage(state.carts);  // Clear from localStorage as well
    },
    
    calculateSubtotal(state, action) {
      const userId = action.payload;
      state.subtotals[userId] = state.carts[userId]?.reduce((acc, product) => {
        return acc + product.newPrice * product.quantity;
      }, 0) || 0;
    },
    
    restoreCartFromStorage(state, action) {
      const userId = action.payload;
      const storedCarts = JSON.parse(localStorage.getItem('carts')) || {};
      if (storedCarts[userId]) {
        state.carts[userId] = storedCarts[userId];  
      }
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
  calculateSubtotal,
  restoreCartFromStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
