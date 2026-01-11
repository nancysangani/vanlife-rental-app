import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ProtectedLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("loggedin");

  useEffect(() => {
    if (!isLoggedIn) {
      console.log("Not logged in, redirecting to login");
      navigate(`/login?message=You must log in first!&redirectTo=${location.pathname}`, { 
        replace: true 
      });
    }
  }, [isLoggedIn, navigate, location.pathname]);

  if (!isLoggedIn) {
    return null;
  }

  return <Outlet />;
}