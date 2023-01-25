import React from 'react';
import Table from 'react-bootstrap/Table';
import TodoRowItem from './TodoRowItem';

function TodoTable(props) {

  return (
    <div className='mt-3'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Description</th>
            <th scope='col'>Assigned</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          { props.todos.map ( todo => (
              <TodoRowItem
                key={todo.rowNumber}
                rowNumber={todo.rowNumber}
                rowDescription={todo.rowDescription}
                rowAssigned={todo.rowAssigned}
                deleteTodo={props.deleteTodo}
              />
          ))}
        </tbody>
      </Table>  
    </div>
   
  )
}

export default TodoTable;