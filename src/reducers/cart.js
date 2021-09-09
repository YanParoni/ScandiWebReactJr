import {
  PRODUCTS,
  SEARCH_INPUT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_ITEM_QTY,
  LOAD_CURRENT_ITEM,
  SEND_CATEGORY,
  SEND_CURRENCY,
} from "../actions";

const INITIAL_STATE = {
  products: [],
  cart: [],
  input: "",
  category: "",
  currentItem: [],
  index: 0,
  currency: 0,
};

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        products: action.state,
      };

    case SEARCH_INPUT:
      return {
        ...state,
        input: action.state,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.state],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };

    case ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.productId === action.payload.productId &&
          action.payload.amount < item.available
            ? { ...item, amount: +action.payload.amount }
            : item
        ),
      };

    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    case SEND_CATEGORY:
      console.log(action.payload);
      return {
        ...state,
        category: action.state,
      };

    case SEND_CURRENCY:
      return {
        ...state,
        currency: action.state,
      };

    default:
      return state;
  }
}

export default cart;
