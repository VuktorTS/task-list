import StepCheckbox from "../StepCheckbox/StepCheckbox";
import StepControls from "../StepControls/StepControls";
import { StepItem } from "./Step.styled";

function Step({ taskId, index }) {
  return (
    <StepItem>
      <StepCheckbox taskId={taskId} index={index} />
      <StepControls taskId={taskId} index={index} />
    </StepItem>
  );
}

export default Step;
