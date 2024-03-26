import { CartSingleElemet } from "./CartSingleElement";
import { CartItem } from "./types";

type Props = {
  elements: CartItem[];
};

export const CatElements = ({ elements }: Props) => {
  return (
    <tbody>
      {elements.map((element) => (
        <CartSingleElemet key={element.id} element={element} />
      ))}
    </tbody>
  );
};
