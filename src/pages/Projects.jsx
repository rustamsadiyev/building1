import React, { useState } from 'react';
import "./Projects.css"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Projects() {
  const { t, i18n } = useTranslation();
  const [burger, setBurger] = useState(false);

  const languageSelect = localStorage.getItem('i18nextLng');

  const handleChangeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <div className="contain overflow-hidden">
        <div className="navbar2 w-screen fixed z-10 top-0 bg-slate-800 flex flex-col justify-between h-[15vh]">
          {/* Burger Modal */}
          {burger && (
            <div className="fixed top-0 left-0 w-1/3 h-full bg-yellow-200 z-50 shadow-lg p-5"><br />
              <div className="text-center"><ul className="list-navbar">
                  <li className="list-item">{t('malumotlar')}</li>
                  <li className="list-item">{t('biz haqimizda')}</li>
                  <li className="list-item">{t('korxonalar')}</li>
                  <li className="list-item">{t('afzalliklarimiz')}</li>
                  <li className="list-item">{t('yangiliklar')}</li>
                  <li className="list-item">{t('aloqa')}</li>
              </ul><br /><br /><br />

                {/* Language Change Buttons */}
                <div className="flex justify-center space-x-10 mt-4">
                  <button
                    onClick={() => handleChangeLanguage('uz')}
                  >
                    <h1 className="text-2xl" >Uz</h1>
                  </button>
                  <button
                    onClick={() => handleChangeLanguage('en')}
                  >
                    <h1 className="text-2xl" >En</h1>
                    
                  </button>
                  <button
                    onClick={() => handleChangeLanguage('ru')}
                  >
                    <h1 className="text-2xl" >Ru</h1>
                    
                  </button>
                </div>

                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-black text-2xl"
                  onClick={() => setBurger(false)}
                >
                  &times;
                </button>
              </div>
            </div>
          )}
    <ul className=" navbar-list sm:max-md:hidden flex w-[145vh] m-auto text-yellow-100 items-center justify-between gap-3">
      <Link to="/header" >
      <li className="navbar-item ">{t('malumotlar')}</li>
      </Link>
    <li className="navbar-item ">{t('biz haqimizda')}</li>
    <li className="navbar-item ">{t('korxonalar')}</li>
    <li className=" navbar-item  mx-auto lg:w-28 lg:m-auto w-24"  style={{width:180}}>
      <img className="logo text-white" src='./nextimages/images/logo.png' alt="Rasm bor" />
    </li>
    <li className="navbar-item">{t('afzalliklarimiz')}</li>
    <li className="navbar-item">{t('yangiliklar')}</li>
    <li className="navbar-item">{t('aloqa')}</li>
    <li className="navbar-item">
      <select
        className="appearance-none border-none bg-transparent text-yellow-100 "
        onChange={(e) => handleChangeLanguage(e.target.value)}
        value={languageSelect || 'uz'}
      >
      <option className = "bg-slate-800" value="uz">Uzbek</option>  
      <option className = "bg-slate-800" value="en">English</option>
      <option className = "bg-slate-800" value="ru">Russian</option>
    </select>
    </li>
  </ul>

  <div className="absolute left-4 top-4 sm:max-md:block md:hidden text-white ">
                      <button onClick={() => setBurger(true)}>
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                          </svg>
                      </button>
                        </div>

                        <div>
                          
                    <li className=" md:hidden navbar-logo list-none mx-auto lg:w-28 lg:m-auto w-24">
                      <img className="logo" src='./nextimages/images/dark-logo.png' alt="Rasm bor" />
                    </li>
                        </div>

                        {/* Phone Icon */}
                        <div className="absolute right-4 top-4 sm:max-md:block md:hidden">
                            📞
                        </div>
        </div>
        <div className="contain m-auto">
  <div className="main pt-36 lg:max-xl:px-52 ">
    <h1 className= "text-3xl" >{t('loyihalarimiz')}</h1>
    <div className="home-images grid grid-cols-2 gap-5 sm:max-md:block text-white  flex-wrap justify-between items-center ">

    <div className="image-container relative sm:max-md:w-[90%] sm:max-md:m-auto h-[50vh] sm:max-md:mb-4 md:max-lg:flex md:max-lg:flex-col md:max-lg:w-full">
    <img src="./images/magicCity.webp" alt="Magic City" className=" sm:max-md:max-w-lg max-w-lg md:max-lg:max-w-lg " />
    <div className="context">
      <h2 className="text-3xl">Magic City</h2>
      <p className="text-lg font-medium">{t('magic city')}</p>
    </div>
  </div>

      <div className="image-container relative sm:max-md:w-[90%] sm:max-md:m-auto h-[50vh] sm:max-md:mb-4 md:max-lg:flex md:max-lg:flex-col md:max-lg:w-full">
        <img src="./images/gardensResidence.webp" alt="Gardens Residence" className=" sm:max-md:max-w-lg max-w-lg md:max-lg:max-w-lg " />
        <div className="context">
          <h2 className="text-3xl">Gardens Residence</h2>
          <p className="text-lg font-medium">{t('gardens residence')}</p>
        </div>
      </div>

      <div className="image-container relative sm:max-md:w-[90%] sm:max-md:m-auto h-[50vh] sm:max-md:mb-4 md:max-lg:flex md:max-lg:flex-col md:max-lg:w-full">
        <img src="./images/fonon.webp" alt="Fonon" className="image max-w-lg" />
        <div className="context">
          <h2 className="text-3xl">Fonon</h2>
          <p className="text-lg font-medium">{t('fonon')}</p>
        </div>
      </div>

      <div className="image-container relative sm:max-md:w-[90%] sm:max-md:m-auto h-[50vh] sm:max-md:mb-4 md:max-lg:flex md:max-lg:flex-col md:max-lg:w-full ">
        <img src="./images/invento.webp" alt="Invento" className="image max-w-lg" />
        <div className="context">
          <h2 className="text-3xl">Invento</h2>
          <p className="text-lg font-medium">{t('invento')}</p>
        </div>
      </div>

      <div className="image-container relative sm:max-md:w-[90%] sm:max-md:m-auto h-[50vh] sm:max-md:mb-4 md:max-lg:flex md:max-lg:flex-col md:max-lg:w-full">
        <img src="./images/presidential.webp" alt="Presidential School" className="image max-w-lg" />
        <div className="context">
          <h2 className="text-3xl">Presidential School</h2>
          <p className="text-lg font-medium">{t('presidential')}</p>
        </div>
      </div>

      <div className="image-container relative sm:max-md:w-[90%] sm:max-md:m-auto h-[50vh] sm:max-md:mb-4 md:max-lg:flex md:max-lg:flex-col md:max-lg:w-full">
        <img src="./images/boulevard.webp" alt="Boulevard" className="image max-w-lg" />
        <div className="context">
          <h2 className="text-3xl">Boulevard</h2>
          <p className="text-lg font-medium">{t('boulevard')}</p>
        </div>
      </div>

    </div>
  </div>
</div>

        <div className="footer w-full h-[50vh] bg-yellow-200 mt-11  sm:max-md:h-full 
        md:max-lg:h-full">
          <div className="contain sm:max-md:place-items-center sm:max-md:w-[50px] sm:max-md:grid sm:max-md:grid-cols-1 w-[1120px] m-auto pt-16 flex justify-between sm:max-md:space-y-5 md:max-lg:flex md:max-lg:flex-wrap md:max-lg:w-[100vh] ">
            <div className="footer-start">
              <img className="w-[15vh] h-[10vh]" src='./nextimages/images/dark-logo.png' alt="" />
              <h3 className="text-2xl"> {t("Ijtimoiy tarmoqlarimizga Obuna bo'ling")}</h3>
              <div className="flex justify-between items-center w-[15vh] mt-4">
                <Link to="https://instagram.com" target="_blank">
                  <AiOutlineInstagram className="text-3xl" />
                </Link>
                <Link to="https://facebook.com" target="_blank">
                  <FaFacebook className="text-3xl" />
                </Link>
              </div>
            </div>
            <div className="footer-center">
              <h3 className="text-2xl">{t('kompaniyamiz')}</h3>
              <h3 className="text-gray-500 text-2xl mt-3">{t('korxonalar2')}</h3>
              <h3 className="text-gray-500 text-2xl mt-3">{t('biz haqimizda2')}</h3>
              <h3 className="text-gray-500 text-2xl mt-3">{t('yangiliklar2')}</h3>
              <h3 className="text-gray-500 text-2xl mt-3">{t('loyihalarimiz')}</h3>
            </div>
            <div className="footer-end">
              <h3 className="text-2xl">{t('aloqa')}</h3>
              <h3 className="text-gray-500 text-2xl mt-3">+998974839999</h3>
              <h3 className="text-gray-500 text-2xl mt-3">+998997126666</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
