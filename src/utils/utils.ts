import { IBoard } from '../types/types';

export default function getColumnIndex(
  board: IBoard,
  columnId: string
): number {
  const columnIndex = board.findIndex((column) => column.id === columnId);
  return columnIndex;
}

export function getTaskIndex(
  board: IBoard,
  columnIndex: number,
  taskId: string
): number {
  const taskIndex = board[columnIndex].tasks.findIndex(
    (task) => task.id === taskId
  );
  return taskIndex;
}
