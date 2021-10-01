import React, { Component } from "react";
import { StyledLink } from "../list/list-style";
import {
  getAllProducts,
  getCategories,
} from "../../Graphql/queries";
import client from "../../Graphql/apolloClient";
import { connect } from "react-redux";
import { sendCategory, sendProducts } from "../../actions";
import { Container, Item, BttonCat } from "./styles/style-categories";

class Categories extends Component {
  constructor() {
    super();
    this.fetchQuery = this.fetchQuery.bind(this);
    this.getSome = this.getSome.bind(this);
    this.state = {
      category: "",
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchQuery();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category) {
      this.fetchQuery();
    }
  }

  getSome(event) {
    const {  sendCategory } = this.props;
    console.log(event.target.textContent);
    this.setState({ category: event.target.textContent });
    sendCategory(event.target.textContent);

    this.fetchQuery();
  }

  async fetchQuery() {
    const result = await client.query({
      query: getCategories,
    });
   
    this.setState({ categories: [...result.data.categories] });
  }
  render() {
    return (
      <Container>
        <StyledLink to={"/category/all"}>
          <BttonCat onClick={this.getSome} type="submit" value="all">
            <Item>All</Item>
          </BttonCat>
        </StyledLink>
        {this.state.categories &&
          this.state.categories.map(({ name }, id) => (
            <StyledLink to={`/category/${name}`}>
              <BttonCat
                key={id}
                type="submit"
                onClick={this.getSome}
                value={name}
              >
                <Item>{name}</Item>
              </BttonCat>
            </StyledLink>
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
