import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { AppProps } from '../../state/state';
import { addOrder } from '../../utils/apiOrder'; // імпорт твоєї функції додавання замовлення

interface CartPageProps extends AppProps {
  state: AppProps['state'];
}

const CartPage: React.FC<CartPageProps> = ({ state }) => {
  const { cart, toggleCartItem, clearCart } = useCart();

  const allDishes = state._Menu._MenuFood;
  const cartDishes = allDishes.filter(dish => cart.includes(dish.id));

  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState<number | ''>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const total = cartDishes.reduce((sum, dish) => sum + Number(dish.Price || 0), 0);

  const submitOrder = async () => {
    setError(null);

    if (!customerName.trim()) {
      setError("Будь ласка, введіть ім'я замовника");
      return;
    }
    if (!tableNumber || tableNumber < 1 || tableNumber > 5) {
      setError("Виберіть номер столика від 1 до 5");
      return;
    }
    if (cartDishes.length === 0) {
      setError("Ваш кошик порожній");
      return;
    }

    setLoading(true);
    try {
      await addOrder({
        customer_name: customerName,
        table_number: tableNumber,
        products: cartDishes.map(d => d.Name),
        prices: cartDishes.map(d => d.Price),
        total,
        operator: '',
      });

      setSuccess(true);
      clearCart();
      setCustomerName('');
      setTableNumber('');
    } catch (err: any) {
      setError(err.message || 'Помилка при відправці замовлення');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <h2>✅ Замовлення створено успішно!</h2>;
  }

  return (
    <div>
      <h2>Кошик</h2>
      {cartDishes.length === 0 && <p>Ваш кошик порожній</p>}

      <div className="DefaultView_categoryMenu__Mi7A2">
        {cartDishes.map(dish => (
          <div key={dish.id} className="section-list-item styles_menuItem__rvgPH">
            <div className="styles_menuItemWrapper__vCZAP">
              <div className="styles_menu-item-left__HxAVf styles_haveRightContent__0HANq">
                <div className="styles_menu-item-title__Mnuv_">{dish.Name}</div>
                <div className="styles_menu-item-price__G8nZ_">
                  <div className="styles_PriceDiscount__zS0u0 styles_discount__EE8JM">{dish.Price} UAH</div>
                </div>
                <div className="styles_menu-item-description__Ez7iP">
                  <pre>{dish.Description}</pre>
                </div>
                {dish.Weight !== 0 && (
                  <div className="styles_menu-item-description__Ez7iP">
                    <pre>{dish.Weight} грам</pre>
                  </div>
                )}
              </div>

              <div className="styles_menu-item-right__fZWJD">
                {dish.img?.trim() && (
                  <picture>
                    <img src={dish.img} alt={dish.Name} loading="lazy" className="styles_previewImage__HiwA8" />
                  </picture>
                )}

                <div className="styles_actions__HRsIJ" style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                  <button
                    onClick={() => toggleCartItem(dish.id)}
                    className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearancePrimaryStroke__2HcO0"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    Видалити з кошика
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cartDishes.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <p><strong>Загальна сума:</strong> {total} грн</p>

          <input
            type="text"
            placeholder="Ваше ім'я"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
            style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '200px' }}
          />

          <select
            value={tableNumber}
            onChange={e => setTableNumber(e.target.value ? Number(e.target.value) : '')}
            style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '200px' }}
          >
            <option value="">Оберіть номер столика</option>
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button
            onClick={submitOrder}
            disabled={loading}
            style={{
              padding: '12px 24px',
              backgroundColor: loading ? '#a0aec0' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Відправка...' : 'Оформити замовлення'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
