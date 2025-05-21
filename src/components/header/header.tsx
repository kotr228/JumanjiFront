import React, { FC, CSSProperties, useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import './../../styles/header.css';
import img from '../../img/thumbnail_LfliZkJ-DCkvIRQ-ZwfeMWG_B-r-K.png';
import webp from '../../img/XXaqNZK-mLNbsJR-xkPiLJd.webp';

type IconButtonProps = {
  href: string;
  ariaLabel: string;
  title: string;
  children: React.ReactNode;
};

type MenuButtonProps = {
  onClick: () => void;
};

const Logo: FC = () => (
  <a title="Головна" href="/">
    <div
      className="styles_logo__r8w5z"
      style={{
        backgroundImage:
          `url(${img})`,
      } as CSSProperties}
    />
  </a>
);

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

const MenuButton: React.FC<MenuButtonProps> = ({onClick}) => {
  return(
  <button
    aria-label="Меню"
    title="Меню"
    onClick={onClick}
    className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearanceStroke__LKd1h styles_button__01Xtp"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="16" height="2" fill="#458505" />
      <rect x="4" y="11" width="16" height="2" fill="#458505" />
      <rect x="4" y="16" width="16" height="2" fill="#458505" />
    </svg>
  </button>
  );
};

const Slider: React.FC = () => {

  return (
  <div className="style_MainTemplate__03N19">
    <div className="style_Swiper__VqPC7 style_MainTemplateSwiper__UHS32 style_MainTemplateSwiperBorder__3gPrr">
      <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
        <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' } as CSSProperties}>
          <div className="swiper-slide swiper-slide-active" style={{ width: '100%' }}>
            <picture>
              <source
                srcSet={webp}
                type="image/webp"
              />
              <img
                src={img}
                alt="slider image"
                loading="eager"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const Header: FC = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {setIsSidebarOpen(!isSidebarOpen);};

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
          <IconButton
            href="/signup"
            ariaLabel="Профіль"
            title="Профіль"
          >
            {/* SVG іконка профілю */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 4C16.418 4 20 7.582 20 12C20 13.5973 19.5254 15.0811 18.7188 16.3301L17.9492 15.7344C16.3972 14.5374 13.537 14 12 14C10.463 14 7.60178 14.5374 6.05078 15.7344L5.28125 16.332C4.47404 15.0828 4 13.5979 4 12C4 7.582 7.582 4 12 4ZM12 5.75C10.208 5.75 8.75 7.208 8.75 9C8.75 10.792 10.208 12.25 12 12.25C13.792 12.25 15.25 10.792 15.25 9C15.25 7.208 13.792 5.75 12 5.75ZM12 7.75C12.689 7.75 13.25 8.311 13.25 9C13.25 9.689 12.689 10.25 12 10.25C11.311 10.25 10.75 9.689 10.75 9C10.75 8.311 11.311 7.75 12 7.75ZM12 16C15.1007 16 16.7681 17.1685 17.5488 17.7539C16.11 19.1418 14.1569 20 12 20C9.84315 20 7.89002 19.1418 6.45117 17.7539C7.2319 17.1685 8.89929 16 12 16Z"
                fill="currentColor"
              />
            </svg>
          </IconButton>
          <MenuButton onClick={handleToggleSidebar} />
        </div>
      </div>

      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

      <Slider />
    </div>
  );
};

export default Header;
