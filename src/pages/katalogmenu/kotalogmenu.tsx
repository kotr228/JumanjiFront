import Header from '../../components/katalogheadermenu/header'
import MenuButtons from '../../components/buttons/menukatalog/menukatalog'
import BarMenuButtons from '../../components/buttons/menukatalog/barmenukatalog'
import Footer from '../../components/footer/footer'
import ScrollToSection from '../../components/ScrollToSection/ScrollToSection'
import { AppProps } from "../../state/state";
import { CartProvider } from '../../context/CartContext';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const KatalogMenu: React.FC<AppProps> = ({ state, dispatch }) => {
    const { sectionID } = useParams<{ sectionID: string }>();

    const { state: authState } = useAuth();
    const userId = authState.user?.id ?? 0;
    return (
        <div>
            <Header />
            <CartProvider>
            <ScrollToSection />
            <MenuButtons userId={userId} dispatch={dispatch} sectionID={sectionID} state={state} />
            <BarMenuButtons userId={userId} dispatch={dispatch} sectionID={sectionID} state={state} />
            </CartProvider>

            <Footer />
        </div>
    )
}

export default KatalogMenu;