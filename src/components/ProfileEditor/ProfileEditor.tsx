import React, { useState, useEffect } from 'react';
import { updateProfile, UserProfile } from '../../utils/apiProfile';
import { useAuth } from '../../context/AuthContext';

const ProfileEditor: React.FC = () => {
  const { state, dispatch } = useAuth();
  const currentUser = state.user;

  const [form, setForm] = useState<UserProfile | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (currentUser) {
      setForm({
        id: Number(currentUser.id),  // <- приведе до числа
        name: currentUser.name,
        email: currentUser.email,
        phone: currentUser.phone || '',
        telegram_nick: currentUser.telegram_nick || '',
      });
    }
  }, [currentUser]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!form) return;
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev!, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;

    setStatus('loading');
    setError(null);

    try {
      await updateProfile(form);
      dispatch({
        type: 'LOGIN',
        payload: {
          user: {
            ...currentUser!,
            name: form.name,
            email: form.email,
            phone: form.phone?.trim() || null,
            telegram_nick: form.telegram_nick?.trim() || null,

          },
          token: state.token!,
        },
      });

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setError(err.message);
    }
  };

  if (!form) return <p className="text-center">Завантаження...</p>;

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">Редагування профілю</h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Ім’я"
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="phone"
        value={form.phone || ''}
        onChange={handleChange}
        placeholder="Телефон"
        className="w-full border p-2 rounded"
      />
      <input
        name="telegram_nick"
        value={form.telegram_nick || ''}
        onChange={handleChange}
        placeholder="Нік в Telegram"
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {status === 'loading' ? 'Збереження...' : 'Зберегти'}
      </button>

      {status === 'success' && <p className="text-green-600">✅ Профіль оновлено успішно!</p>}
      {status === 'error' && <p className="text-red-600">❌ {error}</p>}
    </form>
  );
};

export default ProfileEditor;
