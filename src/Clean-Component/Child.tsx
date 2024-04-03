type Props = {
  callback: () => void;
};

export const Child = ({ callback }: Props) => {
  return <button onClick={callback}>Click</button>;
};
