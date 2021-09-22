import React, { Component } from "react";
import {
  getAllProducts,
  getCategories,
  getItemsByCategory,
} from "../../Graphql/queries";
import client from "../../Graphql/apolloClient";
import { connect } from "react-redux";
import { sendCategory, sendProducts } from "../../actions";
import { Container, Item, BttonCat } from "./styles/style-categories";

class Categories extends Component {
  constructor() {
    super();
    this.fetchQuery = this.fetchQuery.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.state = {
      category: "",
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchQuery();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      this.fetchProducts();
    }
  }
  async fetchProducts() {
    const { sendProducts } = this.props;
    const result = await client.query({
      query: getItemsByCategory,
      variables: {
        title: this.state.category,
      },
      refetchQueries: [
        {
          query: getItemsByCategory,
          variables: {
            title: this.state.category,
          },
        },
      ],
    });
    this.setState({ products: result.data.category.products });
    sendProducts(this.state.products);
  }

  async fetchQuery() {
    const { sendProducts, sendCategory } = this.props;
    const result = await client.query({
      query: getCategories,
    });
    const cu = await client.query({
      query: getAllProducts,
    });
    this.setState({ products: cu.data.category.products });

    this.setState({ categories: [...result.data.categories] });
    sendProducts(this.state.products);
    sendCategory("ALL");
  }
  render() {
    const { sendCategory } = this.props;
    return (
      <Container>
        <BttonCat
          onClick={() => this.setState({ category: "" })}
          type="submit"
          value="all"
        >
          <Item>All</Item>
        </BttonCat>
        {this.state.categories &&
          this.state.categories.map(({ name }, id) => (
            <BttonCat
              key={id}
              type="submit"
              onClick={() => {
                this.setState({ category: name });
                sendCategory(name);
              }}
              value={name}
            >
              <Item>{name}</Item>
            </BttonCat>
          ))}
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendCategory: (state) => dispatch(sendCategory(state)),
  sendProducts: (state) => dispatch(sendProducts(state)),
});

export default connect(null, mapDispatchToProps)(Categories);
