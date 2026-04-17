import * as React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!auth.currentUser) {
            navigate("/login", { replace: true });
        }
    }, [navigate]);

    if (!auth.currentUser) {
        return null;
    }

    return children;
}