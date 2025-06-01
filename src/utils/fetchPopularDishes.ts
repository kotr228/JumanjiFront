import { MenuFoodItem } from '../state/state';

export async function fetchPopularDishes(): Promise<MenuFoodItem[]> {
  const response = await fetch('http://server.jumanjialex.com.ua/api/popular/dishes');
  if (!response.ok) {
    throw new Error('Помилка при завантаженні популярних страв');
  }
  return response.json();
}
