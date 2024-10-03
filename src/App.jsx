/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Header from "./components/header"
import Navbar from "./components/navbar"
import Cards from "./components/cards"
import WhySelected from "./components/whySelected"
import SecondSwiper from "./components/secondSwiper"
import Teachers from "./components/teachers"
import Footer from "./components/footer"
import ContactUS from "./components/contactUS"
import { LanguageProvider } from "./context/LanguageContext"

function App() {
  // const [theme, setTheme] = useState('light');


  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //     document.documentElement.classList.add(savedTheme);
  //   }
  // }, []);


  return (
    <>
        <Header />
        <Cards />
        <WhySelected />
        {/* <SecondSwiper /> */}
        <Teachers />
        <ContactUS />
    </>
  )
}

export default App