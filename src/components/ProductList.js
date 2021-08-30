import React, { Component } from 'react'
import { getAllProducts } from '../Graphql/queries';
import client from '../Graphql/apolloClient';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class ProductList extends Component {
  constructor(){
    super()
    this.state ={
    }
  }

  render() {
    const { currency} = this.props
    return (
      <div>
        {this.props.produc &&
          this.props.produc.map(({ name, gallery, prices }, id) => (
              <div key={id}>
              <Link to={`/product/${id}`}>
                <div>{name}</div>
                <img width='150px' src={gallery[0]} />
                <div>{prices[currency].amount}</div>
                </Link>
              </div>
            ))}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  produc: state.cart.products,
  currency: state.cart.currency,
});

export default connect(mapStateToProps)(ProductList)