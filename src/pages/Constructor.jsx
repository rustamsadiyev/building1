    import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { Link, useNavigate } from 'react-router-dom';
    import { useState } from 'react';

    function Constructor() {

        const { t, i18n } = useTranslation();
  
    const languageSelect = localStorage.getItem('i18nextLng');
  
    const handleChangeLanguage = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };

    const navigate = useNavigate()

        return (
            <>
            <div id='constructor' className=" overflow-hidden  mt-[5vh] constructor max-w-full h-screen bg-cover bg-center " style={{
                            backgroundImage: "url('./nextimages/images/ataev.png')"
                        }}>
                <div className="container w-[1150px] m-auto text-white ">
                    <div className="constructor-context w-[50vh] ">

                    <h2 className='pt-[18vh] text-2xl ' >ATAEV BAHODIR BUILD</h2>
                    <h1 className='pt-20 text-4xl ' >ATAEV BAHODIR BUILD</h1>
                    <p className="pt-10" >
                            {t("constructor")}
                    </p>
                    {/* <Link to="/about" >  */}
                    <div onClick={() => {
                        navigate('/about')
                        window.scroll(0,0)
                    }}>
                    <button  className=" mt-20 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"  >{t("batafsil bilish")}</button>
                    </div>
                    {/* </Link> */}
                    </div>
                </div>
            </div>
            </>
        );
    }

    export default Constructor;
    