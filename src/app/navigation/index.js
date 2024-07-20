import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../pages/home";
import Create from '../pages/create/index';
import Login from "../pages/login";
import { useAuth } from "../context/authcontext";
const Navigation = () => {
    const { user } = useAuth();
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
            />
        </Routes>
    );
};
export default Navigation;
