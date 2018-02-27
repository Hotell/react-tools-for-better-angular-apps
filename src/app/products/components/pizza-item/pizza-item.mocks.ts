import { Pizza, Topping } from '../../models';

export const toppingsMock: Topping[] = [
  {
    id: 1,
    name: 'anchovy',
  },
  {
    id: 2,
    name: 'bacon',
  },
];
export const pizzaMock: Pizza = {
  id: 1,
  name: 'Pepperoni pizza',
  toppings: [],
};
