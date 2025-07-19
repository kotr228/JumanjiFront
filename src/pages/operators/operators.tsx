import Header from '../../components/headermenu/header'
import Footer from '../../components/footer/footer'
import OperatorList from '../../components/buttons/operators/OperatorList';
import AddOperatorForm from '../../components/buttons/operators/AddOperatorForm';
import { AppProps } from "../../state/state";
import React from 'react';

const Operators: React.FC<AppProps> = () => {
  return (
    <div>
      <Header />
      
      <OperatorList />
      <AddOperatorForm onAddSuccess={() => window.location.reload()} />
      
      <Footer />
    </div>
  )
}

export default Operators;