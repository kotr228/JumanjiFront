import { useNavigate } from 'react-router-dom'; // якщо ти використовуєш React Router

const GoToOrderButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/order')}
      style={{
        padding: '12px 24px',
        backgroundColor: '#10b981', // зелений
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        margin: '1rem 0',
      }}
    >
      Перейти до оформлення замовлення
    </button>
  );
};

export default GoToOrderButton;
