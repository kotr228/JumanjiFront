import React, { useState } from 'react';
import { addCategory } from '../../../utils/addcategoryfood';

const AddCategory: React.FC = () => {
  const [formData, setFormData] = useState({ idName: '', label: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const id = await addCategory(formData);
      setMessage(`Категорію додано з ID: ${id}`);
      setFormData({ idName: '', label: '' });
    } catch {
      setMessage('Не вдалося додати категорію');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Додати категорію</h3>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="idName" className="form-label">ID Name</label>
          <input
            type="text"
            name="idName"
            className="form-control"
            value={formData.idName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="label" className="form-label">Назва</label>
          <input
            type="text"
            name="label"
            className="form-control"
            value={formData.label}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Додати</button>
      </form>
    </div>
  );
};

export default AddCategory;
