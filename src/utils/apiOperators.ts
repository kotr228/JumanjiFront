const API_BASE = 'http://server.jumanjialex.com.ua/api/operator';

export interface Operator {
  id?: number;
  name: string;
  phone: string;
  telegram_nick: string;
}

// Отримати всіх операторів
export const fetchAllOperators = async (): Promise<Operator[]> => {
  const response = await fetch(`${API_BASE}/all`);
  if (!response.ok) {
    throw new Error('Не вдалося отримати список операторів');
  }
  return await response.json();
};

// Додати оператора
export const addOperator = async (operator: Omit<Operator, 'id'>): Promise<any> => {
  const response = await fetch(`${API_BASE}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(operator),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Помилка при додаванні оператора');
  }

  return data;
};

// Видалити оператора
export const deleteOperator = async (id: number): Promise<any> => {
  const response = await fetch(`${API_BASE}/delete/${id}`, {
    method: 'DELETE',
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || `Не вдалося видалити оператора з ID ${id}`);
  }

  return data;
};
