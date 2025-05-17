import { fetchMenu, fetchMenuFood, fetchBarMenu, fetchBarMenuFood } from '../utils/api';
// Тип для категорії меню

let rerenderMainTree = () => {
    console.log('State updated');
}

// types.ts

export interface AppProps {
    dispatch: (action: MenuAction) => void;
    state: MenuState; // Тепер передаємо весь стейт
};

export type MenuCategoryItem = {
    id: number;
    idName: string;
    label: string;
};

// Тип для елементів страв
export type MenuFoodItem = {
    id: number;
    idM: number;
    Name: string;
    Price: number;
    Description: string;
    Weight: number;
    img: string;
    favorite_count?: number;
};

// Загальний інтерфейс стану меню
export interface MenuState {
    _Menu: {
        _MenuKategory: MenuCategoryItem[];
        _MenuFood: MenuFoodItem[];
    };
    _BarMenu: {
        _BarMenuKategory: MenuCategoryItem[];
        _BarMenuFood: MenuFoodItem[];
    };
}


// Вилучаємо лише ключі з їжею, без _MenuKategory

type FoodAndDrinkKeys = Exclude<keyof MenuState["_Menu"], "_MenuKategory"> | Exclude<keyof MenuState["_BarMenu"], "_BarMenuKategory">;


// Типи дій
type AddMenuItemAction = {
    type: 'ADD_MENU_ITEM';
    payload: {
        categoryKey: FoodAndDrinkKeys;
        item: MenuFoodItem;
    };
};

type GetMenuAction = {
    type: 'GET_MENU';
};

type GetFoodMenuAction = {
    type: 'GET_FOOD_MENU';
};

type GetBarMenuAction = {
    type: 'GET_BAR_MENU';
};

type GetBarMenuFoodAction = {
    type: 'GET_BAR_MENU_FOOD';
};

type MenuAction = AddMenuItemAction | GetMenuAction | GetBarMenuAction | GetFoodMenuAction | GetBarMenuFoodAction;

// Сам store
let store = {
    _state: {
        _Menu: {
            _MenuKategory: [] as MenuCategoryItem[],
            _MenuFood: [] as MenuFoodItem[],
        },
        _BarMenu: {
            _BarMenuKategory: [] as MenuCategoryItem[],
            _BarMenuFood: [] as MenuFoodItem[],
        }
    },

    _callSubscriber() {
        console.log("State changed, but subscriber not defined.");
    },

    dispatch(action: MenuAction) {
        switch (action.type) {
            case 'GET_MENU': {
                // Виклик API для отримання меню
                fetchMenu()
                    .then((data) => {
                        // Assuming data contains both categories and food items
                        this._state._Menu._MenuKategory = data; // update categories 
                        this._callSubscriber();
                    })
                    .catch((error) => {
                        console.error('Помилка при завантаженні меню:', error);
                    });
                return;
            }
            case 'GET_FOOD_MENU': {
                fetchMenuFood()
                    .then((data) => {
                        this._state._Menu._MenuFood = data; // update categories 
                        this._callSubscriber();
                    })
                    .catch((error) => {
                        console.error('Помилка при завантаженні меню:', error);
                    });
                return;
            }
            case 'GET_BAR_MENU':{
                fetchBarMenu()
                    .then((data) => {
                        // Assuming data contains both categories and food items
                        this._state._BarMenu._BarMenuKategory = data; // update categories 
                        this._callSubscriber();
                    })
                    .catch((error) => {
                        console.error('Помилка при завантаженні меню:', error);
                    });
                return;
            }
            case 'GET_BAR_MENU_FOOD':{
                fetchBarMenuFood()
                    .then((data) => {
                        // Assuming data contains both categories and food items
                        this._state._BarMenu._BarMenuFood = data; // update categories 
                        this._callSubscriber();
                    })
                    .catch((error) => {
                        console.error('Помилка при завантаженні меню:', error);
                    });
                return;
            }
        }
        
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    }

};


export let LoginBTN = (email: React.RefObject<HTMLInputElement | null>, password: React.RefObject<HTMLInputElement | null>) => {
    let text = email.current?.value;
    let text2 = password.current?.value;
    alert(text);
    alert(text2);
    alert('Ви успішно увійшли в аккаунт!');
    rerenderMainTree();
  }
  
  export let SignUpBTN = (name: React.RefObject<HTMLInputElement | null>, email: React.RefObject<HTMLInputElement | null>, password: React.RefObject<HTMLInputElement | null>) => {
    let text = name.current?.value;
    let text2 = email.current?.value;
    let text3 = password.current?.value;
    alert(text);
    alert(text2);
    alert(text3);
    alert('Ви успішно зареєструвалися!');
    rerenderMainTree();
  }


export default store;
