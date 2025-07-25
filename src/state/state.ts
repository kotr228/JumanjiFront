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
    _Cart: {
        cart: number[];
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

type AddToCartAction = {
    type: 'ADD_TO_CART';
    payload: number;
};

type RemoveFromCartAction = {
    type: 'REMOVE_FROM_CART';
    payload: number;
};

type ToggleCartItemAction = {
    type: 'TOGGLE_CART_ITEM';
    payload: number;
};

type ClearCartAction = {
    type: 'CLEAR_CART';
};

type MenuAction =
    | AddMenuItemAction
    | GetMenuAction
    | GetFoodMenuAction
    | GetBarMenuAction
    | GetBarMenuFoodAction
    | AddToCartAction
    | RemoveFromCartAction
    | ToggleCartItemAction
    | ClearCartAction;


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
        },
        _Cart: {
            cart: typeof window !== 'undefined'
                ? JSON.parse(localStorage.getItem('cart') || '[]')
                : [],
        }
    },

    _callSubscriber: () => { },

    getState() {
        return this._state;
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

    dispatch(action: MenuAction) {
        switch (action.type) {
            case 'GET_MENU':
                fetchMenu().then((data) => {
                    this._state._Menu._MenuKategory = data;
                    this._callSubscriber();
                });
                break;

            case 'GET_FOOD_MENU':
                fetchMenuFood().then((data) => {
                    this._state._Menu._MenuFood = data;
                    this._callSubscriber();
                });
                break;

            case 'GET_BAR_MENU':
                fetchBarMenu().then((data) => {
                    this._state._BarMenu._BarMenuKategory = data;
                    this._callSubscriber();
                });
                break;

            case 'GET_BAR_MENU_FOOD':
                fetchBarMenuFood().then((data) => {
                    this._state._BarMenu._BarMenuFood = data;
                    this._callSubscriber();
                });
                break;

            case 'ADD_TO_CART':
                if (!this._state._Cart.cart.includes(action.payload)) {
                    this._state._Cart.cart.push(action.payload);
                    localStorage.setItem('cart', JSON.stringify(this._state._Cart.cart));
                    this._callSubscriber();
                }
                break;

            case 'REMOVE_FROM_CART':
                this._state._Cart.cart = this._state._Cart.cart.filter((id:number) => id !== action.payload);
                localStorage.setItem('cart', JSON.stringify(this._state._Cart.cart));
                this._callSubscriber();
                break;

            case 'TOGGLE_CART_ITEM':
                const cart = this._state._Cart.cart;
                const exists = cart.includes(action.payload);
                this._state._Cart.cart = exists
                    ? cart.filter((id:number) => id !== action.payload)
                    : [...cart, action.payload];
                localStorage.setItem('cart', JSON.stringify(this._state._Cart.cart));
                this._callSubscriber();
                break;

            case 'CLEAR_CART':
                this._state._Cart.cart = [];
                localStorage.setItem('cart', JSON.stringify([]));
                this._callSubscriber();
                break;
        }
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
