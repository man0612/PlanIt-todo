import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import Todos from "./MyComponents/Todos";
import React, { useEffect, useState } from "react";
import About from "./MyComponents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Load todos from localStorage
  const initTodo = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initTodo);

  // Delete a todo
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  // Add a new todo
  const addTodo = (title, desc) => {
    const sno =
      todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno,
      title,
      desc,
      completed: false,
    };

    setTodos([...todos, myTodo]);
  };

  // ✅ EDIT TODO (MOVED OUTSIDE addTodo)
  const editTodo = (sno, newTitle, newDesc) => {
    setTodos(
      todos.map((todo) =>
        todo.sno === sno
          ? { ...todo, title: newTitle, desc: newDesc }
          : todo
      )
    );
  };

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div className="app-container">
        <Header />

        <div className="main-content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos
                    todos={todos}
                    onDelete={onDelete}
                    editTodo={editTodo}
                  />
                </>
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
