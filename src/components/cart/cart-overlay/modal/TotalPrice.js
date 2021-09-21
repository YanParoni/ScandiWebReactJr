import React, { PureComponent } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { connect } from "react-redux";
import { TotalPriceContainer, TotalPriceTotal, TotalPriceCost } from "./modal.styles";

class TotalPrice extends PureComponent {
    render() {
        const { totalPrice,currency,item  } = this.props;
        console.log(currency)
        return (
            <TotalPriceContainer>
                <TotalPriceTotal>Total:</TotalPriceTotal>
                <TotalPriceCost>{`${getSymbolFromCurrency(item.prices[currency].currency)}${totalPrice}`}</TotalPriceCost>
            </TotalPriceContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    currency: state.cart.currency
})

export default connect (mapStateToProps)(TotalPrice);