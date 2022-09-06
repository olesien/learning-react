import { Link, Navigate, useNavigate } from "react-router-dom";
const ProtectedRoute = ({ user, redirectPath = "/login", children }) => {
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

export default ProtectedRoute;
