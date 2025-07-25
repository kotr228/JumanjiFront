import Header from '../../components/headermenu/adminheader'
import Footer from '../../components/footer/footer'
import AdminTables from '../../components/buttons/operators/AdminTables';
import { AppProps } from "../../state/state";
import React from 'react';


const Tables: React.FC<AppProps> = () => {
    
    return (
        <div>
            <Header />

            <AdminTables />

            <Footer />
        </div>
    )
}

export default Tables;