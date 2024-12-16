import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function PrivatePage() {
  // State to track the current logged-in user
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt-authorization");
    const decodeToken = jwtDecode(jwtToken);
    setCurrentUser(decodeToken.id);
  }, []);
  // Handle user logout
  const handleLogout = () => {
    // Cookies.remove("jwt-authorization");
    setCurrentUser("");
    navigate("/login");
  };
  // Navigate to like-edit page
  const handleLikeEdit = () => {
    navigate("/like-edit", { state: { username: currentUser } });
  };

  return (
    <div>
      <NavBar />
      <h1>Welcome to Private Page</h1>
      <h1>{`You are logged in as ${currentUser}`}</h1>
      <button onClick={() => handleLogout()}>Logout</button>

      {/* This is for edit pages */}
      {/* <button onClick={()} */}
    </div>
  );
}
