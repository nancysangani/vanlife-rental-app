export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : `/api/vans`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Response("Failed to fetch vans", {
      status: res.status,
      statusText: res.statusText || "Error fetching vans",
    });
  }

  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `/api/host/hostvans/${id}` : `/api/host/hostvans`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Response("Failed to fetch vans", {
      status: res.status,
      statusText: res.statusText || "Error fetching host vans",
    });
  }

  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });

  const data = await res.json();
  console.log("Parsed data:", data);

  if (data.error) {
    {
      const error = new Error(data.error);
      error.statusText = res.statusText;
      error.status = res.status;
      throw error;
    }
  }

  if (!res.ok) {
    {
      const error = new Error(data.message || "Login failed");
      error.statusText = res.statusText;
      error.status = res.status;
      throw error;
    }
  }

  return data;
}
