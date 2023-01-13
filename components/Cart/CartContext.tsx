import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { getCartItemsFromStorage, setCartItemsInStorage } from "./CartStorage";
import type { CartItem, CartState } from "./cartTypes";
import { withNewCartItem } from "./cartUtils";

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[] | undefined>(undefined);

  useEffect(() => {
    setCartItems(getCartItemsFromStorage());
  }, []);

  useEffect(() => {
    if (cartItems === undefined) {
      return;
    }
    setCartItemsInStorage(cartItems);
  }, [cartItems]);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems || [],
        addItemToCart: (item) => {
          setCartItems((prevState = []) => withNewCartItem(prevState, item));
        },
        removeItemFromCart: (id) => {
          setCartItems((prevState = []) => {
            const existingItem = prevState.find((el) => el.id === id);
            if (existingItem && existingItem.count <= 1) {
              return prevState.filter((el) => el.id !== id);
            }
            return prevState.map((el) => {
              if (el.id === id) {
                return {
                  ...el,
                  count: el.count - 1,
                };
              }
              return el;
            });
          });
        },
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartStateContext);
  if (!cartState) {
    throw new Error("You forgot about CartStateContextProvider!");
  }
  return cartState;
};
