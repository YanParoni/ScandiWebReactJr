import React, { Component } from "react";
import { connect } from "react-redux";
import Attributes from "../attributes/Attributes";
import Navbar from "../../components/header/Navbar";
import getSymbolFromCurrency from "currency-symbol-map";
import {
  AttributeGroup,
  AttributeGroupName,
  AttributesContainer,
  AttributeButton,
  Button,
  ProductName,
  ProductBrand,
  ProductPriceLabel,
  ProductPrice,
  ProductImage,
  ProductContainer,
  DetailsContainer,
  Description
} from "../general-styles/styles";
import { addToCart } from "../../actions";
import Gallery from "../attributes/Gallery";
import DOMPurify from "dompurify";

class Product extends Component {
  constructor(props) {
    super(props);
    this.getProduct = this.getProduct.bind(this);
    this.saveAttribute = this.saveAttribute.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.makeActive = this.makeActive.bind(this);

    this.state = {
      item: {},
      chosenImage: this.props.product.gallery[0],
      savedAttributes: [],
      prices: [],
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
    this.setState({ showImage: this.props.product.gallery[0] });
  }

  handleAddToCart() {
    const { send } = this.props;
    const { savedAttributes, item:prod } = this.state;
    const notNull = this.state.savedAttributes.every((i) => i.item !== null);
    if (notNull) {
      let cu = {};
      cu.savedAttribute = savedAttributes
      cu.item = prod;
      send(cu);
    } else {
      alert("Please select the attributes of your item =)");
    }
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

  makeActive(img) {
    if (this.state.chosenImage !== img) {
      this.setState({ chosenImage: img });
    }
  }
  

  render() {
    const { savedAttributes } = this.state;
    const { currency, product } = this.props;
    return (
      <>
        <Navbar />
        <ProductContainer>
          {product && (
            <>
              <Gallery images={product.gallery} change={this.makeActive} />
              <ProductImage src={this.state.chosenImage} />
              <DetailsContainer>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductName>{product.name}</ProductName>
                <Attributes
                  item={product}
                  Container={AttributesContainer}
                  AttLabel={AttributeGroupName}
                  LabelGroup={AttributeGroup}
                  chosenAttributes={savedAttributes}
                  Button={AttributeButton}
                  handleClick={this.saveAttribute}
                />
                <ProductPriceLabel>PRICE:</ProductPriceLabel>
                <ProductPrice>
                  {product.prices && (
                    <>
                      {" "}
                      {`${getSymbolFromCurrency(
                        product.prices[currency].currency
                      )}${product.prices[currency].amount}`}
                    </>
                  )}
                </ProductPrice>
                <Button
                  onClick={()=> this.handleAddToCart()}
                  inStock={product.inStock}
                >
                  {product.inStock ? "add to cart" : "out of stock"}
                </Button>
                <Description
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(product.description),
                  }}
                ></Description>
              </DetailsContainer>
            </>
          )}
        </ProductContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.cart.currentItem,
  currency: state.cart.currency,
  cart: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({
  send: (state) => dispatch(addToCart(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
