import React, { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import AuthUserContext from '../context/AuthUserContext';

const NavBar: React.FC = () => {
  const { authorizedUser } = useContext(AuthUserContext);

  return (
    <Navbar style={{ background: '#0067a2' }} variant="dark">
      <Container>
        <Navbar.Brand href="#">kanban board</Navbar.Brand>
        <Navbar.Text className="justify-content-end">
          user: {authorizedUser?.userName}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavBar;
