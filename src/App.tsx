import React, { useEffect, useMemo, useState } from 'react';
import Board from './components/Board';
import NavBar from './components/Navbar';
import UserRegistration from './components/UserRegistration';
import { IAuthorizedUser } from './types/types';
import AuthUserContext from './context/AuthUserContext';

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

  const value = useMemo(
    () => ({
      authorizedUser,
    }),
    [authorizedUser]
  );

  return authorizedUser ? (
    <AuthUserContext.Provider value={value}>
      <NavBar />
      <Board />
    </AuthUserContext.Provider>
  ) : (
    <UserRegistration setUserFromLocalStorage={setUserFromLocalStorage} />
  );
};

export default App;
