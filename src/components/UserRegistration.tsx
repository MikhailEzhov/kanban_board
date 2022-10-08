import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { IAuthorizedUser } from '../types/types';

interface UserRegistrationProps {
  setUserFromLocalStorage: () => void;
}

const UserRegistration: React.FC<UserRegistrationProps> = (props) => {
  const { setUserFromLocalStorage } = props;

  const [validated, setValidated] = useState<boolean>(false);
  const [user, setUser] = useState<IAuthorizedUser>({
    userName: '',
    userId: '',
  });

  const registration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const newUser = {
        ...user,
        userId: uuidv4(),
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUserFromLocalStorage();
    }
  };

  return (
    <Modal show backdrop="static">
      <Modal.Header>
        <Modal.Title>Enter username</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={registration}>
          <Form.Group className="mb-3">
            <Form.Control
              required
              type="text"
              autoFocus
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
            />
          </Form.Group>
          <Button type="submit">submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UserRegistration;
