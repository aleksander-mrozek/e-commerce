import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  price: number;
  title: string;
}

interface CartState {
  items: CartItem[];
}

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      price: 21.34,
      title: "T-shirt",
    },
  ]);
  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
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
