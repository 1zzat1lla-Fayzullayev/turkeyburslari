import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const slides = [
    {
        img: "/exprience.png",
        // title: "Ücretsiz ikinci öğretmen",
        description: "Tajribali va professional turk tili o'qituvchilari",
    },
    {
        img: "/test.png",
        // title: "Test Merkezi",
        description: "Haqiqiy imtihonlarga yaqin sinov xizmatlari",
    },
    {
        img: "/events.png",
        // title: "Ücretsiz etkinlikler",
        description: "Bepul tadbirlar",
    },
    {
        img: "/career1.png",
        // title: "Ortak çalışma bölgeleri",
        description: "Talabalar uchun maxsus martaba bo'yicha maslahat va rivojlanish dasturini ishlab chiqish",
    },
];

const MobileWhySelectedSwiper = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            // pagination={{ clickable: true }}
            // navigation={true}
            // modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className="flex min-h-[180px] flex-col items-center bg-[#f7f7f7] p-6 rounded-[1.3rem] dark:bg-activeGray dark:bg-opacity-10">
                    <img src={slide.img} alt={slide.alt} className="w-16 mb-4" />
                    <div className="info text-center">
                        <h3 className="text-xl lg:text-3xl font-medium mb-2.5 dark:text-white">
                            {slide.title}
                        </h3>
                        <p className="text-sm lg:text-base opacity-50 dark:text-white">
                            {slide.description}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MobileWhySelectedSwiper;
