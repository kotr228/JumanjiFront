import { MenuFoodItem } from '../state/state';

export async function fetchPopularDishes(): Promise<MenuFoodItem[]> {
  const response = await fetch('http://localhost:3000/api/popular2/drinks');
  if (!response.ok) {
    throw new Error('Помилка при завантаженні популярного пойла');
  }
  return response.json();
}
