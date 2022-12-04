import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";

const TodoItem = (props) => {
    const { id, todo, completed } = props;

    const [updatedTodo, setUpdatedTodo] = useState(todo);
    const [showForm, setShowForm] = useState(false);
    const [checked, setChecked] = useState(completed);
    const [currentTodo, setCurrentTodo] = useState(todo);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (updatedTodo.length === 0) {
            alert("todo cannot be empty");
            return;
        }
        const todos = JSON.parse(localStorage.getItem("todos"));
        const todoToUpdate = todos.find((todo) => todo.id === id);
        todoToUpdate.todo = updatedTodo;
        const newTodos = todos.filter((todo) => todo.id !== id);
        const finalTodos = [...newTodos, todoToUpdate];
        localStorage.setItem("todos", JSON.stringify(finalTodos));
        setCurrentTodo(updatedTodo);
        setShowForm(false);
    };

    const handleDelete = () => {
        if (window.confirm("are you sure you want to delete this todo")) {
            const todos = JSON.parse(localStorage.getItem("todos"));
            const newTodos = todos.filter((todo) => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(newTodos));
            window.location.reload();
        }
        return;
    };

    const handleCheck = () => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        const todoToUpdate = todos.find((todo) => todo.id === id);
        todoToUpdate.completed = !todoToUpdate.completed;
        const newTodos = todos.filter((todo) => todo.id !== id);
        const finalTodos = [...newTodos, todoToUpdate];
        localStorage.setItem("todos", JSON.stringify(finalTodos));
        setChecked(!checked);
    };

    return (
        <div className="todo container">
            <div className="todo-item flex">
                <div className="todo-item-body flex">
                    <input
                        type="checkbox"
                        defaultChecked={checked}
                        readOnly
                        onClick={handleCheck}
                    />
                    {checked ? (
                        <p style={{ textDecoration: "line-through" }}>
                            {currentTodo}
                        </p>
                    ) : (
                        <p>{currentTodo}</p>
                    )}
                </div>
                <div className="todo-item-buttons">
                    <MdDelete onClick={handleDelete} />
                    <AiFillFileAdd onClick={() => setShowForm(!showForm)} />
                </div>
            </div>
            {showForm && (
                <form onSubmit={handleUpdate} className="update-form container">
                    <label htmlFor="update-todo">Update Todo: </label>
                    <input
                        type="text"
                        id="update-todo"
                        value={updatedTodo}
                        onChange={(e) => setUpdatedTodo(e.target.value)}
                    />
                    <button type="submit">
                        <b>+</b>update
                    </button>
                </form>
            )}
        </div>
    );
};

export default TodoItem;
