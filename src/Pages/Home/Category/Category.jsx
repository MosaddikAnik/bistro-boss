import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import img6 from "../../../assets/home/chef-service.jpg";
import { Pagination } from "swiper/modules";
import SectionTitle from './../../Sheard/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <div>

     <SectionTitle
       subHeading={"---From 11:00am to 10:00pm---"}
       heading={"ORDER ONLINE"}
     ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper mb-24"
      >
        {[
          { img: img1, title: "SALAD" },
          { img: img2, title: "PIZZAS" },
          { img: img3, title: "SOUPS" },
          { img: img4, title: "DESSERTS" },
          { img: img5, title: "SALAD" },
        ].map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={item.img} alt={item.title} className="rounded-xl" />
            <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 uppercase text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
              {item.title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bistro Boss Section */}
      <div className="relative mb-20">
        <img src={img6} alt="Chef Service" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg max-w-2xl text-center">
            <h1 className="text-3xl font-bold mb-4">Bistro Boss</h1>
            <p className="text-black leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
