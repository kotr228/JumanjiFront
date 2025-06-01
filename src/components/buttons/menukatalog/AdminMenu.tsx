import './../../../styles/menu.css';
import React, { useEffect, useState } from 'react';
import { AppProps } from "../../../state/state";

interface MenuButtonsProps {
    userId: number;
    sectionID: string | undefined;
}

const MenuButtons: React.FC<AppProps & MenuButtonsProps> = ({ sectionID, state }) => {
    const menuCategories = state._Menu._MenuKategory;
    const [menuFood, setMenuFood] = useState(state._Menu._MenuFood);

    // Тип для блюда меню з додатковим індексом
    type MenuFoodItem = typeof state._Menu._MenuFood[0];
    type MenuFoodItemWithIdx = MenuFoodItem & { _idx: number };

    useEffect(() => {
        if (sectionID) {
            const sectionElement = document.getElementById(sectionID);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [sectionID]);

    const handleDishChange = (index: number, field: keyof MenuFoodItem, value: string | number) => {
        setMenuFood(prev => {
            const updatedFood = [...prev];
            // @ts-ignore: Для динамічного ключа
            updatedFood[index][field] = value;
            return updatedFood;
        });
    };

    return (
        <div>
            <div className="DefaultView_sectionHeader__U3ztd">
                <div className="DefaultView_sectionTitle__5TaBo">Меню</div>
                <div className="DefaultView_sectionDescription__EA20t"></div>
            </div>

            {menuCategories.map((category) => {
                // Створюємо масив з індексом
                const relatedDishes: MenuFoodItemWithIdx[] = menuFood
                    .map((dish, idx) => ({ ...dish, _idx: idx }))
                    .filter((dish) => dish.idM === category.id);

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
                                            <input
                                                type="text"
                                                value={dish.Name}
                                                onChange={(e) => handleDishChange(dish._idx, 'Name', e.target.value)}
                                                className="styles_menu-item-title__Mnuv_"
                                            />
                                            <div className="styles_menu-item-price__G8nZ_">
                                                <input
                                                    type="number"
                                                    value={dish.Price}
                                                    onChange={(e) => handleDishChange(dish._idx, 'Price', parseFloat(e.target.value))}
                                                    className="styles_PriceDiscount__zS0u0 styles_discount__EE8JM"
                                                /> UAH
                                            </div>
                                            <div className="styles_menu-item-description__Ez7iP">
                                                <textarea
                                                    value={dish.Description}
                                                    onChange={(e) => handleDishChange(dish._idx, 'Description', e.target.value)}
                                                />
                                            </div>
                                            {dish.Weight !== 0 && (
                                                <div className="styles_menu-item-description__Ez7iP">
                                                    <input
                                                        type="number"
                                                        value={dish.Weight}
                                                        onChange={(e) => handleDishChange(dish._idx, 'Weight', parseFloat(e.target.value))}
                                                    /> грам
                                                </div>
                                            )}
                                        </div>
                                        <div className="styles_menu-item-right__fZWJD">
                                            {dish.img?.trim() && (
                                                <picture>
                                                    <img src={dish.img} alt='' loading="lazy" className="styles_previewImage__HiwA8" />
                                                </picture>
                                            )}

                                            <div className="styles_actions__HRsIJ" style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                                                <button
                                                    className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearancePrimaryStroke__2HcO0"
                                                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                                                    onClick={async () => {
                                                        const updatedDish = menuFood[dish._idx];

                                                        try {
                                                            const response = await fetch(`http://server.jumanjialex.com.ua/api/update/dishes/${updatedDish.id}`, {
                                                                method: 'PUT',
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                },
                                                                body: JSON.stringify(updatedDish),
                                                            });

                                                            if (response.ok) {
                                                                alert('✅ Страву збережено успішно!');
                                                            } else {
                                                                console.error('❌ Помилка при збереженні страви');
                                                                alert('⚠️ Не вдалося зберегти страву.');
                                                            }
                                                        } catch (error) {
                                                            console.error('❌ Помилка:', error);
                                                            alert('⚠️ Виникла помилка при збереженні.');
                                                        }
                                                    }}

                                                >
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 21h4l10.29-10.29a1 1 0 0 0 0-1.42l-3.58-3.58a1 1 0 0 0-1.42 0L4 16.17V21z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                    Зберегти
                                                </button>
                                                <button
                                                    className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearancePrimaryStroke__2HcO0"
                                                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                                                    onClick={async () => {
                                                        const deletedDish = menuFood[dish._idx];

                                                        const confirmDelete = confirm(`Ви дійсно хочете видалити "${deletedDish.Name}"?`);
                                                        if (!confirmDelete) return;

                                                        try {
                                                            const response = await fetch(`http://server.jumanjialex.com.ua/api/delete/dish/${deletedDish.id}`, {
                                                                method: 'DELETE',
                                                            });

                                                            if (response.ok) {
                                                                alert('🗑️ Страву видалено успішно!');
                                                                setMenuFood((prev) => prev.filter((_, idx) => idx !== dish._idx));
                                                            } else {
                                                                alert('⚠️ Не вдалося видалити страву.');
                                                            }
                                                        } catch (error) {
                                                            console.error('❌ Помилка при видаленні:', error);
                                                            alert('⚠️ Сталася помилка при видаленні.');
                                                        }
                                                    }}

                                                >

                                                    <svg width="24" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 6h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        <path d="M9 6v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        <path d="M11 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        <path d="M17 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        <path d="M10 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                    Видалити
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MenuButtons;
