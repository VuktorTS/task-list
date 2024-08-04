import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import TaskContext from "./context";

const initialState = [
  { id: 1, title: "1", step: [{ step: "1", completed: true }] },
];

const getInitialState = () =>
  JSON.parse(localStorage.getItem("task-manager-items-steps")) || initialState;

function TaskProvider({ children }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) =>
    setExpandedId((oldId) => (oldId === id ? null : id));

  const [tasks, setTasks] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("task-manager-items-steps", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) =>
    setTasks((ts) => ts.concat([{ id: nanoid(), title, step: [] }]));

  const editTask = (id, title) =>
    setTasks((ts) =>
      ts.map((task) => (task.id === id ? { ...task, title } : task)),
    );
  const deleteTask = (id) =>
    setTasks((ts) => ts.filter((task) => task.id !== id));

  const value = {
    state: {
      expandedId,
      tasks,
    },
    actions: {
      toggleExpand,
      addTask,
      editTask,
      deleteTask,
    },
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export default TaskProvider;
