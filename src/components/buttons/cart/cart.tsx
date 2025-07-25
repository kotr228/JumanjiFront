import React from 'react';
import { useCart } from '../../../context/CartContext';

interface Props {
  dishId: number;
}

const CartToggleButton: React.FC<Props> = ({ dishId }) => {
  const { cart, toggleCartItem } = useCart();

  const isInCart = cart.includes(dishId); // використовуємо актуальний стан

  const handleClick = () => {
    toggleCartItem(dishId); // змінюємо стан кошика
  };

  return (
    <button
      onClick={handleClick}
      className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearancePrimaryStroke__2HcO0"
      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
    >
      {isInCart ? 'Видалити з кошика' : 'Додати в кошик'}
    </button>
  );
};

export default CartToggleButton;
