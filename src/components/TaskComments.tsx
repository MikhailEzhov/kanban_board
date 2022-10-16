import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { PlusLg } from 'react-bootstrap-icons';
import { v4 as uuidv4 } from 'uuid';
import BoardContext from '../context/BoardContext';
import ColumnContext from '../context/ColumnContext';
import TaskContext from '../context/TaskContext';
import AuthUserContext from '../context/AuthUserContext';
import getColumnIndex, { getTaskIndex } from '../utils/utils';
import AddComment from './AddComment';
import Comment from './Comment';

const TaskComments: React.FC = () => {
  const { board, saveBoard } = useContext(BoardContext);
  const { columnId } = useContext(ColumnContext);
  const { taskComments, taskId } = useContext(TaskContext);
  const { authorizedUser } = useContext(AuthUserContext);

  const [showComponentAddComment, setShowComponentAddComment] =
    useState<boolean>(false);

  const addComment = (valueComment: string) => {
    if (valueComment.length > 0) {
      const newComment = {
        id: uuidv4(),
        authorId: authorizedUser?.userId,
        authorName: authorizedUser?.userName,
        authorText: valueComment,
      };
      const columnIndex = getColumnIndex(board, columnId);
      const taskIndex = getTaskIndex(board, columnIndex, taskId);
      const newBoard = [...board];
      newBoard[columnIndex].tasks[taskIndex].comments.push(newComment);
      saveBoard(newBoard);
    }
  };

  const deleteComment = (commentId: string) => {
    const columnIndex = getColumnIndex(board, columnId);
    const taskIndex = getTaskIndex(board, columnIndex, taskId);
    const commentIndex = board[columnIndex].tasks[taskIndex].comments.findIndex(
      (comment) => comment.id === commentId
    );
    const newBoard = [...board];
    newBoard[columnIndex].tasks[taskIndex].comments.splice(commentIndex, 1);
    saveBoard(newBoard);
  };

  const renameComment = (valueComment: string, commentId: string) => {
    const columnIndex = getColumnIndex(board, columnId);
    const taskIndex = getTaskIndex(board, columnIndex, taskId);
    const commentIndex = board[columnIndex].tasks[taskIndex].comments.findIndex(
      (comment) => comment.id === commentId
    );
    const initialComment =
      board[columnIndex].tasks[taskIndex].comments[commentIndex].authorText;
    if (initialComment !== valueComment) {
      const newBoard = [...board];
      newBoard[columnIndex].tasks[taskIndex].comments[commentIndex].authorText =
        valueComment;
      saveBoard(newBoard);
    }
  };

  const addButton =
    showComponentAddComment === false ? (
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => setShowComponentAddComment(true)}
      >
        <PlusLg />
      </Button>
    ) : null;

  return (
    <div className="border rounded-1 p-1 mb-1">
      <div className="d-flex gap-2 align-items-center justify-content-between pb-1">
        <b>comments: </b>
        {addButton}
      </div>

      {showComponentAddComment === true ? (
        <AddComment
          setShowComponentAddComment={setShowComponentAddComment}
          addComment={addComment}
        />
      ) : null}

      {taskComments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          renameComment={renameComment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
};

export default TaskComments;
