import Header from '../../components/headermenu/header'
import Footer from '../../components/footer/footer'
import OrdersList from '../../components/buttons/operators/allOrders';
import { AppProps } from "../../state/state";
import React from 'react';

const Operators: React.FC<AppProps> = () => {
  return (
    <div>
      <Header />
      
      <OrdersList />
      
      <Footer />
    </div>
  )
}

export default Operators;