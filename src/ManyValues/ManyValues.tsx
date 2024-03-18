type Props = {
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
  sixth: number;
  seventh?: number;
};

export const ManyValues = ({
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh = 0,
}: Props) => {
  const sum = first + second + third + fourth + fifth + sixth + seventh;
  return <h1>{sum}</h1>;
};
