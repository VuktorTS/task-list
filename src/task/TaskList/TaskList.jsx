import { Lane } from "./TaskList.styled";
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";
import useTask from "../hooks/useTask";

function TaskList() {
  const {
    state: { tasks },
  } = useTask();

  const taskIds = tasks.map(({ id }) => id);

  return (
    <Lane>
      {taskIds.map((task) => (
        <Task key={task.id} id={task.id} />
      ))}
      <TaskAdd />
    </Lane>
  );
}

export default TaskList;
