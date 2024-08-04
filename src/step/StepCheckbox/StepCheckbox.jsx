import useTask from "../../task/hooks/useTask";
import { StepLabel } from "./StepCheckbox.styled";

function StepCheckbox({ taskId, index }) {
  const {
    state: { tasks },
    actions: { editSteps },
  } = useTask();

  const stepData = tasks.find((task) => task.id === taskId).steps[index];

  const handleCheck = () =>
    editSteps(taskId, index, { completed: !stepData.completed });

  return (
    <StepLabel>
      <input
        type="checkbox"
        checked={stepData.completed}
        onChange={handleCheck}
      />
      {stepData.completed ? <s>{stepData.step}</s> : stepData.step}
    </StepLabel>
  );
}

export default StepCheckbox;
