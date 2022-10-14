import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { PlusLg } from 'react-bootstrap-icons';
import AddTask from './AddTask';

const ColumnFooter: React.FC = () => {
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

      <AddTask showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
    </div>
  );
};

export default ColumnFooter;
