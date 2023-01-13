import type { CartItem } from "./cartTypes";

export const getCartItemsFromStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem("E-commerce-key");
  if (!itemsFromLocalStorage) {
    return [];
  }
  try {
    const items = JSON.parse(itemsFromLocalStorage);
    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const setCartItemsInStorage = (cartItems: CartItem[]) => {
  localStorage.setItem("E-commerce-key", JSON.stringify(cartItems));
};
