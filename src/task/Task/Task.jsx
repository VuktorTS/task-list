import { useMemo, useState } from "react";
import useTask from "../hooks/useTask";
import TaskHeader from "../TaskHeader/TaskHeader";
import { Card } from "./Task.styled";
import TaskControls from "../TaskControls/TaskControls";
import { StepList } from "../../step";
import TaskProgress from "../TaskProgress/TaskProgress";

function Task({ id }) {
  const {
    state: { expandedId },
  } = useTask();
  const isExpanded = expandedId === id;

  const [isEditable, setEditable] = useState(false);

  const cardId = useMemo(() => `card-${Math.random()}`, []);
  const titleId = useMemo(() => `title-${Math.random()}`, []);

  return (
    <Card id={cardId} aria-labelledby={titleId}>
      <TaskHeader
        id={id}
        isEditable={isEditable}
        setEditable={setEditable}
        cardId={cardId}
        titleId={titleId}
      />
      {isExpanded && (
        <>
          <TaskControls
            id={id}
            isEditable={isEditable}
            setEditable={setEditable}
          />
          <StepList taskId={id} />
        </>
      )}
      <TaskProgress id={id} />
    </Card>
  );
}

export default Task;
