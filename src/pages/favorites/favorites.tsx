import Header from '../../components/katalogheadermenu/header'
import MenuButtons from '../../components/buttons/menukatalog/favoritesmenu'
import BarMenuButtons from '../../components/buttons/menukatalog/favoritesbarmenu'
import Footer from '../../components/footer/footer'
import ScrollToSection from '../../components/ScrollToSection/ScrollToSection'
import FavoritesNone from '../../components/favorites/favoritesnone';
import { AppProps } from "../../state/state";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { fetchFavorites } from '../../utils/favorites';
import { fetchFavoritesdinks } from '../../utils/favoritesdrinks';

const Favorites: React.FC<AppProps> = ({ state, dispatch }) => {
    const { sectionID } = useParams<{ sectionID: string }>();

    const { state: authState } = useAuth();
    const userId = authState.user?.id ?? 0;

    const [favoriteCount, setFavoriteCount] = useState<number | null>(null);

    useEffect(() => {
        if (userId) {
            fetchFavorites(userId)
                .then(favorites => setFavoriteCount(favorites.length))
                .catch(() => setFavoriteCount(0));
        } else {
            setFavoriteCount(0);
        }
    }, [userId]);

    return (
        <div>
            <Header />

            {favoriteCount === 0 && <FavoritesNone />}

            <MenuButtons userId={userId} dispatch={dispatch} sectionID={sectionID} state={state} />
            <BarMenuButtons userId={userId} dispatch={dispatch} sectionID={sectionID} state={state} />


            <Footer />
        </div>
    )
}

export default Favorites;