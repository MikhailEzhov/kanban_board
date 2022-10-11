import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { IBoard } from '../types/types';
import initialData from '../initialData';
import Column from './Column';

const Board: React.FC = () => {
  const [board, setBoard] = useState<IBoard>(
    // @ts-ignore
    JSON.parse(localStorage.getItem('board')) || initialData
  );

  const saveBoard = (newBoard: IBoard) => {
    localStorage.setItem('board', JSON.stringify(newBoard));
    setBoard(newBoard);
  };

  return (
    <Container>
      <Row className="mt-3">
        {board.map((column) => (
          <Column
            key={column.id}
            column={column}
            board={board}
            saveBoard={saveBoard}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Board;
