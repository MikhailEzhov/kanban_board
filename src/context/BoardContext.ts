import { createContext } from 'react';
import { IBoard } from '../types/types';

interface IBoardContext {
  board: IBoard;
  saveBoard: (newBoard: IBoard) => void;
}

const BoardContext = createContext({} as IBoardContext);

export default BoardContext;
