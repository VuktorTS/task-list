import Button from "../Button/Button";
import { Card } from "../Task/Task.styled";
import { CardTitleForm, CardTitleInput } from "../TaskHeader/TaskHeader.styled";

function TaskAdd({ addTask }) {
  const handleAddTask = (evt) => {
    evt.preventDefault();
    if (evt.target.title.value === "") return;
    addTask(evt.target.title.value);
    evt.target.reset();
  };

  return (
    <Card>
      <CardTitleForm onSubmit={handleAddTask}>
        <CardTitleInput as="input" placeholder="Add new task" name="title" />
        <Button icon="plus" label="Add task">
          <img src="icons/plus.svg" alt="Add task" />
        </Button>
      </CardTitleForm>
    </Card>
  );
}

export default TaskAdd;
