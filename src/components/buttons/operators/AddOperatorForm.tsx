import React, { useState } from 'react';
import { addOperator } from '../../../utils/apiOperators';
import '../../../styles/reviews_&_comments.css';

interface AddOperatorFormProps {
  onAddSuccess?: () => void; // для оновлення списку після додавання
}

const AddOperatorForm: React.FC<AddOperatorFormProps> = ({ onAddSuccess }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [telegramNick, setTelegramNick] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!name || !phone || !telegramNick) {
      setError('Заповніть всі поля');
      return;
    }

    setLoading(true);

    try {
      await addOperator({ name, phone, telegram_nick: telegramNick });
      setSuccess(true);
      setName('');
      setPhone('');
      setTelegramNick('');
      if (onAddSuccess) onAddSuccess();
    } catch (err: any) {
      setError(err.message || 'Помилка при додаванні');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="form-label card shadow-sm">
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <h3>Додати оператора</h3>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>Оператора додано успішно!</p>}

          <div>
            <label>Ім'я:</label><br />
            <input className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
          </div>

          <div>
            <label>Телефон:</label><br />
            <input className="form-control"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />
          </div>

          <div>
            <label>Telegram нік (без @):</label><br />
            <input className="form-control"
              type="text"
              value={telegramNick}
              onChange={(e) => setTelegramNick(e.target.value)}
              disabled={loading}
            />
          </div>

          <button type="submit" disabled={loading} style={{ marginTop: '10px' }}>
            {loading ? 'Додавання...' : 'Додати'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddOperatorForm;
