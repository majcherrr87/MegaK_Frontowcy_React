type Props = {
  elements: {
    id: number;
    value: string;
  }[];
};
export const Foo = ({ elements }: Props) => {
  return elements.map(({ value, id }) => <div key={id}>{value}</div>);
};
