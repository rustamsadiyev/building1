import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    const { t, i18n } = useTranslation();
    const [burger, setBurger] = useState(false);

    const languageSelect = localStorage.getItem('i18nextLng');

    const handleChangeLanguage = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };
    const navigate = useNavigate();

    return (
        <div>
            <div className="footer w-full h-[50vh] bg-yellow-200  sm:max-md:h-full md:max-lg:h-full">
                <div className="contain sm:max-md:gap-10 sm:max-md:max-w-[100%]  sm:max-md:grid sm:max-md:grid-cols-2 w-[1120px] m-auto pt-16 flex justify-between sm:max-md:space-y-5 md:max-lg:flex md:max-lg:flex-wrap md:max-lg:w-[100vh]">

                    <div className="footer-start">
                        <img className="w-[15vh] h-[10vh]" src="./images/Logo2.png" alt="Logo" />
                        <h3 className="text-2xl"> {t("obuna")}</h3>
                        <div className="flex justify-between items-center w-[15vh] mt-4">
                            <a
                                href="https://instagram.com/your-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-pink-500 transition-transform transform hover:scale-110"
                            >
                                <AiOutlineInstagram className="text-3xl" />
                            </a>
                            <a
                                href="https://facebook.com/your-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-110"
                            >
                                <FaFacebook className="text-3xl" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-center">
                        <h3  className="text-2xl">{t('kompaniyamiz')}</h3>
                        <h3  onClick={() => navigate("/")} className="text-gray-500 text-2xl mt-3"><a href="#service">{t("korxonalar")}</a></h3>
                        <h3  onClick={() => navigate("/")} className="text-gray-500 text-2xl mt-3"><a href="#project">{t("biz haqimizda")}</a></h3>
                        <h3  onClick={() => navigate("/")} className="text-gray-500 text-2xl mt-3"><a href="#news">{t("yangiliklar")}</a></h3>
                        <h3  onClick={() => navigate("/")} className="text-gray-500 text-2xl mt-3"><a href="#project">{t("loyihalarimiz")}</a></h3>
                    </div>
                    <div className="footer-end">
                        <h3 className="text-2xl">{t('aloqa')}</h3>
                        <h3 className="text-gray-500 text-2xl mt-3">+998974839999</h3>
                        <h3 className="text-gray-500 text-2xl mt-3">+998997126666</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
