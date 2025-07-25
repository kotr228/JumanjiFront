const API_BASE = 'http://server.jumanjialex.com.ua/api/tables';

export interface Table {
  id?: number;
  table_number: number;
  seats: number;
  location: string;
  is_vip: boolean;
  is_active?: boolean;
}

// Отримати всі столи
export const fetchAllTables = async (): Promise<Table[]> => {
  const response = await fetch(`${API_BASE}`);
  if (!response.ok) {
    throw new Error('Не вдалося отримати список столів');
  }
  return await response.json();
};

// Додати стіл
export const addTable = async (table: Omit<Table, 'id'>): Promise<any> => {
  const response = await fetch(`${API_BASE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(table),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Помилка при додаванні столу');
  return data;
};

// Оновити стіл
export const updateTable = async (id: number, updated: Partial<Table>): Promise<any> => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updated),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || `Не вдалося оновити стіл з ID ${id}`);
  return data;
};

// Видалити стіл
export const deleteTable = async (id: number): Promise<any> => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || `Не вдалося видалити стіл з ID ${id}`);
  return data;
};
