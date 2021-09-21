import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Currency from './Currency'
import { CartAndCurrency } from './styles/style-nav'
import CartModal from '../cart/cart-overlay';
export default class CartCurr extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <>
      <CartAndCurrency>
      <Currency/>
      <CartModal/>
      </CartAndCurrency>
      </>
    )
  }
}
