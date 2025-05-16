import Header from '../../components/headermenu/header'
import Footer from '../../components/footer/footer'
import About from '../../components/texts/about';
import { AppProps } from "../../../state/state";
import React from 'react';

const AboutCompany: React.FC = () => {
  return (
    <div>
      <Header />
      
      
      <About />
      
      
      <Footer />
    </div>
  )
}

export default AboutCompany;