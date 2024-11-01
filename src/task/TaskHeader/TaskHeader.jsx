import clsx from "clsx";
import useTask from "../hooks/useTask";
import {
  CardExpand,
  CardHeader,
  CardPercentage,
  CardTitle,
  CardTitleForm,
  CardTitleInput,
  IconButton,
} from "./TaskHeader.styled";

function TaskHeader({ id, isEditable, setEditable, titleId, cardId }) {
  const {
    state: { tasks, expandedId },
    actions: { toggleExpand, editTask },
  } = useTask();

  const task = tasks.find((task) => task.id === id);
  const isExpanded = expandedId === id;

  const { title, steps } = task;

  const stepsTotal = steps.length;
  const stepsCompleted = steps.filter(({ completed }) => completed).length;
  const stepsCompletion = Math.round((100 * stepsCompleted) / stepsTotal);

  const handleEditTask = (evt) => {
    evt.preventDefault();
    editTask(task.id, evt.target.title.value);
    setEditable(false);
  };

  if (isEditable) {
    return (
      <CardHeader>
        <CardExpand as="span" className={clsx(isExpanded && "card-expanded")}>
          <img src="icons/caret.svg" alt="Edit" />
        </CardExpand>
        <CardTitleForm onSubmit={handleEditTask}>
          <CardTitleInput
            as="input"
            id={titleId}
            defaultValue={title}
            name="title"
          />
          <IconButton>
            <img src="icons/check.svg" alt="Edit task" />
          </IconButton>
        </CardTitleForm>
        <CardPercentage>
          {!isNaN(stepsCompletion) && `${stepsCompletion}%`}
        </CardPercentage>
      </CardHeader>
    );
  }

  return (
    <CardHeader
      as="button"
      onClick={() => toggleExpand(id)}
      aria-expanded={isExpanded}
      aria-labelledby={titleId}
      aria-controls={cardId}
    >
      <CardExpand as="span" className={clsx(isExpanded && "card-expanded")}>
        <img src="icons/caret.svg" alt="Collapse/Expand" />
      </CardExpand>
      <CardTitle id={titleId}>{title}</CardTitle>
      <CardPercentage>
        {!isNaN(stepsCompletion) && `${stepsCompletion}%`}
      </CardPercentage>
    </CardHeader>
  );
}

export default TaskHeader;
