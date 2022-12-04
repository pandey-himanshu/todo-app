import { Link } from "react-router-dom";

const Missing = () => {
    return (
        <div className="missing">
            <p>Page not found 404</p>
            <Link to="/">click here to visit homepage</Link>
        </div>
    );
};

export default Missing;
