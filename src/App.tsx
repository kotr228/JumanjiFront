import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import './App.css'
import React, { useEffect } from 'react';
import Home from './pages/home/home'
import Menu from './pages/menu/menu'
import BarMenuButtons from "./pages/barmenu/menu";
import KatalogMenu from "./pages/katalogmenu/kotalogmenu";
import PrivacyPolicy from "./pages/privacypolice/privacypolicy";
import Using from "./pages/usingterms/usingterms";
import CookiePolicy from "./pages/cookiepolicy/cookiepolicy";
import AboutCompany from "./pages/aboutcompany/aboutcompany";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import Favorites from "./pages/favorites/favorites";
import Popular from "./pages/popular/popular";
import Coments from "./pages/coments/coments";
import AdminPanel from "./pages/adminpanel/AdminPanel";
import AdminPanelMenu from "./pages/adminpanelmenu/adminpanelmenu";
import AdminMenu from "./pages/adminmenu/adminmenu";
import Operators from "./pages/operators/operators";
import CardPage from "./pages/card/cardPage";
import { AppProps } from "./state/state";
import  UserLogger  from "./context/UserLogger";
import OrderPage from "./pages/OrderPage/OrderPage";

const App:React.FC<AppProps> = ({state, dispatch} ) => {

  useEffect(() => {
    dispatch({ type: 'GET_MENU' });
    dispatch({ type: 'GET_FOOD_MENU' });
    dispatch({type: 'GET_BAR_MENU'});
    dispatch({type: 'GET_BAR_MENU_FOOD'});
  }, []);
  
  return (
    <div>
      <UserLogger />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu dispatch = {dispatch} state={state}/>} />
          <Route path="/menu/:sectionID" element={<KatalogMenu dispatch = {dispatch} state={state}/>} />
          <Route path="/barmenu" element={<BarMenuButtons dispatch = {dispatch} state={state}/>} />
          <Route path="/pivacypolicy" element={<PrivacyPolicy />} />
          <Route path="/usingterms" element={<Using />} />
          <Route path="/cookiepolicy" element={<CookiePolicy />} />
          <Route path="/aboutcompany" element={<AboutCompany />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/favorites" element={<Favorites dispatch = {dispatch} state={state}/>} />
          <Route path="/popular" element={<Popular dispatch = {dispatch} state={state}/>} />
          <Route path="/feedback" element={<Coments/>}/>
          <Route path="/adminpanel" element={<AdminPanel dispatch = {dispatch} state={state}/>} />
          <Route path="/adminmenu" element={<AdminMenu dispatch = {dispatch} state={state}/>} />
          <Route path="/adminmenukatalog/:sectionID" element={<AdminPanelMenu dispatch = {dispatch} state={state}/>} />
          <Route path="/operators" element={<Operators dispatch = {dispatch} state={state}/>} />
          <Route path="/cart" element={<CardPage state={state} dispatch={dispatch}/>} />
          <Route path="/order" element={<OrderPage dispatch = {dispatch} state={state} />} />
        </Routes>
     </AuthProvider>
    </div>
  )
}

export default App