export const addItemToCart = (cartItems, cartItemToAdd) => {
  const match = cartItems.find(
    (item) => item.item.name === cartItemToAdd.item.name
  );
  const other = cartItems.find((item) =>
    item.savedAttribute.every(
      (e, i) => e.item.value === cartItemToAdd.savedAttribute[i].item.value
    )
  );
  if (other && match) {
    return cartItems.map((cartItem) =>
      cartItem.savedAttribute.every(
        (e, i) => e.item.value === cartItemToAdd.savedAttribute[i].item.value
      )
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const cartCheck =cartItems.find((cartItem) =>
  cartItem.item.name === cartItemToRemove.item.name && cartItem.savedAttribute.every(
    (e,i)=> e.value === cartItemToRemove.savedAttribute[i].value
  ))
if(cartCheck.quantity===1){
 return cartItems.filter((cartItem) =>
     cartItem.savedAttribute.every(
    (e,i)=> e.item.value !== cartItemToRemove.savedAttribute[i].item.value
  ))
}
  console.log(cu)
  return cartItems.map((cartItem) =>
    cartItem.savedAttribute.every(
      (e,i)=> e.item.value === cartItemToRemove.savedAttribute[i].item.value
    )
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
