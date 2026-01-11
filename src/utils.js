import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("loggedin");
  const token = localStorage.getItem("token");

  if (!isLoggedIn || !token) {
    return redirect(
      `/login?message=You must log in first!&redirectTo=${pathname}`
    );
  }
  return null;
}
