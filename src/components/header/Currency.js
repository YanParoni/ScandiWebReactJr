import React, { Component } from 'react';
import { getCurrencies } from '../../Graphql/queries';
import client from '../../Graphql/apolloClient';
import { connect } from 'react-redux';
import { sendCurrency } from '../../actions';
import { CurrencySelect } from './styles/style-nav';
import { CurrencyItem} from './styles/style-currency';

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
    this.toggleModal =  this.toggleModal.bind(this);
  }

  
  
  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) this.setState({ showOptions: false });

  };

  componentDidMount() {
    this.fetchCurrency();
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
}

   toggleModal() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));   }

  async fetchCurrency() {
    const result = await client.query({
      query: getCurrencies,
    });
    console.log(result);
    this.setState({ currencies: result.data.currencies });
    document.addEventListener("click", this.handleOutsideClick);
  }

  render() {
    const { sendCurrency, selected } = this.props;
    return (
      <CurrencySelect
        ref={(node) => {
          this.node = node;
        }}
        onClick={this.toggleModal}
        active={this.state.showOptions}
      >
          <span  >
          <img width="30px" src={arr[selected]}/>
          </span>
          <div id='options'>
          {this.state.showModal ? <span>V</span> : <span>/\</span>}
        {
          this.state.showModal &&
          this.state.currencies.map((item, id) => (
            <span onClick={() => sendCurrency(id)} key={id}>
              <img src={arr[id]}/>
              {item}
            </span>
          ))}
          </div>
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
