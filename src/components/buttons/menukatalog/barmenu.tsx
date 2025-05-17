import './../../../styles/menu.css'
import { useNavigate } from 'react-router-dom';
import { AppProps } from "../../../state/state";
import { MenuCategoryItem } from '../../../state/state';
import React, { useEffect, useState } from 'react';

const BarMenuButtons: React.FC<AppProps> = ({ state, dispatch }) => {

    const navigate = useNavigate();

    const menuCategories = state._BarMenu._BarMenuKategory;

    const handleClick = (id: string) => {
        navigate(`/menu/${id}`);
    };

    return (
        <div>
            {menuCategories.map((section) => (
                <div className="styles_sectionList__NVH3E" key={section.idName}>
                    <div className="styles_sections__x4MSO">
                        <div
                            className="styles_sectionListItem__IzEVy"
                            onClick={() => handleClick(section.idName)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div>{section.label}</div>
                            <div className="styles_sectionListItemIcon__xNJNZ">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="styles_sectionList__NVH3E">
                <div className="styles_sections__x4MSO">
                    <a href="/menu">
                        <div className="styles_sectionListItem__IzEVy">
                            <div>Звичайне меню</div>
                            <div className="styles_sectionListItemIcon__xNJNZ">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"></path>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default BarMenuButtons;