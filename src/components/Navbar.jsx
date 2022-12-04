import { Link, useLocation } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";

const Navbar = () => {
    const { pathname } = useLocation();
    return (
        <nav>
            <div className="container flex">
                <h1 className="flex">
                    <FcTodoList /> &nbsp; TodoApp
                </h1>
                {pathname === "/" && (
                    <Link className="link-btn" to="/add-todo">
                        <b>+</b>Add Todo
                    </Link>
                )}
                {pathname === "/add-todo" && (
                    <Link className="link-btn" to="/">
                        Home
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
