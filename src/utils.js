import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem("loggedin");
  const token = localStorage.getItem("token");

  if (!isLoggedIn || !token) {
    return redirect(
      `/login?message=You must log in first!`
    );
  }
  return null;
}
