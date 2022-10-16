import React, { useContext } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import TaskContext from '../context/TaskContext';
import AuthUserContext from '../context/AuthUserContext';

interface DeleteTaskButtonProps {
  deleteTask: (idTask: string) => void;
}

const DeleteTaskButton: React.FC<DeleteTaskButtonProps> = (props) => {
  const { deleteTask } = props;

  const { taskId, taskAuthorId, taskAuthorName } = useContext(TaskContext);
  const { authorizedUser } = useContext(AuthUserContext);

  return (
    <OverlayTrigger
      overlay={
        <Tooltip
          style={{
            display:
              taskAuthorId === authorizedUser?.userId ? 'none' : 'inline-block',
          }}
        >
          Carefully! Attempt to delete the task created by {taskAuthorName}
        </Tooltip>
      }
      placement="bottom"
    >
      <span className="d-inline-block">
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => deleteTask(taskId)}
        >
          delete
        </Button>
      </span>
    </OverlayTrigger>
  );
};

export default DeleteTaskButton;
