import {
  CardHeader,
  CardTitle,
  CardTitleForm,
  CardTitleInput,
  IconButton,
} from "./TaskHeader.styled";

function TaskHeader({ task, isEditable, setEditable, editTask }) {
  const { title } = task;

  const handleEditTask = (evt) => {
    evt.preventDefault();
    editTask(task.id, evt.target.title.value);
    setEditable(false);
  };

  if (isEditable) {
    return (
      <CardHeader>
        <CardTitleForm onSubmit={handleEditTask}>
          <CardTitleInput as="input" defaultValue={title} name="title" />
          <IconButton>
            <img src="icons/check.svg" alt="Edit task" />
          </IconButton>
        </CardTitleForm>
      </CardHeader>
    );
  }

  return (
    <CardHeader>
      <CardTitle>This is a task</CardTitle>
    </CardHeader>
  );
}

export default TaskHeader;
