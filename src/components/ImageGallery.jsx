import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
  Autoplay,
  Zoom,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

import {
  FaExpand,
  FaTimes,
} from "react-icons/fa";

function ImageGallery({ images, title }) {
  const [fullscreen, setFullscreen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const openFullscreen = (image) => {
    setActiveImage(image);
    setFullscreen(true);
  };

  const closeFullscreen = () => {
    setFullscreen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeFullscreen();
      }
    };

    if (fullscreen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreen]);

  return (
    <>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Keyboard,
          Mousewheel,
          Autoplay,
          Zoom,
        ]}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
        }}
        mousewheel
        zoom={{
          maxRatio: 3,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        className="overflow-hidden rounded-3xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container group relative overflow-hidden rounded-3xl">

              <img
                src={image}
                alt={`${title} ${index + 1}`}
                onClick={() => openFullscreen(image)}
                className="
                  h-[340px]
                  w-full
                  cursor-pointer
                  rounded-3xl
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                  md:h-[420px]
                  lg:h-[460px]
                "
              />

              {/* Gradient Overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Expand Button */}

              <button
                onClick={() => openFullscreen(image)}
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-slate-900/80
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-teal-500/20
                  hover:bg-teal-600
                  hover:shadow-lg
                  hover:shadow-teal-500/30
                "
              >
                <FaExpand />
              </button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* FULLSCREEN */}

      {fullscreen && (
        <div
          onClick={closeFullscreen}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/95
            p-6
            backdrop-blur-md
            animate-fadeIn
          "
        >

          {/* Close */}

          <button
            onClick={closeFullscreen}
            className="
              absolute
              right-8
              top-8
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-slate-900/80
              text-white
              transition-all
              duration-300
              hover:bg-red-500
            "
          >
            <FaTimes />
          </button>

          <img
            src={activeImage}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[90vh]
              max-w-[92vw]
              rounded-3xl
              object-contain
              shadow-[0_20px_60px_rgba(20,184,166,.15)]
            "
          />

        </div>
      )}
    </>
  );
}

export default ImageGallery;