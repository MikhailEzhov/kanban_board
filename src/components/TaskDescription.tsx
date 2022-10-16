import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Pen, PlusLg, Trash3 } from 'react-bootstrap-icons';
import EditTaskDescription from './EditTaskDescription';
import BoardContext from '../context/BoardContext';
import ColumnContext from '../context/ColumnContext';
import TaskContext from '../context/TaskContext';
import getColumnIndex, { getTaskIndex } from '../utils/utils';

const TaskDescription: React.FC = () => {
  const { board, saveBoard } = useContext(BoardContext);
  const { columnId } = useContext(ColumnContext);
  const { taskDescription, taskId } = useContext(TaskContext);

  const [showEditTaskDescription, setShowEditTaskDescription] =
    useState<boolean>(false);

  const renameDescription = (newDescription: string) => {
    const columnIndex = getColumnIndex(board, columnId);
    const taskIndex = getTaskIndex(board, columnIndex, taskId);
    const initialDescription = board[columnIndex].tasks[taskIndex].description;
    if (initialDescription !== newDescription) {
      const newBoard = [...board];
      newBoard[columnIndex].tasks[taskIndex].description = newDescription;
      saveBoard(newBoard);
    }
  };

  const deleteDescription = () => {
    const columnIndex = getColumnIndex(board, columnId);
    const taskIndex = getTaskIndex(board, columnIndex, taskId);
    const newBoard = [...board];
    newBoard[columnIndex].tasks[taskIndex].description = '';
    saveBoard(newBoard);
  };

  const buttons =
    taskDescription.length < 1 ? (
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
          {taskDescription}
        </p>
        <div className="d-flex gap-1 flex-wrap justify-content-end">
          {buttons}
        </div>
      </>
    ) : (
      <EditTaskDescription
        setShowEditTaskDescription={setShowEditTaskDescription}
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
