import { useEffect, useState } from 'react';
import React from 'react';
import { searchMenu, default as store } from '../../state/state';
import { MenuFoodItem } from '../../state/state';
import SearchResults from './SearchResults';
import { useAuth } from '../../context/AuthContext';
import { AppProps } from "../../state/state";

const SearchContent:React.FC<AppProps> = ({ state }) => {

    const { state: authState } = useAuth();
        const userId = authState.user?.id ?? 0;

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{
        foods: MenuFoodItem[];
        drinks: MenuFoodItem[];
    }>({ foods: [], drinks: [] });

    useEffect(() => {
        const subscriber = () => {
            const state = store.getState()._Search;
            setResults({ foods: state.foods, drinks: state.drinks });
        };
        store.subscribe(subscriber);
        return () => store.subscribe(() => { }); // відписка при розмонтуванні
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        if (value.trim().length >= 2) {
            searchMenu(value);
        } else {
            setResults({ foods: [], drinks: [] }); // Очистити, якщо запит короткий
        }
    };



    return (
        <div className="Search_root__j_rhf">
            <div className="Search_inputWrapper__101wT">
                <div className="styles_inputField__1DOAi">
                    <input
                        className="styles_withShadow__qCwJG styles_searchable__LMbO8"
                        type="text"
                        placeholder="Пошук"
                        value={query}
                        onChange={handleChange}
                    />
                    <div className="styles_iconSearchHolder__R7QP1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 2C5.14585 2 2 5.14585 2 9C2 12.8541 5.14585 16 9 16C10.748 16 12.345 15.348 13.5742 14.2812L14 14.707V16L20 22L22 20L16 14H14.707L14.2812 13.5742C15.348 12.345 16 10.748 16 9C16 5.14585 12.8541 2 9 2ZM9 4C11.7733 4 14 6.22673 14 9C14 11.7733 11.7733 14 9 14C6.22673 14 4 11.7733 4 9C4 6.22673 6.22673 4 9 4Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="Search_result__w_RtL">

                <SearchResults
                    foods={results.foods}
                    drinks={results.drinks}
                    userId={userId}
                    state={state}
                />
            </div>
        </div>
    );
};

export default SearchContent;
