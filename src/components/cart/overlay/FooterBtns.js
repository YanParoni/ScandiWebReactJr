import React, { Component } from "react";
import {
  ModalFooterContainer,
  ViewBagButton,
  CheckOutButton,
  SLink,
} from "overlay-styles";

class FooterBtns extends Component {
  render() {
    return (
      <ModalFooterContainer>
        <SLink to="/cart">
          <ViewBagButton>view bag</ViewBagButton>
        </SLink>
        <CheckOutButton>check out</CheckOutButton>
      </ModalFooterContainer>
    );
  }
}

export default FooterBtns;
