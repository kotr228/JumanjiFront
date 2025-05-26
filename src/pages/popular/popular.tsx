import Header from '../../components/katalogheadermenu/header'
import MenuButtons from '../../components/buttons/menukatalog/popularmenu'
import BarMenuButtons from '../../components/buttons/menukatalog/popularbarmenu'
import Footer from '../../components/footer/footer'
import { AppProps } from "../../state/state";
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Popular: React.FC<AppProps> = () => {

    const { state: authState } = useAuth();
    const userId = authState.user?.id ?? 0;

    return (
        <div>
            <Header />
            <MenuButtons userId={userId}/>
            <BarMenuButtons userId={userId}/>
            <Footer />
        </div>
    )
}

export default Popular;