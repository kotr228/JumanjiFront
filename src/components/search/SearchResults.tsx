import './../../styles/menu.css';
import React, { useEffect, useState } from 'react';
import { AppProps } from "../../state/state";
import { addToFavorites, removeFromFavorites, fetchFavorites } from '../../utils/favorites';
import { fetchFavoritesdinks } from '../../utils/favoritesdrinks';
import store from '../../state/state';

import { MenuFoodItem } from '../../state/state';

interface SearchResultsProps {
  foods: MenuFoodItem[];
  drinks: MenuFoodItem[];
  userId: number;
  state: AppProps['state'];
  sectionID?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ foods, drinks, userId}) => {
  const [favoriteDishes, setFavoriteDishes] = useState<number[]>([]);
  const [favoriteDrinks, setFavoriteDrinks] = useState<number[]>([]);
  const cart = store.getState()._Cart.cart;

  // Локальний стан для примусового ререндеру
  const [, setForceUpdate] = useState(0);

  const onToggleCartItem = (dishId: number) => {
    store.dispatch({ type: 'TOGGLE_CART_ITEM', payload: dishId });
    setForceUpdate(n => n + 1);
  };

  useEffect(() => {
    fetchFavorites(userId)
      .then((favorites: any[]) => {
        const favoriteIds = favorites.map(dish => dish.id);
        setFavoriteDishes(favoriteIds);
      })
      .catch(console.error);
  }, [userId]);

  useEffect(() => {
    fetchFavoritesdinks(userId)
      .then((favorites: any[]) => {
        const favoriteIds = favorites.map(drink => drink.id);
        setFavoriteDrinks(favoriteIds);
      })
      .catch(console.error);
  }, [userId]);

  const toggleFavorite = async (dishId: number) => {
    try {
      if (favoriteDishes.includes(dishId)) {
        await removeFromFavorites(userId, dishId);
        setFavoriteDishes(prev => prev.filter(id => id !== dishId));
      } else {
        await addToFavorites(userId, dishId);
        setFavoriteDishes(prev => [...prev, dishId]);
      }
    } catch (error) {
      console.error(error);
      alert('Сталася помилка при оновленні улюблених');
    }
  };

  return (
    <div>
      {(foods.length === 0 && drinks.length === 0) ? (
        <div>Нічого не знайдено</div>
      ) : (
        <>
          {foods.length > 0 && (
            <div>
              <h3>Страви</h3>
              {foods.map((dish) => (
                <div key={`food-${dish.id}`} className="section-list-item styles_menuItem__rvgPH">
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
                          onClick={() => toggleFavorite(dish.id)}
                          className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearancePrimaryStroke__2HcO0"
                          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          {favoriteDishes.includes(dish.id) ? (
                            <>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="#eb7353" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                              В обраних
                            </>
                          ) : (
                            <>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#eb7353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.84 4.61c-1.54-1.36-4-1.36-5.54 0L12 7.88l-3.3-3.27c-1.54-1.36-4-1.36-5.54 0-1.65 1.46-1.5 4.18.32 5.71L12 21.35l8.52-10.99c1.83-1.54 1.97-4.25.32-5.75z" />
                              </svg>
                              Додати в обрані
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => onToggleCartItem(dish.id)}
                          className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearancePrimaryStroke__2HcO0"
                          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          {cart.includes(dish.id) ? 'Видалити з кошика' : 'Додати в кошик'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {drinks.length > 0 && (
            <div>
              <h3>Напої</h3>
              {drinks.map((drink) => (
                <div key={`drink-${drink.id}`} className="section-list-item styles_menuItem__rvgPH">
                  <div className="styles_menuItemWrapper__vCZAP">
                    <div className="styles_menu-item-left__HxAVf styles_haveRightContent__0HANq">
                      <div className="styles_menu-item-title__Mnuv_">{drink.Name}</div>
                      <div className="styles_menu-item-price__G8nZ_">
                        <div className="styles_PriceDiscount__zS0u0 styles_discount__EE8JM">{drink.Price} UAH</div>
                      </div>
                      <div className="styles_menu-item-description__Ez7iP">
                        <pre>{drink.Description}</pre>
                      </div>
                      {drink.Weight !== 0 && (
                        <div className="styles_menu-item-description__Ez7iP">
                          <pre>{drink.Weight} грам</pre>
                        </div>
                      )}
                    </div>
                    <div className="styles_menu-item-right__fZWJD">
                      {drink.img?.trim() && (
                        <picture>
                          <img src={drink.img} alt={drink.Name} loading="lazy" className="styles_previewImage__HiwA8" />
                        </picture>
                      )}

                      <div className="styles_actions__HRsIJ" style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                        <button
                          onClick={() => toggleFavorite(drink.id)}
                          className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearancePrimaryStroke__2HcO0"
                          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          {favoriteDrinks.includes(drink.id) ? (
                            <>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="#eb7353" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                              В обраних
                            </>
                          ) : (
                            <>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#eb7353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.84 4.61c-1.54-1.36-4-1.36-5.54 0L12 7.88l-3.3-3.27c-1.54-1.36-4-1.36-5.54 0-1.65 1.46-1.5 4.18.32 5.71L12 21.35l8.52-10.99c1.83-1.54 1.97-4.25.32-5.75z" />
                              </svg>
                              Додати в обрані
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
