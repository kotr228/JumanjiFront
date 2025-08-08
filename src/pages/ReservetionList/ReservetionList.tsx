import Header from '../../components/headermenu/adminheader'
import Footer from '../../components/footer/footer'
import ReservationList from '../../components/buttons/reservations/ReservationList';
import { AppProps } from "../../state/state";
import React from 'react';


const ReservetionList: React.FC<AppProps> = () => {
    
    return (
        <div>
            <Header />

            <ReservationList />

            <Footer />
        </div>
    )
}

export default ReservetionList;