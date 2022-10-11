import React from 'react';
import { Col } from 'react-bootstrap';
import { IAuthorizedUser, IBoard, IColumn } from '../types/types';
import ColumnFooter from './ColumnFooter';
import ColumnHeader from './ColumnHeader';
import Task from './Task';

interface ColumnProps {
  column: IColumn;
  board: IBoard;
  saveBoard: (newBoard: IBoard) => void;
  authorizedUser: IAuthorizedUser;
}

const Column: React.FC<ColumnProps> = ({
  column,
  board,
  saveBoard,
  authorizedUser,
}) => {
  const firstСolumnId = board[0].id;
  const lastСolumnId = board[board.length - 1].id;

  return (
    <Col
      style={{ background: '#e3e4e6', height: 'min-content' }}
      className="rounded-1 m-2 p-2"
    >
      <ColumnHeader column={column} board={board} saveBoard={saveBoard} />

      {column.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          firstСolumnId={firstСolumnId}
          lastСolumnId={lastСolumnId}
          columnId={column.id}
          board={board}
          saveBoard={saveBoard}
        />
      ))}

      <ColumnFooter
        columnId={column.id}
        authorizedUser={authorizedUser}
        board={board}
        saveBoard={saveBoard}
      />
    </Col>
  );
};

export default Column;
