import { useContext } from "react";
import TaskContext from "../context";

const useTask = () => useContext(TaskContext);

export default useTask;
