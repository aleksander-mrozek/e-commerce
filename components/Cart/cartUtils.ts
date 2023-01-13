import type { CartItem } from "./cartTypes";

export function withNewCartItem(
  prevState: CartItem[],
  item: CartItem
): CartItem[] {
  const existingItem = prevState.find((el) => el.id === item.id);
  if (!existingItem) {
    return [...prevState, item];
  }

  return prevState.map((el) => {
    if (el.id === item.id) {
      return {
        ...el,
        count: el.count + 1,
      };
    }
    return el;
  });
}
