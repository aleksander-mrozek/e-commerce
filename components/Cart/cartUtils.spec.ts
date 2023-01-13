import { CartItem } from "./cartTypes";
import { withNewCartItem } from "./cartUtils";

import { faker } from "@faker-js/faker";

describe("withNewCartItem", () => {
  const getFakeCartItem = (): CartItem => {
    return {
      id: faker.datatype.uuid(),
      price: Number(faker.commerce.price()),
      title: faker.commerce.productName(),
      count: faker.datatype.number({ min: 3, max: 30, precision: 1 }),
    };
  };
  const getFakeInitialState = (): CartItem[] =>
    faker.datatype
      .array(faker.datatype.number({ min: 0, max: 10, precision: 1 }))
      .map(() => getFakeCartItem());

  it(`should append if the element does not exist`, () => {
    const initialState = getFakeInitialState();
    const item = getFakeCartItem();

    const result = withNewCartItem(initialState, item);

    expect(result.length).toEqual(initialState.length + 1);
  });
  it(`should append to the end of an array if the element does not exist`, () => {
    const initialState = getFakeInitialState();
    const item = getFakeCartItem();

    const result = withNewCartItem(initialState, item);

    expect(result.at(-1)).toEqual(item);
  });
  it(`should not append if element already exists`, () => {
    const item = getFakeCartItem();
    const initialState = [
      ...getFakeInitialState(),
      item,
      ...getFakeInitialState(),
    ];

    const result = withNewCartItem(initialState, item);

    expect(result.length).toEqual(initialState.length);

    const updatedElement = result.find((el) => el.id === item.id);
    expect(updatedElement?.count).toEqual(item.count + 1);
  });
});
