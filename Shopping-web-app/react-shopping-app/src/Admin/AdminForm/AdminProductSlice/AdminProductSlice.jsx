// import { createSlice } from '@reduxjs/toolkit';

// const loadProductsFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem('products');
//     if (serializedState === null) return [];
//     return JSON.parse(serializedState);
//   } catch (err) {
//     console.error('Could not load products from localStorage', err);
//     return [];
//   }
// };

// const saveProductsToLocalStorage = (products) => {
//   try {
//     const serializedState = JSON.stringify(products);
//     localStorage.setItem('products', serializedState);
//   } catch (err) {
//     console.error('Could not save products to localStorage', err);
//   }
// };

// const initialState = {
//   products: loadProductsFromLocalStorage(),
// };

// const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     addProduct(state, action) {
//       const newProduct = action.payload; 
//       state.products.push(newProduct);
//       saveProductsToLocalStorage(state.products);
//       console.log('Product added:', newProduct);
//     },
//     updateProduct(state, action) {
//       const { _id, updatedProduct } = action.payload;
//       const index = state.products.findIndex((product) => product._id === _id);
//       if (index !== -1) {
//         state.products[index] = { ...state.products[index], ...updatedProduct };
//         saveProductsToLocalStorage(state.products);
//         console.log('Product updated:', state.products[index]);
//       }
//     },
//     deleteProduct(state, action) {
//       const productId = action.payload;
//       state.products = state.products.filter((product) => product._id !== productId);
//       saveProductsToLocalStorage(state.products);
//       console.log('Product deleted:', productId);
//     },
//   },
// });

// export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
// export default productSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

// Function to load products from localStorage
const loadProductsFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('products');
    if (!serializedState) return [];
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading products from localStorage:', err);
    return [];
  }
};

// Function to save products to localStorage
const saveProductsToLocalStorage = (products) => {
  try {
    const serializedState = JSON.stringify(products);
    localStorage.setItem('products', serializedState);
  } catch (err) {
    console.error('Error saving products to localStorage:', err);
  }
};

const initialState = {
  products: loadProductsFromLocalStorage(),
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
      saveProductsToLocalStorage(state.products); // Save products after adding
      console.log('Product added:', action.payload);
    },
    updateProduct(state, action) {
      const { _id, updatedProduct } = action.payload;
      const index = state.products.findIndex((product) => product._id === _id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedProduct };
        saveProductsToLocalStorage(state.products); // Save products after update
        console.log('Product updated:', state.products[index]);
      }
    },
    deleteProduct(state, action) {
      const productId = action.payload;
      state.products = state.products.filter((product) => product._id !== productId);
      saveProductsToLocalStorage(state.products); // Save products after deletion
      console.log('Product deleted:', productId);
    },
  },
});

// Export actions and reducer
export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
