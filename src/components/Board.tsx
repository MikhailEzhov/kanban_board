import React, { useMemo, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { IBoard } from '../types/types';
import initialData from '../initialData';
import Column from './Column';
import BoardContext from '../context/BoardContext';

const Board: React.FC = () => {
  const [board, setBoard] = useState<IBoard>(
    // @ts-ignore
    JSON.parse(localStorage.getItem('board')) || initialData
  );

  const saveBoard = (newBoard: IBoard) => {
    localStorage.setItem('board', JSON.stringify(newBoard));
    setBoard(newBoard);
  };

  const value = useMemo(
    () => ({
      board,
      saveBoard,
    }),
    [board]
  );

  return (
    <BoardContext.Provider value={value}>
      <Container>
        <Row className="mt-3">
          {board.map((column) => (
            <Column key={column.id} column={column} />
          ))}
        </Row>
      </Container>
    </BoardContext.Provider>
  );
};

export default Board;
