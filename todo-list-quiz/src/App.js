import './App.css';
import React, { useState, useReducer } from 'react';
import Todo from './Components/Todo';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

const newTodo = name => (
  {id: Date.now(), name: name, isComplete: false}
)

export function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, isComplete : !todo.isComplete}
        } else {
          return todo
        }
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos;
  }
}


const App = () => {
  const [name, setName] = useState("")
  const [todos, dispatch] = useReducer(reducer, [])

function handleSubmit(e) {
  e.preventDefault(e)

  dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name} })

  setName("")
}

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label> Create a new todo </label>
        <input onChange={(e) => setName(e.target.value)} type="text" className="typeInTodo" value={name} />
        <input type="submit" value="Add New Todo"/>
      </form>
      {todos.map((todo, id) => {
        return (
        <Todo key={id} todo={todo} dispatch={dispatch}/>
       )})}
    </div>
  );
}

export default App;
