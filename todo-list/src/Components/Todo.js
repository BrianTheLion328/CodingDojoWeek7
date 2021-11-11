import React from 'react'

export default function Todo({ todo }) {
    return (
        <div>
            <span style={{color: todo.complete ? "skyblue" : "pink"}}>{todo.name}</span>
            <button>Toggle</button>
            <button>Delete</button>
        </div>
    )
}
