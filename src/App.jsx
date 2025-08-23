import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserAuth from "./pages/user/user-auth";
import UserHome from "./pages/user/user-home";
import ManagerAuth from "./pages/manager/manager-auth";
import ManagerHome from "./pages/manager/manager-home";
import { ProtectedRoute } from "./components/ProtectedRoute"; // or same file, just import properly

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="user">
          {/* Redirect to /user/home if logged in */}
          <Route
            path="auth"
            element={token ? <Navigate to="/user/home" replace /> : <UserAuth />}
          />
          {/* Protect home route */}
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <UserHome />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="manager">
          <Route
            path="auth"
            element={token ? <Navigate to="/manager/home" replace /> : <ManagerAuth />}
          />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <ManagerHome />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Redirect any unknown paths */}
        <Route
          path="*"
          element={<Navigate to={token ? "/user/home" : "/user/auth"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
