import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../feature/home/components'
import FilterPage from '../filter-page/components'
import CartPage from '../cart'
import LoginPage from '../Login/login'
import ProductDetailPage from '../Product-detail'
import Dashboard from '../outlet/dashboard'
import SearchPage from '../Search-page'
import ContactUs from '../ContactUs'
import PageNotFound from '../404'
import CreateAccount from '../Login/Create-Account'
import User from '../user'


export default function RouterComponent() {
  return (
    <Routes>
    <Route path="/" element={<Dashboard />}>
      <Route index element={<Homepage />} />
      <Route path="catg" element={<FilterPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/user" element={<User/>} />
      <Route path=":productID" element={<ProductDetailPage />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path='/register' element= {<CreateAccount/>}/>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  )
}
