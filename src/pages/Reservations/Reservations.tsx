import Header from '../../components/headermenu/header'
import ReservationComponent from '../../components/buttons/reservations/Reservations';
import Footer from '../../components/footer/footer'
import { AppProps } from "../../state/state";
import React from 'react';

const Reservations: React.FC<AppProps> = () => {
  return (
    <div>
      <Header />
      
      
      <ReservationComponent />
      
      
      <Footer />
    </div>
  )
}

export default Reservations;