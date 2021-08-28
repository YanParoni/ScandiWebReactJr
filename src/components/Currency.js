import React, { Component } from 'react';
import { getCurrencies } from '../Graphql/queries';
import client from '../Graphql/apolloClient';
import {connect} from 'react-redux';
import { sendCurrency } from '../actions';

class Currency extends Component {
  constructor() {
    super();
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.state = {
      currencies: [],
    };
  }

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
    const { sendCurrency } = this.props
    return (
      <div>
        {this.state.currencies &&
          this.state.currencies.map((item, id) => (
            <button onClick={()=>sendCurrency(id)} key={id}>{item}</button>
          ))}
      </div>
    );
  }
}
 const mapDispatchToProps = (dispatch) => ({
  sendCurrency: (state) => dispatch(sendCurrency(state))
});

export default connect(null,mapDispatchToProps)(Currency)