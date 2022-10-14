import React, { useState, useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from '../types/types';
import AuthUserContext from '../context/AuthUserContext';
import BoardContext from '../context/BoardContext';
import ColumnContext from '../context/ColumnContext';
import getColumnIndex from '../utils/utils';

interface AddTaskProps {
  showAddTask: boolean;
  setShowAddTask: (arg: boolean) => void;
}

const AddTask: React.FC<AddTaskProps> = (props) => {
  const { showAddTask, setShowAddTask } = props;

  const { board, saveBoard } = useContext(BoardContext);
  const { authorizedUser } = useContext(AuthUserContext);
  const { columnId } = useContext(ColumnContext);

  const [validated, setValidated] = useState<boolean>(false);
  const [task, setTask] = useState<{ title: string; description: string }>({
    title: '',
    description: '',
  });

  const addTask = (newTask: ITask) => {
    const columnIndex = getColumnIndex(board, columnId);
    const newBoard = [...board];
    newBoard[columnIndex].tasks.push(newTask);
    saveBoard(newBoard);
  };

  const resetComponent = () => {
    setValidated(false);
    setTask({
      title: '',
      description: '',
    });
    setShowAddTask(false);
  };

  const submitTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const newTask = {
        ...task,
        id: uuidv4(),
        authorId: authorizedUser?.userId,
        authorName: authorizedUser?.userName,
        comments: [],
      };
      addTask(newTask);
      resetComponent();
    }
  };

  return (
    <Modal
      show={showAddTask}
      onHide={() => resetComponent()}
      backdrop="static"
      keyboard
    >
      <Modal.Header closeButton>
        <Modal.Title>Add task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={submitTask}>
          <Form.Group className="mb-3">
            <Form.Label>Enter title</Form.Label>
            <Form.Control
              as="textarea"
              required
              type="text"
              autoFocus
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              value={task.description}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
            />
          </Form.Group>
          <Button type="submit">add</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTask;
