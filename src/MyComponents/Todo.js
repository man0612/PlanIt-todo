import React from 'react'

export const Todo = ({ todo, onDelete }) => {
  return (
    <div className="card my-3 shadow-sm border-0">
      <div className="card-body">
        {/* Title */}
        <h5 className="card-title text-primary fw-bold">{todo.title}</h5>
        
        {/* Description */}
        <p className="card-text text-muted">{todo.desc}</p>
        
        {/* Delete Button */}
        <button 
          className="btn btn-danger btn-sm rounded-pill px-3"
          onClick={() => onDelete(todo)}
        >
          ❌ Delete
        </button>
      </div>
    </div>
  )
}
