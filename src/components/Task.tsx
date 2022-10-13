import React, { useContext, useState } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { CaretLeft, CaretRight, Chat } from 'react-bootstrap-icons';
import { ITask } from '../types/types';
import BoardContext from '../context/BoardContext';
import TaskDetails from './TaskDetails';

interface TaskProps {
  task: ITask;
  firstСolumnId: string;
  lastСolumnId: string;
  columnId: string;
}

const Task: React.FC<TaskProps> = (props) => {
  const { task, firstСolumnId, lastСolumnId, columnId } = props;

  const { board, saveBoard } = useContext(BoardContext);

  const [showTaskDetails, setShowTaskDetails] = useState<boolean>(false);

  const incrementTask = (taskId: string) => {
    const columnIndex = board.findIndex((column) => column.id === columnId);
    const taskIndex = board[columnIndex].tasks.findIndex(
      (_task) => _task.id === taskId
    );
    const newBoard = [...board];
    const copyTask = board[columnIndex].tasks[taskIndex];
    newBoard[columnIndex].tasks.splice(taskIndex, 1);
    newBoard[columnIndex + 1].tasks.push(copyTask);
    saveBoard(newBoard);
  };

  const decrementTask = (taskId: string) => {
    const columnIndex = board.findIndex((column) => column.id === columnId);
    const taskIndex = board[columnIndex].tasks.findIndex(
      (_task) => _task.id === taskId
    );
    const newBoard = [...board];
    const copyTask = board[columnIndex].tasks[taskIndex];
    newBoard[columnIndex].tasks.splice(taskIndex, 1);
    newBoard[columnIndex - 1].tasks.push(copyTask);
    saveBoard(newBoard);
  };

  return (
    <>
      <Card
        className="bg-light border mt-2"
        onClick={() => setShowTaskDetails(true)}
        onKeyPress={() => setShowTaskDetails(true)}
        role="button"
        tabIndex={0}
      >
        <Card.Body>
          <Card.Title>{task.title}</Card.Title>

          <div className="d-flex justify-content-between gap-1">
            <ButtonGroup size="sm">
              <Button
                variant="outline-secondary"
                size="sm"
                disabled={columnId === firstСolumnId}
                onClick={(e) => {
                  decrementTask(task.id);
                  e.stopPropagation();
                }}
              >
                <CaretLeft />
              </Button>
              <Button
                variant="outline-secondary"
                size="sm"
                disabled={columnId === lastСolumnId}
                onClick={(e) => {
                  incrementTask(task.id);
                  e.stopPropagation();
                }}
              >
                <CaretRight />
              </Button>
            </ButtonGroup>

            {task.comments.length ? (
              <div className="d-flex align-items-center gap-1">
                <Chat />
                <span>{task.comments.length}</span>
              </div>
            ) : null}
          </div>
        </Card.Body>
      </Card>

      <TaskDetails
        showTaskDetails={showTaskDetails}
        setShowTaskDetails={setShowTaskDetails}
      />
    </>
  );
};

export default Task;
