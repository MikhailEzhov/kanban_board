export interface IAuthorizedUser {
  userName: string;
  userId: string;
}

export type IBoard = IColumn[];

export interface IColumn {
  id: string;
  title: string;
  tasks: ITask[];
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  authorId: string | undefined;
  authorName: string | undefined;
  comments: IComment[];
}

export interface IComment {
  id: string;
  authorId: string;
  authorName: string;
  authorText: string;
}
