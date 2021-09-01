import React, { Component } from 'react';
import { connect } from 'react-redux';
import BtnCart from './BtnCart';
import {
  ProductImage,
  ProductsContainer,
  ProductImageContainer,
  ItemName,
  ItemPrice,
  StyledLink,
  ItemContainer,
  OutOfStockOverlay,
  OutOfStockText,
  ItemTop,
} from './list-style';
import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor() {
    super();
    this.state = { hover: false };
    this.mouseOn = this.mouseOn.bind(this);
    this.mouseOff = this.mouseOff.bind(this);
  }

  mouseOn() {
    this.setState({ hover: true });
  }

  mouseOff() {
    this.setState({ hover: false });
  }

  render() {
    const {currentCurr} = this.props;
 return (
      <ProductsContainer>
        {this.props.produc &&
          this.props.produc.map((item, id) => (
            <>
            <ProductCard item={item} prices={item.prices[currentCurr].currency} amount={item.prices[currentCurr].amount}  />
            {console.log(this.props.currentCurr)}
            {console.log(item.prices)}

          </>
          ))}
      </ProductsContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  produc: state.cart.products,
  currentCurr: state.cart.currency,
});

export default connect(mapStateToProps)(ProductList);
