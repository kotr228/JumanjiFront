import { AppProps } from "../../state/state";
import React from 'react';
import './styles.css'

const PrivacyPolicy: React.FC = () => {
    return (
        <div>

            <div className="styles_container__ImQx_ styles_AboutCompanyContainer__xQOkT styles_medium__Y53XA">
                <div className="styles_AboutCompanyBlock__IWJp2">
                    <div className="styles_AboutCompanyBlockTitle__FS1v6">Контакти "Джуманджи "
                    </div><p><b>Ел. пошта:</b>
                        <a href="mailto:velikavika89@gmail.com">velikavika89@gmail.com
                        </a></p><p><b>Телефон:</b>
                        <a href="tel:380661569641">380661569641
                        </a></p><p><b>Реквізити:</b> ФОП Велика Вікторія Олександрівна </p><p><b>ІПН / ЄДРПОУ:</b> 3257704840</p><p><b>Юридична адреса:</b> </p>
                </div>
                <div className="styles_AboutCompanyBlock__IWJp2">
                    <div className="styles_AboutCompanyBlockTitle__FS1v6">Способи оплати
                    </div><div>
                        <p><b>Банківською карткою</b></p>
                        <p>
                            Для вибору оплати товару за допомогою банківської картки на відповідній сторінці необхідно натиснути кнопку «Оплата
                            замовлення банківською карткою». Оплата відбувається через систему liqpay з використанням Банківських карток наступних
                            платіжних систем:
                        </p>
                        <ul>
                            <li>
                                Visa{' '}
                                <img
                                    className="styles_AboutCompanyImgSmall__c7fnW"
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                                    alt="Visa"
                                />
                            </li>
                            <li>
                                Mastercard{' '}
                                <img
                                    className="styles_AboutCompanyImgSmall__c7fnW"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/220px-MasterCard_Logo.svg.png"
                                    alt="Mastercard"
                                />
                            </li>
                        </ul>
                        <p><b>Опис процесу передачі даних</b></p>
                        <p>
                            Для оплати (введення реквізитів Вашої картки) Ви будете перенаправлені на платіжний шлюз системи liqpay. З'єднання з
                            платіжним шлюзом і передача інформації здійснюється в захищеному режимі з використанням протоколу шифрування SSL. У разі
                            якщо Ваш банк підтримує технологію безпечного проведення інтернет-платежів Verified By Visa або MasterCard SecureCode
                            для проведення платежу також може знадобитися введення спеціального пароля. Справжній сайт підтримує 256-бітове
                            шифрування. Конфіденційність повідомленої персональної інформації забезпечується системою liqpay. Введена інформація не
                            буде надана третім особам за винятком випадків, передбачених законодавством України. Проведення платежів за
                            банківськими картками здійснюється в суворій відповідності з вимогами платіжних систем Visa Int. і MasterCard Europe
                            Sprl.
                        </p>
                        <p>
                            Повернення переказаних коштів проводиться на Ваш банківський рахунок протягом 5 - 30 робочих днів (термін залежить від
                            Банку, який видав Вашу банківську карту).
                        </p>
                    </div>
                    <div className="styles_AboutCompanyBlock__IWJp2">
                        <div className="styles_AboutCompanyBlockTitle__FS1v6">Повернення товару
                        </div><p>Відмова від товару можлива в момент отримання і при умові неналежної якості його. Повернення переказаних коштів проводиться на Ваш банківський рахунок протягом 5 - 30 робочих днів (термін залежить від Банку, який видав Вашу банківську карту).</p>
                    </div>
                    <div className="styles_AboutCompanyBlock__IWJp2">
                        <a href="/terms-of-use">Умови користування
                        </a>
                        <a href="/terms-of-use" style={{ marginLeft: '24px' }}>Політика конфіденційності
                        </a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PrivacyPolicy;