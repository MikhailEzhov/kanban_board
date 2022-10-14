import React, { useMemo } from 'react';
import { Col } from 'react-bootstrap';
import { IColumn } from '../types/types';
import ColumnFooter from './ColumnFooter';
import ColumnHeader from './ColumnHeader';
import Task from './Task';
import ColumnContext from '../context/ColumnContext';

interface ColumnProps {
  column: IColumn;
}

const Column: React.FC<ColumnProps> = (props) => {
  const { column } = props;

  const value = useMemo(
    () => ({
      columnId: column.id,
      columnTitle: column.title,
    }),
    [column.title]
  );

  return (
    <ColumnContext.Provider value={value}>
      <Col
        style={{
          background: '#e3e4e6',
          height: 'min-content',
          minWidth: '250px',
        }}
        className="rounded-1 m-2 p-2"
      >
        <ColumnHeader />

        {column.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}

        <ColumnFooter />
      </Col>
    </ColumnContext.Provider>
  );
};

export default Column;
