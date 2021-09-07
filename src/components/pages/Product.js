import React, { Component } from "react";
import { connect } from "react-redux";
import Attributes from "../attributes/Attributes";
import Navbar from "../../components/header/Navbar";
import {
  AttributeGroup,
  AttributeGroupName,
  AttributesContainer,
  AttributeButton,
  Button,
  ProductName,
  ProductBrand
} from "../general-styles/styles";
import { addToCart } from "../../actions";

class Product extends Component {
  constructor() {
    super();
    this.getProduct = this.getProduct.bind(this);
    this.saveAttribute = this.saveAttribute.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = {
      item: {},
      savedAttributes: [],
    };
  }

  componentDidMount() {
    this.getProduct();
    this.setState((prevState) => {
      const emptyAttrs = this.props.product.attributes.map((i) => {
        return {
          id: i.id,
          name: i.name,
          type: i.type,
          item: null,
        };
      });
      return { ...prevState, savedAttributes: emptyAttrs };
    });
  }

  handleAddToCart() {
   const {send} = this.props
   const { savedAttributes,item} = this.state
   const notNull = this.state.savedAttributes.every(i => i.item !== null);
   if(notNull){
     let cu ={}
     cu.savedAttribute = savedAttributes
     cu.item = item
send(cu)  }
  }

  saveAttribute({ attr }) {
    const attributes = this.state.savedAttributes.map((i) => {
      if (i.id === attr.id) {
        return {
          ...i,
          item: attr.item,
        };
      }
      return { ...i };
    });
    this.setState({ savedAttributes: attributes });
  }

  async getProduct() {
    const { product } = this.props;
    this.setState({ item: product });
  }

  render() {
    const { item, savedAttributes } = this.state;
    return (
      <>
        <Navbar />
        {this.state && (
          <>
            <ProductBrand>{item.brand}</ProductBrand>
            <ProductName>{item.name}</ProductName>
            <Attributes
              item={item}
              Container={AttributesContainer}
              AttLabel={AttributeGroupName}
              LabelGroup={AttributeGroup}
              chosenAttributes={savedAttributes}
              Button={AttributeButton}
              handleClick={this.saveAttribute}
            />
             <Button onClick={this.handleAddToCart} inStock={item.inStock}>
          {item.inStock ? "add to cart" : "out of stock"}
        </Button>
          </>
        )}
       
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.cart.currentItem,
});

const mapDispatchToProps = (dispatch) => ({
  send:(state)=>dispatch(addToCart(state))
})

export default connect(mapStateToProps,mapDispatchToProps)(Product);
