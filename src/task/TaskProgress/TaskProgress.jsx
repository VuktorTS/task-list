import useTask from "../hooks/useTask";
import { ProgressBar } from "./TaskProgress.styled";

function TaskProgress() {
  const {
    state: { tasks },
  } = useTask();

  const steps = tasks.find((task) => task.id === id).steps;

  const stepsTotal = steps.length;
  const stepsCompleted = steps.filter(({ completed }) => completed).length;

  return <ProgressBar max={stepsTotal} value={stepsCompleted} />;
}

export default TaskProgress;
