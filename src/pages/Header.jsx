import { useTranslation } from "react-i18next";
import Logo from "/images/logo.png";
import { Link } from "react-router-dom";
import CityImage from "/images/city.jpeg";
import { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header() {
  const [burger, setBurger] = useState(false);
  const [scroll, setScroll] = useState(false); // State for detecting scroll
  const burgerRef = useRef(); // Reference to burger modal

  const { t, i18n } = useTranslation();
  const languageSelect = localStorage.getItem("i18nextLng");

  const handleChangeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle clicks outside the burger modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (burgerRef.current && !burgerRef.current.contains(event.target)) {
        setBurger(false); // Close the burger menu when clicking outside
      }
    };

    // Add event listener if the burger is open
    if (burger) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup
    };
  }, [burger]);

  return (
    <div id="info" className="relative max-w-full h-[88vh] bg-cover bg-no-repeat bg-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={CityImage} alt="City Background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 filter blur-sm"></div>
      </div>

      {/* Burger Modal */}
      {burger && (
        <div
          ref={burgerRef} // Reference the modal here
          className="fixed top-0 left-0 w-[35%] h-full bg-yellow-200 z-50 shadow-lg p-5"
        >
          <div className="text-center">
            <ul className="list-none text-left h-[30vh] w-full flex flex-col justify-between">
              <br />
              <li className="text-black text-lg">
                <a href="#info">{t("malumotlar")}</a>
              </li>
              <li className="text-black text-lg">
                <a href="#project">{t("biz haqimizda")}</a>
              </li>
              <li className="text-black text-lg">
                <a href="#service">{t("korxonalar")}</a>
              </li>
              <li className="text-black text-lg">
                <a href="#constructor">{t("afzalliklarimiz")}</a>
              </li>
              <li className="text-black text-lg">
                <a href="#news">{t("yangiliklar")}</a>
              </li>
              <li className="text-black text-lg">
                <a href="#connect">{t("aloqa")}</a>
              </li>
            </ul>
            <br />

            {/* Language Change Buttons */}
            <div className="flex justify-center space-x-4 mt-4">
              <button onClick={() => handleChangeLanguage("en")}>
                <h1 className="text-2xl">En</h1>
              </button>
              <button onClick={() => handleChangeLanguage("ru")}>
                <h1 className="text-2xl">Ru</h1>
              </button>
              <button onClick={() => handleChangeLanguage("uz")}>
                <h1 className="text-2xl">Uz</h1>
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

      {/* Container for content */}
      <div className="relative max-w-[1200px] m-auto w-full h-full px-4 py-5">
        {/* Centered Navigation Menu */}
        <div
          className={`absolute top-0 left-0 right-0 flex justify-center py-4 z-50 ${
            scroll ? "bg-yellow-300" : ""
          } transition-colors duration-300`}
        >
          <div className="nav1 fixed z-50">
            <nav className="relative flex flex-col lg:flex-row items-center justify-between text-white text-lg sm:max-md:w-full">
              <ul className="flex flex-wrap space-x-4 lg:space-x-10 items-center">
                <li className="navbar-item sm:max-md:hidden"><a href="#info">{t("malumotlar")}</a></li>
                <li className="navbar-item sm:max-md:hidden">
                  <a href="#project">{t("biz haqimizda")}</a>
                </li>
                <li className="navbar-item sm:max-md:hidden">
                  <a href="#service">{t("korxonalar")}</a>
                </li>
                <li className="navbar-item">
                  <img
                    className="w-24 lg:w-28 mx-auto sm:max-md:hidden "
                    src={Logo}
                    alt="Rasm bor"
                  />
                </li>
                <li className="navbar-item sm:max-md:hidden">
                  <a href="#constructor">{t("afzalliklarimiz")}</a>
                </li>
                <li className="navbar-item sm:max-md:hidden">
                  <a href="#news">{t("yangiliklar")}</a>
                </li>
                <li className="navbar-item sm:max-md:hidden">
                  <a href="#connect">{t("aloqa")}</a>
                </li>
                <li className="sm:max-md:hidden">
                  <select
                    className="appearance-none border-none bg-transparent"
                    onChange={(e) => handleChangeLanguage(e.target.value)}
                    value={languageSelect}
                  >
                    <option className="bg-sky-600" value="uz">
                      Uzbek
                    </option>
                    <option className="bg-sky-600" value="en">
                      English
                    </option>
                    <option className="bg-sky-600" value="ru">
                      Russian
                    </option>
                  </select>
                </li>
              </ul>

              {/* Wrapper for Burger Icon, Image, and Phone Icon */}
              <div className="relative flex items-center justify-between w-screen md:hidden ">
                {/* Burger Icon - Left side */}
                <div className="absolute left-4 sm:max-md:flex md:hidden">
                  <button onClick={() => setBurger(true)}>
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  </button>
                </div>

                {/* Centered Image */}
                <div className="flex-grow flex justify-center">
                  <img className="w-24 lg:w-28 mx-auto" src={Logo} alt="Centered Image" />
                </div>

                {/* Phone Icon - Right side */}
                <div className="absolute right-4 sm:max-md:block md:hidden">📞</div>
              </div>
            </nav>
          </div>
        </div>

        {/* Text Container - Positioned Below Navbar */}
        <div className="mt-[calc(20vh+4rem)] text-white">
          <h1 className="text-3xl md:text-4xl lg:text-[90px] leading-none font-medium">
            ATAEV <br />
            <br /> BAHODIR BUILD <br />
          </h1>
          <br />
          <br />
          <h5 className="mt-3 font-semibold text-base md:text-lg lg:text-xl">
            {t("hamma narsada alo")}
          </h5>
        </div>

        {/* Buttons Container */}
        <div className="mt-10 flex space-x-5">
          <Link to="/projects">
            <button className="btn border border-white rounded-3xl px-5 py-2 text-white hover:bg-white hover:text-black transition-colors duration-300">
              {t("bizning loyihalarimiz")}
            </button>
          </Link>
          <Link to="/services">
            <button className="btn text-white border rounded-3xl px-5 py-2 hover:bg-white hover:text-black transition-colors duration-300">
              {t("bog'lanish")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
