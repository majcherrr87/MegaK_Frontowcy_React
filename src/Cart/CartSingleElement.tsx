import { CartItem } from "./types";

type Props = {
  element: CartItem;
};

export const CartSingleElemet = ({
  element: { name, quantity, price },
}: Props) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{(price * quantity).toFixed(2)} zł</td>
    </tr>
  );
};
