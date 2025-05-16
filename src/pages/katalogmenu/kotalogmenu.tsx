import Header from '../../components/katalogheadermenu/header'
import MenuButtons from '../../components/buttons/menukatalog/menukatalog'
import BarMenuButtons from '../../components/buttons/menukatalog/barmenukatalog'
import Footer from '../../components/footer/footer'
import ScrollToSection from '../../components/ScrollToSection/ScrollToSection'
import { AppProps } from "../../state/state";
import React from 'react';
import { useParams } from 'react-router-dom';

const KatalogMenu: React.FC<AppProps> = ({ state, dispatch }) => {
    const { sectionID } = useParams<{ sectionID: string }>();
    return (
        <div>
            <Header />

            <ScrollToSection />
            <MenuButtons dispatch={dispatch} sectionID={sectionID} state={state}/>
            <BarMenuButtons dispatch={dispatch} sectionID={sectionID} state={state}/>


            <Footer />
        </div>
    )
}

export default KatalogMenu;