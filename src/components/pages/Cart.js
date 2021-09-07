import React, { Component } from 'react';
import Navbar from '../header/Navbar';
import { connect } from 'react-redux';
import Attributes from '../attributes/Attributes.js';
import {
    AttributeGroup,
    AttributeGroupName,
    AttributesContainer,
    AttributeButton,
    AddToCartButton,
  } from "../general-styles/styles";

class Cart extends Component {
    constructor(){
        super()
        this.state ={
            item:[]
        }

    }

    componentDidMount(){
        this.setState({item:this.props.cart})
    }

   
    render() {
        console.log(this.props.cart)
        return (
            <>
                <Navbar/>
              {this.state.item && this.state.item.map((item)=>
              <Attributes item={item.item}
              Container={AttributesContainer}
              AttLabel={AttributeGroupName}
              LabelGroup={AttributeGroup}
              chosenAttributes={item.savedAttribute}
              Button={AttributeButton}
              />)}
            </>
        );
    }
}
const mapStateToProps = (state) =>({
    cart: state.cart.cart
})

export default connect(mapStateToProps)(Cart);
