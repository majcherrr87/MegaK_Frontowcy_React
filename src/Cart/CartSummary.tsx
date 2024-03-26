import { CartItem } from "./types";

type Props = {
  elements: CartItem[];
};

export const CartSummary = ({ elements }: Props) => {
  const total = elements.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  return (
    <tfoot>
      <tr>
        <th>Łącznie</th>
        <th></th>
        <th>{total.toFixed(2)} zł</th>
      </tr>
    </tfoot>
  );
};
