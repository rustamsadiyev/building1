import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Company() {
    const { t, i18n } = useTranslation();

    const [employees, setEmployees] = useState(0);
    const [projects, setProjects] = useState(0);
    const [equipments, setEquipments] = useState(0);
    const [years, setYears] = useState(0);

    const duration = 2000;

    const countUp = (target, setState) => {
        const increment = target / (duration / 20);
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                setState(target);
            } else {
                setState(Math.ceil(current));
            }
        }, 20);
    };

    useEffect(() => {
        countUp(120, setEmployees);
        countUp(43, setProjects);
        countUp(250, setEquipments);
        countUp(2, setYears);
    }, []);

    return (
        <>
            <div 
                className="company relative mx-auto h-[500px] sm:max-md:h-screen sm:max-md:pt-10 sm:max-md:pb-10 sm:max-md:px-4" 
                style={{
                    backgroundImage: "url('./nextimages/images/company.png')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            >
                <div className="company-statistics max-w-[1150px] m-auto text-left absolute inset-0 flex flex-col justify-center items-left text-white sm:max-md:max-w-full sm:max-md:items-center sm:max-md:text-center sm:max-md:absolute sm:max-md:top-0 sm:max-md:left-0 sm:max-md:w-full sm:max-md:h-full sm:max-md:pt-10 sm:max-md:pb-10">
                    <div className="title text-3xl font-bold sm:max-md:text-2xl">
                        {t("obuna")}
                    </div>
                    <div className="numbers text-black flex gap-28 sm:max-md:flex sm:max-md:justify-center sm:max-md:align-middle flex-wrap  sm:max-md:gap-6 sm:max-md:items-center">
                        <div className="number mt-20 sm:max-md:mt-5">
                            <h1 className="text-5xl font-bold sm:max-md:text-3xl">{employees} +</h1>
                            <h2 className="text-lg font-bold pl-2 sm:max-md:pl-0">{t("ishchilar soni")}</h2>
                        </div>

                        <div className="number mt-20 sm:max-md:mt-5">
                            <h1 className="text-5xl font-bold sm:max-md:text-3xl">{projects} +</h1>
                            <h2 className="text-lg font-bold sm:max-md:pl-0">{t("obyektlar")}</h2>
                        </div>

                        <div className="number mt-20 sm:max-md:mt-5">
                            <h1 className="text-5xl font-bold sm:max-md:text-3xl">{equipments} +</h1>
                            <h2 className="text-lg font-bold sm:max-md:pl-0">{t("maxsus jihozlar")}</h2>
                        </div>

                        <div className="number mt-20 sm:max-md:mt-5">
                            <h1 className="text-5xl font-bold sm:max-md:text-3xl">{years} +</h1>
                            <h2 className="text-lg font-bold sm:max-md:pl-0">{t("marketda 14 yil")}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Company;
