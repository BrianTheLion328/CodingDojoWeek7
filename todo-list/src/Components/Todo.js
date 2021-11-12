import React from 'react'
import {ACTIONS} from '../App'
import '../App.css'

export default function Todo({ todo, dispatch }) {
    return (
        <div className="todo">
           <span style={ { backgroundColor: todo.complete ? "skyblue" : "pink" } } className="todoName"> {todo.name} </span>
           <button className="btn" onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
           <button className="btn" onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
        </div>
    )
}
