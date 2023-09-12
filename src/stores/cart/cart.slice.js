import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postOrder = createAsyncThunk(
  'cart/postOrder',
  async (order,thunkAPI) => {
    try{ 
      await axios.post('https://64fea8fff8b9eeca9e28e6fb.mockapi.io/orders', order) //order 데이터 저장
      thunkAPI.dispatch(sendOrder())
    }catch(error){
      return thunkAPI.rejectWithValue('Error sending order');
    }
  }
)

const initialState = { //초기 state
  products : localStorage.getItem('cartProducts')?
    JSON.parse(localStorage.getItem('cartProducts')) : [], //로컬스토리지에 있으면 가져오기
  totalPrice : 0,
  userId : localStorage.getItem('userId')?
  JSON.parse(localStorage.getItem('userId')) : '',
}

export const cartSlice =  createSlice({ //action들 생성
  name : 'cart',
  initialState,
  reducers : {
    setUserId: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem('userId', JSON.stringify(state.userId));
    },
    removeUserId: (state, action) => {
      state.userId = "";
      localStorage.setItem('userId', JSON.stringify(state.userId));
    },
    addToCart: (state, action) => {
      state.products.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price
      })
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
      },
      deleteFromCart: (state, action) => {
        state.products = state.products.filter((item) => item.id !== action.payload) //payload와 다른 것만 반환
        localStorage.setItem('cartProducts', JSON.stringify(state.products));
      },      
      incrementProduct : (state,action) => {
        state.products = state.products.map((item) => item.id === action.payload ? { 
          ...item, 
          quantity: item.quantity + 1,
          total: item.price * (item.quantity + 1)
        } : item )
        localStorage.setItem('cartProducts', JSON.stringify(state.products));
      },
      decrementProduct : (state,action) => {
        state.products = state.products.map((item) => item.id === action.payload ? { 
          ...item, 
          quantity: item.quantity - 1,
          total: item.price * (item.quantity - 1)
        } : item )
        localStorage.setItem('cartProducts', JSON.stringify(state.products));
      },
      getTotalPrice : (state) => {
        state.totalPrice = state.products.reduce((acc,item) => (acc+=item.total), 0)//0원부터 시작해서.. 
      },
      sendOrder : (state) => { //주문보내면 카트랑 로컬스트리지 내 products 비우기
        state.products = [];
        localStorage.setItem('cartProducts', JSON.stringify(state.products));
      }
  }
})
export const { //내보내기
  addToCart,
  deleteFromCart,
  incrementProduct,
  decrementProduct,
  getTotalPrice,
  setUserId,
  removeUserId,
  sendOrder,
} = cartSlice.actions;

export default cartSlice.reducer;