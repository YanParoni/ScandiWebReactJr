import React, { Component } from "react";
import { connect } from "react-redux";
import BtnCart from "./BtnCart";
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
} from "./list-style";

import getSymbolFromCurrency from "currency-symbol-map";
import { loadCurrentItem } from "../../actions";

class ProductCard extends Component {
  constructor(props) {
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
    const { item } = this.props;
    const { prices, amount, id, sendItem } = this.props;
    return (
      <>
        <ItemContainer
          onMouseOver={this.mouseOn}
          onMouseLeave={this.mouseOff}
          key={item.id}
        >
          <ItemTop>
            <StyledLink to={`/product/${id}`}>
              <button
                style={{
                  background: "transparent",
                  border: "none !important",
                  fontSize: "0",
                }}
                onClick={() => sendItem(item)}
              >
                <ProductImageContainer>
                  <ProductImage
                    width="150px"
                    src={item.gallery[0]}
                  ></ProductImage>
                </ProductImageContainer>
              </button>
            </StyledLink>
            {this.state.hover && item.inStock && <BtnCart />}
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
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  sendItem: (item) => dispatch(loadCurrentItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
