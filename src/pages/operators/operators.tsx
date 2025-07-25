import Header from '../../components/headermenu/adminheader'
import Footer from '../../components/footer/footer'
import OperatorList from '../../components/buttons/operators/OperatorList';
import AddOperatorForm from '../../components/buttons/operators/AddOperatorForm';
import { AppProps } from "../../state/state";
import React from 'react';
import './../../styles/reviews_&_comments.css';

const Operators: React.FC<AppProps> = () => {
  return (
    <div>
      <Header />

      <OperatorList />
      <AddOperatorForm onAddSuccess={() => window.location.reload()} />

      <div className="sendFeedback">
        <a
          className="btn btn-primary w-100"
          href="https://t.me/jumanji_orders_bot"
          target="_blank"
          rel="noopener noreferrer"
          style={{

            textAlign: 'center',

            color: 'white',
            backgroundColor: '#458505', // або твій колір


            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Перейти до бота Jumanji Orders Bot
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default Operators;