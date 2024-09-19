  import React from 'react'

  import { useTranslation } from 'react-i18next';
  import { Link } from 'react-router-dom';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import Footer from "./Footer.jsx"

  function About() {

    const navigate = useNavigate()

    const handleNavigateHome = () => {
      navigate("/");
    }

    const { t, i18n } = useTranslation();
    const [burger, setBurger] = useState(false);

    const languageSelect = localStorage.getItem('i18nextLng');

    const handleChangeLanguage = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };

    return (
      <>
      <div className="container overflow-hidden ">

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
          <div className=" sm:max-md:text-center sm:max-md:w-full sm:max-md:relative sm:max-md:left-2  contain w-[1150px] m-auto mt-28 md:max-lg:ml-16 ">
    <div className="main space-y-8 ">

      <div className="texts space-y-8">
        <h1 className="text-4xl">{t("ATAEV BAHODIR BUILD haqida")}</h1>
        <button onClick={handleNavigateHome}>{t("bosh sahifa")}▶️</button>
      </div>

      <div className="main-elements text-black space-y-8 flex flex-row-reverse justify-between 
      md:max-lg:flex sm:max-md:block m-y-10
      sm:max-md:max-w-[100%] sm:max-md:max-h-[100%]
      sm:max-md:pl-10">
        
        <div className="main-image sm:max-md:w-full sm:max-md:mx-auto">
          <img src="./nextimages/images/about.jpg" alt="" className="max-w-[80vh] rounded-2xl pr-10 
          md:max-lg:object-cover md:max-lg:max-w-[60%] md:max-lg:max-h-[100%] sm:max-md:w-full" />
        </div>

        <div className="paragraph md:max-lg:w-auto sm:max-md:w-full sm:max-md:px-4 ">
          <p className="max-w-[60vh] leading-relaxed">
            {t("about")}
          </p>
        </div>
      </div>
    </div>
  </div>


          </div><br /><br />

    <Footer></Footer>
      </>
    )
  }

  export default About
