import React from 'react'

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Dreamhome() {

    
    const { t, i18n } = useTranslation();
    const [burger, setBurger] = useState(false);
  
    const languageSelect = localStorage.getItem('i18nextLng');
  
    const handleChangeLanguage = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };
    

    return (
        <>
            <div className="dream-home ">
                <div className="home-title mb-5 flex justify-center">
                    <h1 className='text-2xl font-bold'>{t('sizning orzudaki maxala')}</h1>
                </div>
                <div className="home-images grid grid-cols-3 sm:max-md:grid-cols-2">
                    <div className="house-1">
                        <img src="./nextimages/images/house1.jpg" alt="image bor" 
                            className="w-full h-[350px] object-cover" />
                    </div>
                    <div className="house-2">
                        <img src="./nextimages/images/house2.jpg" alt="image bor" 
                            className="w-full h-[350px] object-cover" />
                    </div>
                    <div className="house-3">
                        <img src="./nextimages/images/house3.jpg" alt="image bor" 
                            className="w-full h-[350px] object-cover" />
                    </div>
                    <div className="house-4">
                        <img src="./nextimages/images/house4.jpg" alt="image bor" 
                            className="w-full h-[350px] object-cover" />
                    </div>
                    <div className="house-5">
                        <img src="./nextimages/images/house5.jpg" alt="image bor" 
                            className="w-full h-[350px] object-cover" />
                    </div>
                    <div className="house-6">
                        <img src="./nextimages/images/house6.jpg" alt="image bor" 
                            className="w-full h-[350px] object-cover" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dreamhome
