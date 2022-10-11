import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { IBoard } from '../types/types';

interface EditColumnProps {
  showEditColumn: boolean;
  setShowEditColumn: (arg: boolean) => void;
  columnId: string;
  columnTitle: string;
  board: IBoard;
  saveBoard: (newBoard: IBoard) => void;
}

const EditColumn: React.FC<EditColumnProps> = (props) => {
  const {
    showEditColumn,
    setShowEditColumn,
    columnId,
    columnTitle,
    board,
    saveBoard,
  } = props;

  const [valueColumnTitle, setValueColumnTitle] = useState<string>(columnTitle);

  const renameColumn = () => {
    const columnIndex = board.findIndex((column) => column.id === columnId);
    const newBoard = [...board];
    newBoard[columnIndex].title = valueColumnTitle;
    saveBoard(newBoard);
  };

  return (
    <Modal
      show={showEditColumn}
      onHide={() => {
        setShowEditColumn(false);
        setValueColumnTitle(columnTitle);
      }}
      backdrop="static"
      keyboard
    >
      <Modal.Header closeButton>
        <Modal.Title>Сolumn editing</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          value={valueColumnTitle}
          onChange={(e) => setValueColumnTitle(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            renameColumn();
            setShowEditColumn(false);
          }}
        >
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditColumn;
