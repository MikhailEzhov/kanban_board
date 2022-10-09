import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IColumn } from '../types/types';
import Task from './Task';

const Board: React.FC = () => {
  const [columns, setСolumns] = useState<IColumn[]>([
    {
      id: '1',
      title: 'TODO',
      tasks: [
        {
          id: '11',
          title: 'купить хлеб',
          description: 'description11',
          authorId: '555',
          authorName: 'misha',
          comments: [
            {
              id: '111',
              authorId: '555',
              authorName: 'misha',
              authorText: 'commentAuthorText111',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'In Progress',
      tasks: [
        {
          id: '22',
          title: 'выкинуть мусор сегодня',
          description: 'description22',
          authorId: '555',
          authorName: 'misha',
          comments: [
            {
              id: '222',
              authorId: '555',
              authorName: 'misha',
              authorText: 'commentAuthorText222',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'Testing',
      tasks: [
        {
          id: '33',
          title: 'погулять с собакой',
          description: 'description33',
          authorId: '555',
          authorName: 'misha',
          comments: [
            {
              id: '333',
              authorId: '555',
              authorName: 'misha',
              authorText: 'commentAuthorText333',
            },
          ],
        },
      ],
    },
    {
      id: '4',
      title: 'Done',
      tasks: [
        {
          id: '44',
          title: 'ещё ещё ещё',
          description: 'description44',
          authorId: '555',
          authorName: 'misha',
          comments: [
            {
              id: '444',
              authorId: '555',
              authorName: 'misha',
              authorText: 'commentAuthorText444',
            },
          ],
        },
        {
          id: '45',
          title: 'ещё ещё ещё5',
          description: 'description45',
          authorId: '555',
          authorName: 'misha',
          comments: [
            {
              id: '445',
              authorId: '555',
              authorName: 'misha',
              authorText: 'commentAuthorText445',
            },
          ],
        },
        {
          id: '46',
          title: 'ещё ещё ещё6',
          description: 'description46',
          authorId: '555',
          authorName: 'misha',
          comments: [
            {
              id: '446',
              authorId: '555',
              authorName: 'misha',
              authorText: 'commentAuthorText446',
            },
          ],
        },
      ],
    },
  ]);

  const removeTask = (idColumn: string, idTask: string) => {
    const columnIndex = columns.findIndex((column) => column.id === idColumn);
    const taskIndex = columns[columnIndex].tasks.findIndex(
      (task) => task.id === idTask
    );
    const newColumns = [...columns];
    newColumns[columnIndex].tasks.splice(taskIndex, 1);
    setСolumns(newColumns);
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
    setСolumns(newColumns);
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
    setСolumns(newColumns);
  };

  const firstColumn = columns[0].id;
  const lastColumn = columns[columns.length - 1].id;

  return (
    <Container>
      <Row className="mt-3">
        {columns.map((column) => (
          <Col
            style={{ background: '#e3e4e6' }}
            className="rounded-1 m-2 p-2"
            key={column.id}
          >
            <div>{column.title}</div>

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
  );
};

export default Board;
