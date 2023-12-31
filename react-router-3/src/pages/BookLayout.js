import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export function BookLayout() {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
    const number = searchParams.get("n");
    // const [number, setNumber] = useState("3");
    return (
        <>
            <Link to="/books/1">Book 1</Link>
            <br />
            <Link to="/books/2">Book 2</Link>
            <br />
            <Link to={`/books/${number}`}>Book {number}</Link>
            <br />
            <Link to="/books/new">New Book</Link>
            {/* <Outlet/> may have an attribute (variable) - context */}
            {/* This context can be use in other component under 'Outlet' */}
            {/* Check 'Book.js' */}
            <Outlet context={{ key: "value" }} />
            <input
                type="number"
                value={number}
                onChange={(e) => setSearchParams({ n: e.target.value })}
            />
        </>
    );
}
