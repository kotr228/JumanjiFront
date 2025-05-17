export interface FeedbackPayload {
  user_id: number | null; 
  dish_rating: number;
  service_rating: number;
  comment: string;
  contact_allowed: boolean;
}

export async function sendFeedback(payload: FeedbackPayload) {
  const response = await fetch('http://localhost:3000/api/feedback/add', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to send feedback');
  }

  return await response.json();
}
