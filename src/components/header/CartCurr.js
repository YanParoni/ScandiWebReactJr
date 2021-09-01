import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Currency from './Currency'
import { CartAndCurrency } from './styles/style-nav'
import { ReactComponent as CartIcon } from "./cart.svg";

export default class CartCurr extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <>
      <CartAndCurrency>
      <Currency/>
      <CartIcon style={{marginLeft:"20px",height:"20px",width:"20px"}}/>
      </CartAndCurrency>
      </>
    )
  }
}
