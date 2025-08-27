import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("⚠️ Title and Description cannot be blank!");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body p-4">
          <h3 className="text-center text-primary mb-4">➕ Add a New Todo</h3>
          <form onSubmit={submit}>
            {/* Title Input */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label fw-semibold">
                Todo Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                id="title"
                placeholder="e.g. Buy groceries"
              />
            </div>

            {/* Description Input */}
            <div className="mb-3">
              <label htmlFor="desc" className="form-label fw-semibold">
                Todo Description
              </label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="form-control"
                id="desc"
                rows="3"
                placeholder="e.g. Milk, Bread, and Eggs"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-success btn-lg">
                ✅ Add Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
