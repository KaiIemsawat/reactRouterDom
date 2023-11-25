import { Navigate } from "react-router-dom";

export function NavigateWhenNotFound() {
    return <Navigate to="/not-found" />;
}
