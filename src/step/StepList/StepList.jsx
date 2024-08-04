import useTask from "../../task/hooks/useTask";
import Step from "../Step/Step";
import StepAdd from "../StepAdd/StepAdd";
import { Progress, ProgressSteps } from "./StepList.styled";

function StepList({ taskId }) {
  const {
    state: { tasks },
  } = useTask();

  const steps = tasks
    .find((task) => task.id === taskId)
    .steps.map(({ step }) => step);

  return (
    <Progress>
      <ProgressSteps>
        {steps.map((step) => (
          <Step key={step}></Step>
        ))}
        <StepAdd />
      </ProgressSteps>
    </Progress>
  );
}

export default StepList;
