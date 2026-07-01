import { useState } from "react";

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

import { FaExpand } from "react-icons/fa";

function ImageGallery({ images, title }) {
  const [fullscreen, setFullscreen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const openFullscreen = (image) => {
    setActiveImage(image);
    setFullscreen(true);
  };

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
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        mousewheel
        zoom
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="rounded-2xl overflow-hidden shadow-2xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>

            <div className="swiper-zoom-container relative">

              <img
                src={image}
                alt={`${title} ${index + 1}`}
                onClick={() => openFullscreen(image)}
                className="
                    w-full
                    h-[420px]
                    lg:h-[480px]
                    object-cover
                    rounded-2xl
                    cursor-pointer
                    transition
                    duration-500
                    hover:scale-105
                "
                />

              <button
                onClick={() => openFullscreen(image)}
                className="
                  absolute
                  top-4
                  right-4
                  bg-black/70
                  p-3
                  rounded-full
                  hover:bg-blue-600
                  transition
                "
              >
                <FaExpand />
              </button>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* FULLSCREEN MODAL */}

      {fullscreen && (
        <div
          className="
            fixed
            inset-0
            bg-black/90
            z-[9999]
            flex
            items-center
            justify-center
            p-8
          "
          onClick={() => setFullscreen(false)}
        >
          <img
            src={activeImage}
            className="
              max-w-full
              max-h-full
              rounded-xl
            "
          />
        </div>
      )}
    </>
  );
}

export default ImageGallery;