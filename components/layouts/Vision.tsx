import ScrollAnimation from 'react-animate-on-scroll';
import List from "components/layouts/List";

const Vision = () => {
	return (
		<div>
			<div className="container section-vision">
				<div className="row">
					<div className="col-md-6">
						<ScrollAnimation animateIn='slideInLeft'>
							<div className="bg-white p-5">
								<div className='d-flex align-items-center'>
									<div className='mr-3'>
										<img src="/images/Values.jpg" alt="Values" width={60} height={60} />
									</div>
									<h5>Values</h5>
									<hr />
								</div>
								
								<ul className="m-0 p-0">
									
									<li className="list-unstyled">
										<h6>
											Excellence
										</h6>
										<div className="text-vision">We achieve key deliverables by focusing on quality and growth, with emphasis on sustainable products and  technologies.</div>
									</li>
									<li className="list-unstyled">
										<h6>
										Agility
										</h6>
										<div className="text-vision">We attain our goals by being adaptive and resilient.</div>
									</li>
									<li className="list-unstyled">
										<h6>
										Safety
										</h6>
										<div className="text-vision">We provide a safe working environment for the well-being of our people.</div>
									</li>
									
									<li className="list-unstyled">
										<h6>
											Integrity
										</h6>
										<div className="text-vision">We act ethically and take responsibility.</div>
									</li>
									<li className="list-unstyled">
										<h6>
										  Efficiency
										</h6>
										<div className="text-vision">We operate in the most effective way and continuously create value for all stakeholders.</div>
									</li>
									<li className="list-unstyled">
										<h6>
											Respect
										</h6>
										<div className="text-vision">We value our relationships with all stakeholders, based on communication, transparency, co-operation, trust and mutual understanding.</div>
									</li>
								</ul>
							</div>
						</ScrollAnimation>
					</div>
					<div className="col-md-6">
						<div className="d-flex justify-content-center align-items-center h-100 flex-column">
							<ScrollAnimation animateIn='slideInRight'>
								<div className="bg-white p-5">
									<div className='d-flex align-items-center mb-4'>
										<div className='mr-3'>
											<img src="/images/Vision.jpg" alt="Vision" width={60} height={60} />
										</div>
										<h5>Vision</h5>
									</div>
									<div className="text-vision">By 2030, to become one of the world’s top five select Metal & Ferroalloys producers, enabling value creation for all stakeholders by adopting sustainable pathways, driven by organizational Excellence.</div>
								</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn='slideInRight'>
								<div className="bg-white p-5 mt-5">
									<div className='d-flex align-items-center mb-4'>
										<div className='mr-3'>
											<img src="/images/Mission.jpg" alt="Mission" width={60} height={60} />
										</div>
										<h5>
											Mission
										</h5>
									</div>
									<div className="text-vision">We will achieve our Vision by:
									<List
                data={[
                  <>
                   Embedding sustainable and transformative practices
                  </>,
                  <>
                    Fostering an environment that seeks growth, diversification, and innovation
                  </>,
                  <>
                    Building a competitive edge through the adoption of new technologies, digitalization, and the optimization of resources
                  </>,
                  <>
                    Having an agile & resilient workforce
                  </>,
                  <>
                    Differentiating ourselves in our products, services, ethics, work culture, and societal outreach
                  </>

                ]}
              />
									</div>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				li {
					padding-bottom: 15px;
				}
				.text {
					color: #555;
				}
				.bg-white {
					border-left: 10px solid #008edb;
					box-shadow: 1px 1px 3px 1px #f1f1f1;
					border-radius: 0 10px 10px 0;
				}
			`}</style>
		</div>
	);
};

export default Vision;
