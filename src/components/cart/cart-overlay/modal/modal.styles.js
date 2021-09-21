import { Link } from "react-router-dom";
import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    right: 5px;
    width: 23vw;
    background-color: #fff;
    z-index: 7;
    padding: 8px 1.1vw 1.3vw 1.1vw;
`;

export const ItemContainer = styled.div`
    width: 20vw;
    display: grid;
    min-height: 137px;
    grid-template-areas:
        "name actions img"
        "attrs actions img ";
    margin: 20px 0;
    &:hover #modal-item-name {
        text-decoration: underline;
    }
`;

export const ModalFooterContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 1vw;
`;


export const CartName = styled.span`
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
`;

export const ButtonCommon = styled.button`
    width: 9vw;
    height: 43px;
    font-size: 14px;
    line-height: 16.8px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 2vw;
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.5s ease;
    &:active {
        transform: scale(0.95, 0.95);
    }
`;

export const ViewBagButton = styled(ButtonCommon)`
    background-color: #fff;
    border: 1px solid #000000;
    color: #000000;
    margin-right: 0.8vw;
`;

export const CheckOutButton = styled(ButtonCommon)`
    background-color: #5ECE7B;
    color: #fff;
    border: none;
`;


export const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: attrs;
    margin: 8px 0;
`;

export const AttributeGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
`;

export const AttributeGroupName = styled.span`
    display: block;
    font-family: "Roboto Condensed", sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    margin-bottom: 5px;
`;

export const AttrButton = styled.button`
    background-color: ${(props) => !props.active ? "var(--disabledAttr)" : props.bgColor ? props.bgColor : "#fff"};
    border: 1px solid ${props => props.active ? "#000000" : "var(--disabledAttr)"};
    color: ${props => props.active ? "#000000" : "var(--disabledAttr)"};
    min-width: 1.6vw;
    height: 24px;
    margin: 0 8px 4px 0;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    line-height: 22.4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ItemCount = styled.span`
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
    `;



export const NameAndPrice = styled.div`
    grid-area: name;
    width: 9vw;
    margin: 0 1.2vw 30px 0;
    padding: 0;
    align-items: start;
`;


export const ImageContainer = styled.div`
    grid-area: img;
    margin-left: 0.6vw;
    width: 105px;
    height: 137px;
`;

export const ItemName = styled.span`
    margin-bottom: 5px;
    display:block;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    color: #1D1F22;
    &:hover {
        color: #5ECE7B;
    }
`;


export const ItemNameLink = styled.span`
    text-decoration: none;
`;

export const ItemNumbers = styled.span`
    display: block;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
`;

export const ItemPrice = styled(ItemNumbers)`
    text-align: left;
    margin: 0;
`;

export const ItemImage = styled.img`
    width: 100%;
    height: 100%;
    float: right;
    grid-area: img;
    object-fit: contain;
`;

export const Actions = styled.div`
    grid-area: actions;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 137px;
`;

export const CountControl = styled.button`
    background-color: #ffffff;
    font-weight: 400;
    width: 24px;
    height: 24px;
    border: 1px solid #000000;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


export const TotalPriceContainer = styled.div`
    display: flex;
    width: 20vw;
    justify-content: space-between;
    margin: 43px 0 35px 0;
`;

export const TotalPriceTotal = styled.span`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
`;

export const TotalPriceCost = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 25.6px;
`;

export const Overlay = styled.div`
    background: #39374838;
    width: 100%;
    height: 100%;
    position: fixed;
    top: ${props => props.scroll <= 80 ? 80 - props.scroll : "0"}px;
    left: 0;
    z-index: 6;
`;

export const ProductName = styled.h1`
    &::first-line {
        font-weight: 600;
    }
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    margin-bottom: 43px;
`;

export const ProductPrice = styled.span`
    display: block;
    width: auto;
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    margin: 10px 0 20px 0;
    height: 46px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;


export const CartContainer = styled.div`
    width: 100%;
    padding: 80px 16vw 54px 7vw;
`;

export const CartLabel = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    height: 40px;
    text-transform: uppercase;
    width: 6vw;
    margin-bottom: 60px;
`;

export const CartItems = styled.div`
`;

export const CartItemContainer = styled.div`
    border-top: 1px solid #e5e5e5;
    width: 76vw;
    min-height: 205px;
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    &:hover #cart-item-name {
        text-decoration: underline;
    }
`;

export const CartItemDetailsContainer = styled.div`
    width: 100%;
`;

export const CartItemActionsContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 20px 0.8vw 0 0;
    height: 100%;
`;


export const CartItemName = styled.span`
    display: block;
    &::first-line {
        font-weight: 600;
    }
    font-size: 30px;
    margin: 20px 0 55px 0;
    /* width: 20vw; */
    height: 27px;
    font-weight: 400;
    color: #000000;
    line-height: 27px;
    &:hover {
        color: var(--green);
    }
`;



export const CartItemPrice = styled.span`
    display: block;
    font-weight: 700;
    margin: 0 0 12px 0;
    display: flex;
    align-items: center;
    font-size: 27px;
    height: 45px;
`;

export const CartCountButton = styled.button`
    background-color: #fff;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
    user-select: none;
    cursor: pointer;
`;

export const CartItemCount = styled.span`
    font-size: 500;
    font-size: 24px;
    line-height: 160%;
    color: #000000;
`;

export const CartItemImageContainer = styled.div`
    position: relative;
    margin-top: 20px;
    width: 9.792vw;
    height: 185px;
    z-index: 5;
    user-select: none;
    img {
        width: 9.792vw;
        height: 100%;
        object-fit: contain;
    }
`;

export const CartArrows = styled.div`
    position: absolute;
    z-index: 6;
    top: 40%;
    left: 40%;
    height: 20%;
    width: 1.5vw;
    display: flex;
    align-items: center;
    background-color: #00000080;
    cursor: pointer;
`;


export const CartArrowPrevious = styled(CartArrows)`
    border-radius: 0 50% 50% 0;
    justify-content: flex-start;
    left: 0;
    padding-left: 5px;
`;

export const CartArrowNext = styled(CartArrows)`
    border-radius: 50% 0 0 50%;
    justify-content: flex-end;
    left: calc(100% - 1.5vw);
    padding-right: 5px;
`;



export const TotalPriceLabel = styled.span`
    margin-right: 15px;
    font-family: "Roboto", sans-serif;
`;

export const TotalPriceNumber = styled.span`
    font-family: "Raleway", sans-serif;
`;