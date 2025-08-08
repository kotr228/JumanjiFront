import Header from '../../components/headermenu/header'
import MenuButton from '../../components/buttons/menu/adminmenu';
import Operators from '../../components/buttons/operators/operators';
import Orders from '../../components/buttons/operators/orders';
import Tables from '../../components/buttons/operators/tables';
import ReservationBtn from '../../components/buttons/operators/ReservationBTN';
import Footer from '../../components/footer/footer'
import { AppProps } from "../../state/state";
import React from 'react';

const Menu: React.FC<AppProps> = () => {
  return (
    <div>
      <Header />
      
      <MenuButton />
      <Operators />
      <Orders />
      <Tables />
      <ReservationBtn />
      
      <Footer />
    </div>
  )
}

export default Menu;