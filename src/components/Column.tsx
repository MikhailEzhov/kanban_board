import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { IColumn } from '../types/types';
import ColumnFooter from './ColumnFooter';
import ColumnHeader from './ColumnHeader';
import Task from './Task';
import BoardContext from '../context/BoardContext';

interface ColumnProps {
  column: IColumn;
}

const Column: React.FC<ColumnProps> = ({ column }) => {
  const { board } = useContext(BoardContext);

  const firstСolumnId = board[0].id;
  const lastСolumnId = board[board.length - 1].id;

  return (
    <Col
      style={{
        background: '#e3e4e6',
        height: 'min-content',
        minWidth: '250px',
      }}
      className="rounded-1 m-2 p-2"
    >
      <ColumnHeader column={column} />

      {column.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          firstСolumnId={firstСolumnId}
          lastСolumnId={lastСolumnId}
          columnId={column.id}
        />
      ))}

      <ColumnFooter columnId={column.id} />
    </Col>
  );
};

export default Column;
