import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../index.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./style.css";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="h-[550px] object-contain ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className="h-full object-cover">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/MGcFfby/prague-980732.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="w-2/3">
                <h1 className="mb-5 text-8xl font-bold gradient">
                  Our Library
                </h1>
                <p className="mb-5 text-2xl">
                  Our library encompasses a comprehensive set of tools,
                  utilities, and components designed to facilitate software
                  development by providing extensive functionality and features.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/dMDZ0yY/library-1147815-1920.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="w-2/3">
                <h1 className="mb-5 text-8xl font-bold gradient">Our Books</h1>
                <p className="mb-5 text-2xl">
                  We have a big amount of book collections of around 500K
                  books.We have about all categories of books to help our
                  readers to enhance their knowledge.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/sFm1fQS/woman-8568693-1920.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="w-2/3">
                <h1 className="mb-5 text-8xl font-bold gradient">
                  Our Readers
                </h1>
                <p className="mb-5 text-2xl">
                  We have a community of around 20k readers around the country.
                  They are so helpful to suggest you the best books of your
                  interest.So you will find a healthy community here.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/r7PSMWG/library-7408106-1920.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="w-2/3">
                <h1 className="mb-5 text-8xl gradient font-bold">
                  Our Environment
                </h1>
                <p className="mb-5 text-2xl">
                  You will get pin drop silence here with the best and beautiful
                  environment. You will have enough space to keep your
                  concentration alive.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/MgGtzw8/open-book-1428428-1920.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="w-2/3">
                <h1 className="mb-5 text-8xl font-bold gradient text-nowrap">
                  Book Categories
                </h1>
                <p className="mb-5 text-2xl">
                  We are providing about all categories of books now. Besides we
                  are collecting new books of remaining categories and new
                  categories to enrich our readers.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/dKvxzt1/woman-6784555-1920.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="w-2/3">
                <h1 className="mb-5 text-8xl font-bold gradient">
                  Top Writers
                </h1>
                <p className="mb-5 text-2xl">
                  We are connected with the best writers of the world. At the
                  time of special occations various writers are available at our
                  place. So it's a great opportunity for our readers to get in
                  touch of best writers.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/gyWS6BF/books-5615562-1920.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="w-2/3">
                <h1 className="mb-5 text-8xl gradient font-bold">
                  Best Friend
                </h1>
                <p className="mb-5 text-2xl">
                  Books are cherished companions, offering solace, inspiration,
                  and knowledge. They provide an escape into different worlds
                  and perspectives, offering comfort and guidance during both
                  challenging and celebratory moments.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/PzJCbjz/library-7720589-1920.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="w-2/3">
                <h1 className="mb-5 text-8xl gradient font-bold">
                  Boosts Career
                </h1>
                <p className="mb-5 text-2xl">
                  Books are powerful tools for career advancement, offering
                  valuable insights, knowledge, and skills essential for
                  professional growth. They provide practical advice,
                  strategies, and inspiration to navigate the workplace
                  effectively and achieve career goals.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/T1M22Ts/a-book-5178205-1920.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="w-2/3">
                <h1 className="mb-5 text-8xl gradient font-bold">Fly Now</h1>
                <p className="mb-5 text-2xl">
                  It's the best time to fly in the sky of knowledge. Feel the
                  open sky of happiness.Let's make a bond to fly.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
