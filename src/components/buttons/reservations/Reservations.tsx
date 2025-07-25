import React, { useEffect, useState } from 'react';
import '../../../styles/reviews_&_comments.css';

type Table = {
    id: number;
    table_number: number;
    seats: number;
    location: string;
    is_vip: boolean;
    is_active?: boolean;
};

type Reservation = {
    id?: number;
    table_id: number;
    name: string;
    phone: string;
    date: string; // yyyy-mm-dd
    time: string; // HH:mm
    guests: number;
    notes?: string;
    duration_minutes?: number;
};

const API_BASE = 'http://server.jumanjialex.com.ua/api';

const ReservationComponent: React.FC = () => {
    const [tables, setTables] = useState<Table[]>([]);
    const [, setReservations] = useState<Reservation[]>([]);
    const [form, setForm] = useState<Omit<Reservation, 'id'>>({
        table_id: 0,
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
        notes: '',
        duration_minutes: 60,
    });

    const [, setError] = useState<string | null>(null);

    const loadTables = async () => {
        try {
            const res = await fetch(`${API_BASE}/tables`);
            if (!res.ok) throw new Error('Не вдалося завантажити столи');
            const data = await res.json();
            setTables(data);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const loadReservations = async () => {
        try {
            const res = await fetch(`${API_BASE}/reservations`);
            if (!res.ok) throw new Error('Не вдалося завантажити бронювання');
            const data = await res.json();
            setReservations(data);
        } catch (err: any) {
            setError(err.message);
        }
    };

    useEffect(() => {
        loadTables();
        loadReservations();
    }, []);

    const handleSubmit = async () => {
        if (
            !form.table_id ||
            !form.name.trim() ||
            !form.phone.trim() ||
            !form.date ||
            !form.time
        ) {
            alert('Заповніть усі поля');
            return;
        }

        try {
            const res = await fetch(`${API_BASE}/reservations`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Помилка при створенні бронювання');

            alert('Бронювання успішно створено');
            setForm({
                table_id: 0,
                name: '',
                phone: '',
                date: '',
                time: '',
                guests: 1,
                notes: '',
                duration_minutes: 60,
            });
            loadReservations();
        } catch (err: any) {
            alert(err.message);
        }
    };

    return (
        <div className="container py-4">
            <div className="form-label card shadow-sm"
                style={{
                    border: '1px solid #ccc',
                    padding: 16,
                    borderRadius: 8,
                    marginBottom: 24,
                    backgroundColor: '#fafafa',
                }}
            >
                <h3>Нове бронювання</h3>

                <label>
                    Оберіть стіл:
                    <select className="form-control"
                        value={form.table_id}
                        onChange={(e) => setForm({ ...form, table_id: Number(e.target.value) })}
                        style={{
                            backgroundColor: '#fff',
                            color: '#000',
                            border: '1px solid #ccc',
                            boxShadow: 'none',
                            transition: 'none',
                            WebkitAppearance: 'none', // Safari
                            MozAppearance: 'none',    // Firefox
                            appearance: 'none',
                        }}

                    >
                        <option value={0}>-- Виберіть стіл --</option>
                        {tables
                            .filter((t) => t.is_active !== false)
                            .map((table) => (
                                <option key={table.id} value={table.id}>
                                    №{table.table_number} ({table.seats} місць){table.is_vip ? ' [VIP]' : ''}
                                </option>
                            ))}
                    </select>
                </label>

                <div style={{ marginTop: 8 }}>
                    <input className="form-control"
                        type="text"
                        placeholder="Ім'я"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={{
                            width: '100%', padding: 8, marginBottom: 8, backgroundColor: '#fff',
                            color: '#000',
                            border: '1px solid #ccc',
                            boxShadow: 'none',
                            transition: 'none',
                            WebkitAppearance: 'none', // Safari
                            MozAppearance: 'none',    // Firefox
                            appearance: 'none',
                        }}
                    />
                    <input className="form-control"
                        type="tel"
                        placeholder="Телефон"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        style={{
                            width: '100%', padding: 8, marginBottom: 8, backgroundColor: '#fff',
                            color: '#000',
                            border: '1px solid #ccc',
                            boxShadow: 'none',
                            transition: 'none',
                            WebkitAppearance: 'none', // Safari
                            MozAppearance: 'none',    // Firefox
                            appearance: 'none',
                        }}
                    />
                    <input className="form-control"
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        style={{
                            padding: 8, marginBottom: 8, backgroundColor: '#fff',
                            color: '#000',
                            border: '1px solid #ccc',
                            boxShadow: 'none',
                            transition: 'none',
                            WebkitAppearance: 'none', // Safari
                            MozAppearance: 'none',    // Firefox
                            appearance: 'none',
                        }}
                    />
                    <input className="form-control"
                        type="time"
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        style={{
                            padding: 8, marginBottom: 8, backgroundColor: '#fff',
                            color: '#000',
                            border: '1px solid #ccc',
                            boxShadow: 'none',
                            transition: 'none',
                            WebkitAppearance: 'none', // Safari
                            MozAppearance: 'none',    // Firefox
                            appearance: 'none',
                        }}
                    />
                    <label>
                        Кількість гостей:
                    </label>
                    <input className="form-control"
                        type="number"
                        min={1}
                        placeholder="Кількість гостей"
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                        style={{
                            width: '100%', padding: 8, marginBottom: 8, backgroundColor: '#fff',
                            color: '#000',
                            border: '1px solid #ccc',
                            boxShadow: 'none',
                            transition: 'none',
                            WebkitAppearance: 'none', // Safari
                            MozAppearance: 'none',    // Firefox
                            appearance: 'none',
                        }}
                    />



                    <textarea className="form-control"
                        placeholder="Коментар до бронювання"
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        style={{
                            width: '100%', padding: 8, marginBottom: 8, backgroundColor: '#fff',
                            color: '#000',
                            border: '1px solid #ccc',
                            boxShadow: 'none',
                            transition: 'none',
                            WebkitAppearance: 'none', // Safari
                            MozAppearance: 'none',    // Firefox
                            appearance: 'none',
                        }}
                    />
                    <label>
                        Тривалість бронювання (хв):
                    </label>
                    <input className="form-control"
                        type="number"
                        min={15}
                        max={240}
                        step={15}
                        value={form.duration_minutes}
                        onChange={(e) => setForm({ ...form, duration_minutes: Number(e.target.value) })}
                        placeholder="Тривалість бронювання (хв)"
                        style={{
                            width: '100%', padding: 8, marginBottom: 8, backgroundColor: '#fff',
                            color: '#000',
                            border: '1px solid #ccc',
                            boxShadow: 'none',
                            transition: 'none',
                            WebkitAppearance: 'none', // Safari
                            MozAppearance: 'none',    // Firefox
                            appearance: 'none',
                        }}
                    />


                </div>
                <div className="sendFeedback">
                    <button className="btn btn-primary w-100"
                        onClick={handleSubmit}
                        style={{
                            padding: '10px 20px',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Забронювати
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReservationComponent;
