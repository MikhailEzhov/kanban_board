import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import BoardContext from '../context/BoardContext';
import ColumnContext from '../context/ColumnContext';
import TaskContext from '../context/TaskContext';
import getColumnIndex, { getTaskIndex } from '../utils/utils';
import TaskComments from './TaskComments';
import TaskDescription from './TaskDescription';
import TaskTitle from './TaskTitle';

interface TaskDetailsProps {
  showTaskDetails: boolean;
  setShowTaskDetails: (arg: boolean) => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = (props) => {
  const { showTaskDetails, setShowTaskDetails } = props;

  const { board, saveBoard } = useContext(BoardContext);
  const { columnId, columnTitle } = useContext(ColumnContext);
  const { taskId, taskAuthorName } = useContext(TaskContext);

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
        <TaskTitle />
        <div className="border rounded-1 p-1 mb-1">column: {columnTitle}</div>
        <div className="border rounded-1 p-1 mb-1">
          author: {taskAuthorName}
        </div>
        <TaskDescription />
        <TaskComments />
      </Modal.Body>
    </Modal>
  );
};

export default TaskDetails;
