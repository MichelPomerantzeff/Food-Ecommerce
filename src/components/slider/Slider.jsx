// Swiper styles
import "swiper/swiper-bundle.min.css";
import "./Slider.css";

import { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowBackIosRounded as LeftArrow, ArrowForwardIosRounded as RightArrow } from "@mui/icons-material";

import { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Slider(props) {

  const [swiper, setSwiper] = useState(null);

  const nexto = () => {
    swiper.slideNext();
  };
  const prevo = () => {
    swiper.slidePrev();
  };

  return (
      <div className="max-w-[95vw] md:w-[90vw] lg:w-[1200px] m-auto">
        <div className="flex justify-between p-1">
          <div className="flex gap-2 items-center">
            <h2 className="text-lg font-bold">{props.title}</h2>
            <Link to={'/main-course'}>
              <span className="text-xs text-blue-400 font-semibold hover:underline">SHOW ALL</span>
            </Link>
          </div>
          {props.dish.length > 2 && (
            <div className="flex gap-4">
              <button className="group border-2 border-gray-300 rounded px-2 hover:border-blue-400" onClick={prevo}>
                <LeftArrow className="scale-[.7] group-hover:text-blue-400"/>
              </button>
              <button className="group border-2 border-gray-300 rounded px-2 hover:border-blue-400" onClick={nexto}>
                <RightArrow className="scale-[.7] group-hover:text-blue-400"/>
              </button>
            </div>
          )}
        </div>

        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={2}
          onSwiper={(s) => setSwiper(s)}
        >
          {props.dish.map((d) => {
            return (
              <SwiperSlide key={d.id}>
                <Card dish={d} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
  );
}
