import React from 'react'
import { ACTIONS } from '../App'

export default function Todo( {todo, dispatch}) {
    return (
        <div className="todo">
            <span style={ {backgroundColor: todo.isComplete ? "lightgreen" : "pink"} } className="todoTitle">{todo.name}</span>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
        </div>
    )
}
