import React from 'react'
import {ACTIONS} from '../App'

export default function Todo({ todo, dispatch }) {
    return (
        <div>
           <span style={ { backgroundColor: todo.complete ? "skyblue" : "pink" } } className="todoName"> {todo.name} </span>
           <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle Todo</button>
           <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete Todo</button>
        </div>
    )
}
