import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
    const [todo, setTodo] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.length === 0) {
            alert("cannot add empty todo");
            return;
        }
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        let id;
        if (todos.length > 0) {
            id = todos[todos.length - 1].id + 1;
        } else {
            id = 1;
        }
        const todoItem = {
            id,
            todo,
            completed: false,
        };
        const newTodos = [...todos, todoItem];
        localStorage.setItem("todos", JSON.stringify(newTodos));
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="add container">
            <label htmlFor="todo">Add Todo:</label>
            <input
                type="text"
                id="todo"
                placeholder="Add todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">
                <b>+</b>Add Todo
            </button>
        </form>
    );
};

export default AddTodo;
