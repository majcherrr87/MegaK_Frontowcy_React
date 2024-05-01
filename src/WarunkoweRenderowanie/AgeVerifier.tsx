type AgeVerifierProps = {
  age: number;
};

// export const AgeVerifier = ({ age }: AgeVerifierProps) => {
//   if (age >= 18)
//     return (
//       <div>
//         <h1>Witaj dorosła osobo</h1>
//       </div>
//     );
//   return <div>(X) Wstęp wzbroniony</div>;
// };

export const AgeVerifier = ({ age }: AgeVerifierProps) => {
  return (
    <div>
      {age >= 18 ? <h1>Witaj dorosła osobo</h1> : "(X) Wstęp zwbroniony"}
    </div>
  );
};
