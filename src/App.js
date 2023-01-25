import './App.css';
import React, {useState} from 'react';

import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';
import Header from './components/Header';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { RiAddCircleLine } from 'react-icons/ri';

function App() {

  const [todos, setTodos] = useState ([])
  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  const addTodo = (description, assigned) => {
    const newTodo = { 
      rowNumber: todos.length === 0 ? 1 : todos[todos.length-1].rowNumber+1 , 
      rowDescription: description, 
      rowAssigned: assigned
    }
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    })
    setTodos(filtered);
  }

  return (
    <div className='mt-5'>
      <Container >
        <Header/>
        <Button variant="primary" style={{ marginLeft: "auto" }} onClick={e => setShowNewTodoForm(!showNewTodoForm)}>
          Add New To-Do
        </Button>
        <TodoTable todos={todos} deleteTodo={deleteTodo}/> 
        <NewTodoForm addTodo={addTodo} showNewTodoForm={showNewTodoForm} handleClose={e => setShowNewTodoForm(!showNewTodoForm)}/> 
      </Container>
    </div>
  );
}

export default App;
