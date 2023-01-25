import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';


function NewTodoForm(props) {

  const [description, setDescription] = useState('');
  const [assigned, setAssigned] = useState('');

  const submitTodo = () => {
    if (description !== '' && assigned !== ''){
      props.addTodo(description, assigned);
      setDescription("");
      setAssigned("");
      props.handleClose();
    }
  }

  return (
      <Modal show={props.showNewTodoForm} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add New To-Do </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Assigned</Form.Label>
              <Form.Control 
                type="text" 
                required 
                placeholder="Please Enter Assigned" 
                onChange={e => setAssigned(e.target.value)}
                value={assigned}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" 
                rows={3} 
                required 
                placeholder="Please Enter To-Do Description" 
                onChange={e => setDescription(e.target.value)}
                value={description}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          <Button variant='primary' onClick={submitTodo}>
            Add New To-Do
          </Button>
        </Modal.Footer>
      </Modal>
  ) 
}

export default NewTodoForm;