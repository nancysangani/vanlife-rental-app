import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1 className="error-title">Error: {error.message}</h1>
      <pre className="error-details">
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
}
