import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';

const UserLogger: React.FC = () => {
  const { state } = useAuth();

  useEffect(() => {
    console.log('Поточний користувач:', state.user);
    console.log('Токен:', state.token);
  }, [state.user, state.token]);

  return null; // нічого не рендерить
};

export default UserLogger;
