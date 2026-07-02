const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, { method = "GET", body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // no JSON body
  }

  if (!res.ok) {
    throw new Error((data && data.error) || "Something went wrong. Please try again.");
  }
  return data;
}

export const api = {
  register: (payload) => request("/auth/register", { method: "POST", body: payload }),
  login: (payload) => request("/auth/login", { method: "POST", body: payload }),
  me: (token) => request("/auth/me", { token }),
  getClasses: () => request("/classes"),
  getServices: () => request("/services"),
  getTrainers: () => request("/trainers"),
  getPricing: () => request("/pricing"),
  enroll: (payload, token) => request("/enrollments", { method: "POST", body: payload, token }),
  book: (payload, token) => request("/bookings", { method: "POST", body: payload, token }),
  contact: (payload) => request("/contact", { method: "POST", body: payload })
};
