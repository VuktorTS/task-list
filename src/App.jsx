import "./App.styled.js";
import { Main } from "./App.styled.js";
import TaskList from "./TaskList/TaskList";

function App() {
  return (
    <Main>
      <h1>Task manager</h1>
      <TaskList />
    </Main>
  );
}

export default App;
