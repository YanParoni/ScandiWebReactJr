import React, { PureComponent } from "react";
import { ModalFooterContainer, ViewBagButton, CheckOutButton } from "./modal.styles";


export default class FooterButtons extends PureComponent {
    render() {
        return (
            <ModalFooterContainer>
                <div to="/cart">
                    <ViewBagButton>view bag</ViewBagButton>
                </div>
                <CheckOutButton>check out</CheckOutButton>
            </ModalFooterContainer>
        );
    }
}