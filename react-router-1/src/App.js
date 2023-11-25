import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import { BookLayout } from "./pages/BookLayout";
import { BookRoutes } from "./BookRoutes";

function App() {
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
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Note 1 : Using Layout (BookLayout) allows layout to render on all pages inside this tags */}
                {/* There is <Outlet/> declared inside BookLayout.js, */}
                {/* that allows any <Route /> inside <Route /> with  <BookLayout/> render their own elements */}

                {/* Note 2 : If path is declared in main route tag, the sub route(s) would only */}
                {/* declare later part of the path */}
                {/* <Route path="/books" element={<BookLayout />}>
                    <Route index element={<BookList />} />
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route> */}

                {/* Nesting routes */}
                <Route path="/books/*" element={<BookRoutes />} />
                {/* '/*' is needed in this case */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            {/* location attribute is optional */}
            <Routes>
                {/* <Routes location="/books"> */}
                <Route path="/books" element={<h1>Extra content</h1>} />
            </Routes>
        </>
    );
}

export default App;
