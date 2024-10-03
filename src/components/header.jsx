/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageContext } from "../context/LanguageContext";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Header() {
    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext);
    const h2Ref = useRef(null);
    const h3Ref = useRef(null);

    useEffect(() => {
        AOS.init();
    }, []);

    // Animatsiya tugaganidan keyin elementlarni yashirish
    useEffect(() => {
        const h2Element = h2Ref.current;
        const h3Element = h3Ref.current;

        h2Element.addEventListener("animationend", () => {
            h3Element.style.visibility = "visible";
            // h2 animatsiya tugagach h3 ni ko'rinishga chiqarish
        });

        return () => {
            h2Element.removeEventListener("animationend", () => {
                h3Element.style.visibility = "visible";
            });
        };
    }, []);

    // Swiper slayd o'zgarganda animatsiyani qayta boshlash
    const handleSlideChange = () => {
        const h2Element = h2Ref.current;
        const h3Element = h3Ref.current;

        // Dastlab barcha elementlarni yashirish
        h2Element.style.visibility = "visible";
        h3Element.style.visibility = "hidden";

        // Animatsiyani qayta ishga tushirish
        h2Element.classList.remove("animate-bottom-to-top");
        h3Element.classList.remove("animate-bottom-to-top");

        void h2Element.offsetWidth;

        h2Element.classList.add("animate-bottom-to-top");
        h3Element.classList.add("animate-bottom-to-top");
    };

    return (
        <div className="pt-[100px]">
            <Swiper
                effect="fade"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-screen"
                onSlideChange={handleSlideChange}
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                navigation={true}

            >
                <SwiperSlide>
                    <div
                        className="relative h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('https://tbbsweb.azureedge.net/tbbsweb/SLIDER/slider_370915610-2301091254462390.webp')",
                        }}
                    >
                        <div className="bg-black/40 h-full flex items-center justify-center p-8">
                            <div className="text-center text-white">
                                <h2
                                    ref={h2Ref}
                                    className="text-4xl lg:text-6xl font-bold animate-bottom-to-top h2"
                                    style={{ visibility: "hidden", animationDelay: "0s" }} // Dastlab yashirin
                                >
                                    #TürkiyeScholarships2024
                                </h2>
                                <h3
                                    ref={h3Ref}
                                    className="text-xl lg:text-2xl mt-4 animate-bottom-to-top h3"
                                    style={{ visibility: "hidden", animationDelay: "1s" }} // Kechiktirilgan animatsiya
                                >
                                    Results for the world's most comprehensive scholarship program are announced!
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('https://tbbsweb.azureedge.net/tbbsweb/SLIDER/slider_370915610-2301091254462390.webp')",
                        }}
                    >
                        <div className="bg-black/40 h-full flex items-center justify-center p-8">
                            <div className="text-center text-white">
                                <h2
                                    ref={h2Ref}
                                    className="text-4xl lg:text-6xl font-bold animate-bottom-to-top h2"
                                    style={{ visibility: "hidden", animationDelay: "0s" }} // Dastlab yashirin
                                >
                                    #TürkiyeScholarships2024
                                </h2>
                                <h3
                                    ref={h3Ref}
                                    className="text-xl lg:text-2xl mt-4 animate-bottom-to-top h3"
                                    style={{ visibility: "hidden", animationDelay: "1s" }} // Kechiktirilgan animatsiya
                                >
                                    Results for the world's most comprehensive scholarship program are announced!
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('https://tbbsweb.azureedge.net/tbbsweb/SLIDER/slider_370915610-2301091254462390.webp')",
                        }}
                    >
                        <div className="bg-black/40 h-full flex items-center justify-center p-8">
                            <div className="text-center text-white">
                                <h2
                                    ref={h2Ref}
                                    className="text-4xl lg:text-6xl font-bold animate-bottom-to-top h2"
                                    style={{ visibility: "hidden", animationDelay: "0s" }} // Dastlab yashirin
                                >
                                    #TürkiyeScholarships2024
                                </h2>
                                <h3
                                    ref={h3Ref}
                                    className="text-xl lg:text-2xl mt-4 animate-bottom-to-top h3"
                                    style={{ visibility: "hidden", animationDelay: "1s" }} // Kechiktirilgan animatsiya
                                >
                                    Results for the world's most comprehensive scholarship program are announced!
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Boshqa slaydlar shu tarzda qo'shiling */}
            </Swiper>
        </div>
    );
}

export default Header;
