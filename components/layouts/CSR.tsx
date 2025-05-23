/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Parallax } from 'react-parallax';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
	{ img: '/images/csr/children.svg', name: 'Children’s Welfare & Education' },
	{ img: '/images/csr/feminine.svg', name: 'Women Empowerment' },
	{ img: '/images/csr/flood.svg', name: 'Disaster Relief' },
	{ img: '/images/csr/group.svg', name: 'Community Infrastructure Creation' },
	{ img: '/images/csr/healthcare.svg', name: 'Quality Health care' },
	{ img: '/images/csr/running.svg', name: 'Sports and Culture' },
	{ img: '/images/csr/skill.svg', name: 'Skill Development' },
	{ img: '/images/csr/water.svg', name: 'Drinking Water, Sanitation, & Environment' },
	{ img: '/images/csr/watering-plants.svg', name: 'Agriculture & Allied Sectors' },
];


const CSR = () => {
	return (
		<Parallax blur={0} bgImage="/images/csr-bg.jpg" bgImageAlt="the cat" strength={500}>
			<div className="csr-container">
				<div style={{ zIndex: '1' }} className="position-relative container-fluid text-white py-5 ">
					<div className="row">
						<div className="col-md-4">
							<h1 className="mb-0">Corporate Social Responsibility</h1>
							<div className="blue-line mt-2 mb-4"></div>
							<h3>Community Development and sustainability are at the core of everything we do.</h3>

						</div>
						<div className="col-md-8">
							<div>
								<p>BAL’s CSR Policy is based on sustainable development and inclusive growth. BAL is working across its business operations to encourage sustainable communities. We believe a Sustainable Community is one that:</p>
								<p>Enjoys trusting stakeholder relationships in an inclusive environment which treats all community members equally and this is achieved through continuous strategic engagement </p>
								<p>Enjoys sustainable local economy that offers productive employment opportunities and good economic returns to its members in synergy with the principles of environmental sustainability and workforce localisation</p>
								<p>Enjoys widening access to social infrastructure, such as for example water, sanitation, and education.</p>
							</div>
							<div>
								<Link href={"/csr"} passHref>
									<a className="blue-btn text-uppercase btn">
										Read More <HiOutlineArrowNarrowRight size={20} className="ml-2" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					{/* <h3 className="mt-5 mb-5">Key Thematic Areas of CSR Interventions</h3>  */}
					{/*	<Swiper
					autoplay
					slidesPerView="auto"
					spaceBetween={25}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 25,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 25,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 25,
						},
					}}
					loop
					pagination={false}
					navigation={false}
					modules={[Autoplay, Pagination, Navigation]}
					className="low-radious"
				>
					{data.map((i, k) => (
						<SwiperSlide key={k} className="box">
							<div className="overflow-hidden d-flex justify-content-center align-items-center flex-column p-2 bg-white" style={{ border: "1px solid #ddd", borderRadius: "10px", height: '200px' }}>
								<img style={{ height: "70px" }} src={i.img} alt="" />
								<div style={{ fontSize: '18px' }} className="mt-3 text-dark text-center font-weight-bold">{i.name}</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>  */}
				</div>

			</div>
		</Parallax>
	);
};

export default CSR;
