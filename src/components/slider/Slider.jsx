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
    <div className="slider">
      <div className="slider-wrapper">
        <div className="slider-header">
          <div className="slider-title">
            <h2>{props.title}</h2>
            <Link to={'/main-course'}>SHOW ALL</Link>
          </div>
          {props.dish.length > 2 && (
            <div className="slider-header-buttons">
              <button className="arrow-btn" onClick={prevo}>
                <LeftArrow className="left-btn"/>
              </button>
              <button className="arrow-btn" onClick={nexto}>
                <RightArrow className="right-btn"/>
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
    </div>
  );
}
