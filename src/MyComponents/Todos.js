import React from 'react'
import { Todo } from "./Todo"

const Todos = (props) => {
  let mystyle = {
  margin: '40px auto',
  color:"grey"
  }

  return (
    <div className="container" style={mystyle}>
      <h3 className="text-center fw-bold mb-4 text-dark">📝 My Todos</h3>

      {props.todos.length === 0 ? (
        <p className="text-center text-muted">No todos to display! 🎉</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <div className="card my-3 shadow-sm border-0" key={todo.sno}>
              <div className="card-body">
                {/* Title */}
                <h5 className="card-title text-primary fw-bold">{todo.title}</h5>
                {/* Description */}
                <p className="card-text text-muted">{todo.desc}</p>
                {/* Delete Button */}
                <button
                  className="btn btn-danger btn-sm rounded-pill px-3"
                  onClick={() => props.onDelete(todo)}
                >
                  ❌ Delete
                </button>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Todos
