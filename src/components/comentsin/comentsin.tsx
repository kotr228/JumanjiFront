import React, { useState } from 'react';

const CommentsIn: React.FC = () => {
  const [foodRating, setFoodRating] = useState<number>(0);
  const [serviceRating, setServiceRating] = useState<number>(0);
  const [hovered, setHovered] = useState<{ type: 'food' | 'service'; index: number } | null>(null);

  const renderStars = (
    rating: number,
    setRating: (value: number) => void,
    type: 'food' | 'service'
  ) => (
    <div className="d-flex">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = hovered?.type === type
          ? star <= hovered.index
          : star <= rating;
        return (
          <button
            key={star}
            type="button"
            className="btn btn-link p-0"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHovered({ type, index: star })}
            onMouseLeave={() => setHovered(null)}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill={filled ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="container py-4">
      <div className="card shadow-sm">
        <div className="card-body">
          {/* Header */}
          <div className="d-flex justify-content-between mb-3">
            <div>
              <h5 className="card-title">Оцініть нас, будь ласка!</h5>
            </div>
            {/*<div>
              <h5 className="card-title">Дякуємо за відгук! 😊</h5>
              <p className="card-text mt-2">Ви робите нас краще!</p>
            </div>*/}
          </div>

          {/* Ratings */}
          <div className="mb-4">
            <div className="mb-3">
              <label className="form-label">Страви</label>
              {renderStars(foodRating, setFoodRating, 'food')}
            </div>

            <div>
              <label className="form-label">Сервіс</label>
              {renderStars(serviceRating, setServiceRating, 'service')}
            </div>
          </div>

          {/* Comment */}
          <div className="mb-3">
            <textarea className="form-control" rows={3} placeholder="Коментар" />
          </div>

          {/* Contact toggle */}
          <div className="form-check form-switch mb-3">
            <input className="form-check-input" type="checkbox" id="contactSwitch" />
            <label className="form-check-label" htmlFor="contactSwitch">
              Будь ласка, залиште свої контакти
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="btn btn-primary w-100"
            disabled={foodRating === 0 || serviceRating === 0}
            onClick={() => console.log({ foodRating, serviceRating })}
          >
            Надіслати відгук
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentsIn;
