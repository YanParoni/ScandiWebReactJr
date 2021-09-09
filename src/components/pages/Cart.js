import React, { Component } from "react";

import CartDetails from "../cart/CartDetails";


export default class Cart extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <>
       <CartDetails/>
      </>
    );
  }
}

