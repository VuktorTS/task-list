import {
  Card,
  CardControl,
  CardControls,
  CardHeader,
  CardTitle,
  CardTitleForm,
  CardTitleInput,
  IconButton,
  Lane,
} from "./TaskList.styled";

function TaskList() {
  return (
    <Lane>
      <Card>
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
      </Card>
    </Lane>
  );
}

export default TaskList;
