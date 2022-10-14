import { createContext } from 'react';
import { IComment } from '../types/types';

interface ITaskContext {
  taskId: string;
  taskTitle: string;
  taskDescription: string;
  taskAuthorId: string | undefined;
  taskAuthorName: string | undefined;
  taskComments: IComment[];
}

const TaskContext = createContext({} as ITaskContext);

export default TaskContext;
