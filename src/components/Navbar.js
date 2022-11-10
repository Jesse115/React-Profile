import { Link } from "react-router-dom";

function Navbar({ currentPage, handlePageChange }) {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            <nav className="navbar navbar-expand-lg">
                <Link
                    onClick={() => handlePageChange("React-About")}
                    className={
                        currentPage === "React-About"
                            ? "nav-link active fs-3"
                            : "nav-link fs-3"
                    }
                    to="/React-About"
                >
                    About Me
                </Link>
                <Link
                    onClick={() => handlePageChange("React-Profile")}
                    className={
                        currentPage === "React-Profile"
                            ? "nav-link active fs-3"
                            : "nav-link fs-3"
                    }
                    to="/React-Profile"
                >
                    Profile
                </Link>

            </nav>
        </div>
    );
}

export default Navbar;