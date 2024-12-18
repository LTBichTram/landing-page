"use client";

import person1Img from "@/assets/person1.jpg";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

const MySwipper = () => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        slidesPerView={5}
        grid={{ rows: 2 }}
        spaceBetween={30}
        loop={true}
        modules={[Grid, Pagination]}
        pagination={{ clickable: true }}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {listData.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              image={item.image}
              name={item.name}
              subName={item.subName}
              title={item.title}
              subTitle={item.subTitle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwipper;

const listData = [
  {
    name: "John",
    image: person1Img,
    subName: "Real Estate Agent",
    title: "Fast and accurate!",
    subTitle:
      "This tool cut down my search time dramatically and made it easier to meet my clients' needs, no matter how complex.",
  },
  {
    name: "John",
    image: person1Img,
    subName: "Real Estate Agent",
    title: "Fast and accurate!",
    subTitle:
      "This tool cut down my search time dramatically and made it easier to meet my clients' needs, no matter how complex.",
  },
  {
    name: "John",
    image: person1Img,
    subName: "Real Estate Agent",
    title: "Fast and accurate!",
    subTitle:
      "This tool cut down my search time dramatically and made it easier to meet my clients' needs, no matter how complex.",
  },
  {
    name: "John",
    image: person1Img,
    subName: "Real Estate Agent",
    title: "Fast and accurate!",
    subTitle:
      "This tool cut down my search time dramatically and made it easier to meet my clients' needs, no matter how complex.",
  },
  {
    name: "John",
    image: person1Img,
    subName: "Real Estate Agent",
    title: "Fast and accurate!",
    subTitle:
      "This tool cut down my search time dramatically and made it easier to meet my clients' needs, no matter how complex.",
  },
  {
    name: "John",
    image: person1Img,
    subName: "Real Estate Agent",
    title: "Fast and accurate!",
    subTitle:
      "This tool cut down my search time dramatically and made it easier to meet my clients' needs, no matter how complex.",
  },
  {
    name: "John",
    image: person1Img,
    subName: "Real Estate Agent",
    title: "Fast and accurate!",
    subTitle:
      "This tool cut down my search time dramatically and made it easier to meet my clients' needs, no matter how complex.",
  },
  {
    name: "John",
    image: person1Img,
    subName: "Real Estate Agent",
    title: "Fast and accurate!",
    subTitle:
      "This tool cut down my search time dramatically and made it easier to meet my clients' needs, no matter how complex.",
  },
  {
    name: "John",
    image: person1Img,
    subName: "Real Estate Agent",
    title: "Fast and accurate!",
    subTitle:
      "This tool cut down my search time dramatically and made it easier to meet my clients' needs, no matter how complex.",
  },
  {
    name: "John",
    image: person1Img,
    subName: "Real Estate Agent",
    title: "Fast and accurate!",
    subTitle:
      "This tool cut down my search time dramatically and made it easier to meet my clients' needs, no matter how complex.",
  },
];
