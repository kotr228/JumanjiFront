import Header from '../../components/headermenu/header'
import Footer from '../../components/footer/footer'
import Cookie from '../../components/texts/cookie';
import { AppProps } from "../../../state/state";
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div>
      <Header />
      
      
      <Cookie />
      
      
      <Footer />
    </div>
  )
}

export default CookiePolicy;