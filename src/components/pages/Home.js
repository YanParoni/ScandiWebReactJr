import React, { Component } from 'react'
import CartCurr from '../header/CartCurr'
import Navbar from '../header/Navbar'
import ProductList from '../list/ProductList'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <CartCurr/>
        <span>cu</span>
        <ProductList/>
      </div>
    )
  }
}
