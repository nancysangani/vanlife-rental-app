import {
  useLoaderData,
  useNavigation,
  Form,
  useActionData,
  useNavigate,
  redirect
} from "react-router-dom";
import { loginUser } from "../api";
import { useEffect } from "react";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("token", data.token);
    localStorage.setItem("loggedin", "true");
    return { success: true };
  } catch (err) {
    return { error: err?.message || "Login failed. Please try again." };
  }
}

export default function Login() {
  const actionData = useActionData();
  const message = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.success) {
      console.log("Navigating to /host");
      navigate("/host", { replace: true });
    }
  }, [actionData, navigate]);

  const displayError =
    actionData?.error && typeof actionData.error === "string"
      ? actionData.error
      : null;

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}

      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />

        {displayError && <h3 className="red">{displayError}</h3>}

        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
