import React from 'react';
import { Button } from 'react-bootstrap';
import { Pen, PlusLg, Trash3 } from 'react-bootstrap-icons';
import { ITask } from '../types/types';

interface TaskDescriptionProps {
  task: ITask;
}

const TaskDescription: React.FC<TaskDescriptionProps> = ({ task }) => {
  return (
    <div className="d-flex gap-2 align-items-start justify-content-between border rounded-1 p-1 mb-1">
      <p className="m-0 align-self-center">
        <b>description: </b>
        {task.description}
      </p>
      <div className="d-flex gap-1 flex-wrap justify-content-end">
        {task.description.length < 1 ? (
          <Button variant="outline-secondary" size="sm">
            <PlusLg />
          </Button>
        ) : (
          <>
            <Button variant="outline-secondary" size="sm">
              <Pen />
            </Button>
            <Button variant="outline-secondary" size="sm">
              <Trash3 />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskDescription;
