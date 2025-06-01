import { MenuCategoryItem, MenuFoodItem } from '../state/state';



export const fetchMenu = async (): Promise<MenuCategoryItem[]> => {
    try {
        const response = await fetch('http://server.jumanjialex.com.ua/api/users/getMenuKategory');
        if (!response.ok) {
            throw new Error('Помилка при завантаженні меню');
        }
        const data: MenuCategoryItem[] = await response.json();
        
        console.log('Received data:', data);  // Для перевірки отриманих даних
        return data;
    } catch (error) {
        console.error('Error in fetchMenu:', error);
        throw new Error('Не вдалося отримати меню');
    }
};

export const fetchMenuFood = async () => {
    try {
        const response = await fetch('http://server.jumanjialex.com.ua/api/users/getMenuFood');
        if (!response.ok) {
            throw new Error('Помилка при завантаженні блюд з меню');
        }
        const data: MenuFoodItem[] = await response.json();
        
        console.log('Received data:', data);  // Для перевірки отриманих даних
        return data;
    } catch (error) {
        console.error('Error in fetchMenu:', error);
        throw new Error('Не вдалося отримати блюд з меню');
    }
};

export const fetchBarMenu = async () => {
    try {
        const response = await fetch('http://server.jumanjialex.com.ua/api/users/getBarMenuKategory');
        if (!response.ok) {
            throw new Error('Помилка при завантаженні бар-меню');
        }
        const data: MenuCategoryItem[] = await response.json();
        
        console.log('Received data:', data);  // Для перевірки отриманих даних
        return data;
    } catch (error) {
        console.error('Error in fetchMenu:', error);
        throw new Error('Не вдалося отримати бар-меню');
    }
};

export const fetchBarMenuFood = async () => {
    try {
        const response = await fetch('http://server.jumanjialex.com.ua/api/users/getBarMenuFood');
        if (!response.ok) {
            throw new Error('Помилка при завантаженні блюд з бар-меню');
        }
        const data: MenuFoodItem[] = await response.json();
        
        console.log('Received data:', data);  // Для перевірки отриманих даних
        return data;
    } catch (error) {
        console.error('Error in fetchMenu:', error);
        throw new Error('Не вдалося отримати блюд з бар-меню');
    }
};