import { PRODUCTS,
  SEARCH_INPUT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_ITEM_QTY,
LOAD_CURRENT_ITEM,
SEND_CATEGORY
} from '../actions';

const INITIAL_STATE = {
products: [],
cart:[],
input: '',
category:'',
currentItem: [],
index:0
};

function cart(state = INITIAL_STATE, action) {
switch (action.type) {
  case PRODUCTS:
    return {
      ...state, 
      products: action.state };
    case SEARCH_INPUT:
      return { 
      ...state,
        input: action.state 
      }
      case ADD_TO_CART:
    // Great Item data from products array
    const item = state.products.find(
      (product) => product.productId === action.payload.productId
    );
    // Check if Item is in cart already
    const inCart = state.cart.find((item) =>
      item.productId === action.payload.productId ? true : false
    );
    return {
      ...state,
      cart: inCart
        ? state.cart.map((item) =>
            item.productId === action.payload.productId && item.amount < item.available
              ? { ...item, amount: item.amount + 1 }
              : item
          )
        : [...state.cart, { ...item, amount: 1 }],
    };
  case REMOVE_FROM_CART:
    return {
      ...state,
      cart: state.cart.filter((item) => item.productId !== action.payload.productId),
    };
  case ADJUST_ITEM_QTY:
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.productId === action.payload.productId && action.payload.amount < item.available
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
      console.log(action.payload)
      return {
        ...state,
        category:action.state
      }
  default:
    return state;
}
}

export default cart;
