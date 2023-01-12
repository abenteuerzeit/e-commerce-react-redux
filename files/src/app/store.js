import { configureStore } from '@reduxjs/toolkit';
import { inventoryReducer } from "../features/inventory/inventorySlice.js";
import { cartReducer } from "../features/cart/cartSlice.js";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice.js";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice.js";


export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer
  },
});