import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import './Header.scss';
import 'swiper/css/pagination';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Swiper
          className="header__swiper"
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          loop
          pagination
          modules={[Navigation, Pagination, A11y]}
        >
          <SwiperSlide data-swiper-autoplay="5000">
            <img
              src="img\banner-phones.jpg"
              alt="phones"
              className="header__swiper-img"
            />
          </SwiperSlide>
          <SwiperSlide data-swiper-autoplay="5000">
            <img
              src="img\banner-accessories.jpg"
              alt="accessories"
              className="header__swiper-img"
            />
          </SwiperSlide>
          <SwiperSlide data-swiper-autoplay="5000">
            <img
              src="img/banner-tablets.jpg"
              alt="tablets"
              className="header__swiper-img"
            />
          </SwiperSlide>

          <img
            src="./icon/Left.svg"
            alt="prev"
            className="header__swiper-button header__swiper-button-prev"
          />

          <img
            src="./icon/Right.svg"
            alt="next"
            className="header__swiper-button header__swiper-button-next"
          />
        </Swiper>
      </div>
    </header>
  );
};
