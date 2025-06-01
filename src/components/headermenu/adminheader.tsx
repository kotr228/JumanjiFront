import { FC } from 'react';
import { useNavigate } from "react-router-dom";
import './../../styles/header.css';


const Logo = () => {
  const navigate = useNavigate(); // Оголошення useNavigate
  return (
  <div className="styles_top__pq4DQ">
    <div className="styles_leftContent__GhCdN">
      <button onClick={() => navigate("/adminpanel")} area-label="Назад" title="Назад" className="styles_button___Dvql styles_sizeSmall__NCTix styles_appearanceStroke__LKd1h" style={{ width: "48px" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2">
        </path>
      </svg>
      </button>
      <div className="styles_leftContentInner__QwTTW">
        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L0 5.06836L0.777344 6.92188L12 2.18164L23.2227 6.92188L24 5.06836L12 0ZM5 7V12.4434C5 13.2203 5.4141 13.901 5.9707 14.334C6.5273 14.767 7.23755 15 8 15V24H10V15C10.7625 15 11.4727 14.767 12.0293 14.334C12.5859 13.901 13 13.2203 13 12.4434V7H11V12.4434C11 12.5265 10.9679 12.6258 10.8008 12.7559C10.6336 12.8859 10.3425 13 10 13V7H8V13C7.65745 13 7.36637 12.8859 7.19922 12.7559C7.03207 12.6258 7 12.5265 7 12.4434V7H5ZM15 7V8V19V24H17V18L19 17V11C19 8.791 17.209 7 15 7Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  </div>
  );
};

const Header: FC = () => {
  
  
  
  return (
    <div className="styles_mainMobileHeader__kGS_R">
      <div className="styles_top__pq4DQ">
        <Logo />
        <div className="styles_rightContent__UOM18">
          

          
        </div>
      </div>
      
        
    </div>
    
  );
};

export default Header;
