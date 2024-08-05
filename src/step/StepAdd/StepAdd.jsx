import Button from "../../Button/Button";
import useTask from "../../task/hooks/useTask";
import { AddStep, StepForm, StepInput } from "./StepAdd.styled";

function StepAdd({ taskId }) {
  const {
    actions: { addStep },
  } = useTask();

  const handleAddStep = (evt) => {
    evt.preventDefault();
    const value = evt.target.step.value;
    if (value === "") return;
    addStep(taskId, evt.target.step.value);
    evt.target.reset();
  };

  return (
    <AddStep>
      <StepForm onSubmit={handleAddStep}>
        <StepInput placeholder="Add new step" name="step" />
        <Button className="step-button" icon="plus" label="Add new step" />
      </StepForm>
    </AddStep>
  );
}

export default StepAdd;
