const API_URL = "http://localhost:3000/api";

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  return res.json(); // { token }
}

export async function getAdminSecret(token) {
  const res = await fetch(`${API_URL}/admin/secret`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error("Unauthorized");
  }

  return res.json();
}
