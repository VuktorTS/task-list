import { Lane } from "./TaskList.styled";
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";
import useTask from "../hooks/useTask";

function TaskList() {
  const {
    state: { tasks },
  } = useTask();

  const taskIds = tasks.map(({ id }) => id);
  console.log("🚀 ~ TaskList ~ taskIds:", taskIds);

  return (
    <Lane>
      {taskIds.map((taskId) => (
        <Task key={taskId} id={taskId} />
      ))}
      <TaskAdd />
    </Lane>
  );
}

export default TaskList;
