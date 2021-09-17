import React, { PureComponent } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import PropTypes from "prop-types";

import { TotalPriceContainer, TotalPriceTotal, TotalPriceCost } from "./overlay-styles";

export default class Price extends PureComponent {
    render() {
        const { currency } = this.context;
        const { totalPrice } = this.props;
        return (
            <TotalPriceContainer>
                <TotalPriceTotal>Total:</TotalPriceTotal>
                <TotalPriceCost>{`${getSymbolFromCurrency(currency)}${totalPrice}`}</TotalPriceCost>
            </TotalPriceContainer>
        );
    }
}