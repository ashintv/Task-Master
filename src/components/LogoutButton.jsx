import { useNavigate } from "react-router-dom";

export function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Clear the authentication token from local storage.
    localStorage.removeItem("token"); 

    // 2. Redirect to the login page.
    // Replace '/user/auth' with the actual path to your login page if it's different.
    navigate("/user/auth"); 
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
    >
      Logout
    </button>
  );
}