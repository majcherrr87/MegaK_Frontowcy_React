type Props = {
  a: number;
  b: number;
  c: number;
};

export const HighestValue = ({ a, b, c }: Props) => {
  let currentValue = 0;
  if (a > b) {
    currentValue = a;
    if (c > a) {
      currentValue = c;
    }
  } else {
    currentValue = b;
    if (c > b) {
      currentValue = c;
    }
  }

  return <h1>Największa liczba z podanych wartości to {currentValue}</h1>;
};
