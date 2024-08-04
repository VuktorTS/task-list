import useTask from "../hooks/useTask";
import { CardControlButton, CardControls } from "./TaskControls.styled";

function TaskControls({ id, isEditable, setEditable }) {
  const {
    actions: { deleteTask },
  } = useTask();
  return (
    <CardControls>
      {!isEditable && (
        <li>
          <CardControlButton onClick={() => setEditable(true)}>
            Edit
          </CardControlButton>
        </li>
      )}
      <li>
        <CardControlButton onClick={() => deleteTask(id)}>
          Delete
        </CardControlButton>
      </li>
    </CardControls>
  );
}

export default TaskControls;
