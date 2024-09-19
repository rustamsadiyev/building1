import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./Projects.css"

function Projects() {
  const { t, i18n } = useTranslation();
  const [burger, setBurger] = useState(false);

  const languageSelect = localStorage.getItem('i18nextLng');

  const handleChangeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <div id="project" className="contain overflow-hidden ">
        
        <div className="contain m-auto">
  <div className="main pt-10 lg:max-xl:px-52 ">
    <h1 className="text-3xl pb-5">{t('loyihalarimiz')}</h1>
    <div className="home-images grid grid-cols-2 gap-5 sm:max-md:block text-white flex-wrap justify-between items-center ">

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
        <img src="./images/fonon.webp" alt="Fonon" className="image max-w-lg " />
        <div className="context">
          <h2 className= "text-3xl" >Fonon</h2>
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

      <div className=" image-container relative bottom-12 sm:max-md:w-[90%] sm:max-md:m-auto h-[50vh] sm:max-md:mb-4 md:max-lg:flex md:max-lg:flex-col md:max-lg:w-full">
        <img src="./images/presidential.webp" alt="Presidential School" className="image max-w-lg" />
        <div className="context">
          <h2 className="text-3xl">Presidential School</h2>
          <p className="text-lg font-medium">{t('presidential')}</p>
        </div>
      </div>

      <div className="image-container  relative bottom-12 sm:max-md:w-[90%] sm:max-md:m-auto h-[50vh] sm:max-md:mb-4 md:max-lg:flex md:max-lg:flex-col md:max-lg:w-full">
        <img src="./images/boulevard.webp" alt="Boulevard" className="image max-w-lg" />
        <div className="context">
          <h2 className="text-3xl">Boulevard</h2>
          <p className="text-lg font-medium">{t('boulevard')}</p>
        </div>
        </div>
      </div>
    </div>
  </div>

      </div>
    </>
  );
}

export default Projects;
