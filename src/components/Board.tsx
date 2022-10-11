import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThreeDots } from 'react-bootstrap-icons';
import { IColumn } from '../types/types';
import ModalEditColumn from './ModalEditColumn';
import Task from './Task';
import initialData from '../initialData';

const Board: React.FC = () => {
  const [columns, setСolumns] = useState<IColumn[]>(
    // @ts-ignore
    JSON.parse(localStorage.getItem('data')) || initialData
  );
  const [indexColumn, setIndexColumn] = useState<string | number>('');

  const setIndexColumnById = (idColumn: string) => {
    const columnIndex = columns.findIndex((column) => column.id === idColumn);
    setIndexColumn(columnIndex);
  };

  const saveColumns = (newColumns: IColumn[]) => {
    localStorage.setItem('data', JSON.stringify(newColumns));
    setСolumns(newColumns);
  };

  const removeTask = (idColumn: string, idTask: string) => {
    const columnIndex = columns.findIndex((column) => column.id === idColumn);
    const taskIndex = columns[columnIndex].tasks.findIndex(
      (task) => task.id === idTask
    );
    const newColumns = [...columns];
    newColumns[columnIndex].tasks.splice(taskIndex, 1);
    saveColumns(newColumns);
  };

  const incrementTask = (idColumn: string, idTask: string) => {
    const columnIndex = columns.findIndex((column) => column.id === idColumn);
    const taskIndex = columns[columnIndex].tasks.findIndex(
      (task) => task.id === idTask
    );
    const newColumns = [...columns];
    const copyTask = columns[columnIndex].tasks[taskIndex];
    newColumns[columnIndex].tasks.splice(taskIndex, 1);
    newColumns[columnIndex + 1].tasks.push(copyTask);
    saveColumns(newColumns);
  };

  const decrementTask = (idColumn: string, idTask: string) => {
    const columnIndex = columns.findIndex((column) => column.id === idColumn);
    const taskIndex = columns[columnIndex].tasks.findIndex(
      (task) => task.id === idTask
    );
    const newColumns = [...columns];
    const copyTask = columns[columnIndex].tasks[taskIndex];
    newColumns[columnIndex].tasks.splice(taskIndex, 1);
    newColumns[columnIndex - 1].tasks.push(copyTask);
    saveColumns(newColumns);
  };

  const firstColumn = columns[0].id;
  const lastColumn = columns[columns.length - 1].id;

  return (
    <>
      <Container>
        <Row className="mt-3">
          {columns.map((column) => (
            <Col
              style={{ background: '#e3e4e6', height: 'min-content' }}
              className="rounded-1 m-2 p-2"
              key={column.id}
            >
              <div className="d-flex justify-content-between">
                <strong>{column.title}</strong>
                <span
                  onClick={() => setIndexColumnById(column.id)}
                  onKeyPress={() => setIndexColumnById(column.id)}
                  role="button"
                  tabIndex={0}
                >
                  <ThreeDots />
                </span>
              </div>

              {column.tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  columnId={column.id}
                  firstColumn={firstColumn}
                  lastColumn={lastColumn}
                  removeTask={removeTask}
                  incrementTask={incrementTask}
                  decrementTask={decrementTask}
                />
              ))}
            </Col>
          ))}
        </Row>
      </Container>

      <ModalEditColumn
        indexColumn={indexColumn}
        setIndexColumn={setIndexColumn}
        columns={columns}
        saveColumns={saveColumns}
      />
    </>
  );
};

export default Board;
