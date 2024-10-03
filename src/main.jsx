/* eslint-disable react-refresh/only-export-components */
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import Services from "./pages/services.jsx";
import Education from "./pages/education.jsx";
import Blog from "./pages/blog.jsx";
import Faq from "./pages/faq.jsx";
import Contact from "./pages/contact.jsx";
import Navbar from "./components/navbar.jsx";
import { useEffect, useState } from "react";
import Footer from "./components/footer.jsx";

const Root = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes className="min-h-screen">
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education-method" element={<Education />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer theme={theme} setTheme={setTheme} />
    </LanguageProvider>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
