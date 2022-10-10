import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { IColumn } from '../types/types';

interface ModalEditColumnProps {
  indexColumn: string | number;
  setIndexColumn: (arg: string | number) => void;
  columns: IColumn[];
  setСolumns: (arg: IColumn[]) => void;
}

const ModalEditColumn: React.FC<ModalEditColumnProps> = ({
  indexColumn,
  setIndexColumn,
  columns,
  setСolumns,
}) => {
  const [columnTitle, setColumnTitle] = useState<string>('');

  useEffect(() => {
    setColumnTitle(columns[+indexColumn].title);
  }, [indexColumn]);

  const renameColumn = () => {
    const newColumns = [...columns];
    newColumns[+indexColumn].title = columnTitle;
    setСolumns(newColumns);
  };

  return (
    <Modal
      show={indexColumn !== ''}
      onHide={() => setIndexColumn('')}
      backdrop="static"
      keyboard
    >
      <Modal.Header closeButton>
        <Modal.Title>Сolumn editing</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          value={columnTitle}
          onChange={(e) => setColumnTitle(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            renameColumn();
            setIndexColumn('');
          }}
        >
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditColumn;
