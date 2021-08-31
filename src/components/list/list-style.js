import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsContainer = styled.div`
 display:relative;
  display: grid; 
  margin-top:200px;
  grid-auto-flow: row dense; 
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: 1fr 1fr; 
  gap: 100px 40px; 
  justify-content: center; 
  align-content: center; 
  justify-items: end; 
  align-items: end; 
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ProductImageContainer = styled.div`
  width: 354px;
  height: 330px;
`;

export const ItemName = styled.span`
  position: static;
height: 29px;
left: 0px;
right: 0px;
top: 0px;
  color: #1D1F22;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  width: 354px;
  word-wrap: normal;
  font-weight: 300;
  min-height: 29px;
  text-decoration: none;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
  align-items: center;
;
`;

export const ItemContainer = styled.div`
    width: 386px;
    height: 344px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    transition: all .5s ease;
    &:hover {
        box-shadow: 1px 4px 35px 1px #A8ACB030;
    }
`;

export const ItemPrice = styled.span`
  font-family: Raleway;
  color: #1d1f22;
  display: block;
  font-weight: 500;
  width: auto;
  height: 29px;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const ItemTop = styled.div`
    position: relative;
`;
export const OutOfStockOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
    left: 0;
    top: -5px;
    background-color: #ffff;
    display: flex;
`;

export const OutOfStockText = styled.span`
    font-weight: 400;
    font-size: 24px;
    line-height: 38.4px;
    text-transform: uppercase;
    margin: auto;
    color: #A6A6A6;
`;

export const AddToCartButton = styled.div`
  svg{
    width: 40px;
    height: 40px;
    fill: white;
  }
    border-radius: 100%;
    padding:10px;
    border: none;
    background-color: #5ECE7B;
    position: absolute;
    top: calc(100% - 26px);
    left: 80%;
    transition: all .2s ease;
    &:hover {
        transform: scale(1.2, 1.2);
    }
    &:active {
        transform: scale(0.9, 0.9);
    }
    cursor: pointer;
`;
