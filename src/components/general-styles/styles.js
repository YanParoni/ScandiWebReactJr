import styled from 'styled-components'

export const AttributesContainer = styled.div``;

export const AttributeGroupName = styled.span`
    display: block;
    font-family: "Roboto Condensed", sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    margin-bottom: 8px;
`;

export const AttributeGroup = styled.div`
    display: flex;
    gap: 0.833vw;
    margin-bottom: 8px;
`;

export const AttributeButton = styled.button`
    background-color: ${(props) => !props.inStock || !props.active ? "#fff" : "#1D1F22"};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : ""};
    min-width: 63px;
    height: 45px;
    border: ${props => !props.inStock 
        ? "1px solid var(--disabled)" 
        : props.error 
            ? "2px solid var(--error)" 
            : props.backgroundColor && props.active 
                ? "3px solid #1D1F22" 
                : "1px solid #1D1F22"};
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
    color: ${(props) => !props.inStock ? "var(--disabled)" : (props.active ? "#fff" : "#292929")};
`;

export const Button = styled.button`
    height: 52px;
    width: 20.278vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    border: none;
    background-color: ${props => props.inStock ? "#5ECE7B" : "var(--disabledAttr)"};
    color: ${props => props.inStock ? "#fff" : "var(--black)"};
    cursor: ${props => props.inStock ? "pointer" : "not-allowed"};
    text-transform: uppercase;
    margin: 20px 0 40px 0;
    transition: all 0.2s ease;
    &:active {
        transform: ${props => props.inStock && "scale(0.95, 0.95)"};
    }
`;

export const ProductName = styled.h1`
    &::first-line {
        font-weight: 600;
    }
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    font-family:Raleway;
    margin-bottom: 43px;
`;

export const ProductBrand = styled.h1`
    &::first-line {
        font-weight: 600;
    }
    font-family:Raleway;
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    margin-bottom: 43px;
`;