import Header from '../../components/headermenu/header'
import SearchContent from '../../components/search/search';
import Footer from '../../components/footer/footer'
import { AppProps } from "../../state/state";
import React from 'react';

const Search: React.FC<AppProps> = ({ state, dispatch }) => {

  return (
    <div>
      <Header />
      
      <SearchContent dispatch={dispatch} state={state} />
      
      <Footer />
    </div>
  )
}

export default Search;