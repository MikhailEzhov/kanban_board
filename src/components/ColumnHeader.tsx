import React, { useState, useContext } from 'react';
import { ThreeDots } from 'react-bootstrap-icons';
import EditColumn from './EditColumn';
import ColumnContext from '../context/ColumnContext';

const ColumnHeader: React.FC = () => {
  const { columnTitle } = useContext(ColumnContext);

  const [showEditColumn, setShowEditColumn] = useState<boolean>(false);

  return (
    <>
      <div className="d-flex justify-content-between">
        <strong>{columnTitle}</strong>
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
      />
    </>
  );
};

export default ColumnHeader;
