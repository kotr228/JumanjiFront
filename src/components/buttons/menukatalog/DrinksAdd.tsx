import React, { useState } from 'react';
import { addDish } from '../../../utils/menuadddrinks';
import './../../../styles/menu.css';

interface AddDishProps {
  idM: number; 
}

interface DishData {
  Name: string;
  Price: number;
  Description: string;
  Weight: number;
  img: string; 
}

const AddDrink: React.FC<AddDishProps> = ({ idM }) => {
  const [formData, setFormData] = useState<DishData>({
    Name: '',
    Price: 0,
    Description: '',
    Weight: 0,
    img: '',
  });

  const [previewSrc, setPreviewSrc] = useState<string>(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'Price' || name === 'Weight' ? Number(value) : value,
    }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
  
        
        const formDataFile = new FormData();
        formDataFile.append('image', file);
  
        try {
          const res = await fetch('http://localhost:3000/api/img/upload', {
            method: 'POST',
            body: formDataFile,
          });
  
          const data = await res.json();
          setFormData(prev => ({
            ...prev,
            img: data.path, 
          }));
  
          
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewSrc(reader.result as string);
          };
          reader.readAsDataURL(file);
        } catch (error) {
          console.error('Помилка при завантаженні зображення:', error);
        }
      }
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.img) {
      alert('Будь ласка, виберіть зображення');
      return;
    }

    try {
      const dataToSend = { ...formData, idM };
      await addDish(dataToSend);
      alert('Напій додано успішно!');
      setFormData({ Name: '', Price: 0, Description: '', Weight: 0, img: '' });
      setPreviewSrc('');
    } catch (error) {
      alert('Помилка при додаванні блюда');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">Назва напою</label>
        <input
          type="text"
          id="Name"
          name="Name"
          className="form-control"
          value={formData.Name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Price" className="form-label">Ціна</label>
        <input
          type="number"
          id="Price"
          name="Price"
          className="form-control"
          
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Description" className="form-label">Опис</label>
        <textarea
          id="Description"
          name="Description"
          className="form-control"
          value={formData.Description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Weight" className="form-label">Вага</label>
        <input
          type="number"
          id="Weight"
          name="Weight"
          className="form-control"
          
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="img" className="form-label">Зображення</label>
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          className="form-control"
          onChange={handleFileChange}
          required
        />
        {previewSrc && (
          <img
            src={previewSrc}
            alt="Прев'ю зображення"
            style={{ marginTop: '10px', maxWidth: '200px', maxHeight: '150px', objectFit: 'cover' }}
          />
        )}
      </div>

      <button type="submit" className="btn btn-primary">Додати напій</button>
    </form>
  );
};

export default AddDrink;
