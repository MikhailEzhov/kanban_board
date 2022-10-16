import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Pen, Trash3 } from 'react-bootstrap-icons';
import { IComment } from '../types/types';
import AuthUserContext from '../context/AuthUserContext';

interface CommentProps {
  comment: IComment;
}

const Comment: React.FC<CommentProps> = (props) => {
  const { comment } = props;

  const { authorizedUser } = useContext(AuthUserContext);

  const displayButton =
    comment.authorId === authorizedUser?.userId ? 'd-inline-block' : 'd-none';

  return (
    <div className="border rounded-1 p-1">
      <i>{comment.authorName}</i>
      <div className="d-flex gap-1 align-items-start justify-content-between">
        <p className="m-0">
          <small>{comment.authorText}</small>
        </p>
        <div className="d-flex gap-1 flex-wrap justify-content-end">
          <Button
            variant="outline-secondary"
            size="sm"
            className={displayButton}
          >
            <Pen />
          </Button>
          <Button
            variant="outline-secondary"
            size="sm"
            className={displayButton}
          >
            <Trash3 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
