import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PlusLg, Pen } from 'react-bootstrap-icons';
import BoardContext from '../context/BoardContext';
import ColumnContext from '../context/ColumnContext';
import TaskContext from '../context/TaskContext';
import getColumnIndex, { getTaskIndex } from '../utils/utils';
import Comment from './Comment';
import TaskDescription from './TaskDescription';

interface TaskDetailsProps {
  showTaskDetails: boolean;
  setShowTaskDetails: (arg: boolean) => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = (props) => {
  const { showTaskDetails, setShowTaskDetails } = props;

  const { board, saveBoard } = useContext(BoardContext);
  const { columnId, columnTitle } = useContext(ColumnContext);
  const { taskId, taskTitle, taskAuthorName, taskComments } =
    useContext(TaskContext);

  const deleteTask = (idTask: string) => {
    const columnIndex = getColumnIndex(board, columnId);
    const taskIndex = getTaskIndex(board, columnIndex, idTask);
    const newBoard = [...board];
    newBoard[columnIndex].tasks.splice(taskIndex, 1);
    saveBoard(newBoard);
  };

  return (
    <Modal
      show={showTaskDetails}
      onHide={() => setShowTaskDetails(false)}
      backdrop="static"
      keyboard
    >
      <Modal.Header closeButton>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => deleteTask(taskId)}
        >
          delete
        </Button>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex gap-2 align-items-start justify-content-between border rounded-1 p-1 mb-1">
          <p className="m-0 align-self-center">
            <b>{taskTitle}</b>
          </p>
          <Button variant="outline-secondary" size="sm">
            <Pen />
          </Button>
        </div>

        <div className="border rounded-1 p-1 mb-1">column: {columnTitle}</div>

        <div className="border rounded-1 p-1 mb-1">
          author: {taskAuthorName}
        </div>

        <TaskDescription />

        <div className="border rounded-1 p-1 mb-1">
          <div className="d-flex gap-2 align-items-center justify-content-between pb-1">
            <b>comments: </b>
            <Button variant="outline-secondary" size="sm">
              <PlusLg />
            </Button>
          </div>
          {taskComments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TaskDetails;
