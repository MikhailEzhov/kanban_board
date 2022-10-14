import { createContext } from 'react';

interface IColumnContext {
  columnId: string;
  columnTitle: string;
}

const ColumnContext = createContext({} as IColumnContext);

export default ColumnContext;
