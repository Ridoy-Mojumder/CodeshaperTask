import { useState } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import userIcon from '../../image/navbarUserIcon.png';
import dashboardIcon from '../../image/dashboardIcon.png';
import flag1 from '../../image/flag1.png';
import img1 from '../../image/1.png';
import img2 from '../../image/2.png';
import img3 from '../../image/3.png';
import img4 from '../../image/4.png';
import img5 from '../../image/5.png';
import img6 from '../../image/6.png';
import banner from '../../image/modalNavabr.png';

// Define the type for a language
type Language = {
    code: string;
    name: string;
    flag: string;
};

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<Language>({
        code: 'en',
        name: 'English',
        flag: flag1,
    });

    const languages: Language[] = [
        {
            code: 'en',
            name: 'English',
            flag: flag1,
        },
        {
            code: 'de',
            name: 'German',
            flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
        },
        {
            code: 'bn',
            name: 'Bangla',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
        },
    ];

    const toggleModal = () => setIsModalOpen((prev) => !prev);
    const toggleLanguageDropdown = () => setIsLanguageDropdownOpen((prev) => !prev);

    const selectLanguage = (language: Language) => {
        setSelectedLanguage(language);
        setIsLanguageDropdownOpen(false);
    };

    return (
        <>
            <nav className="w-full flex items-center justify-between px-4 py-3 bg-white shadow-sm border-b">
                <div className="flex items-center gap-2">
                    <button className="hidden md:flex items-center justify-center w-8 h-8 p-1 rounded-full shadow-md hover:bg-gray-100">
                        <img src={dashboardIcon} alt="Dashboard Icon" className="h-5 w-5" />
                    </button>
                    <h1 className="hidden md:block text-lg font-semibold text-gray-800">Dashboard</h1>
                </div>

                <div className="flex items-center gap-4">
                    {/* Notification Icon */}
                    <div
                        onClick={toggleModal}
                        className="relative w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer p-1"
                    >
                        <IoNotificationsOutline className="text-gray-700 text-lg" />
                        <span className="absolute top-2 right-1 bg-red-500 text-white text-xs h-4 w-4 rounded-full flex items-center justify-center">
                            2
                        </span>
                    </div>

                    {/* Language Dropdown */}
                    <div className="relative">
                        <div
                            onClick={toggleLanguageDropdown}
                            className="flex items-center h-10 space-x-1 w-20 cursor-pointer shadow-sm px-2 hover:text-indigo-600"
                        >
                            <img src={selectedLanguage.flag} alt={selectedLanguage.name} className="h-3 w-4" />
                            <span className="text-sm text-gray-700">{selectedLanguage.code.toUpperCase()}</span>
                            {isLanguageDropdownOpen ? (
                                <MdKeyboardArrowUp className="text-gray-700" />
                            ) : (
                                <MdKeyboardArrowDown className="text-gray-700" />
                            )}
                        </div>
                        {isLanguageDropdownOpen && (
                            <div className="absolute top-10 left-0 bg-white border border-gray-200 rounded-md shadow-md w-24 z-50">
                                {languages.map((lang) => (
                                    <div
                                        key={lang.code}
                                        onClick={() => selectLanguage(lang)}
                                        className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-50 cursor-pointer"
                                    >
                                        <img src={lang.flag} alt={lang.name} className="h-3 w-4" />
                                        <span className="text-sm text-gray-700">{lang.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-3 w-56 h-10 cursor-pointer hover:text-indigo-600 border border-gray-300 rounded-full px-3 py-2">
                        <img src={userIcon} alt="User Icon" className="w-6 h-6 rounded-full" />
                        <span className="text-sm text-gray-700 font-medium truncate">Codeshaper Admin</span>
                        <MdKeyboardArrowDown className="text-gray-700" />
                    </div>
                </div>
            </nav>

            {/* Notification Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                    <div
                        className="absolute bg-white rounded-[6px] shadow-lg border border-gray-200 flex flex-col"
                        style={{
                            width: '412px',
                            height: '488px',
                            top: '61px',
                            right: '25%',
                        }}
                    >
                        {/* Modal Header */}
                        <div className="relative">
                            <img
                                src={banner}
                                alt="Modal Banner"
                                className="w-full rounded-t-[6px]"
                            />
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Body */}
                        <ul className="p-4 space-y-3 overflow-y-auto flex-1">
                            {[img1, img2, img3, img4, img5, img6].map((img, index) => (
                                <li
                                    key={index}
                                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100"
                                >
                                    <img
                                        src={img}
                                        alt={`Notification ${index}`}
                                        className="w-[40px] h-[40px] rounded-full"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-700 font-medium">Wade Raketune</p>
                                        <p className="text-xs text-gray-500">It is nice to be chatting with...</p>
                                    </div>
                                    <span className="text-xs text-gray-400">2 minutes</span>
                                </li>
                            ))}
                        </ul>

                        {/* Modal Footer */}
                        <div className="px-4 py-3 bg-gray-100">
                            <button className="text-sm h-8 bg-indigo-600 w-full text-white font-medium rounded">
                                View All
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
