import Button from "../../Button/Button";
import useTask from "../../task/hooks/useTask";

function StepButton(props) {
  return <Button className="step-button" {...props} />;
}

function StepControls({ taskId, index }) {
  const {
    actions: { deleteStep },
  } = useTask();

  const onClick = () => deleteStep(taskId, index);

  return <StepButton icon="trash" label="Delete" onClick={onClick} />;
}

export default StepControls;
