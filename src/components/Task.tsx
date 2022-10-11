import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { CaretLeft, CaretRight } from 'react-bootstrap-icons';
import { IBoard, ITask } from '../types/types';

interface TaskProps {
  task: ITask;
  firstСolumnId: string;
  lastСolumnId: string;
  columnId: string;
  board: IBoard;
  saveBoard: (newBoard: IBoard) => void;
}

const Task: React.FC<TaskProps> = (props) => {
  const { task, firstСolumnId, lastСolumnId, columnId, board, saveBoard } =
    props;

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
    <Card className="bg-light border mt-2">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>

        <div className="d-flex justify-content-between">
          <ButtonGroup size="sm">
            <Button
              variant="outline-secondary"
              size="sm"
              disabled={columnId === firstСolumnId}
              onClick={() => decrementTask(task.id)}
            >
              <CaretLeft />
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              disabled={columnId === lastСolumnId}
              onClick={() => incrementTask(task.id)}
            >
              <CaretRight />
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Task;
