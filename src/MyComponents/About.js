import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-4">
          <h2 className="text-center text-primary mb-3">About This App</h2>
          <p className="lead text-muted text-center">
            A simple, elegant, and responsive Todo List application built with{" "}
            <strong>React</strong> and <strong>Bootstrap</strong>.
          </p>
          <hr />
          <p className="text-secondary">
            This app helps you stay organized and boost productivity by managing
            your daily tasks with ease. You can:
          </p>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">✅ Add and track todos</li>
            <li className="list-group-item">✏️ Edit tasks effortlessly</li>
            <li className="list-group-item">🗑️ Delete completed tasks</li>
            <li className="list-group-item">📱 Enjoy a responsive UI</li>
          </ul>
          <p className="text-muted text-center">
            Built with ❤️ using modern web technologies to keep things simple,
            fast, and beautiful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
