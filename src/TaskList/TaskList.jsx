import { useEffect, useState } from "react";
import {
  // Card,
  // CardControl,
  // CardControls,
  // CardHeader,
  // CardTitle,
  // CardTitleForm,
  // CardTitleInput,
  // IconButton,
  Lane,
} from "./TaskList.styled";
import { nanoid } from "nanoid";
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";

const initialState = [
  { id: 1, title: "Make task manager" },
  { id: 2, title: "Now add some more tasks" },
];

const getInitialState = () => {
  return (
    JSON.parse(localStorage.getItem("task-manager-item-list")) || initialState
  );
};

function TaskList() {
  const [tasks, setTasks] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("task-manager-item-list", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) =>
    setTasks((task) => task.concat({ id: nanoid(), title }));

  const editTask = (id, title) =>
    setTasks((task) =>
      task.map((ts) => (ts.id === id ? { ...ts, title } : ts)),
    );

  const deleteTask = (id) =>
    setTasks((task) => task.filter((ts) => ts.id !== id));

  return (
    <Lane>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
      <TaskAdd addTask={addTask} />
      {/* <Card>
        <CardHeader>
          <CardTitle>This is a task</CardTitle>
        </CardHeader>
        <CardControls>
          <li>
            <CardControl>Edit</CardControl>
          </li>
          <li>
            <CardControl>Delete</CardControl>
          </li>
        </CardControls>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>This is another task</CardTitle>
        </CardHeader>
        <CardControls>
          <li>
            <CardControl>Edit</CardControl>
          </li>
          <li>
            <CardControl>Delete</CardControl>
          </li>
        </CardControls>
      </Card>
      <Card>
        <CardTitleForm>
          <CardTitleInput as="input" placeholder="Add new task" name="title" />
          <IconButton>
            <img src="icons/plus.svg" alt="Add task" />
          </IconButton>
        </CardTitleForm>
      </Card> */}
    </Lane>
  );
}

export default TaskList;
