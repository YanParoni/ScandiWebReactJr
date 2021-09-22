import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Attributes from "../../../attributes/Attributes";
import FooterBtns from "./FooterBtns";
import TotalPrice from "./TotalPrice";
import {
  ItemContainer,
  NameAndPrice,
  Actions,
  ImageContainer,
  ItemName,
  ItemNumbers,
  ItemPrice,
  ItemCount,
  ItemImage,
  ModalContainer,
  CountControl,
  AttributesContainer,
  AttributeGroup,
  AttrButton,
  AttributeGroupName,
  ItemNameLink,
  CartName,
} from "./modal.styles";
import {
  removeFromCart,
  addToCart,
  changeAttribute,
} from "../../../../actions";

class CartModal extends PureComponent {
  constructor(props) {
    super(props);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.saveAttribute = this.saveAttribute.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      item: [],
    };
  }

  componentDidMount() {
    this.setState({ item: this.props.cart });
  }

  componentDidUpdate(prevState) {
    if (this.props.cart !== prevState.cart)
      this.setState({ item: this.props.cart });
  }

  saveAttribute(attr) {
    const { attr: attribute, itemID } = attr;
    const { item } = this.state;
    this.props.change(attribute, item[itemID]);
  }

  getTotalPrice(cart) {
    const { selectedCurr } = this.props;
    const totalPrice = cart.reduce((total, curr) => {
      const price = curr.item.prices[selectedCurr].amount * curr.quantity;
      return (total += price);
    }, 0);
    return Math.round(totalPrice * 100) / 100;
  }

  handleRemove({ item }) {
    const { remove } = this.props;
    remove(item);
  }

  handleIncrease({ item }) {
    const { send } = this.props;
    send(item);
  }

  render() {
    const { cart } = this.props;
    const total = this.getTotalPrice(cart);
    return (
      <>
        <ModalContainer>
          <div>
            <CartName>My Bag,</CartName>
            &nbsp;
            <ItemCount>{Object.keys(cart).length} items</ItemCount>
          </div>
          {cart !== undefined &&
            cart.map((item, id) => (
              <ItemContainer key={id}>
                <NameAndPrice>
                  <ItemNameLink
                    to={`/product/${item.item.name}`}
                    onClick={() => this.props.setModal(false)}
                  >
                    <ItemName>{item.item.name} </ItemName>
                    <ItemName>{item.item.prices[0].amount}</ItemName>
                  </ItemNameLink>
                </NameAndPrice>
                <Attributes
                  item={item.item}
                  Container={AttributesContainer}
                  AttLabel={AttributeGroupName}
                  LabelGroup={AttributeGroup}
                  chosenAttributes={item.savedAttribute}
                  Button={AttrButton}
                  handleClick={this.saveAttribute}
                  itemID={id}
                />
                <Actions>
                  <CountControl onClick={() => this.handleIncrease({ item })}>
                    +
                  </CountControl>
                  <CountControl onClick={() => this.handleRemove({ item })}>
                    -
                  </CountControl>
                </Actions>
                <ImageContainer>
                  <ItemImage src={item.item.gallery[0]} />
                </ImageContainer>
              </ItemContainer>
            ))}
          <TotalPrice totalPrice={Math.round(total * 100) / 100} />

          <FooterBtns />
        </ModalContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  selectedCurr: state.cart.currency,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (state) => dispatch(removeFromCart(state)),
  send: (state) => dispatch(addToCart(state)),
  change: (attr, id) => dispatch(changeAttribute(attr, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
