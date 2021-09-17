import React, { Component } from "react";
import PropTypes from "prop-types";

import { StoreContext } from "context/Context";
import ModalItem from "./ModalItem";
import FooterButtons from "./FooterButtons";
import TotalPrice from "./TotalPrice";

import { ModalContainer, CartName, ItemCount } from "./overlay-styles";


export default class CartOverlay extends Component {
    render() {
        const { cart, currency } = this.context;
        const cartEntries = Object.entries(cart);
        return (
            <>
                <ModalContainer>
                    <div>
                        <CartName>My Bag,</CartName>
                        &nbsp;
                        <ItemCount>
                            {Object.keys(cart).length} items
                        </ItemCount>
                    </div>
                    {cartEntries.map((item) => (
                        <ModalItem itemID={item[0]} key={item[0]} setModal={this.props.setModal}/>
                    ))}
                    <TotalPrice
                    />
                    <FooterButtons />
                </ModalContainer>
            </>
        );
    }
}
