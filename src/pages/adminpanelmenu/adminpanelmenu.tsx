import Header from '../../components/headermenu/adminheader'
import Footer from '../../components/footer/footer'
import { AppProps } from "../../state/state";
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminMenuButtons from '../../components/buttons/menukatalog/AdminMenu';
import AdminBarMenuButtons from '../../components/buttons/menukatalog/AdminBarMenu';

const KatalogMenu: React.FC<AppProps> = ({ state, dispatch }) => {
    const { sectionID } = useParams<{ sectionID: string }>();

    const { state: authState } = useAuth();
    const userId = authState.user?.id ?? 0;
    return (
        <div>
            <Header />

            <AdminMenuButtons userId={userId} dispatch={dispatch} sectionID={sectionID} state={state} />
            <AdminBarMenuButtons userId={userId} dispatch={dispatch} sectionID={sectionID} state={state} />

            <Footer />
        </div>
    )
}

export default KatalogMenu;