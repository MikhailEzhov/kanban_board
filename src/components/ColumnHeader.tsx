import React, { useState } from 'react';
import { ThreeDots } from 'react-bootstrap-icons';
import { IColumn } from '../types/types';
import EditColumn from './EditColumn';

interface ColumnHeaderProps {
  column: IColumn;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ column }) => {
  const [showEditColumn, setShowEditColumn] = useState<boolean>(false);

  return (
    <>
      <div className="d-flex justify-content-between">
        <strong>{column.title}</strong>
        <span
          onClick={() => setShowEditColumn(true)}
          onKeyPress={() => setShowEditColumn(true)}
          role="button"
          tabIndex={0}
        >
          <ThreeDots />
        </span>
      </div>

      <EditColumn
        showEditColumn={showEditColumn}
        setShowEditColumn={setShowEditColumn}
        columnId={column.id}
        columnTitle={column.title}
      />
    </>
  );
};

export default ColumnHeader;
