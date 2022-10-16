import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

interface AddCommentProps {
  setShowComponentAddComment: (arg: boolean) => void;
  addComment: (valueComment: string) => void;
}

const AddComment: React.FC<AddCommentProps> = (props) => {
  const { setShowComponentAddComment, addComment } = props;

  const [valueComment, setValueComment] = useState<string>('');

  return (
    <div className="d-flex gap-2 align-items-start justify-content-between mb-1">
      <Form.Control
        autoFocus
        as="textarea"
        type="text"
        value={valueComment}
        onChange={(e) => setValueComment(e.target.value)}
      />
      <Button
        variant="primary"
        onClick={() => {
          addComment(valueComment);
          setShowComponentAddComment(false);
        }}
      >
        add
      </Button>
    </div>
  );
};

export default AddComment;
