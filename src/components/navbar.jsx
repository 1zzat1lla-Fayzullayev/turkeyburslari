/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from 'react';
import Wrapper from "../layout/wrapper";
import ThemeToggle from '../ui/themeToggle';
import { LanguageContext } from '../context/LanguageContext';
import { getText } from '../language';
import { Link } from 'react-router-dom';

function Navbar({ theme, setTheme }) {
    const [isLangMenuOpen, setLangMenuOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false); // Dropdown uchun state
    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext)

    const changeNavbar = () => {
        if (window.scrollY >= 30 && !isMenuOpen) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavbar);
        return () => {
            window.removeEventListener("scroll", changeNavbar);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className={`fixed w-screen z-[999] ${navbar && !isMenuOpen ? 'blur-background' : ''}`}>
            <Wrapper>
                <div className="flex justify-between items-center py-3 md:py-4 relative z-[999]">
                    <div className="flex items-center gap-[30px]">
                        <Link to={"/"}>
                            <img
                                src={theme === 'light' ? "/turkchasoati1.png" : "/turkchasoati2.png"}
                                alt="Logo"
                                className='w-36 lg:w-44 cursor-pointer'
                            />
                        </Link>
                        <ul className="lg:flex hidden items-center gap-[40px]">
                            <li><Link to={'/'} className='text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50'>{getText("navbarMain")}</Link></li>
                            <li><Link to={"/"} className='text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50'>{getText("navbarPrograms")}</Link></li>
                            <li><Link to={"/"} className='text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50'>{getText("navbarApplication")}</Link></li>
                            <li><Link to={"/"} className="text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50">{getText("navbarLife")}</Link></li>
                            <li><Link to={"/"} className="text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50">{getText("navbarStories")}</Link></li>
                            <li><Link to={"/"} className="text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50">{getText("navbarEvents")}</Link></li>
                            <li><Link to={"/"} className="text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50">{getText("navbarContact")}</Link></li>
                            {/* Dropdown boshlanishi */}
                            <li className="relative">
                                {/* <button
                                    onClick={toggleDropdown}
                                    className="text-base text-mainBlue dark:text-white dark:opacity-50 flex items-center cursor-pointer"
                                >
                                    {getText("navbarMore")} 
                                </button> */}
                                {/* {isDropdownOpen && (
                                    <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48 z-10 dark:bg-[#121624]">
                                        <li><Link to={"/"} className="block px-4 py-2 text-mainBlue dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">{getText("navbarLife")}</Link></li>
                                        <li><Link to={"/"} className="block px-4 py-2 text-mainBlue dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">{getText("navbarStories")}</Link></li>
                                        <li><Link to={"/"} className="block px-4 py-2 text-mainBlue dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">{getText("navbarEvents")}</Link></li>
                                        <li><Link to={"/"} className="block px-4 py-2 text-mainBlue dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">{getText("navbarContact")}</Link></li>
                                    </ul>
                                 )} */}
                            </li>
                            {/* Dropdown tugadi */}
                        </ul>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <div className="relative">
                            <div className="flex items-center gap-[5px] outline-none border-none cursor-pointer">
                                <img
                                    src={selectedFlag}
                                    style={{ width: "20px", objectFit: "cover" }}
                                />
                                <select
                                    className='bg-transparent border-none outline-none cursor-pointer'
                                    onChange={(e) => changeLanguage(e.target.value)}
                                    value={selectedLanguage}
                                >
                                    <option className='dark:bg-[#121624] border-none' value="uz">Oʻzbek</option>
                                    <option className='dark:bg-[#121624] border-none' value="en">English</option>
                                    <option className='dark:bg-[#121624] border-none' value="tr">Türkçe</option>
                                </select>
                            </div>
                        </div>
                        <ThemeToggle onChange={handleThemeChange} />
                        <div
                            className={`burger ${isMenuOpen ? 'open' : ''} block lg:hidden`}
                            onClick={toggleMenu}
                        >
                            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41] dark:bg-white"></div>
                            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41] dark:bg-white"></div>
                            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41] dark:bg-white"></div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Navbar;
