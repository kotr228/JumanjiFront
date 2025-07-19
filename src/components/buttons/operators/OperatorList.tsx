import React, { useEffect, useState } from 'react';
import { fetchAllOperators, deleteOperator, Operator } from '../../../utils/apiOperators';

const OperatorList: React.FC = () => {
  const [operators, setOperators] = useState<Operator[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadOperators();
  }, []);

  const loadOperators = async () => {
    setLoading(true);
    try {
      const data = await fetchAllOperators();
      setOperators(data);
    } catch (err: any) {
      setError(err.message || 'Помилка завантаження');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Ви впевнені, що хочете видалити оператора?')) return;

    try {
      await deleteOperator(id);
      setOperators(prev => prev.filter(op => op.id !== id));
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ width: '75%', textAlign: 'left', margin: '0 auto' }}>
      <h2>Список операторів</h2>
      {operators.length === 0 ? (
        <p>Операторів не знайдено.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {operators.map((op) => (
            <li
              key={op.id}
              style={{
                marginBottom: '10px',
                borderBottom: '1px solid #ccc',
                paddingBottom: '8px'
              }}
            >
              <div><strong>Ім'я:</strong> {op.name}</div>
              <div><strong>Телефон:</strong> {op.phone}</div>
              <div><strong>Telegram:</strong> @{op.telegram_nick}</div>
              <button
                onClick={() => handleDelete(op.id!)}
                style={{ marginTop: '5px' }}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OperatorList;
