import { useState } from 'react'
import './global.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import OrderPage from './pages/OrderPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Layout></Layout>}>
          <Route index element = {<HomePage></HomePage>}></Route>
          <Route path='product/:id' element = {<DetailPage></DetailPage>}></Route>
          <Route path='cart' element = {<CartPage></CartPage>}></Route>
          <Route path='login' element = {<LoginPage></LoginPage>}></Route>
          <Route path='register' element = {<RegisterPage></RegisterPage>}></Route>
          <Route path='order' element = {<OrderPage></OrderPage>}></Route>
          <Route path='*' element = {<NotFoundPage></NotFoundPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
