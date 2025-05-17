const API_URL = 'http://localhost:3000/api/favoritesdrinks';

export async function addToFavoritesdinks(userId: number, dishId: number) {
  const res = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, dishId }),
  });
  if (!res.ok) throw new Error('Не вдалося додати до улюблених');
  return res.json();
}

export async function removeFromFavoritesdinks(userId: number, dishId: number) {
  const res = await fetch(`${API_URL}/remove`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, dishId }),
  });
  if (!res.ok) throw new Error('Не вдалося видалити з улюблених');
  return res.json();
}

export async function fetchFavoritesdinks(userId: number) {
  const res = await fetch(`${API_URL}/${userId}`);
  if (!res.ok) throw new Error('Не вдалося завантажити улюблені страви');
  return res.json();
}
