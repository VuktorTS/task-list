import { Card } from "../Task/Task.styled";
import {
  CardTitleForm,
  CardTitleInput,
  IconButton,
} from "../TaskHeader/TaskHeader.styled";

function TaskAdd({ addTask }) {
  const handleAddTask = (evt) => {
    evt.preventDefault();

    addTask(evt.target.title.value);
    evt.target.reset();
  };

  return (
    <Card>
      <CardTitleForm onSubmit={handleAddTask}>
        <CardTitleInput as="input" placeholder="Add new task" name="title" />
        <IconButton>
          <img src="icons/plus.svg" alt="Add task" />
        </IconButton>
      </CardTitleForm>
    </Card>
  );
}

export default TaskAdd;
