import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

interface EditCommentTextProps {
  renameComment: (valueComment: string, commentId: string) => void;
  setShowEditCommentText: (arg: boolean) => void;
  commentAuthorText: string;
  commentId: string;
}

const EditCommentText: React.FC<EditCommentTextProps> = (props) => {
  const {
    renameComment,
    setShowEditCommentText,
    commentAuthorText,
    commentId,
  } = props;

  const [valueCommentAuthorText, setValueCommentAuthorText] =
    useState<string>(commentAuthorText);

  return (
    <div className="d-flex gap-2 align-items-start justify-content-between mt-1 mb-1">
      <Form.Control
        autoFocus
        as="textarea"
        type="text"
        value={valueCommentAuthorText}
        onChange={(e) => setValueCommentAuthorText(e.target.value)}
      />
      <Button
        variant="primary"
        onClick={() => {
          renameComment(valueCommentAuthorText, commentId);
          setShowEditCommentText(false);
        }}
      >
        save
      </Button>
    </div>
  );
};

export default EditCommentText;
