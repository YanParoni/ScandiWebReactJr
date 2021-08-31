import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

class ProductList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { currency } = this.props;
    console.log(this.props.produc.inStock);
    return (
      <ProductsContainer>
        {this.props.produc &&
          this.props.produc.map(({ name, gallery, prices, inStock }, id) => (
            <ItemContainer key={id}>
              <ItemTop>
                <StyledLink to={`/product/${id}`}>
                  <ProductImageContainer>
                    <ProductImage width="150px" src={gallery[0]}></ProductImage>
                  </ProductImageContainer>
                  {!inStock && (
                    <OutOfStockOverlay>
                      <OutOfStockText>out of stock</OutOfStockText>
                    </OutOfStockOverlay>
                  )}{' '}
                 {  inStock && <BtnCart/>
                 }
                </StyledLink>
              </ItemTop>

              <ItemName>{name}</ItemName>
              <ItemPrice>{prices[currency].amount}</ItemPrice>
            </ItemContainer>
          ))}
      </ProductsContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  produc: state.cart.products,
  currency: state.cart.currency,
});

export default connect(mapStateToProps)(ProductList);
