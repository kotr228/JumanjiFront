import React, { useEffect, useState, useRef } from 'react';
import './../../styles/gallery.css';
import { useAuth } from '../../context/AuthContext';

type GalleryImage = {
  id: number;
  filename: string;
  filepath: string;
};

const API_BASE = 'http://server.jumanjialex.com.ua'; // або process.env.REACT_APP_API_URL

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { state: authState } = useAuth();
  const userRole = authState.user?.role;

  // Завантаження списку фото
  useEffect(() => {
    fetch(`${API_BASE}/api/photos/geter`)
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error('Помилка при отриманні фото:', err));
  }, []);

  const handleAddClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('photo', file);

    try {
      const response = await fetch(`${API_BASE}/api/photos/seter`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        // Оновлюємо список — додаємо нове фото
        const newImage: GalleryImage = {
          id: result.insertId,
          filename: file.name,
          filepath: `/public/galery/${result.insertId}-${file.name}`, // заміни, якщо бекенд генерує інший filename
        };
        setImages(prev => [newImage, ...prev]);
      } else {
        alert(result.error || 'Не вдалося завантажити фото');
      }
    } catch (err) {
      console.error('Помилка при завантаженні фото:', err);
    }
  };

  return (
    <div className="styles_MainTemplatePhotoGallery__NpGMJ">
      <div className="styles_photoGalleryTitle__8__s8">Наші фотографії</div>
      <div className="styles_photoGalleryList__iT_m3">
        {images.map((img, index) => (
          <div className="styles_photoGalleryListItem__1Nm1z" key={index}>
            <picture>
              <source srcSet={`${API_BASE}${img.filepath}`} type="image/webp" />
              <img
                src={`${API_BASE}${img.filepath}`}
                alt={`gallery-${index}`}
                loading="lazy"
              />
            </picture>
          </div>
        ))}
        {userRole === 'admin' && (
        <button className="gallery_addButton" onClick={handleAddClick}>+</button>
        )}
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default Gallery;
