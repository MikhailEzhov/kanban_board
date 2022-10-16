import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Pen } from 'react-bootstrap-icons';
import BoardContext from '../context/BoardContext';
import ColumnContext from '../context/ColumnContext';
import TaskContext from '../context/TaskContext';
import AuthUserContext from '../context/AuthUserContext';
import getColumnIndex, { getTaskIndex } from '../utils/utils';
import EditTaskTitle from './EditTaskTitle';

const TaskTitle: React.FC = () => {
  const { board, saveBoard } = useContext(BoardContext);
  const { columnId } = useContext(ColumnContext);
  const { taskTitle, taskId, taskAuthorId } = useContext(TaskContext);
  const { authorizedUser } = useContext(AuthUserContext);

  const [showEditTaskTitle, setShowEditTaskTitle] = useState<boolean>(false);

  const renameTitle = (newTitle: string) => {
    const columnIndex = getColumnIndex(board, columnId);
    const taskIndex = getTaskIndex(board, columnIndex, taskId);
    const initialTitle = board[columnIndex].tasks[taskIndex].title;
    if (initialTitle !== newTitle) {
      const newBoard = [...board];
      newBoard[columnIndex].tasks[taskIndex].title = newTitle;
      saveBoard(newBoard);
    }
  };

  const displayButton =
    taskAuthorId === authorizedUser?.userId ? 'd-inline-block' : 'd-none';

  return (
    <div className="d-flex gap-2 align-items-start justify-content-between border rounded-1 p-1 mb-1">
      {showEditTaskTitle === false ? (
        <>
          <p className="m-0 align-self-center">
            <b>{taskTitle}</b>
          </p>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => setShowEditTaskTitle(true)}
            className={displayButton}
          >
            <Pen />
          </Button>
        </>
      ) : (
        <EditTaskTitle
          setShowEditTaskTitle={setShowEditTaskTitle}
          renameTitle={renameTitle}
        />
      )}
    </div>
  );
};

export default TaskTitle;
