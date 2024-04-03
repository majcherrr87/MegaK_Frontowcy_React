import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export const PageWrapper = ({ title, children }: Props) => (
  <div style={{ maxWidth: "800px", margin: "0 auto" }}>
    <h1>{title}</h1>
    {children}
  </div>
);
