import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { CaretLeft, CaretRight } from 'react-bootstrap-icons';
import { ITask } from '../types/types';

interface TaskProps {
  task: ITask;
  columnId: string;
  firstColumn: string;
  lastColumn: string;
  removeTask: (idColumn: string, idTask: string) => void;
  incrementTask: (idColumn: string, idTask: string) => void;
  decrementTask: (idColumn: string, idTask: string) => void;
}

const Task: React.FC<TaskProps> = ({
  task,
  columnId,
  firstColumn,
  lastColumn,
  removeTask,
  incrementTask,
  decrementTask,
}) => {
  return (
    <Card className="bg-light border mt-2">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>

        <div className="d-flex justify-content-between">
          <ButtonGroup size="sm">
            <Button
              variant="outline-secondary"
              size="sm"
              disabled={columnId === firstColumn}
              onClick={() => decrementTask(columnId, task.id)}
            >
              <CaretLeft />
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              disabled={columnId === lastColumn}
              onClick={() => incrementTask(columnId, task.id)}
            >
              <CaretRight />
            </Button>

            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => removeTask(columnId, task.id)}
            >
              x
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Task;
