import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
            // navigate(-1); // will redirect to previous page
        }, 2000);
    }, []);
    return <div>NotFound</div>;
}

export default NotFound;
