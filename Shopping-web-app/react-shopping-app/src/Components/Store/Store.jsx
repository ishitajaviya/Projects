import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Slices/Userslice'
import cartReducer from '../Slices/CartSlice';
import wishlistReducer from '../Slices/WishListSlice'
import productReducer from '../../Admin/AdminForm/AdminProductSlice/AdminProductSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    products:productReducer,
  },
});
