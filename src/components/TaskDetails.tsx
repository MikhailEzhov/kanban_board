import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PlusLg, Pen } from 'react-bootstrap-icons';
import { ITask } from '../types/types';
import BoardContext from '../context/BoardContext';
import Comment from './Comment';
import TaskDescription from './TaskDescription';

interface TaskDetailsProps {
  showTaskDetails: boolean;
  setShowTaskDetails: (arg: boolean) => void;
  task: ITask;
  columnId: string;
}

const TaskDetails: React.FC<TaskDetailsProps> = (props) => {
  const { showTaskDetails, setShowTaskDetails, task, columnId } = props;

  const { board, saveBoard } = useContext(BoardContext);

  const columnIndex = board.findIndex((column) => column.id === columnId);

  const deleteTask = (idTask: string) => {
    const taskIndex = board[columnIndex].tasks.findIndex(
      (_task) => _task.id === idTask
    );
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
          onClick={() => deleteTask(task.id)}
        >
          delete
        </Button>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex gap-2 align-items-start justify-content-between border rounded-1 p-1 mb-1">
          <p className="m-0 align-self-center">
            <b>{task.title}</b>
          </p>
          <Button variant="outline-secondary" size="sm">
            <Pen />
          </Button>
        </div>

        <div className="border rounded-1 p-1 mb-1">
          column: {board[columnIndex].title}
        </div>

        <div className="border rounded-1 p-1 mb-1">
          author: {task.authorName}
        </div>

        <TaskDescription task={task} columnIndex={columnIndex} />

        <div className="border rounded-1 p-1 mb-1">
          <div className="d-flex gap-2 align-items-center justify-content-between pb-1">
            <b>comments: </b>
            <Button variant="outline-secondary" size="sm">
              <PlusLg />
            </Button>
          </div>
          {task.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TaskDetails;
