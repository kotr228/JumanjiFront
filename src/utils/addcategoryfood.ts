import axios from 'axios';

export interface CategoryData {
  idName: string;
  label: string;
}

export const addCategory = async (data: CategoryData): Promise<number> => {
  try {
    const response = await axios.post('http://localhost:3000/api/menu/addcategory', data);
    return response.data.id;
  } catch (error) {
    console.error('Помилка при додаванні категорії:', error);
    throw error;
  }
};
