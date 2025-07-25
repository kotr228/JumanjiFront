import Header from '../../components/headermenu/adminheader'
import MenuButtons from '../../components/buttons/menukatalog/AdminMenuButtons'
import BarMenuButtons from '../../components/buttons/menukatalog/AdminBarMenuButtons';
import Footer from '../../components/footer/footer'
import { AppProps } from "../../state/state";
import React from 'react';

const Menu: React.FC<AppProps> = ({state, dispatch}) => {
  return (
    <div>
      <Header />
      
      
      <MenuButtons dispatch = {dispatch} state={state} />
      <BarMenuButtons dispatch = {dispatch} state={state} />
      
      
      <Footer />
    </div>
  )
}

export default Menu;