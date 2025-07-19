import Header from '../../components/katalogheadermenu/header'
import Footer from '../../components/footer/footer'
import CartPage from '../../components/cart/cartpage';
import { AppProps } from "../../state/state";

const KatalogMenu: React.FC<AppProps> = ({ state, dispatch }) => {

    
    return (
        <div>
            <Header />

            <CartPage state={state} dispatch={dispatch}/>          
            

            <Footer />
        </div>
    )
}

export default KatalogMenu;