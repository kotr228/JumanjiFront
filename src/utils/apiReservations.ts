const API_BASE = 'http://server.jumanjialex.com.ua/api/reservations';

export interface Reservation {
  id?: number;
  table_id: number;
  name: string;
  phone: string;
  date: string;  // yyyy-mm-dd
  time: string;  // HH:mm
  guests: number;
}

export const fetchAllReservations = async (): Promise<Reservation[]> => {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Не вдалося отримати бронювання');
  return res.json();
};

export const addReservation = async (reservation: Omit<Reservation, 'id'>): Promise<any> => {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(reservation),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Помилка при створенні бронювання');
  return data;
};

export const deleteReservation = async (id: number): Promise<any> => {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Помилка при видаленні бронювання');
  return data;
};
