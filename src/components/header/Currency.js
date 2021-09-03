import React, { Component } from 'react';
import { getCurrencies } from '../../Graphql/queries';
import client from '../../Graphql/apolloClient';
import { connect } from 'react-redux';
import { sendCurrency } from '../../actions';
import { CurrencySelect,CurrencyIn } from './styles/style-nav';
import getSymbolFromCurrency from 'currency-symbol-map';
import { ReactComponent as DownArrow } from './svg/down.svg';
import { ReactComponent as UpArrow } from './svg/up.svg';


class Currency extends Component {
  constructor() {
    super();
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.state = {
      currencies: [],
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleOutsideClick = (e) => {
    if (this.node.contains(e.target)) {
      this.setState({ showOptions: false });
    }
  };

  componentDidMount() {
    this.fetchCurrency();
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  toggleModal() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  }

  async fetchCurrency() {
    const result = await client.query({
      query: getCurrencies,
    });
    console.log(result);
    document.addEventListener('click', this.handleOutsideClick);
    this.setState({ currencies: result.data.currencies });
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
       <span> {`${getSymbolFromCurrency(this.state.currencies[selected])}`} 
        {this.state.showModal ? <DownArrow/> : <UpArrow/>}
        </span>
        <div id="options">
          {this.state.showModal &&
            this.state.currencies.map((item, id) => (
              <span onClick={() => sendCurrency(id)} key={id}>
                {`${getSymbolFromCurrency(item)} ${item}`}
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
