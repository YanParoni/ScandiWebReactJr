import React, { Component } from 'react'
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
import getSymbolFromCurrency from 'currency-symbol-map';


export default class ProductCard extends Component {
  constructor(props){
    super(props);
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
    const {item} = this.props;
    const {prices,amount,id} =this.props
    return (
     <>
     <ItemContainer
              onMouseOver={this.mouseOn}
              onMouseLeave={this.mouseOff}
              key={item.id}
            >
              <ItemTop>
                <StyledLink to={`/product/${id}`}>
                  <ProductImageContainer>
                    <ProductImage width="150px" src={item.gallery[0]}></ProductImage>
                  </ProductImageContainer>
                </StyledLink>
                {this.state.hover && item.inStock && (
                  <BtnCart />
                )}
                {!item.inStock && (
                  <OutOfStockOverlay>
                    <OutOfStockText>out of stock</OutOfStockText>
                  </OutOfStockOverlay>
                )}
              </ItemTop>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{`${getSymbolFromCurrency(prices)}`}</ItemPrice>
              <ItemPrice>{amount}</ItemPrice>
            </ItemContainer>
     </>
    )
  }
}
