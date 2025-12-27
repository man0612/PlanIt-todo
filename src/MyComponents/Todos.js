import React, { useState } from "react";

const Todos = ({ todos, onDelete, editTodo }) => {
  const mystyle = {
    margin: "40px auto",
    color: "grey",
  };

  const [editingSno, setEditingSno] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  return (
    <div className="container" style={mystyle}>
      <h3 className="text-center fw-bold mb-4 text-dark">📝 My Todos</h3>

      {todos.length === 0 ? (
        <p className="text-center text-muted">No todos to display! 🎉</p>
      ) : (
        todos.map((todo) => (
          <div className="card my-3 shadow-sm border-0" key={todo.sno}>
            <div className="card-body">

              {editingSno === todo.sno ? (
                <>
                  {/* Editable inputs */}
                  <input
                    className="form-control mb-2"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Edit title"
                  />

                  <textarea
                    className="form-control mb-3"
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                    placeholder="Edit description"
                  />

                  {/* Save / Cancel */}
                  <button
                    className="btn btn-success btn-sm rounded-pill px-3 me-2"
                    onClick={() => {
                      editTodo(todo.sno, editTitle, editDesc);
                      setEditingSno(null);
                    }}
                  >
                    💾 Save
                  </button>

                  <button
                    className="btn btn-secondary btn-sm rounded-pill px-3"
                    onClick={() => setEditingSno(null)}
                  >
                    ✖ Cancel
                  </button>
                </>
              ) : (
                <>
                  {/* Title */}
                  <h5 className="card-title text-primary fw-bold">
                    {todo.title}
                  </h5>

                  {/* Description */}
                  <p className="card-text text-muted">{todo.desc}</p>

                  {/* Edit */}
                  <button
                    className="btn btn-warning btn-sm rounded-pill px-3 me-2"
                    onClick={() => {
                      setEditingSno(todo.sno);
                      setEditTitle(todo.title);
                      setEditDesc(todo.desc);
                    }}
                  >
                    ✏ Edit
                  </button>

                  {/* Delete */}
                  <button
                    className="btn btn-danger btn-sm rounded-pill px-3"
                    onClick={() => onDelete(todo)}
                  >
                    ❌ Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;
