// Swiper styles
import "swiper/swiper-bundle.min.css";
import "./Slider.css";

import { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Slide from "./Slide";

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
        <div className="slider-heading-wrapper">
          <div className="slider-heading">
            <h2>{props.title}</h2>
            <a href="">SHOW ALL</a>
          </div>
          {props.dish.length > 2 && (
            <div className="slider-buttons">
              <button className="left-btn" onClick={prevo}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="right-btn" onClick={nexto}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          )}
        </div>

        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={2}
          onSwiper={(s) => setSwiper(s)}
        >
          {props.dish.map((d) => {
            return (
              <SwiperSlide key={d.id}>
                <Slide dish={d}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
