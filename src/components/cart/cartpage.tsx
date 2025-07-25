import React, { useState, useEffect } from 'react';
import { AppProps } from '../../state/state';
import { addOrder } from '../../utils/apiOrder';
import './../../styles/reviews_&_comments.css';
import CartNone from '../cartnone/cartnone';

interface CartPageProps extends AppProps { }

type Table = {
  id: number;
  table_number: number;
  seats: number;
  location: string;
  is_vip: boolean;
  is_active?: boolean;
};

const CartPage: React.FC<CartPageProps> = ({ state, dispatch }) => {
  const cart = state._Cart.cart;
  const allDishes = state._Menu._MenuFood;

  const cartDishes = allDishes.filter(dish => cart.includes(dish.id));

  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState<number | ''>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [tables, setTables] = useState<Table[]>([]);
  const [lastOrder, setLastOrder] = useState<typeof cartDishes>([]);
  const [lastTotal, setLastTotal] = useState(0);

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

      setLastOrder(cartDishes);
      setLastTotal(total);
      setSuccess(true);


      dispatch({ type: 'CLEAR_CART' });
      setCustomerName('');
      setTableNumber('');
    } catch (err: any) {
      setError(err.message || 'Помилка при відправці замовлення');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const res = await fetch('http://server.jumanjialex.com.ua/api/tables');
        if (!res.ok) throw new Error('Помилка при завантаженні столиків');
        const data = await res.json();
        setTables(data);
      } catch (err: any) {
        console.error('❌', err.message);
      }
    };

    fetchTables();
  }, []);


  if (success) {
    return (
      <div className="container py-4">
        <h2>Замовлення створено успішно!</h2>
        <h4>Список замовлених страв:</h4>
        <ul>
          {lastOrder.map(dish => (
            <li key={dish.id}>
              <strong>{dish.Name}</strong> — {dish.Price} грн
            </li>
          ))}
        </ul>
        <p><strong>Загальна сума:</strong> {lastTotal} грн</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2>Кошик</h2>
      {cartDishes.length === 0 && <CartNone />}

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

                <div
                  className="styles_actions__HRsIJ"
                  style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
                >
                  <button
                    onClick={() => dispatch({ type: 'TOGGLE_CART_ITEM', payload: dish.id })}
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
        <div className="form-label card shadow-sm" style={{ marginTop: '2rem' }}>
          <p><strong>Загальна сума:</strong> {total} грн</p>

          <input className="form-control"
            type="text"
            placeholder="Ваше ім'я"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
            style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
          />

          <select className="form-control"
            value={tableNumber}
            onChange={e => setTableNumber(e.target.value ? Number(e.target.value) : '')}
            style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
          >
            <option value="">Оберіть номер столика</option>
            {tables
              .filter(t => t.is_active !== false)
              .map(t => (
                <option key={t.id} value={t.table_number}>
                  №{t.table_number} ({t.seats} місць){t.is_vip ? ' [VIP]' : ''}
                </option>
              ))}
          </select>


          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="sendFeedback">
            <button className="btn btn-primary w-100"
              onClick={submitOrder}
              disabled={loading}
              style={{
                padding: '12px 24px',
                backgroundColor: loading ? '#a0aec0' : '#458505',
                color: 'white',
                border: 'none',

                fontSize: '16px',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Відправка...' : 'Оформити замовлення'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
