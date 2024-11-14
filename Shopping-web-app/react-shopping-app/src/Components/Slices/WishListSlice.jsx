// import { createSlice } from '@reduxjs/toolkit';

// const loadWishlistFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem('wishlist');
//     if (serializedState === null) return []; 
//     return JSON.parse(serializedState);
//   } catch (err) {
//     console.error('Could not load wishlist from localStorage', err);
//     return [];
//   }
// };
// const saveWishlistToLocalStorage = (wishlist) => {
//   try {
//     const serializedState = JSON.stringify(wishlist);
//     localStorage.setItem('wishlist', serializedState);
//   } catch (err) {
//     console.error('Could not save wishlist to localStorage', err);
//   }
// };

// const initialState = {
//   items: loadWishlistFromLocalStorage(), 
// };

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist(state, action) {
//       const { product } = action.payload;
//       const existingProduct = state.items.find(item => item._id == product._id);
//       if (!existingProduct) {
//         state.items.push({ ...product });  
//         saveWishlistToLocalStorage(state.items);  
//         console.log('Product added to wishlist');
//       } else {
//         console.log('Product already in wishlist');
//       }
//     },
//     removeFromWishlist(state, action) {
//       const productId = action.payload;
//       state.items = state.items.filter(item => item._id !== productId);  
//       saveWishlistToLocalStorage(state.items);
//     },
//   },
// });

// export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

// Function to load wishlist from localStorage, now user-specific
const loadWishlistFromLocalStorage = (userId) => {
  try {
    const serializedState = localStorage.getItem(`wishlist_${userId}`);
    if (serializedState === null) return [];
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load wishlist from localStorage', err);
    return [];
  }
};

//n to save wishlist to localStorage, now user-specific
const saveWishlistToLocalStorage = (userId, wishlist) => {
  try {
    const serializedState = JSON.stringify(wishlist);
    localStorage.setItem(`wishlist_${userId}`, serializedState);
  } catch (err) {
    console.error('Could not save wishlist to localStorage', err);
  }
};

const initialState = {
  items: [], // Start with an empty array; the actual data will be loaded when the user is logged in
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    loadUserWishlist(state, action) {
      const userId = action.payload;
      state.items = loadWishlistFromLocalStorage(userId);
    },
    addToWishlist(state, action) {
      const { userId, product } = action.payload;
      const existingProduct = state.items.find(item => item._id === product._id);
      if (!existingProduct) {
        state.items.push({ ...product });
        saveWishlistToLocalStorage(userId, state.items);
      } else {
        console.log('Product already in wishlist');
      }
    },
    removeFromWishlist(state, action) {
      const { userId, productId } = action.payload;
      state.items = state.items.filter(item => item._id !== productId);
      saveWishlistToLocalStorage(userId, state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist, loadUserWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
