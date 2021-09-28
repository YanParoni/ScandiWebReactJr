import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductsContainer, Title } from "./list-style";
import ProductCard from "./ProductCard";
import client from "../../Graphql/apolloClient";
import { sendProducts } from "../../actions";
import { getItemsByCategory } from "../../Graphql/queries";

class ProductList extends Component {
  constructor() {
    super();
    this.state = { hover: false, products: [] };
    this.mouseOn = this.mouseOn.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.mouseOff = this.mouseOff.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.fetchProducts();
    }
  }

  mouseOn() {
    this.setState({ hover: true });
  }

  async fetchProducts() {
    const { sendProducts } = this.props;
    const result = await client.query({
      query: getItemsByCategory,
      variables: {
        title: this.props.category === "All" ? "" : this.props.category,
      },
    });
    this.setState({ products: result.data.category.products });
    sendProducts(result.data.category.products);
  }
  mouseOff() {
    this.setState({ hover: false });
  }

  render() {
    const { currentCurr } = this.props;
    return (
      <>
        <Title>{this.props.category.toUpperCase()}</Title>
        <ProductsContainer>
          {this.state.products &&
            this.state.products.map((item, id) => (
              <>
                <ProductCard
                  key={item.name}
                  item={item}
                  id={item.name}
                  prices={item.prices[currentCurr].currency}
                  amount={item.prices[currentCurr].amount}
                />
              </>
            ))}
        </ProductsContainer>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  produc: state.cart.products,
  currentCurr: state.cart.currency,
  category: state.cart.category,
});

const mapDispatchToProps = (dispatch) => ({
  sendProducts: (state) => dispatch(sendProducts(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
