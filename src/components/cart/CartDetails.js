import React, { Component } from "react";
import Navbar from "../header/Navbar";
import { connect } from "react-redux";
import Attributes from "../attributes/Attributes.js";
import getSymbolFromCurrency from "currency-symbol-map";

import {
  AttributeGroup,
  AttributeGroupName,
  AttributesContainer,
  AttributeButton,
  AddToCartButton,
  ProductBrand,
  ProductName,
  ProductPrice,
} from "../general-styles/styles";
import {
  CartItemActionsContainer,
  CartItemContainer,
  CartItemName,
  ItemNameLink,
  CartCountButton,
  Title,
  CartContainer,
  CartItemDetailsContainer,
} from "./cart-styles";
import CartGallery from "./CartGallery";

class CartDetails extends Component {
  constructor() {
    super();
    this.state = {
      item: [],
    };
  }

  componentDidMount() {
    this.setState({ item: this.props.cart });
  }

  render() {
    const { currency } = this.props;
    return (
      <>
        <Navbar />
        <CartContainer>
        <Title>CART</Title>
        {this.state.item &&
          this.state.item.map((item) => (
            <>
              <CartItemContainer>
              <CartItemDetailsContainer>
                <ItemNameLink to={`/product/${item.item.id}`}>
                  <CartItemName>{item.item.name}</CartItemName>
                </ItemNameLink>
                <ProductPrice>{`${getSymbolFromCurrency(
                  item.item.prices[currency].currency
                )} ${item.item.prices[currency].amount}`}</ProductPrice>
                <Attributes
                  item={item.item}
                  Container={AttributesContainer}
                  AttLabel={AttributeGroupName}
                  LabelGroup={AttributeGroup}
                  chosenAttributes={item.savedAttribute}
                  Button={AttributeButton}
                />
                </CartItemDetailsContainer>
              <CartItemActionsContainer>
                <CartCountButton>+</CartCountButton>

                <CartCountButton>-</CartCountButton>
                </CartItemActionsContainer>

                <CartGallery images={item.item.gallery} />
              </CartItemContainer>

            </>
          ))}
          </CartContainer>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  currency: state.cart.currency,
});

export default connect(mapStateToProps)(CartDetails);
