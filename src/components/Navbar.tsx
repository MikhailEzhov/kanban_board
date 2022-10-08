import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { IAuthorizedUser } from '../types/types';

interface NavBarProps {
  authorizedUser: IAuthorizedUser;
}

const NavBar: React.FC<NavBarProps> = ({ authorizedUser }) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">kanban board</Navbar.Brand>
        <Navbar.Text className="justify-content-end">
          user: {authorizedUser.userName}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavBar;
