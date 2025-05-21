import React from 'react';
import './../../styles/footer.css';
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";


const schedule = [
    { day: "Понеділок", hours: "10:00 - 22:00" },
    { day: "Вівторок", hours: "10:00 - 22:00" },
    { day: "Середа", hours: "10:00 - 22:00" },
    { day: "Четвер", hours: "10:00 - 22:00" },
    { day: "Пʼятниця", hours: "10:00 - 22:00" },
    { day: "Субота", hours: "10:00 - 22:00" },
    { day: "Неділя", hours: "10:00 - 22:00" },
];

const Footer = () => {

    const [open, setOpen] = useState(false);
    const currentDayIndex = new Date().getDay(); // 0 — Неділя
    const correctedIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;
    // змістити, щоб Понеділок був 0

    return (
        <div className="styles_FooterWrapper__Ji6dI">
            <div className="styles_container__ImQx_">
                <div className="styles_FooterContent__x9t8y">
                    <div className="styles_FooterBlocks__rhvNv" style={{ marginBottom: '16px' }}>
                        <div className="styles_FooterBlockWrap__Aiz1e">
                            <div className="styles_block__gG8qD">
                                <div className="styles_blockIcon__2LCBY">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_14778_4910)">
                                            <path d="M12 0L0 5.06836L0.777344 6.92188L12 2.18164L23.2227 6.92188L24 5.06836L12 0ZM5 7V12.4434C5 13.2203 5.4141 13.901 5.9707 14.334C6.5273 14.767 7.23755 15 8 15V24H10V15C10.7625 15 11.4727 14.767 12.0293 14.334C12.5859 13.901 13 13.2203 13 12.4434V7H11V12.4434C11 12.5265 10.9679 12.6258 10.8008 12.7559C10.6336 12.8859 10.3425 13 10 13V7H8V13C7.65745 13 7.36637 12.8859 7.19922 12.7559C7.03207 12.6258 7 12.5265 7 12.4434V7H5ZM15 7V8V19V24H17V18L19 17V11C19 8.791 17.209 7 15 7Z" fill="currentColor">
                                            </path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_14778_4910">
                                                <rect width="24" height="24" fill="white">
                                                </rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="styles_blockBodyWrapper__s_gPh">
                                    <div className="styles_blockBody__YZI2b">
                                        <div className="styles_blockLabel__s6vwi">Про місце:</div>
                                        <div data-projection-id="13" style={{ height: 'auto' }}>
                                            <div className="styles_blockValue__WQ1cC">кафе, бар, коктейль, комплексні обіди, смачна їжа, настільні ігри</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="styles_block__gG8qD">
                                <div className="styles_blockIcon__2LCBY">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 1C8.686 1 6 3.686 6 7C6 11.286 12 18 12 18C12 18 18 11.286 18 7C18 3.686 15.314 1 12 1ZM12 3C14.206 3 16 4.794 16 7C16 9.01 13.919 12.3604 11.998 14.8594C10.077 12.3644 8 9.016 8 7C8 4.794 9.794 3 12 3ZM12 5C11.4696 5 10.9609 5.21071 10.5858 5.58579C10.2107 5.96086 10 6.46957 10 7C10 7.53043 10.2107 8.03914 10.5858 8.41421C10.9609 8.78929 11.4696 9 12 9C12.5304 9 13.0391 8.78929 13.4142 8.41421C13.7893 8.03914 14 7.53043 14 7C14 6.46957 13.7893 5.96086 13.4142 5.58579C13.0391 5.21071 12.5304 5 12 5ZM7.48047 15.4355C4.23147 16.0955 2 17.442 2 19C2 21.209 6.477 23 12 23C17.523 23 22 21.209 22 19C22 17.442 19.7685 16.0965 16.5195 15.4355C16.0675 16.0965 15.6248 16.7024 15.2168 17.2324C17.9488 17.6464 19.5662 18.512 19.9492 18.998C19.4342 19.652 16.696 20.998 12.002 20.998L12 21.002L11.998 21C7.30405 21 4.56678 19.655 4.05078 19C4.43378 18.513 6.0502 17.6454 8.7832 17.2324C8.3752 16.7014 7.93247 16.0955 7.48047 15.4355Z" fill="currentColor">
                                        </path>
                                    </svg>
                                </div>
                                <div className="styles_blockBodyWrapper__s_gPh">
                                    <div className="styles_blockBody__YZI2b">
                                        <div className="styles_blockLabel__s6vwi">Адреса:</div>
                                        <div className="styles_blockValue__WQ1cC">Sobornyi Ave, 100А, Oleksandriia, Kirovohrads'ka oblast, Ukraine, 28000</div>
                                    </div>
                                    <div className="styles_copy__kxj2S">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 2C2.895 2 2 2.895 2 4V18H4V4H18V2H4ZM8 6C6.895 6 6 6.895 6 8V20C6 21.105 6.895 22 8 22H20C21.105 22 22 21.105 22 20V8C22 6.895 21.105 6 20 6H8ZM8 8H20V20H8V8Z" fill="var(--primary-color)">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="styles_block__gG8qD">
                                <div className="styles_blockIcon__2LCBY">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.0879 2C13.9449 2 13.7993 2.01864 13.6543 2.05664L5.5957 4.2168C4.7057 4.4558 4.17897 5.36977 4.41797 6.25977L8.30273 20.7637C8.50273 21.5087 9.17611 22 9.91211 22C10.0551 22 10.2007 21.9814 10.3457 21.9434L18.4023 19.7832C19.2923 19.5452 19.82 18.6302 19.582 17.7402L15.6973 3.23633C15.4973 2.49133 14.8239 2 14.0879 2ZM13.8516 4.07422L14.3223 5.83008L6.91406 7.85547L6.43359 6.0625L13.8516 4.07422ZM20.75 5.33789L18.8184 5.85547L20.9766 13.9141L22.9082 13.3965L20.75 5.33789ZM14.8398 7.76367L16.5703 14.2227L9.16211 16.248L7.43164 9.78711L14.8398 7.76367ZM3.02344 10.0879L1.0918 10.6055L3.25 18.6621L5.18164 18.1445L3.02344 10.0879ZM17.0879 16.1562L17.5664 17.9375L10.1484 19.9258L9.67969 18.1797L17.0879 16.1562Z" fill="currentColor">
                                        </path>
                                    </svg>
                                </div>
                                <div className="styles_blockBodyWrapper__s_gPh">
                                    <div className="styles_blockBody__YZI2b">
                                        <div className="styles_blockLabel__s6vwi">Телефон:</div>
                                        <div className="styles_blockValue__WQ1cC">
                                            <a href="tel:0661569641">0661569641</a>
                                        </div>
                                    </div>
                                    <div className="styles_copy__kxj2S">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 2C2.895 2 2 2.895 2 4V18H4V4H18V2H4ZM8 6C6.895 6 6 6.895 6 8V20C6 21.105 6.895 22 8 22H20C21.105 22 22 21.105 22 20V8C22 6.895 21.105 6 20 6H8ZM8 8H20V20H8V8Z" fill="var(--primary-color)">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="styles_block__gG8qD">
                                <div className="styles_blockIcon__2LCBY">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4C2.895 4 2 4.895 2 6V7.73242L3 8.35938L4 8.98633L12 14L20 9.01953L21 8.39648L22 7.77539V6C22 4.895 21.105 4 20 4H4ZM4 6H20V6.76953L12 11.748L4 6.73438V6ZM2 10.0918V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V10.1309L20 11.375V18H4V11.3457L2 10.0918Z" fill="currentColor">
                                        </path>
                                    </svg>
                                </div>
                                <div className="styles_blockBodyWrapper__s_gPh">
                                    <div className="styles_blockBody__YZI2b">
                                        <div className="styles_blockLabel__s6vwi">Ел. пошта:</div>
                                        <div className="styles_blockValue__WQ1cC">
                                            <a href="mailto:velikavika89@gmail.com">velikavika89@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="styles_copy__kxj2S">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 2C2.895 2 2 2.895 2 4V18H4V4H18V2H4ZM8 6C6.895 6 6 6.895 6 8V20C6 21.105 6.895 22 8 22H20C21.105 22 22 21.105 22 20V8C22 6.895 21.105 6 20 6H8ZM8 8H20V20H8V8Z" fill="var(--primary-color)">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="styles_block__gG8qD">
                                <div className="styles_blockIcon__2LCBY">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM6 2C8.2 2 10 3.8 10 6C10 8.2 8.2 10 6 10C3.8 10 2 8.2 2 6C2 3.8 3.8 2 6 2ZM16 2V4H13.7383C13.9033 4.64 14 5.308 14 6H19V8H13.7383C13.5553 8.71 13.2809 9.381 12.9219 10H19L19.002 20H5V13.9316C4.301 13.8446 3.631 13.6681 3 13.4121V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H18V2H16ZM6.90039 3.19922L5.19922 6.09961L7.40039 8.30078L8.30078 7.30078L6.80078 5.90039L8 3.80078L6.90039 3.19922Z" fill="currentColor">
                                        </path>
                                    </svg>
                                </div>
                                <div className="styles_blockBodyWrapper__s_gPh">
                                    <div className="styles_blockBody__YZI2b">
                                        <div className="styles_blockLabel__s6vwi">Робочий час:</div>
                                        <div className="styles_blockValue__WQ1cC">
                                            <div>
                                                {schedule[currentDayIndex].hours}{" "}
                                                <span>{schedule[correctedIndex].day.slice(0, 2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="styles_schedule__lyvjd"
                                        onClick={() => setOpen((prev) => !prev)}
                                        style={{ cursor: "pointer", position: "relative" }}
                                    >
                                        Розклад{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d={open ? "M6 15L12 8L18 15H6Z" : "M6 9L12 16L18 9H6Z"}
                                                fill="currentColor"
                                            />
                                        </svg>

                                        {open && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    bottom: "100%",
                                                    paddingBottom: "4px",
                                                    right: "0px",
                                                    zIndex: 2,
                                                    background: "white",
                                                    border: "1px solid #1b5e20",
                                                    borderRadius: "8px",
                                                    overflow: "hidden",
                                                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                                }}
                                            >
                                                {schedule.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            padding: "8px 16px",
                                                            fontSize: "14px",
                                                            backgroundColor:
                                                                index === correctedIndex ? "#1b5e20" : "#f5f5f5",
                                                            color: index === correctedIndex ? "#ffffff" : "#757575",
                                                            fontWeight: index === correctedIndex ? "600" : "normal",
                                                        }}
                                                    >
                                                        <span>{item.day}</span>
                                                        <span>{item.hours}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="styles_FooterBlockSocials__87lmY">
                            <div className="styles_FooterLabel__Fsj4r">Ми в соцмережах</div>
                            <div className="styles_socialList__tcRlP">
                                <a title="instagram" target="_blank" href="https://www.instagram.com/jumanji.alex?igsh=MWQzZnFudXB5Z2docQ==" rel="noreferrer" className="styles_FooterSocials__81qRl">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3C5.243 3 3 5.243 3 8V16C3 18.757 5.243 21 8 21H16C18.757 21 21 18.757 21 16V8C21 5.243 18.757 3 16 3H8ZM8 5H16C17.654 5 19 6.346 19 8V16C19 17.654 17.654 19 16 19H8C6.346 19 5 17.654 5 16V8C5 6.346 6.346 5 8 5ZM17 6C16.7348 6 16.4804 6.10536 16.2929 6.29289C16.1054 6.48043 16 6.73478 16 7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9Z" fill="currentColor"></path>
                                    </svg>
                                    <div>Instagram</div>
                                </a>
                                <a title="google" target="_blank" href="https://www.google.com/maps/place/%D0%94%D0%B6%D1%83%D0%BC%D0%B0%D0%BD%D0%B4%D0%B6%D0%B8/@48.6630511,33.115388,588m/data=!3m1!1e3!4m15!1m8!3m7!1s0x40da7625eec7c05b:0x9546a6ce77f4eb2a!2sSobornyi+Ave,+100%D0%90,+Oleksandriia,+Kirovohrads'ka+oblast,+28000!3b1!8m2!3d48.6630511!4d33.1179629!16s%2Fg%2F11qg7j6xkc!3m5!1s0x40da772646ac5ba5:0x29ddc76a8f921cfe!8m2!3d48.6630511!4d33.1179629!16s%2Fg%2F11w91xntn9?entry=ttu&amp;g_ep=EgoyMDI1MDIxOS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" rel="noreferrer" className="styles_FooterSocials__81qRl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.915 10.752L21.697 9H17.304L20.278 6.026L18.73 4.615C16.88 2.929 14.49 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 11.61 21.973 11.214 21.915 10.752ZM12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C14.076 4 15.96 4.797 17.382 6.093L15.248 8.227C14.372 7.473 13.247 7 12 7C9.239 7 7 9.239 7 12C7 14.761 9.239 17 12 17C14.049 17 15.806 15.764 16.578 14H13V11H19.931C19.972 11.328 20 11.661 20 12C20 16.418 16.418 20 12 20ZM11 9.171V11V14V14.829C9.836 14.416 9 13.304 9 12C9 10.696 9.836 9.584 11 9.171Z" fill="currentColor"></path></svg><div>Google</div></a><a title="fb" target="_blank" href="https://www.facebook.com/people/%D0%92%D1%96%D0%BA%D1%82%D0%BE%D1%80%D1%96%D1%8F-%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0/pfbid02HcmRjzXnuA6zwGNSH2U8AysnbgDRN9yaVuxxXdrWZPN2mvzdkpjjYeQHMPdznVPBl/?ref=ig_profile_ac" rel="noreferrer" className="styles_FooterSocials__81qRl">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.489 2 2 6.489 2 12C2 17.511 6.489 22 12 22C17.511 22 22 17.511 22 12C22 6.489 17.511 2 12 2ZM12 4C16.4301 4 20 7.56988 20 12C20 16.0145 17.0653 19.313 13.2188 19.8984V14.3848H15.5469L15.9121 12.0195H13.2188V10.7266C13.2188 9.74356 13.539 8.87109 14.459 8.87109H15.9355V6.80664C15.6755 6.77164 15.1268 6.69531 14.0898 6.69531C11.9238 6.69531 10.6543 7.83931 10.6543 10.4453V12.0195H8.42773V14.3848H10.6543V19.8789C6.87029 19.2408 4 15.9702 4 12C4 7.56988 7.56988 4 12 4Z" fill="currentColor"></path>
                                    </svg>
                                    <div>Facebook</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="styles_FooterBlockMap__pO0HF">
                        <p className="styles_FooterLabel__Fsj4r">На карті</p>
                        <div className="styles_mapWrapper__9C_qh"><div className="Loader_root__V9Nmy styles_mapLoader__SZyVC" style={{ width: "48px", height: "48px", padding: "5px" }}>
                            <div className="Loader_icon__Hiyr9"></div></div><iframe
                                title="Google Maps"
                                className="styles_FooterMap__AZx0V styles_isVisible__F9j_u"
                                src="https://www.google.com/maps?q=Sobornyi+Ave,+100A,+Oleksandriia,+Ukraine&output=embed"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div><a target="_blank" href="https://maps.google.com/?q=Sobornyi Ave, 100А, Oleksandriia, Kirovohrads'ka oblast, Ukraine, 28000" rel="noreferrer">
                            <button className="styles_button___Dvql styles_appearanceStroke__LKd1h styles_fullWidth__x3ayC styles_FooterMapButton__0wAgp"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 3C4.35499 3 3 4.35499 3 6C3 7.64501 4.35499 9 6 9C7.29316 9 8.39514 8.15733 8.8125 7H17C18.1167 7 19 7.88333 19 9C19 10.1167 18.1167 11 17 11H7C4.80267 11 3 12.8027 3 15V16H3.20312C3.65948 17.7064 5.15641 19 7 19H15.1875C15.6049 20.1573 16.7068 21 18 21C19.645 21 21 19.645 21 18C21 16.355 19.645 15 18 15C16.7068 15 15.6049 15.8427 15.1875 17H7C5.88333 17 5 16.1167 5 15C5 13.8833 5.88333 13 7 13H17C18.8436 13 20.3405 11.7064 20.7969 10H21V9C21 6.80267 19.1973 5 17 5H8.8125C8.39514 3.84267 7.29316 3 6 3ZM6 5C6.56413 5 7 5.43587 7 6C7 6.56413 6.56413 7 6 7C5.43587 7 5 6.56413 5 6C5 5.43587 5.43587 5 6 5ZM18 17C18.5641 17 19 17.4359 19 18C19 18.5641 18.5641 19 18 19C17.4359 19 17 18.5641 17 18C17 17.4359 17.4359 17 18 17Z" fill="currentColor">
                                </path>
                            </svg>Отримати розташування</button>
                        </a>
                    </div>
                    <div className="styles_FooterBlockSocials__87lmY">
                        <div className="styles_FooterLabel__Fsj4r">Замовити програмне забезпечення у CatHouse</div>
                        <div className="styles_FooterLabel__Fsj4r">Ми надаємо послуги у створенні: сайтів-візиток, WEB-застосунків, підтримка забезпечення, Телеграм-ботів</div>
                        <div className="styles_socialList__tcRlP">
                            <a title="instagram" target="_blank" href="https://www.instagram.com/trockij_k?igsh=MWdrZW0xbjJrcDA2ZA==" rel="noreferrer" className="styles_FooterSocials__81qRl">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3C5.243 3 3 5.243 3 8V16C3 18.757 5.243 21 8 21H16C18.757 21 21 18.757 21 16V8C21 5.243 18.757 3 16 3H8ZM8 5H16C17.654 5 19 6.346 19 8V16C19 17.654 17.654 19 16 19H8C6.346 19 5 17.654 5 16V8C5 6.346 6.346 5 8 5ZM17 6C16.7348 6 16.4804 6.10536 16.2929 6.29289C16.1054 6.48043 16 6.73478 16 7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9Z" fill="currentColor"></path>
                                </svg>
                                <div>Instagram</div>
                            </a>
                            <a title="google" target="_blank" href="mailto:cathouse7565@gmail.com" rel="noreferrer" className="styles_FooterSocials__81qRl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21.915 10.752L21.697 9H17.304L20.278 6.026L18.73 4.615C16.88 2.929 14.49 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 11.61 21.973 11.214 21.915 10.752ZM12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C14.076 4 15.96 4.797 17.382 6.093L15.248 8.227C14.372 7.473 13.247 7 12 7C9.239 7 7 9.239 7 12C7 14.761 9.239 17 12 17C14.049 17 15.806 15.764 16.578 14H13V11H19.931C19.972 11.328 20 11.661 20 12C20 16.418 16.418 20 12 20ZM11 9.171V11V14V14.829C9.836 14.416 9 13.304 9 12C9 10.696 9.836 9.584 11 9.171Z" fill="currentColor">
                                    </path>
                                </svg>
                                <div>Gmail</div>
                            </a>
                            <a title="fb" target="_blank" href="https://t.me/M4A2E3_76_w" rel="noreferrer" className="styles_FooterSocials__81qRl">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.036 16.927L9.354 20.52C9.81 20.52 10.012 20.315 10.244 20.088L12.122 18.298L16.644 21.655C17.476 22.124 18.06 21.888 18.272 20.936L21.951 4.215L21.952 4.214C22.206 3.06 21.499 2.55 20.689 2.86L2.354 9.934C1.231 10.376 1.238 11.016 2.15 11.296L6.864 12.726L17.757 6.07C18.258 5.77 18.715 5.937 18.336 6.261L9.036 16.927Z" fill="currentColor"></path>
                                </svg>
                                <div>Telegram</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;