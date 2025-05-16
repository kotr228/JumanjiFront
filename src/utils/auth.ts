const API_URL = 'http://localhost:3000/api/auth';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export async function registerUser(data: RegisterData) {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to register');
  return res.json();
}

interface LoginData {
  email: string;
  password: string;
}

export async function loginUser(data: LoginData) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to login');
  return res.json();
}
