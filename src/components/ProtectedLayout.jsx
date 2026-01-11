import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ProtectedLayout() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedin");

  useEffect(() => {
    if (!isLoggedIn) {
      console.log("🔐 Not logged in, redirecting to login");
      navigate("/login?message=You must log in first!", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return <Outlet />;
}
