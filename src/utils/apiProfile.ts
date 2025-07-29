const API_BASE = 'http://server.jumanjialex.com.ua/api/profile';
import { User } from '../context/AuthContext';

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone?: string;
  telegram_nick?: string;
}

export const updateProfile = async (profile: UserProfile): Promise<{ message: string }> => {
  const response = await fetch(`${API_BASE}/update`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Помилка при оновленні профілю');
  }

  return data;
};


export const fetchProfile = async (id: number): Promise<User> => {
  const res = await fetch(`${API_BASE}/profile/${id}`);
  if (!res.ok) throw new Error(`Помилка: ${res.statusText}`);
  return res.json();
};