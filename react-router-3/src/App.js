import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import { BookLayout } from "./pages/BookLayout";
import { BookRoutes } from "./BookRoutes";
import "./styles.css";
import { NavigateWhenNotFound } from "./pages/NavigateWhenNotFound";

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/"
                            reloadDocument // the page will be re-load if this link is clicked
                        >
                            {/* Home will not change color even if it actives since it is under 'Link' not 'NavLink' */}
                            Home
                        </Link>
                    </li>
                    <li>
                        <NavLink // NavLink is work similar to Link but more properties
                            // such as 'isActive'
                            // style={({ isActive }) => {
                            //     return {
                            //         color: "red",
                            //     };
                            // }}
                            end // will make the status as 'active' end on this link, not pass into it's children
                            to="/books"
                        >
                            {/* {({ isActive }) => {
                                return isActive ? "Active Book" : "Book";
                            }} */}
                            Books
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />} />
                <Route path="*" element={<NavigateWhenNotFound />} />
                <Route path="/not-found" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
