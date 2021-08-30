import React, { Component } from 'react'
import { connect } from 'react-redux';

class Product extends Component {
  constructor(){
    super()
    this.getProduct = this.getProduct.bind(this);

  }

  componentDidMount(){
this.getProduct()
  }

  async getProduct(){
  const { product } = this.props
  const { id } = this.props.match.params
console.log(product[id])
  const result = product.find((item)=>(
    item === product[id] 
    ))
  
  }
  render() {
    
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.cart.products,
});

export default connect(mapStateToProps)(Product)