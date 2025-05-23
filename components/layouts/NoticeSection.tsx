import { appName } from "app-config";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Zoom from 'react-medium-image-zoom';


const NoticeSection = () => {
	return (
		<>
			{/* <ScrollAnimation animateIn='slideInUp' animateOut='slideInDown'> */}
				<div className="container section-notice">
			
				<div className="row">
					<div className="col-sm-4 section-csr">
					<h6>CSR</h6>
					<div className="blue-line mt-2 mb-4"></div>
				
			<Swiper
				autoplay slidesPerView="auto" spaceBetween={10} breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					1024: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
				}} loop={false} pagination={false} navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				className="expert-help-boxes low-radious">
					<SwiperSlide>	
					<div className="csr">
						<Zoom>
					<img src="/images/csr/csr1.jpg"></img>
					</Zoom>
					</div>
					</SwiperSlide>
					<SwiperSlide>	
					<div className="csr">
					<Zoom>
					<img src="/images/csr/csr2.jpg"></img>
					</Zoom>
					</div>
					</SwiperSlide>
					<SwiperSlide>	
						<div className="csr">	
							<Zoom>
					<img src="/images/csr/csr3.jpg" ></img>
					</Zoom>	
					</div>
					</SwiperSlide>	
					<SwiperSlide>	
						<div className="csr">	
					<Zoom>
					<img src="/images/csr/csr4.jpg"></img>
					</Zoom>
					</div>
					</SwiperSlide>		
			        </Swiper>
					</div>
			

				<div className="col-sm-3 board">
					<h6>Notice Board</h6>
					<div className="blue-line mt-2 mb-4"></div>
						<p>Holiday Announcement: 25-May</p>
						<p>Maintenance Shutdown: 20-May</p>
						<p>Online Training: Register by 18-May</p>
					</div>
						<div className="col-sm-4 emp-award">
							<h6>Employee Award</h6>
							<div className="blue-line mt-2 mb-4"></div>
							<Swiper
				autoplay slidesPerView="auto" spaceBetween={10} breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					1024: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
				}} loop={false} pagination={false} navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				className="expert-help-boxes low-radious">
					<SwiperSlide>	
					<div className="emp-awd">
					<Zoom>
					<img src="/images/award/award.jpeg"></img>
					</Zoom>
					</div>
					</SwiperSlide>
					<SwiperSlide>	
					<div className="emp-awd">
					<Zoom>
					<img src="/images/award/award2.jpg"></img>
					</Zoom>
					</div>
					</SwiperSlide>
					<SwiperSlide>	
						<div className="emp-awd">	
					<Zoom>
					<img src="/images/award/award3.jpeg" ></img>
					</Zoom>	
					</div>
					</SwiperSlide>		
			        </Swiper>
							
						</div>
                    </div>
				</div>
				
					
				<style jsx>{`
				li {
					padding-bottom: 15px;
				}
				.text {
					color: antiquewhite;
				}
			`}</style>
			{/* </ScrollAnimation> */}

		</>
	);
};

export default NoticeSection;
