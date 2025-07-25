// src/types/User.ts
export interface User {
  id: number; // або string, якщо бекенд повертає рядок
  name: string;
  email: string;
  phone?: string | null;
  telegram_nick?: string | null;
  role: string; // 'admin' | 'user'
}
