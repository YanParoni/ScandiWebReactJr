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
margin-bottom:80px;
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
    margin:10px;
    #options {
        display: flex;
        flex-direction: column;
        width: 8vw;
        padding: 20px 2vw 20px 1vw;
        gap: 10px;
        position: absolute;
        top: 50px;}
        svg{
          width:10px;
          height:10px;
          margin-left:10px;
        }
        span {
            display: block;
           
        }
`;

export const CurrencyIn = styled.span`
font-size:18px;
font-family:Raleway;
margin-left: 10px;
display: inline;
height:38px;
width:59px;
svg{
  height:14px;
width:10px;
display: inline;
  display:inline;
  margin-left:10px;
}
`
export const CartAndCurrency= styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 30px;
position: absolute;
width: 204px;
height: 40px;
right: 101px;
top: 23px;

`

