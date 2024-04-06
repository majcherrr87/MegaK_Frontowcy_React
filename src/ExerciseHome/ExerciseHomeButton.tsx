type Props = {
  label: string;
  onClick: (whith: string) => void;
};

export const ExerciseHomeButton = ({ label, onClick }: Props) => {
  return (
    <button onClick={() => onClick(label.toLocaleLowerCase())}>{label}</button>
  );
};
