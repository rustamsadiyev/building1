import React from "react";
import "./Service.css";
import { useTranslation } from 'react-i18next';
import { useState } from "react";

function Service() {
  const { t, i18n } = useTranslation();
  const [burger, setBurger] = useState(false);

  const languageSelect = localStorage.getItem('i18nextLng');

  const handleChangeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (

    <>

      <div id="service" className="contain sm:max-md:px-10 bg-yellow-100 sm:max-2xl:overflow-hidden">
        <div className="services w-[1150px] m-auto sm:max-md:max-w-full sm:max-md:m-auto">
          <div className="service-title text-black pt-10">
            <h1 className="mb-10 text-center text-4xl">{t('bizning xizmatlar')}</h1>
          </div>
          <div className="service flex flex-wrap gap-6 sm:max-md:flex sm:max-md:flex-col sm:max-md:items-center sm:max-md:gap-4">
            <div className="from-left text-white rounded-2xl flex w-[85vh] h-[29vh] items-center bg-slate-800 opacity-0 sm:max-md:w-full sm:max-md:h-auto sm:max-md:justify-between sm:max-md:items-center sm:max-md:p-4">
              <div className="service-content text-xl pl-6 sm:max-md:text-base sm:max-md:pl-0">
                <h1>{t('malumot olish')}</h1>
              </div>
              <img src="./nextimages/images/service.png" alt="rasm bor" className="max-w-64  z-[0] sm:max-md:w-[40%] sm:max-md:h-auto sm:max-md:object-contain 
              ipad:max-lg:w-[44%] ipad:max-lg:h-auto ipad:max-lg:object-contain
              md:max-ipad:w-[44%] md:max-ipad:h-auto md:max-ipad:object-contain" />
            </div>
            <div className="service-image from-right text-white rounded-2xl flex w-[60vh] h-[29vh] items-center bg-slate-800 opacity-0 sm:max-md:w-full sm:max-md:h-auto sm:max-md:justify-between sm:max-md:items-center sm:max-md:p-4">
              <div className="service-content text-xl pl-6 sm:max-md:text-base sm:max-md:pl-0">
                <h1>{t("hujjatlarni rasmiylashtirish")}</h1>
              </div>
              <img src="./nextimages/images/service2.png" alt="rasm bor" className="max-w-56 sm:max-md:w-[40%] sm:max-md:h-auto sm:max-md:object-contain 
              ipad:max-lg:w-[55%] ipad:max-lg:h-auto ipad:max-lg:object-contain  
              md:max-ipad:w-[54%] md:max-ipad:h-auto md:max-ipad:object-contain" />
            </div>
            <div className="service-image from-left text-white rounded-2xl flex w-[60vh] h-[29vh] items-center bg-slate-800 opacity-0 sm:max-md:w-full sm:max-md:h-auto sm:max-md:justify-between sm:max-md:items-center sm:max-md:p-4">
              <div className="service-content text-xl pl-6 sm:max-md:text-base sm:max-md:pl-0">
                <h1>{t("ta'mirlash")}</h1>
              </div>
              <img src="./nextimages/images/service3.png" alt="rasm bor" className="max-w-56 sm:max-md:w-[40%] sm:max-md:h-auto sm:max-md:object-contain 
              ipad:max-lg:w-[57%] ipad:max-lg:h-auto ipad:max-lg:object-contain  
              md:max-ipad:w-[55%] md:max-ipad:h-auto md:max-ipad:object-contain" />
            </div>
            <div className="service-image from-right text-white rounded-2xl flex w-[85vh] h-[29vh] items-center bg-slate-800 opacity-0 sm:max-md:w-full sm:max-md:h-auto sm:max-md:justify-between sm:max-md:items-center sm:max-md:p-4">
              <div className="service-content text-xl pl-6 sm:max-md:text-base sm:max-md:pl-0">
                <h1>{t("professionallar jamoasi")}</h1>
              </div>
              <img src="./nextimages/images/service4.png" alt="rasm bor" className="max-w-64 pb-10 sm:max-md:w-[40%] sm:max-md:h-auto sm:max-md:object-contain 
              ipad:max-lg:w-[40%] ipad:max-lg:h-auto ipad:max-lg:object-contain  
              md:max-ipad:w-[40%] md:max-ipad:h-auto md:max-ipad:object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
