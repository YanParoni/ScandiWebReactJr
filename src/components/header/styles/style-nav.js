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
    #arrow {
        margin-left: 10px;
    }
    #options {
        box-shadow: 0px 4px 35px 0px #A8ACB030;
        display: flex;
        flex-direction: column;
        width: 8vw;
        padding: 20px 2vw 20px 1vw;
        gap: 10px;
        position: absolute;
        left: -2vw;
        top: 50px;
        span {
            display: block;
            height:29px;
            width:54px;
        }
        img{
          object-fit:contain;
          display:inline;
          height:29px;
            width:54px;
        }
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

