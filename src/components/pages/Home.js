import React, { Component } from 'react'
import CartNav from '../CartNav'
import Categories from '../Categories'
import Currency from '../Currency'
import ProductList from '../ProductList'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Categories/>
        <Currency/>
        <CartNav/>
        <ProductList/>
      </div>
    )
  }
}
