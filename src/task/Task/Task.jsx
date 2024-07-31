import { useMemo, useState } from "react";
import useTask from "../hooks/useTask";
import TaskHeader from "../TaskHeader/TaskHeader";
import { Card } from "./Task.styled";
import TaskControls from "../TaskControls/TaskControls";

function Task({ id }) {
  const {
    state: { expandedId },
  } = useTask();
  const isExpanded = expandedId === id;

  const [isEditable, setEditable] = useState(false);

  const cardId = useMemo(() => `card-${Math.random()}`, []);
  const titleId = useMemo(() => `title-${Math.random()}`, []);

  return (
    <Card>
      <TaskHeader
        id={id}
        isEditable={isEditable}
        setEditable={setEditable}
        cardId={cardId}
        titleId={titleId}
      />
      {isExpanded && (
        <TaskControls
          id={id}
          isEditable={isEditable}
          setEditable={setEditable}
        />
      )}
    </Card>
  );
}

export default Task;
