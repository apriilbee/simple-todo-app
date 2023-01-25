import React from 'react';
import Button from 'react-bootstrap/Button'
import { FaTrashAlt } from 'react-icons/fa';

function TodoRowItem(props) {
  return (
    <tr>
      <th scope='row'>{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
      <td> 
        <Button variant='danger' size='sm' onClick={() => props.deleteTodo(props.rowNumber)}>  
            <FaTrashAlt/>
        </Button>
      </td>
    </tr>
  )
}


export default TodoRowItem;