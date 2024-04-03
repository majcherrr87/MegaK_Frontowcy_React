import { Child } from "./Clean-Component/Child";

export const App = () => {
  const handleClick = () => {
    console.log("Click");
  };

  return <Child callback={handleClick} />;
};
