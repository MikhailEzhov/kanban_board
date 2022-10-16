import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import TaskContext from '../context/TaskContext';

interface EditTaskTitleProps {
  setShowEditTaskTitle: (arg: boolean) => void;
  renameTitle: (newDescription: string) => void;
}

const EditTaskTitle: React.FC<EditTaskTitleProps> = (props) => {
  const { setShowEditTaskTitle, renameTitle } = props;

  const { taskTitle } = useContext(TaskContext);

  const [valueTaskTitle, setValueTaskTitle] = useState<string>(taskTitle);

  return (
    <>
      <Form.Control
        autoFocus
        as="textarea"
        type="text"
        value={valueTaskTitle}
        onChange={(e) => setValueTaskTitle(e.target.value)}
      />
      <Button
        variant="primary"
        onClick={() => {
          renameTitle(valueTaskTitle);
          setShowEditTaskTitle(false);
        }}
      >
        save
      </Button>
    </>
  );
};

export default EditTaskTitle;
