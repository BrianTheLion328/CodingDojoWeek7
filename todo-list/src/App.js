import React, { useState, useReducer} from 'react'
import Todo from './Components/Todo';
import './App.css'


export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id){
          return {...todo, complete: !todo.complete}
        } else {
          return todo;
        }
      })
    case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function newTodo(name) {
  return (
    {id: Date.now(), name: name, complete: false}
  )
}

export default function App() {
  const [name, setName] = useState("")
  const [todos, dispatch] = useReducer(reducer, [])

const handleSubmit = (e) => {
  e.preventDefault();

  dispatch( {type: ACTIONS.ADD_TODO, payload: { name: name} } )

  setName("")
}

  return (
    <div className="App">
      <form className="form-input" onSubmit={handleSubmit}>
        <label>Enter a New Todo</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="Add Todo"/>
      </form>
      <p>Pink = incomplete | Blue = completed</p>
      <div className="all-todos">
        {todos.map((todo, id) => {
          return <Todo key={id} todo={todo} dispatch={dispatch}/>
        })}
      </div>
    </div>
  )
}
