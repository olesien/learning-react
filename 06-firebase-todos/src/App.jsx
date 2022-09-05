import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import NotFound from "./pages/NotFound";
import SignupPage from "./pages/SignupPage";
import TodoPage from "./pages/TodoPage";
import TodosPage from "./pages/TodosPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import "./assets/scss/App.scss";
import { useAuthContext } from "./contexts/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
    const { user, loading } = useAuthContext();
    return (
        <div id="App">
            {loading ? (
                <ClipLoader color={"#0000FF"} loading={loading} size={150} />
            ) : (
                <>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<NotFound />} />
                        <Route
                            path="/todos"
                            element={
                                <ProtectedRoute user={user}>
                                    <TodosPage user={user} />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/todos/:id"
                            element={
                                <ProtectedRoute user={user}>
                                    <TodoPage user={user} />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/logout"
                            element={
                                <ProtectedRoute user={user}>
                                    <LogoutPage user={user} />
                                </ProtectedRoute>
                            }
                        />

                        <Route
                            path="/login"
                            element={
                                <ProtectedRoute user={!user}>
                                    <LoginPage user={user} />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <ProtectedRoute user={!user}>
                                    <SignupPage user={user} />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                    <ToastContainer autoClose={3000} />
                    <ReactQueryDevtools position="bottom-right" />
                </>
            )}
        </div>
    );
}

export default App;
