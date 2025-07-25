import React from 'react';
import './../../styles/favoritesnone.css';
import { useNavigate } from "react-router-dom";

const CartNone: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="container py-4">
            <div className="shadow-sm">
                <div className="Favorites_content__odknj">
                    <div className="Favorites_empty__7kRao">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                           width="64" height="64"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6.5a1 1 0 001 1.5h10a1 1 0 001-1.5L17 13M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
                            />
                        </svg>

                        <div className="Favorites_text__hmVIS">кошик порожній
                        </div>
                        <div className="sendFeedback">
                            <button onClick={() => navigate("/menu")} className="styles_button___Dvql styles_appearanceStroke__LKd1h btn btn-primary w-100">Повернутися до меню</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartNone;