import { valueToObjectRepresentation } from '@apollo/client/utilities';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductsContainer,Title } from './list-style';
import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor() {
    super();
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
    const { currentCurr } = this.props;
    return (
      <>
        <Title>{this.props.category.toUpperCase()}</Title>
        <ProductsContainer>
          {this.props.produc &&
            this.props.produc.map((item, id) => (
              <>
                <ProductCard
                  item={item}
                  id={id}
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

export default connect(mapStateToProps)(ProductList);
