import React, { useEffect, useState } from 'react';
import {
  fetchAllTables,
  addTable,
  updateTable,
  deleteTable,
  Table,
} from '../../../utils/apiTables';

const AdminTables: React.FC = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [newTable, setNewTable] = useState<Omit<Table, 'id'>>({
    table_number: 0,
    seats: 0,
    location: '',
    is_vip: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadTables = async () => {
    setLoading(true);
    try {
      const data = await fetchAllTables();
      setTables(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTables();
  }, []);

  const handleAdd = async () => {
    if (!newTable.table_number || !newTable.seats) {
      alert('Вкажіть номер столу і кількість місць');
      return;
    }
    try {
      await addTable(newTable);
      setNewTable({ table_number: 0, seats: 0, location: '', is_vip: false });
      loadTables();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleUpdate = async (id: number, field: keyof Table, value: any) => {
    try {
      const tableToUpdate = tables.find((t) => t.id === id);
      if (!tableToUpdate) return;
      const updated = { ...tableToUpdate, [field]: value };
      await updateTable(id, updated);
      loadTables();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Видалити цей стіл?')) return;
    try {
      await deleteTable(id);
      loadTables();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Управління столами</h2>
      {loading && <p>Завантаження...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          placeholder="Номер столу"
          value={newTable.table_number || ''}
          onChange={(e) => setNewTable({ ...newTable, table_number: Number(e.target.value) })}
          style={{ marginRight: 8 }}
        />
        <input
          type="number"
          placeholder="Кількість місць"
          value={newTable.seats || ''}
          onChange={(e) => setNewTable({ ...newTable, seats: Number(e.target.value) })}
          style={{ marginRight: 8 }}
        />
        <input
          type="text"
          placeholder="Локація"
          value={newTable.location}
          onChange={(e) => setNewTable({ ...newTable, location: e.target.value })}
          style={{ marginRight: 8 }}
        />
        <label style={{ marginRight: 8 }}>
          VIP:
          <input
            type="checkbox"
            checked={newTable.is_vip}
            onChange={(e) => setNewTable({ ...newTable, is_vip: e.target.checked })}
          />
        </label>
        <button onClick={handleAdd}>Додати</button>
      </div>

      <div style={{ padding: '0 20px', overflowX: 'auto' }}>
  <table
    border={1}
    cellPadding={6}
    style={{
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: '600px', // мінімальна ширина, щоб контент не ламався
    }}
  >
    <thead>
      <tr>
        <th>№</th>
        <th>Місць</th>
        <th>Локація</th>
        <th>VIP</th>
        <th>Активний</th>
        <th>Дії</th>
      </tr>
    </thead>
    <tbody>
      {tables.map((table) => (
        <tr key={table.id}>
          <td>
            <input
              type="number"
              value={table.table_number}
              onChange={(e) => handleUpdate(table.id!, 'table_number', Number(e.target.value))}
            />
          </td>
          <td>
            <input
              type="number"
              value={table.seats}
              onChange={(e) => handleUpdate(table.id!, 'seats', Number(e.target.value))}
            />
          </td>
          <td>
            <input
              type="text"
              value={table.location}
              onChange={(e) => handleUpdate(table.id!, 'location', e.target.value)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              checked={table.is_vip}
              onChange={(e) => handleUpdate(table.id!, 'is_vip', e.target.checked)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              checked={table.is_active ?? true}
              onChange={(e) => handleUpdate(table.id!, 'is_active', e.target.checked)}
            />
          </td>
          <td>
            <button onClick={() => handleDelete(table.id!)}>Видалити</button>
          </td>
        </tr>
      ))}
      {tables.length === 0 && !loading && (
        <tr>
          <td colSpan={6}>Столів немає</td>
        </tr>
      )}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default AdminTables;
