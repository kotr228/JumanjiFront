import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { sendFeedback, FeedbackPayload } from '../../utils/FeedbackPayload';
import './../../styles/reviews_&_comments.css';

const CommentsIn: React.FC = () => {

    const { state } = useAuth();
    const user = state.user;

    const [foodRating, setFoodRating] = useState<number>(0);
    const [serviceRating, setServiceRating] = useState<number>(0);
    const [hovered, setHovered] = useState<{ type: 'food' | 'service'; index: number } | null>(null);
    const [comment, setComment] = useState<string>('');
    const [contactAllowed, setContactAllowed] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);

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
                        style={{ color: filled ? '#ffc107' : 'orange' }}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHovered({ type, index: star })}
                        onMouseLeave={() => setHovered(null)}
                        aria-label={`${star} star`}
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

    const handleSubmit = async () => {
        if (foodRating === 0 || serviceRating === 0) {
            alert('Будь ласка, оцініть і страви, і сервіс!');
            return;
        }

        setLoading(true);
        
        if (!user) {
            alert('Будь ласка, увійдіть у систему');
            return; // або інша логіка
        }

        const payload: FeedbackPayload = {
            user_id: user.id,        // гарантовано number
            dish_rating: foodRating,
            service_rating: serviceRating,
            comment,
            contact_allowed: contactAllowed,
        };

        try {
            const data = await sendFeedback(payload);
            alert('Відгук надіслано! Дякуємо!');
            setFoodRating(0);
            setServiceRating(0);
            setComment('');
            setContactAllowed(false);
        } catch (error) {
            alert('Сталася помилка при відправці відгуку.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                        <div>
                            <h5 className="card-title">Оцініть нас, будь ласка!</h5>
                        </div>
                    </div>

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

                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            rows={3}
                            placeholder="Коментар"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />
                    </div>

                    {/*<div className="form-check form-switch mb-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="contactSwitch"
                            checked={contactAllowed}
                            onChange={e => setContactAllowed(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="contactSwitch">
                            Будь ласка, залиште свої контакти
                        </label>
                    </div>*/}

                    <div className="sendFeedback">
                        <button
                            type="button"
                            className="btn btn-primary w-100"
                            disabled={foodRating === 0 || serviceRating === 0 || loading}
                            onClick={handleSubmit}
                        >
                            {loading ? 'Надсилання...' : 'Надіслати відгук'}
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CommentsIn;
