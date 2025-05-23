/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";

const HeroSlider = () => {
	return (
		<div className="hero-slider">
			<Swiper
				autoplay
				// centeredSlides={true}
				slidesPerView="auto"
				spaceBetween={25}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 25,
					},
					768: {
						slidesPerView: 1,
						spaceBetween: 25,
					},
					1024: {
						slidesPerView: 1,
						spaceBetween: 25,
					},
				}}
				loop={false}
				pagination={false}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="expert-help-boxes low-radious"
			>
				<SwiperSlide className="box">
					<div className="position-relative">
						<img className="w-100" src="/images/banner/banner1.jpg" alt="Banner Image 1" />
					</div>
				</SwiperSlide>
				<SwiperSlide className="box">
					<div className="position-relative">
						<img className="w-100" src="/images/banner/banner2.jpg" alt="Banner Image 2" />
					</div>
				</SwiperSlide>
				<SwiperSlide className="box">
					<div className="position-relative">
						<img className="w-100" src="/images/banner/banner3.jpg" alt="" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default HeroSlider;
