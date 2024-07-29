import { useState } from "react";
import TaskHeader from "../TaskHeader/TaskHeader";
import { Card, CardControlButton, CardControls } from "./Task.styled";

function Task({ task, editTask, deleteTask }) {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <Card>
      <TaskHeader
        task={task}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        editTask={editTask}
      />

      <CardControls>
        {isEditable && (
          <li>
            <CardControlButton onClick={() => setIsEditable(true)}>
              Edit
            </CardControlButton>
          </li>
        )}
        <li>
          <CardControlButton onClick={() => deleteTask(task.id)}>
            Delete
          </CardControlButton>
        </li>
      </CardControls>
    </Card>
  );
}

export default Task;
