import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

const data = [
  {
    id: 1,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias hic ab quibusdam atque voluptatum",
    title: "Earnest achiever",
    avatar: AVTR1,
  },
  {
    id: 2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias hic ab quibusdam atque voluptatum",
    title: "Earnest achiever",
    avatar: AVTR2,
  },
  {
    id: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias hic ab quibusdam atque voluptatum",
    title: "Earnest achiever",
    avatar: AVTR3,
  },
  {
    id: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias hic ab quibusdam atque voluptatum",
    title: "Earnest achiever",
    avatar: AVTR4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What people say about me</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, title, review, avatar }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={`Avatar ${id}`} />
            </div>
            <h5 className="client__name">{title}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
