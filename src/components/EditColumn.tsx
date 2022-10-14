import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import BoardContext from '../context/BoardContext';
import getColumnIndex from '../utils/utils';
import ColumnContext from '../context/ColumnContext';

interface EditColumnProps {
  showEditColumn: boolean;
  setShowEditColumn: (arg: boolean) => void;
}

const EditColumn: React.FC<EditColumnProps> = (props) => {
  const { showEditColumn, setShowEditColumn } = props;

  const { columnId, columnTitle } = useContext(ColumnContext);

  const { board, saveBoard } = useContext(BoardContext);

  const [valueColumnTitle, setValueColumnTitle] = useState<string>(columnTitle);

  const renameColumn = () => {
    const columnIndex = getColumnIndex(board, columnId);
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
