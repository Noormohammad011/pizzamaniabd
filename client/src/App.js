import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Addpizza from './pages/Addpizza'
import CartPage from './pages/CartPage'
import Editpizza from './pages/Editpizza'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import OrderPage from './pages/OrderPage'
import Orderslist from './pages/Orderslist'
import Pizzaslist from './pages/Pizzaslist'
import RegisterPage from './pages/RegisterPage'
import Layout from './pages/Layout'
import UserList from './pages/UserList'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='admin' element={<Layout />}>
          <Route index path='userslist' element={<UserList />} />
          <Route path='orderslist' element={<Orderslist />} />
          <Route path='pizzaslist' element={<Pizzaslist />} />
          <Route path='addpizza' element={<Addpizza />} />
          <Route path='editpizza/:pizzaid' element={<Editpizza />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
