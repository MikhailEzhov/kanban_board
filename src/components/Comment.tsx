import React from 'react';
import { Button } from 'react-bootstrap';
import { Pen, Trash3 } from 'react-bootstrap-icons';
import { IComment } from '../types/types';

interface CommentProps {
  comment: IComment;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="border rounded-1 p-1">
      <i>{comment.authorName}</i>
      <div className="d-flex gap-1 align-items-start justify-content-between">
        <p className="m-0">
          <small>{comment.authorText}</small>
        </p>
        <div className="d-flex gap-1 flex-wrap justify-content-end">
          <Button variant="outline-secondary" size="sm">
            <Pen />
          </Button>
          <Button variant="outline-secondary" size="sm">
            <Trash3 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
