export const fetchFeedback = async () => {
  try {
    const response = await fetch('http://server.jumanjialex.com.ua/api/feedback/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Помилка при отриманні відгуків');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Fetch feedback error:', error);
    throw error;
  }
};
