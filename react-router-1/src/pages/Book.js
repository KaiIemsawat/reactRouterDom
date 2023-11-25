import { useOutletContext, useParams } from "react-router-dom";

function Book() {
    const { id } = useParams();
    const obj = useOutletContext();
    return (
        <>
            <h1>Book {id}</h1>

            <h2>{obj.key}</h2>
        </>
    );
}

export default Book;
