import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PlusLg, Pen, Trash3 } from 'react-bootstrap-icons';

interface TaskDetailsProps {
  showTaskDetails: boolean;
  setShowTaskDetails: (arg: boolean) => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = (props) => {
  const { showTaskDetails, setShowTaskDetails } = props;

  return (
    <Modal
      show={showTaskDetails}
      onHide={() => setShowTaskDetails(false)}
      backdrop="static"
      keyboard
    >
      <Modal.Header closeButton>
        <Button variant="outline-danger" size="sm">
          delete
        </Button>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex gap-2 align-items-start justify-content-between border rounded-1 p-1 mb-1">
          <p className="m-0 align-self-center">
            <b>
              название карточки Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </b>
          </p>
          <Button variant="outline-secondary" size="sm">
            <Pen />
          </Button>
        </div>

        <div className="border rounded-1 p-1 mb-1">column:</div>

        <div className="border rounded-1 p-1 mb-1">author:</div>

        <div className="d-flex gap-2 align-items-start justify-content-between border rounded-1 p-1 mb-1">
          <p className="m-0 align-self-center">
            <b>description: </b>
          </p>
          <div className="d-flex gap-1 flex-wrap justify-content-end">
            <Button variant="outline-secondary" size="sm">
              <PlusLg />
            </Button>
            <Button variant="outline-secondary" size="sm">
              <Pen />
            </Button>
            <Button variant="outline-secondary" size="sm">
              <Trash3 />
            </Button>
          </div>
        </div>

        <div className="border rounded-1 p-1 mb-1">
          <div className="d-flex gap-2 align-items-center justify-content-between pb-1">
            <b>comments: </b>
            <Button variant="outline-secondary" size="sm">
              <PlusLg />
            </Button>
          </div>
          <div className="border rounded-1 p-1">
            <i>автор</i>
            <div className="d-flex gap-1 align-items-start justify-content-between">
              <p className="m-0">
                <small>
                  описание комментария Lorem ipsum dolor sit amet, consectetur
                  adipiscing
                </small>
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
          <div className="border rounded-1 p-1">
            <i>автор</i>
            <div className="d-flex gap-1 align-items-start justify-content-between">
              <p className="m-0">
                <small>
                  описание комментария Lorem ipsum dolor sit amet, consectetur
                  adipiscing
                </small>
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
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TaskDetails;
