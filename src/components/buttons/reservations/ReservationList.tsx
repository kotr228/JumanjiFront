// src/components/ReservationList.tsx
import React, { useEffect, useState } from 'react';
import {
  fetchAllReservations,
  deleteReservation,
  Reservation,
} from '../../../utils/apiReservations';

const ReservationList: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchAllReservations();
        setReservations(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm('Ви впевнені, що хочете видалити бронювання?')) return;

    try {
      await deleteReservation(id);
      setReservations(prev => prev.filter(r => r.id !== id));
    } catch (err) {
      alert((err as Error).message);
    }
  };

  if (loading) return <p>Завантаження бронювань...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Список бронювань</h2>
      {reservations.length === 0 ? (
        <p>Наразі немає жодного бронювання.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }} border={1} cellPadding={6}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Імʼя</th>
              <th>Телефон</th>
              <th>Гостей</th>
              <th>Дата</th>
              <th>Час</th>
              <th>Стіл</th>
              <th>Нотатки</th>
              <th>Тривалість</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map(r => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>{r.phone}</td>
                <td>{r.guests}</td>
                <td>{r.date}</td>
                <td>{r.time}</td>
                <td>{r.table_number}</td>
                <td>{r.notes || '—'}</td>
                <td>{r.duration_minutes} хв</td>
                <td>
                  <button onClick={() => handleDelete(r.id!)}>Видалити</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReservationList;
