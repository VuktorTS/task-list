import Button from "../../Button/Button";
import useTask from "../hooks/useTask";
import { Card } from "../Task/Task.styled";
import { CardTitleForm, CardTitleInput } from "../TaskHeader/TaskHeader.styled";
import { CardHeaderNew } from "./TaskAdd.styled";

function TaskAdd() {
  const {
    actions: { addTask },
  } = useTask();

  const handleAddTask = (evt) => {
    evt.preventDefault();
    const value = evt.target.title.value;
    if (value === "") return;
    addTask(value);
    evt.target.reset();
  };

  return (
    <Card>
      <CardHeaderNew>
        <CardTitleForm onSubmit={handleAddTask}>
          <CardTitleInput as="input" placeholder="Add new task" name="title" />
          <Button icon="plus" label="Add task" />
        </CardTitleForm>
      </CardHeaderNew>
    </Card>
  );
}

export default TaskAdd;
