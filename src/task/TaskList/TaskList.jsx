import { Lane } from "./TaskList.styled";
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";

function TaskList() {
  return (
    <Lane>
      {[].map((task) => (
        <Task key={task.id} id={task.id} />
      ))}
      <TaskAdd />
    </Lane>
  );
}

export default TaskList;
