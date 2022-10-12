import { createContext } from 'react';
import { IAuthorizedUser } from '../types/types';

interface IAuthUserContext {
  authorizedUser: IAuthorizedUser | null;
}

const AuthUserContext = createContext({} as IAuthUserContext);

export default AuthUserContext;
