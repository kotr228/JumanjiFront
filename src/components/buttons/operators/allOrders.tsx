import React, { useEffect, useState } from 'react';
import { fetchAllOrders, Order } from '../../../utils/apiOrder';

const OrdersList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchAllOrders()
      .then(data => {
        // JSON.parse products/prices, якщо вони рядки
        const parsed = data.map((order: any) => ({
          ...order,
          products: typeof order.products === 'string' ? JSON.parse(order.products) : order.products,
          prices: typeof order.prices === 'string' ? JSON.parse(order.prices) : order.prices,
        }));
        setOrders(parsed);
        setError(null);
      })
      .catch(err => {
        setError(err.message || 'Помилка при завантаженні замовлень');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Завантаження замовлень...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (orders.length === 0) return <p>Замовлень немає</p>;

  return (
    <div>
      <h2>Список замовлень</h2>
      {orders.map(order => (
        <div key={order.id} style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
          <p><strong>Ім'я:</strong> {order.customer_name}</p>
          <p><strong>Столик №:</strong> {order.table_number}</p>
          <p><strong>Оператор:</strong> {order.operator}</p>
          <p><strong>Сума:</strong> {order.total} грн</p>
          <ul>
            {order.products.map((prod: string, idx: number) => (
              <li key={idx}>
                {prod} — {order.prices[idx]} грн
              </li>
            ))}
          </ul>
        <p><strong>Дата:</strong> {new String(order.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
