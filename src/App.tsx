import React, { useEffect, useState } from 'react';
import Board from './components/Board';
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
      <Board authorizedUser={authorizedUser} />
    </>
  ) : (
    <UserRegistration setUserFromLocalStorage={setUserFromLocalStorage} />
  );
};

export default App;
