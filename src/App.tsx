import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/Navbar';
import UserRegistration from './components/UserRegistration';
import { IAuthorizedUser } from './types/types';

const App: React.FC = () => {
  const [authorizedUser, setAuthorizedUser] = useState<IAuthorizedUser | null>(
    null
  );

  const setUserFromLocalStorage = () => {
    // @ts-ignore
    setAuthorizedUser(JSON.parse(localStorage.getItem('user')));
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUserFromLocalStorage();
    }
  }, []);

  return authorizedUser ? (
    <>
      <NavBar authorizedUser={authorizedUser} />
      <Container>
        <Row>
          <Col className="bg-primary m-1">1</Col>
          <Col className="bg-primary m-1">2</Col>
          <Col className="bg-primary m-1">3</Col>
          <Col className="bg-primary m-1">4</Col>
        </Row>
      </Container>
    </>
  ) : (
    <UserRegistration setUserFromLocalStorage={setUserFromLocalStorage} />
  );
};

export default App;
