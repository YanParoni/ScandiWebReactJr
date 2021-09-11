export const addItemToCart = (cartItems, cartItemToAdd) => {
  const match = cartItems.find(
    (item) => item.item.name === cartItemToAdd.item.name
  );
  const other = cartItems.find((item) =>
    item.savedAttribute.every(
      (e, i) => e.value === cartItemToAdd.savedAttribute[i].value
    )
  );
  if (other && match) {
    return cartItems.map((cartItem) =>
      cartItem.savedAttribute.every(
        (e, i) => e.value === cartItemToAdd.savedAttribute[i].value
      )
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const checkItemInStore = cartItems.find(
    (cartItem) => cartItem.item.name === cartItemToRemove.item.name
  );
  if (checkItemInStore.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.savedAttribute.every(
        (e,i) => e.value === cartItemToRemove.savedAttribute[i].value
      )
    );
  }
  return cartItems.map((cartItem) =>
    cartItem.item.name === cartItemToRemove.item.name && cartItem.savedAttribute.every(
      (e,i)=> e.value === cartItemToRemove.savedAttribute[i].value
    )
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
