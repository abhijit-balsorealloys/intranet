import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const photos = ["/images/emp_photo/profile-5.jpeg", "/images/emp_photo/profile-6.jpeg", "/images/emp_photo/profile-7.jpeg","/images/emp_photo/profile-5.jpeg", "/images/emp_photo/profile-6.jpeg", "/images/emp_photo/profile-7.jpeg"];
const photos1 = ["/images/emp_photo/profile-1.jpeg", "/images/emp_photo/profile-2.jpeg", "/images/emp_photo/profile-3.jpeg","/images/emp_photo/profile-4.jpeg","/images/emp_photo/profile-1.jpeg", "/images/emp_photo/profile-2.jpeg", "/images/emp_photo/profile-3.jpeg","/images/emp_photo/profile-4.jpeg"];

const Employee = () => {
	return (
		<div className="container section-profile">
			
           <div className="row">
			<div className="col-sm-6">
				 <h6>New Joinee</h6>
				 <div className="blue-line mt-2 mb-4"></div>
			<Swiper
				autoplay
				slidesPerView="auto"
				spaceBetween={15}
				breakpoints={{
					640: {
						slidesPerView: 4,
						spaceBetween: 15,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 15,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 15,
					},
				}}
				loop
				pagination={false}
				navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				className="expert-help-boxes low-radious"
			>
				{photos.map((i, k) => (
					<SwiperSlide key={k} className="box">
						<div className="overflow-hidden d-flex justify-content-center align-items-center p-2 bg-white" style={{ border: "1px solid #ddd", borderRadius: "10px", marginBottom: '1px' }}>
							<img className="profile-image1" src={i} alt="" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			</div>
			<div className="col-sm-6 new-join">
           <h6>Upcoming Birthdays</h6>
				 <div className="blue-line mt-2 mb-4"></div>
                <Swiper
				autoplay
				slidesPerView="auto"
				spaceBetween={15}
				breakpoints={{
					640: {
						slidesPerView: 4,
						spaceBetween: 15,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 15,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 15,
					},
				}}
				loop
				pagination={false}
				navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				className="expert-help-boxes low-radious"
			>
				{photos1.map((i, k) => (
					<SwiperSlide key={k} className="box">
						<div className="overflow-hidden d-flex justify-content-center align-items-center p-2 bg-white" style={{ border: "1px solid #ddd", borderRadius: "10px", marginBottom: '1px' }}>
							<img className="profile-image" src={i} alt="" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			</div>
			</div>
		</div>
	);
};

export default Employee;
