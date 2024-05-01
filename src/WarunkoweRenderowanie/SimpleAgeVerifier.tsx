type SimpleAgeVerifierProps = {
  age: number;
};

export const SimpleAgeVerifier = ({ age }: SimpleAgeVerifierProps) => {
  return <div>{age >= 18 && "Jesteś już dorosły "}</div>;
};
