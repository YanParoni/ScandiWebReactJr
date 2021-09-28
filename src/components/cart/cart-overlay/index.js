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
  }

  closeModal = () => {
    this.setState({ showModal: false });
    document.removeEventListener("click", this.closeModal);
  };

  componentDidMount() {
    document.addEventListener("click", this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeModal);
  }

  handleClick = (e) => {
    if (this.state.showModal) {
      this.closeModal();
      return;
    }
    this.setState({ showModal: true });
    e.stopPropagation();
    document.addEventListener("click", this.closeModal);
  };

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
        <CartIconContainer>
          <CartItemCountShape>
            <CartItemCountContent>{cartItemCount}</CartItemCountContent>
          </CartItemCountShape>

          <CartIcon onClick={this.handleClick} />
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
