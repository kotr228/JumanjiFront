import React, { useEffect, useState } from "react";
import Header from '../../components/katalogheadermenu/header';
import Footer from '../../components/footer/footer';
import CartPage from '../../components/cart/cartpage';
import store, { MenuState } from "../../state/state";

const KatalogMenu: React.FC = () => {
  const [state, setState] = useState<MenuState>(store.getState());
  const [_, forceUpdate] = useState(0);

  useEffect(() => {
    const rerender = () => {
      setState({ ...store.getState() });
      forceUpdate(n => n + 1); // форсований ререндер
    };
    store.subscribe(rerender);
  }, []);

  return (
    <div>
      <Header />
      <CartPage state={state} dispatch={store.dispatch.bind(store)} />
      <Footer />
    </div>
  );
};

export default KatalogMenu;
