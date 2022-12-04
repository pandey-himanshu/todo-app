import { Routes, Route } from "react-router-dom";
import { Home, AddTodo, Missing } from "./pages";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-todo" element={<AddTodo />} />
            <Route path="*" element={<Missing />} />
        </Routes>
    );
};

export default Router;
