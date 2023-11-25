import { Route, Routes, Link, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import { BookLayout } from "./pages/BookLayout";
import { BookRoutes } from "./BookRoutes";

function App() {
    let element = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                </ul>
            </nav>
            {element}
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />} />
                <Route path="*" element={<NotFound />} />
            </Routes> */}
        </>
    );
}

export default App;
