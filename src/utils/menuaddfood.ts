export interface DishPayload {
  idM: number;
  Name: string;
  Price: number;
  Description?: string;
  Weight?: number;
  img?: string;
}

export async function addDish(dish: DishPayload): Promise<{ id: number }> {
  const response = await fetch('http://localhost:3000/api/add/menufood', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dish),
  });

  if (!response.ok) {
    throw new Error('Failed to add dish');
  }

  return response.json();
}
