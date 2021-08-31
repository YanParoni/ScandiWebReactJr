import React, { Component } from 'react';
import { getCurrencies } from '../../Graphql/queries';
import client from '../../Graphql/apolloClient';
import { connect } from 'react-redux';
import { sendCurrency } from '../../actions';
import { CurrencySelect } from './styles/style-nav';

const arr = [
  '/imgs/dollar.png',
  '/imgs/libra.png',
  '/imgs/aus-dollar.png',
  '/imgs/iene.png',
  '/imgs/rublo.png',
];

class Currency extends Component {
  constructor() {
    super();
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.state = {
      currencies: [],
      showModal: false,
    };
  }

  handleClick = () => {
    if (!this.state.showModal) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) this.handleClick();
  };

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchCurrency() {
    const result = await client.query({
      query: getCurrencies,
    });
    console.log(result);
    this.setState({ currencies: result.data.currencies });
  }

  render() {
    const { sendCurrency, selected } = this.props;
    return (
      <CurrencySelect
        ref={(node) => {
          this.node = node;
        }}
      >
        <span onClick={this.handleClick}>
          <img width="30px" src={arr[selected]} />
          {this.state.showModal ? <span>V</span> : <span>/\</span>}
        </span>
        {this.state.currencies &&
          this.state.showModal &&
          this.state.currencies.map((item, id) => (
            <span id='options'onClick={() => sendCurrency(id)} key={id}>
            <span> {item}</span>
              <img width="30px" src={arr[id]}/>
            </span>
          ))}
      </CurrencySelect>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  sendCurrency: (state) => dispatch(sendCurrency(state)),
});

const mapStateToProps = (state) => ({
  selected: state.cart.currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
