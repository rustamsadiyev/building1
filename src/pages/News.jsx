import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from "react";

function News() {

  const { t, i18n } = useTranslation();
  
    const languageSelect = localStorage.getItem('i18nextLng');
  
    const handleChangeLanguage = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };

  return (
    <>
      <div id="news" className="news w-full bg-gray-100 h-full py-20 md:max-tablet:overflow-hidden">
        <div className="container w-[1110px] m-auto md:max-tablet:w-screen sm:max-md:w-screen">
          <h1 className="text-2xl pb-4">{t("barcha yangiliklarimiz")}</h1>
          <div
            className="cards grid grid-cols-2 gap-6 gap-y-24
                md:max-tablet:w-screen md:max-tablet:grid md:max-tablet:grid-cols-1 
                sm:max-md:grid-cols-1 sm:max-md:w-full "
          >
            <div
              className="card w-full h-[42vh] flex 
                    md:max-tablet:w-screen md:max-tablet:h-[30vh] 
                    sm:max-md:block sm:max-md:w-full sm:max-md:h-auto sm:max-md:flex-col"
            >
              <div
                className="card-image w-[33vh] h-full 
                        md:max-tablet:w-[38vh] 
                        sm:max-md:w-full sm:max-md:h-[50vh] sm:max-2xl:rounded-2xl"
              >
                <img
                  src="./nextimages/images/news1.jpg"
                  alt="rasm bor!"
                  className="h-full object-cover rounded-2xl sm:max-md:w-full sm:max-md:h-full sm:max-2xl:rounded-2xl"
                />
              </div>
              <div
                className="card-context w-[41vh] bg-white rounded-2xl pl-5 
                        md:max-tablet:w-screen md:max-tablet:rounded-2xl 
                        sm:max-md:w-full sm:max-md:pl-0 sm:max-2xl:rounded-2xl"
              >
                <button className=" mt-2 h-[30px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                  {t("ko'proq")}
                </button>
                <h2>
                {t("yangilik1")}
                </h2>
                <p className="text-[0.75rem] w-[90%] py-3">
                {t("yangilik1davomi")}
                </p>
              </div>
            </div>

            <div
              className="card w-full h-[42vh] flex 
                    md:max-tablet:w-screen md:max-tablet:h-[30vh] 
                    sm:max-md:block sm:max-md:w-full sm:max-md:h-auto sm:max-md:flex-col"
            >
              <div
                className="card-image w-[33vh] h-full 
                        md:max-tablet:w-[38vh] 
                        sm:max-md:w-full sm:max-md:h-[50vh] sm:max-2xl:rounded-2xl"
              >
                <img
                  src="./nextimages/images/news2.jpg"
                  alt="rasm bor!"
                  className="h-full object-cover rounded-2xl sm:max-md:w-full sm:max-md:h-full sm:max-2xl:rounded-2xl"
                />
              </div>
              <div
                className="card-context w-[41vh] bg-white rounded-2xl pl-5 
                        md:max-tablet:w-screen md:max-tablet:rounded-2xl 
                        sm:max-md:w-full sm:max-md:pl-0 sm:max-2xl:rounded-2xl"
              >
                <button className=" mt-2 h-[30px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                {t("ko'proq")}
                  
                </button>
                <h2>
                {t("yangilik2")}
                </h2>
                <p className="text-[0.75rem] w-[90%] py-3">
                  {t("yangilik2davomi")}
                </p>
              </div>
            </div>

            <div
              className="card w-full h-[42vh] flex 
                    md:max-tablet:w-screen md:max-tablet:h-[30vh] 
                    sm:max-md:block sm:max-md:w-full sm:max-md:h-auto sm:max-md:flex-col"
            >
              <div
                className="card-image w-[33vh] h-full 
                        md:max-tablet:w-[38vh] 
                        sm:max-md:w-full sm:max-md:h-[50vh] sm:max-2xl:rounded-2xl"
              >
                <img
                  src="./nextimages/images/news3.jpg"
                  alt="rasm bor!"
                  className="h-full object-cover rounded-2xl sm:max-md:w-full sm:max-md:h-full sm:max-2xl:rounded-2xl"
                />
              </div>
              <div
                className="card-context w-[41vh] bg-white rounded-2xl pl-5 
                        md:max-tablet:w-screen md:max-tablet:rounded-2xl 
                        sm:max-md:w-full sm:max-md:pl-0 sm:max-2xl:rounded-2xl"
              >
                <button className=" mt-2 h-[30px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                {t("ko'proq")}
                  
                </button>
                <h2>
                {t("yangilik3")}
                </h2>
                <p className="text-[0.75rem] w-[90%] py-3">
                {t("yangilik3davomi")}
                </p>
              </div>
            </div>

            <div
              className="card w-full h-[42vh] flex 
                    md:max-tablet:w-screen md:max-tablet:h-[30vh] 
                    sm:max-md:block sm:max-md:w-full sm:max-md:h-auto sm:max-md:flex-col"
            >
              <div
                className="card-image w-[33vh] h-full 
                        md:max-tablet:w-[38vh] 
                        sm:max-md:w-full sm:max-md:h-[50vh] sm:max-2xl:rounded-2xl"
              >
                <img
                  src="./nextimages/images/news4.jpg"
                  alt="rasm bor!"
                  className="h-full object-cover rounded-2xl sm:max-md:w-full sm:max-md:h-full sm:max-2xl:rounded-2xl"
                />
              </div>
              <div
                className="card-context w-[41vh] bg-white rounded-2xl pl-5 
                        md:max-tablet:w-screen md:max-tablet:rounded-2xl 
                        sm:max-md:w-full sm:max-md:pl-0 sm:max-2xl:rounded-2xl"
              >
                <button className=" mt-2 h-[30px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                {t("ko'proq")}
                  
                </button>
                <h2>
                {t("yangilik4")}
                </h2>
                <p className="text-[0.75rem] w-[90%] py-3">
                {t("yangilik4davomi")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
