import React, { Component } from 'react';
import {ItemContainer,
    NameAndPrice,
    Actions,
    ImageContainer,
    ItemName,
    ItemNumbers,
    ItemPrice,
    ItemImage,
    CountControl,
    AttributesContainer,
    AttributeGroup, AttrButton, AttributeGroupName, ItemNameLink} from "overlay-styles";
import Attributes from '../../attributes/Attributes';



class OverlayItem extends Component {
    constructor(props) {
        super(props);
        this.state = { cartItem: {} };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd() {
        this.context.increaseCount(this.props.itemID);
    }

    handleRemove() {
        this.context.removeFromCart(this.props.itemID);
    }

    render() {
        const { itemID } = this.props;
        const { cart } = this.context;
        const { item, count } = cart[itemID];
        return (
            <ItemContainer>
                <NameAndPrice>
                    <ItemNameLink to={`/product/${item.name}`} onClick={() => this.props.setModal(false)}>
                        <ItemName id="modal-item-name">{item.name}</ItemName>
                    </ItemNameLink>
                        {
                            (symbol, amount) => (
                                <ItemPrice>{symbol}{amount}</ItemPrice>
                            )
                        }
                </NameAndPrice>
                <Actions>
                    <CountControl onClick={this.handleAdd}>
                        +
                    </CountControl>
                    <ItemNumbers>{count}</ItemNumbers>
                    <CountControl
                        onClick={this.handleRemove}>
                        -
                    </CountControl>
                </Actions>
                <ImageContainer>
                    <ItemImage src={item.gallery[0]} />
                </ImageContainer>
                <Attributes 
                    itemID={itemID} 
                    item={item} 
                    Container={AttributesContainer} 
                    Group={AttributeGroup} 
                    Button={AttrButton} 
                    GroupName={AttributeGroupName} />
            </ItemContainer>
        );
    }
}



export default OverlayItem;
