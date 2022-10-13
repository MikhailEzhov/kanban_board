import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ITask } from '../types/types';

interface EditTaskDescriptionProps {
  setShowEditTaskDescription: (arg: boolean) => void;
  task: ITask;
  renameDescription: (newDescription: string) => void;
}

const EditTaskDescription: React.FC<EditTaskDescriptionProps> = (props) => {
  const { setShowEditTaskDescription, task, renameDescription } = props;

  const [valueTaskDescription, setValueTaskDescription] = useState<string>(
    task.description
  );

  return (
    <>
      <Form.Control
        autoFocus
        as="textarea"
        type="text"
        value={valueTaskDescription}
        onChange={(e) => setValueTaskDescription(e.target.value)}
      />
      <Button
        variant="primary"
        onClick={() => {
          renameDescription(valueTaskDescription);
          setShowEditTaskDescription(false);
        }}
      >
        save
      </Button>
    </>
  );
};

export default EditTaskDescription;
