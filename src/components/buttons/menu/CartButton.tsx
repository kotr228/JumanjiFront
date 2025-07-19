// CartButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CartButtonProps {
  itemCount: number;
}

const CartButton: React.FC<CartButtonProps> = ({ itemCount }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/cart')}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        backgroundColor: '#eb7353',
        color: '#fff',
        border: 'none',
        borderRadius: 50,
        padding: '10px 20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
      aria-label="Перейти до кошика"
    >
      🛒 Кошик
      <span
        style={{
          backgroundColor: '#fff',
          color: '#eb7353',
          borderRadius: '50%',
          padding: '2px 8px',
          fontWeight: 'bold',
          minWidth: 24,
          textAlign: 'center',
          boxShadow: 'inset 0 0 4px rgba(0,0,0,0.15)',
        }}
      >
        {itemCount}
      </span>
    </button>
  );
};

export default CartButton;
