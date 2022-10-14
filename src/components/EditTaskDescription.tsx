import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import TaskContext from '../context/TaskContext';

interface EditTaskDescriptionProps {
  setShowEditTaskDescription: (arg: boolean) => void;
  renameDescription: (newDescription: string) => void;
}

const EditTaskDescription: React.FC<EditTaskDescriptionProps> = (props) => {
  const { setShowEditTaskDescription, renameDescription } = props;

  const { taskDescription } = useContext(TaskContext);

  const [valueTaskDescription, setValueTaskDescription] =
    useState<string>(taskDescription);

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
