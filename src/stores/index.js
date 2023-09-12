import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice"; // 이름이 달라도 디폴트를 가져온다
import categoriesSlice from "./categories/categories.slice";
import productsSlice from "./products/products.slice";
import cartSlice from './cart/cart.slice'
import productSlice from "./products/product.slice";
import orderSlice from "./order/order.slice";

export const store = configureStore({
  reducer : {
    orderSlice,
    userSlice,
    categoriesSlice,
    productsSlice,
    productSlice,
    cartSlice,
  }
})

export default store