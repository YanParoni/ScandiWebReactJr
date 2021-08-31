import styled from "styled-components";

export const NavContainer = styled.div`
    display: flex;
    height: 100%;
    width: 16vw;
    justify-content: flex-start;
    align-items: center;
    flex: 0;
    padding-top: 24px;
`;

export const HeaderContainer = styled.div`  
position: relative;
width: 1440px;
height: 80px;
left: 0px;
top: 0px;

`;

export const CurrencySelect = styled.div`
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    width: 38px;
    height: 29px;
    position: relative;
    background-color: #ffffff;
    cursor: pointer;
    user-select: none;
   
font-family: Raleway;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 160%;
span {
  font-family: Raleway;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 160%;
}
img {
}
`;

/* Auto Layout */

export const CartAndCurrency= styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px;

position: absolute;
width: 204px;
height: 40px;
right: 101px;
top: 23px;
svg {
  height:50px;
  width:50px;
}
`

