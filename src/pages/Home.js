import React from "react";
import TodoItem from "../components/TodoItem";

const Home = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    return todos.length > 0 ? (
        todos.map((todo) => (
            <TodoItem
                key={todo.id}
                id={todo.id}
                todo={todo.todo}
                completed={todo.completed}
            />
        ))
    ) : (
        <div className="text">
            <p>No todos present</p>
        </div>
    );
};

export default Home;
