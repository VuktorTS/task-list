import "./App.styled.js";
import { Main } from "./App.styled.js";
import { TaskList, TaskProvider } from "./task";

function App() {
  return (
    <Main>
      <h1>Task manager</h1>
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    </Main>
  );
}

export default App;
