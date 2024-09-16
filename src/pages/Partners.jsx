import React from 'react'

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Partners() {

    const [burger, setBurger] = useState(false);
    const { t, i18n } = useTranslation();
  
    const languageSelect = localStorage.getItem('i18nextLng');
  
    const handleChangeLanguage = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };

    return (
    <div>
        
        <div className="partners mt-5">
                <div className="partner-title mb-5 flex justify-center">
                    <h1 className='text-2xl font-bold'> {t("hamkorlar")} </h1>
                </div>
                <div className="partner-images grid grid-cols-4 sm:max-md:grid-cols-2">
                    <div className="partner-1">
                        <img src="./nextimages/images/gallery1.jpg" alt="image bor" 
                            className="w-full h-[450px] object-cover" />
                    </div>
                    <div className="partner-2">
                        <img src="./nextimages/images/gallery2.jpg" alt="image bor" 
                            className="w-full h-[450px] object-cover" />
                    </div>
                    <div className="partner-3">
                        <img src="./nextimages/images/gallery3.jpg" alt="image bor" 
                            className="w-full h-[450px] object-cover" />
                    </div>
                    <div className="partner-4">
                        <img src="./nextimages/images/gallery4.jpg" alt="image bor" 
                            className="w-full h-[450px] object-cover" />
                    </div>
                    <div className="partner-5">
                        <img src="./nextimages/images/gallery5.jpg" alt="image bor" 
                            className="w-full h-[450px] object-cover" />
                    </div>
                    <div className="partner-6">
                        <img src="./nextimages/images/gallery6.jpg" alt="image bor" 
                            className="w-full h-[450px] object-cover" />
                    </div>
                    
                    <div className="partner-7">
                        <img src="./nextimages/images/gallery7.jpg" alt="image bor" 
                            className="w-full h-[450px] object-cover" />
                    </div>
                    
                    <div className="partner-8">
                        <img src="./nextimages/images/gallery8.jpg" alt="image bor" 
                            className="w-full h-[450px] object-cover" />
                    </div>
                </div>
            </div>

    </div>
    )
}

export default Partners
