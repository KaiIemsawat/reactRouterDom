import { Link, Outlet } from "react-router-dom";

export function BookLayout() {
    return (
        <>
            <Link to="/books/1">Book 1</Link>
            <br />
            <Link to="/books/2">Book 2</Link>
            <br />
            <Link to="/books/new">New Book</Link>
            {/* <Outlet/> may have an attribute (variable) - context */}
            {/* This context can be use in other component under 'Outlet' */}
            {/* Check 'Book.js' */}
            <Outlet context={{ key: "value" }} />
        </>
    );
}
