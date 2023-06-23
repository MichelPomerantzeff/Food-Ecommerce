import { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/swiper-bundle.min.css";
import "./Slider.css";

import { useState } from "react";

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
            <a href="">VER TODOS</a>
          </div>
          <div className="slider-buttons">
            <button className="left-btn" onClick={prevo}>L</button>
            <button className="right-btn" onClick={nexto}>R</button>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={2}
          onSwiper={(s) => setSwiper(s)}
          // pagination={{clickable: true}}
          // onSlideChange={() => console.log("slide change")}
        >
          {props.dish.map((d) => {
            return (
                <SwiperSlide key={d.id}>
                  <div className="slider-item">
                    <div className="slider-image">
                      <img src={d.image} alt="Salmple 1" />
                    </div>
                    <div className="slider-item-description">
                      <h2>{d.title}</h2>
                      <span>{d.description}</span>
                    </div>
                    <div className="slider-item-bottom-line">
                      <span className="price">${d.price}</span>
                      <span className="weight">{d.weight}</span>
                      <div className="add-button">
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
