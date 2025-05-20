import Header from '../../components/headermenu/header'
import Footer from '../../components/footer/footer'
import ComentsIn from '../../components/comentsin/comentsin';
import { useAuth } from '../../context/AuthContext';

import React from 'react';

const Coments: React.FC = () => {

  const { state: authState } = useAuth();
  const userRole = authState.user?.role;

  return (
    <div>
      <Header />

      <ComentsIn />

      <Footer />
    </div>
  )
}

export default Coments;