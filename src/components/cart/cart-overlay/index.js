import React from "react";
import { connect } from "react-redux";
import {
  CartItemCountShape,
  CartItemCountContent,
  CartIconContainer,
  CartLink,
} from "../cart-styles";
import CartModal from "./modal";
import Overlay from "./modal/Overlay";
import { ReactComponent as CartIcon } from "../cart-svg/cart.svg";

class CartOverlay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleLeave = this.handleLeave.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.setModal = this.setModal.bind(this);
    this.timeout = null;
  }

  setModal(bool) {
    this.setState({ showModal: bool });
  }

  handleLeave() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setModal(false), 500);
  }

  handleMouseOver() {
    clearTimeout(this.timeout);
    if (this.state.showModal !== true) {
      this.setModal(true);
    }
  }

  totalItemCount(cart) {
    return Object.values(cart).reduce((total, curr) => {
      total += curr.quantity;
      return total;
    }, 0);
  }

  render() {
    const { cart } = this.props;
    const cartItemCount = this.totalItemCount(cart);
    return (
      <div style={{ position: "relative" }}>
        <CartIconContainer
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleLeave}
        >
          <CartItemCountShape>
            <CartItemCountContent>{cartItemCount}</CartItemCountContent>
          </CartItemCountShape>

          <CartLink to="/cart">
            <CartIcon />
          </CartLink>
          {this.state.showModal && (
            <CartModal
              onMouseLeave={this.handleLeave}
              onMouseOver={this.handleMouseOver}
              setModal={this.setModal}
            />
          )}
        </CartIconContainer>
        {this.state.showModal && <Overlay />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  currency: state.cart.currency,
});

export default connect(mapStateToProps)(CartOverlay);
