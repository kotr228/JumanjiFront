import Header from '../../components/katalogheadermenu/header'
import MenuButtons from '../../components/buttons/menukatalog/popularmenu'
import BarMenuButtons from '../../components/buttons/menukatalog/popularbarmenu'
import Footer from '../../components/footer/footer'
import ScrollToSection from '../../components/ScrollToSection/ScrollToSection'
import FavoritesNone from '../../components/favorites/favoritesnone';
import { AppProps } from "../../state/state";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { fetchFavorites } from '../../utils/favorites';
import { fetchFavoritesdinks } from '../../utils/favoritesdrinks';

const Popular: React.FC<AppProps> = () => {
    const { sectionID } = useParams<{ sectionID: string }>();

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