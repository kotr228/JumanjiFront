import Header from '../../components/headermenu/header'
import MenuButton from '../../components/buttons/menu/adminmenu';
import Footer from '../../components/footer/footer'
import { AppProps } from "../../state/state";
import React from 'react';

const Menu: React.FC<AppProps> = () => {
  return (
    <div>
      <Header />
      
      <MenuButton />
      
      
      <Footer />
    </div>
  )
}

export default Menu;