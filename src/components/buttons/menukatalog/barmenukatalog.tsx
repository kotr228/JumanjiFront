import { useNavigate, useParams } from 'react-router-dom';
import './../../../styles/menu.css';
import React, { useEffect, useState } from 'react';
import { AppProps } from "../../../state/state";
import { MenuCategoryItem, MenuFoodItem } from '../../../state/state';
import { addToFavoritesdinks, removeFromFavoritesdinks, fetchFavoritesdinks } from '../../../utils/favoritesdrinks';
import AddDrink from './DrinksAdd';

interface MenuButtonsProps {
  userId: number;
  sectionID: string | undefined; // Додали проп sectionID
}

const MenuButtons: React.FC<AppProps & MenuButtonsProps> = ({ userId, dispatch, sectionID, state }) => {

  const menuCategories = state._BarMenu._BarMenuKategory;
  const menuFood = state._BarMenu._BarMenuFood;
  const navigate = useNavigate();

  const [favoriteDishes, setFavoriteDishes] = useState<number[]>([]);

  useEffect(() => {
    if (sectionID) {
      const sectionElement = document.getElementById(sectionID);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [sectionID]);

  useEffect(() => {
    fetchFavoritesdinks(userId)
      .then((favorites: any[]) => {
        const favoriteIds = favorites.map(dish => dish.id);
        setFavoriteDishes(favoriteIds);
      })
      .catch(console.error);
  }, [userId]);

  const toggleFavorite = async (dishId: number) => {
    try {
      if (favoriteDishes.includes(dishId)) {
        await removeFromFavoritesdinks(userId, dishId);
        setFavoriteDishes(prev => prev.filter(id => id !== dishId));
      } else {
        await addToFavoritesdinks(userId, dishId);
        setFavoriteDishes(prev => [...prev, dishId]);
      }
    } catch (error) {
      console.error(error);
      alert('Сталася помилка при оновленні улюблених');
    }
  };

  const handleClick = (id: string) => {
    navigate(`/menu/${id}`);
  };

  return (
    <div>
      <div className="DefaultView_sectionHeader__U3ztd">
        <div className="DefaultView_sectionTitle__5TaBo">Барна карта</div>
        <div className="DefaultView_sectionDescription__EA20t"></div>
      </div>

      {menuCategories.map((category) => {
        const relatedDishes = menuFood.filter((dish) => dish.idM === category.id);

        

        return (
          <div key={category.id} className="DefaultView_categoryWrapper__diWo2 category-observer-js" id={category.idName}>
            <div className="DefaultView_category____Qzq">
              <div className="DefaultView_categoryName__81kTs">{category.label}</div>
            </div>
            <div className="DefaultView_categoryMenu__Mi7A2">
              {relatedDishes.map((dish) => (
                <div key={`${category.id}-${dish.Name}`} className="section-list-item styles_menuItem__rvgPH">
                  <div className="styles_menuItemWrapper__vCZAP">
                    <div className="styles_menu-item-left__HxAVf styles_haveRightContent__0HANq">
                      <div className="styles_menu-item-title__Mnuv_">{dish.Name}</div>
                      <div className="styles_menu-item-price__G8nZ_">
                        <div className="styles_PriceDiscount__zS0u0 styles_discount__EE8JM">{dish.Price} UAH</div>
                      </div>
                      <div className="styles_menu-item-description__Ez7iP">
                        <pre>{dish.Description}</pre>
                      </div>
                    </div>
                    <div className="styles_menu-item-right__fZWJD">
                      <picture>
                        <img src={dish.img} alt={dish.Name} loading="lazy" className="styles_previewImage__HiwA8" />
                      </picture>
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

                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="styles_menu-item-right__fZWJD">
                <AddDrink idM={category.id} />
              </div>
            </div>
          </div>
        );
      })}

    </div>

  );
};

export default MenuButtons;
