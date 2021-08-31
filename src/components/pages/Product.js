import React, { Component } from 'react';
import { connect } from 'react-redux';
import Attributes from '../Attributes';

class Product extends Component {
  constructor() {
    super();
    this.getProduct = this.getProduct.bind(this);
    this.mapData = this.mapData.bind(this);
    this.state = { productSelected: [] };
  }

  componentDidMount() {
    this.getProduct();
  }

  mapData() {
    const { productSelected: data } = this.state;
    return (
      <div>
        <Attributes item={data}/>
      </div>
    );
  }

  async getProduct() {
    const { product } = this.props;
    const { id } = this.props.match.params;
    const data = product.find((item) => item === product[id]);
    this.setState({ productSelected: data });
  }

  render() {
    return <div>{this.state.productSelected && this.mapData()}</div>;
  }
}

const mapStateToProps = (state) => ({
  product: state.cart.products,
});

export default connect(mapStateToProps)(Product);
