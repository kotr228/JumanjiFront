const API_BASE = 'http://server.jumanjialex.com.ua/api/order';

export interface Order {
  id?: number;
  customer_name: string;
  products: string[];
  prices: number[];
  total: number;
  operator?: string;
  table_number: number;
  created_at?: string; 
}

// Отримати всі замовлення
export const fetchAllOrders = async (): Promise<Order[]> => {
  const response = await fetch(`${API_BASE}/all`);
  if (!response.ok) {
    throw new Error('Не вдалося отримати список замовлень');
  }
  return await response.json();
};

// Додати замовлення
export const addOrder = async (order: Omit<Order, 'id'>): Promise<any> => {
  const response = await fetch(`${API_BASE}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Помилка при додаванні замовлення');
  }

  return data;
};
