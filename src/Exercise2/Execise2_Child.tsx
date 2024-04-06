type Props = {
  callback: (name: string) => void;
};

export const Exercise2Child = ({ callback }: Props) => {
  return <button onClick={() => callback("Child")}>Click</button>;
};
