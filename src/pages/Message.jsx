import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Message() {
    const { t, i18n } = useTranslation();

    // State to manage form values
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleChangeLanguage = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };

    const sendMessage = (event) => {
        event.preventDefault();

        const token = "7341893786:AAHbohNvr9P53FUiZbESEercr1llUcpd5Bs";
        const chat_id = "5095540450";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        axios({
            url: url,
            method: "POST",
            data: {
                chat_id: chat_id,
                text: `Name: ${name}\nPhone Number: ${phone}\nMessage: ${message}`,
            }
        }).then((res) => {
            alert("Submitted");
            // Clear form values
            setName('');
            setPhone('');
            setMessage('');
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div id="connect" className="message overflow-hidden bg-slate-900 h-screen flex justify-center items-center relative">
            <img 
                src="./nextimages/images/quiz.png" 
                alt="Message Background" 
                className="absolute w-full h-full object-cover"
            />
            <div className="relative container max-w-[1150px] m-auto sm:max-md:w-full md:max-lg:w-full">
                <form onSubmit={sendMessage} className="connection flex flex-col items-center w-full max-w-md sm:max-md:max-w-[90%] md:max-lg:max-w-[90%]">
                    <h1 className="text-white text-3xl mb-4">{t("savollar")}</h1>

                    <div className="mb-4 w-full max-w-md">
                        <input 
                            type="text" 
                            id="name-input" 
                            name="name-input"
                            placeholder="Your Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-200 text-base focus:ring-blue-500 focus:border-blue-500" 
                        />
                    </div>

                    <div className="mb-4 w-full max-w-md">
                        <input 
                            type="text" 
                            id="phone-input" 
                            name="phone-input"
                            placeholder="Your Phone Number" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-200 text-base focus:ring-blue-500 focus:border-blue-500" 
                        />
                    </div>

                    <div className="mb-6 w-full max-w-md">
                        <textarea 
                            id="message-textarea" 
                            name="message-textarea"
                            rows="4" 
                            placeholder="Your Message" 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-200 text-base focus:ring-blue-500 focus:border-blue-500" 
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="text-white bg-blue-200 w-full max-w-md rounded-full hover:bg-blue-700 font-bold py-2 px-4 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        {t("yuborish")}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Message;
