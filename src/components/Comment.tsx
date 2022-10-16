import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Pen, Trash3 } from 'react-bootstrap-icons';
import { IComment } from '../types/types';
import AuthUserContext from '../context/AuthUserContext';
import EditCommentText from './EditCommentText';

interface CommentProps {
  comment: IComment;
  renameComment: (valueComment: string, commentId: string) => void;
  deleteComment: (commentId: string) => void;
}

const Comment: React.FC<CommentProps> = (props) => {
  const { comment, renameComment, deleteComment } = props;

  const { authorizedUser } = useContext(AuthUserContext);

  const [showEditCommentText, setShowEditCommentText] =
    useState<boolean>(false);

  const displayButton =
    comment.authorId === authorizedUser?.userId ? 'd-inline-block' : 'd-none';

  return (
    <div className="border rounded-1 p-1">
      <i>{comment.authorName}</i>

      {showEditCommentText === false ? (
        <div className="d-flex gap-1 align-items-start justify-content-between">
          <p className="m-0">
            <small>{comment.authorText}</small>
          </p>
          <div className="d-flex gap-1 flex-wrap justify-content-end">
            <Button
              variant="outline-secondary"
              size="sm"
              className={displayButton}
              onClick={() => setShowEditCommentText(true)}
            >
              <Pen />
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              className={displayButton}
              onClick={() => deleteComment(comment.id)}
            >
              <Trash3 />
            </Button>
          </div>
        </div>
      ) : (
        <EditCommentText
          renameComment={renameComment}
          setShowEditCommentText={setShowEditCommentText}
          commentAuthorText={comment.authorText}
          commentId={comment.id}
        />
      )}
    </div>
  );
};

export default Comment;
