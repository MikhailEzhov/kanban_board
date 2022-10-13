import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Pen, PlusLg, Trash3 } from 'react-bootstrap-icons';
import { ITask } from '../types/types';
import EditTaskDescription from './EditTaskDescription';
import BoardContext from '../context/BoardContext';

interface TaskDescriptionProps {
  task: ITask;
  columnIndex: number;
}

const TaskDescription: React.FC<TaskDescriptionProps> = (props) => {
  const { task, columnIndex } = props;

  const { board, saveBoard } = useContext(BoardContext);

  const [showEditTaskDescription, setShowEditTaskDescription] =
    useState<boolean>(false);

  const taskIndex = board[columnIndex].tasks.findIndex(
    (_task) => _task.id === task.id
  );

  const renameDescription = (newDescription: string) => {
    const newBoard = [...board];
    newBoard[columnIndex].tasks[taskIndex].description = newDescription;
    saveBoard(newBoard);
  };

  const deleteDescription = () => {
    const newBoard = [...board];
    newBoard[columnIndex].tasks[taskIndex].description = '';
    saveBoard(newBoard);
  };

  const buttons =
    task.description.length < 1 ? (
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => setShowEditTaskDescription(true)}
      >
        <PlusLg />
      </Button>
    ) : (
      <>
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => setShowEditTaskDescription(true)}
        >
          <Pen />
        </Button>
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={deleteDescription}
        >
          <Trash3 />
        </Button>
      </>
    );

  const content =
    showEditTaskDescription === false ? (
      <>
        <p className="m-0 align-self-center">
          <b>description: </b>
          {task.description}
        </p>
        <div className="d-flex gap-1 flex-wrap justify-content-end">
          {buttons}
        </div>
      </>
    ) : (
      <EditTaskDescription
        setShowEditTaskDescription={setShowEditTaskDescription}
        task={task}
        renameDescription={renameDescription}
      />
    );

  return (
    <div className="d-flex gap-2 align-items-start justify-content-between border rounded-1 p-1 mb-1">
      {content}
    </div>
  );
};

export default TaskDescription;
