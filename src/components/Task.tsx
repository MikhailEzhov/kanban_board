import React, { useContext, useState, useMemo } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { CaretLeft, CaretRight, Chat } from 'react-bootstrap-icons';
import { ITask } from '../types/types';
import BoardContext from '../context/BoardContext';
import ColumnContext from '../context/ColumnContext';
import TaskContext from '../context/TaskContext';
import TaskDetails from './TaskDetails';
import getColumnIndex, { getTaskIndex } from '../utils/utils';

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = (props) => {
  const { task } = props;

  const { board, saveBoard } = useContext(BoardContext);
  const { columnId } = useContext(ColumnContext);

  const [showTaskDetails, setShowTaskDetails] = useState<boolean>(false);

  const relocationTask = (taskId: string, direction: string) => {
    const columnIndex = getColumnIndex(board, columnId);
    const taskIndex = getTaskIndex(board, columnIndex, task.id);
    const copyTask = board[columnIndex].tasks[taskIndex];
    const newBoard = [...board];
    newBoard[columnIndex].tasks.splice(taskIndex, 1);
    if (direction === 'next') {
      newBoard[columnIndex + 1].tasks.push(copyTask);
      saveBoard(newBoard);
    } else {
      newBoard[columnIndex - 1].tasks.push(copyTask);
      saveBoard(newBoard);
    }
  };

  const value = useMemo(
    () => ({
      taskId: task.id,
      taskTitle: task.title,
      taskDescription: task.description,
      taskAuthorId: task.authorId,
      taskAuthorName: task.authorName,
      taskComments: task.comments,
    }),
    [task.comments, task.description, task.id, task.title]
  );

  return (
    <TaskContext.Provider value={value}>
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
            <ButtonGroup size="sm" onClick={(e) => e.stopPropagation()}>
              <Button
                variant="outline-secondary"
                size="sm"
                disabled={columnId === board[0].id}
                onClick={() => relocationTask(task.id, 'back')}
              >
                <CaretLeft />
              </Button>
              <Button
                variant="outline-secondary"
                size="sm"
                disabled={columnId === board[board.length - 1].id}
                onClick={() => relocationTask(task.id, 'next')}
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
    </TaskContext.Provider>
  );
};

export default Task;
