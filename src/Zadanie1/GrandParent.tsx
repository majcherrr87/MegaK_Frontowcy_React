import { Parent } from "./Parent";

type Props = {
  value: number;
};

export const GrandParent = ({ value }: Props) => <Parent value={value} />;
