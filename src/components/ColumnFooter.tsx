import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { PlusLg } from 'react-bootstrap-icons';
import { IAuthorizedUser, IBoard } from '../types/types';
import AddTask from './AddTask';

interface ColumnFooterProps {
  columnId: string;
  authorizedUser: IAuthorizedUser;
  board: IBoard;
  saveBoard: (newBoard: IBoard) => void;
}

const ColumnFooter: React.FC<ColumnFooterProps> = ({
  columnId,
  authorizedUser,
  board,
  saveBoard,
}) => {
  const [showAddTask, setShowAddTask] = useState<boolean>(false);

  return (
    <div className="mt-2">
      <Button
        variant="light"
        size="sm"
        className="border"
        onClick={() => setShowAddTask(true)}
      >
        <PlusLg />
      </Button>

      <AddTask
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask}
        columnId={columnId}
        authorizedUser={authorizedUser}
        board={board}
        saveBoard={saveBoard}
      />
    </div>
  );
};

export default ColumnFooter;
