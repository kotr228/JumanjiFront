import React, { FC } from 'react';
import { useNavigate } from "react-router-dom";
import './../../styles/header.css';

type IconButtonProps = {
  href: string;
  ariaLabel: string;
  title: string;
  children: React.ReactNode;
};

const Logo = () => {
  const navigate = useNavigate(); // Оголошення useNavigate
  return (
  <div className="styles_top__pq4DQ">
    <div className="styles_leftContent__GhCdN">
      <button onClick={() => navigate("/menu")} area-label="Назад" title="Назад" className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearanceStroke__LKd1h" style={{ width: "48px" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2">
        </path>
      </svg>
      </button>
      <div className="styles_leftContentInner__QwTTW">
        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.5 5C17.672 5 17 5.672 17 6.5C17 6.67612 17.036 6.84296 17.0918 7H14V9H17.3066L17.5684 9.69727L17.4941 9.65625L13.4121 17H12C11.9999 16.9344 11.9934 16.869 11.9805 16.8047L11.2188 13H12V11H7V6H0V7V13H4.25391C4.13729 13.1481 4.01786 13.2955 3.91797 13.4453C3.33263 14.3233 3 15.1667 3 16C3.00005 16.2652 3.10543 16.5195 3.29297 16.707L3.45117 16.8652C3.18772 17.3567 3.02344 17.9076 3.02344 18.5C3.02344 20.4188 4.59478 22 6.51172 22C8.25777 22 9.7029 20.6839 9.94922 19H12H14H17.0742C17.3205 20.6839 18.7657 22 20.5117 22C22.4287 22 24 20.4188 24 18.5C24 17.0321 23.0776 15.7679 21.7871 15.252L21.6914 15H24V13H20.9414L19.0664 8H21V5H18.5ZM2 8H5V11H2V8ZM18.4512 12.0527L19.6074 15.1367C18.6234 15.4063 17.813 16.0932 17.377 17H15.6992L18.4512 12.0527ZM7.26953 13H9.17969L9.98047 17H9.64648C9.08179 15.8256 7.8913 15 6.51172 15C6.06192 15 5.63419 15.0939 5.23828 15.252C5.30532 15.0501 5.40397 14.8218 5.58203 14.5547C5.96497 13.9803 6.53845 13.4086 7.26953 13ZM6.51172 17C7.34278 17 8 17.6568 8 18.5C8 19.3432 7.34278 20 6.51172 20C5.68066 20 5.02344 19.3432 5.02344 18.5C5.02344 17.6568 5.68066 17 6.51172 17ZM20.5117 17C21.3428 17 22 17.6568 22 18.5C22 19.3432 21.3428 20 20.5117 20C19.6807 20 19.0234 19.3432 19.0234 18.5C19.0234 17.6568 19.6807 17 20.5117 17Z" fill="currentColor">
          </path>
        </svg>
      </div>
    </div>
  </div>
  );
};

const IconButton: FC<IconButtonProps> = ({ href, ariaLabel, title, children }) => (
  <a href={href}>
    <button
      aria-label={ariaLabel}
      title={title}
      className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearanceStroke__LKd1h styles_button__01Xtp"
    >
      {children}
    </button>
  </a>
);

const MenuButton: FC = () => (
  <button
    aria-label="Меню"
    title="Меню"
    className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearanceStroke__LKd1h styles_button__01Xtp"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="6" width="16" height="2" fill="#213547" />
      <rect x="4" y="11" width="16" height="2" fill="#213547" />
      <rect x="4" y="16" width="16" height="2" fill="#213547" />
    </svg>
  </button>
);



const Header: FC = () => {
  return (
    <div className="styles_mainMobileHeader__kGS_R">
      <div className="styles_top__pq4DQ">
        <Logo />
        <div className="styles_rightContent__UOM18">
          <IconButton href="/search" ariaLabel="Пошук" title="Пошук">
            {/* SVG іконка пошуку */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 2C5.14585 2 2 5.14585 2 9C2 12.8541 5.14585 16 9 16C10.748 16 12.345 15.348 13.5742 14.2812L14 14.707V16L20 22L22 20L16 14H14.707L14.2812 13.5742C15.348 12.345 16 10.748 16 9C16 5.14585 12.8541 2 9 2ZM9 4C11.7733 4 14 6.22673 14 9C14 11.7733 11.7733 14 9 14C6.22673 14 4 11.7733 4 9C4 6.22673 6.22673 4 9 4Z"
                fill="currentColor"
              />
            </svg>
          </IconButton>

          <MenuButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
