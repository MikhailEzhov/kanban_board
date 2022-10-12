import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { PlusLg } from 'react-bootstrap-icons';
import AddTask from './AddTask';

interface ColumnFooterProps {
  columnId: string;
}

const ColumnFooter: React.FC<ColumnFooterProps> = ({ columnId }) => {
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
      />
    </div>
  );
};

export default ColumnFooter;
