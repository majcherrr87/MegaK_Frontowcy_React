import { ButtonDander } from "./Zadanie3/ButtonDanger";
import { ButtonSuccess } from "./Zadanie3/ButtonSuccess";
import { Model } from "./Zadanie3/Model";
import { PageWrapper } from "./Zadanie3/PageWrpper";

export const App = () => {
  return (
    <PageWrapper title="Hello World">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
      nemo. Eos, numquam voluptatum doloremque dolor ipsum mollitia rerum,
      laboriosam odit placeat nisi praesentium necessitatibus magnam! Quidem
      rerum magnam quod fugiat!
      <Model
        title="Potwierdź"
        text="Czy na pewno chcesz to wybrać"
        controls={<ButtonSuccess title="Tak" />}
      />
      <Model
        title="Ostrzeżenie"
        text="Czy chcesz usunąć ten obiekt?"
        controls={<ButtonDander title="Usuń" />}
      />
    </PageWrapper>
  );
};
