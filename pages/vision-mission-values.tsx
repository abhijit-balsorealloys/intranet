import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import Vision from "components/layouts/Vision";
import List from "components/layouts/List";

export default function Page() {
    return (
        <>
            <Head>
                <title>{`Vision Mission Values - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader title="Vision Mission Values" breadcrumbs={[
                { name: 'About', link: '#' },
                { name: 'Vision Mission Values', link: '/vision-mission-values' },
            ]} />
            <SidebarContent navFor="About Us">
                <div className="container section-vision">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bg-white p-5">
                                <div className='d-flex align-items-center mb-4'>
                                    <div className='mr-3'>
                                        <img src="/images/Values.jpg" alt="Values" width={60} height={60} />
                                    </div>
                                    <h3 className="text-uppercase font-weight-bold mb-0" style={{ letterSpacing: "2px" }}>
                                        Values
                                    </h3>
                                </div>
                                <ul className="m-0 p-0">
                                    <li className="list-unstyled">
                                        <div className="text-uppercase font-weight-bold" style={{ fontSize: "16px" }}>
                                        Excellence
                                        </div>
                                        <div className="text">We achieve key deliverables by focusing on quality and growth, with emphasis on sustainable products and  technologies.</div>
                                    </li>
                                    <li className="list-unstyled">
                                        <div className="text-uppercase font-weight-bold" style={{ fontSize: "16px" }}>
                                        Agility
                                        </div>
                                        <div className="text">We attain our goals by being adaptive and resilient.</div>
                                    </li>
                                    <li className="list-unstyled">
                                        <div className="text-uppercase font-weight-bold" style={{ fontSize: "16px" }}>
                                        Safety
                                        </div>
                                        <div className="text">We provide a safe working environment for the well-being of our people.</div>
                                    </li>
                                    <li className="list-unstyled">
                                        <div className="text-uppercase font-weight-bold" style={{ fontSize: "16px" }}>
                                        Integrity
                                        </div>
                                        <div className="text">We act ethically and take responsibility.</div>
                                    </li>
                                    <li className="list-unstyled">
                                        <div className="text-uppercase font-weight-bold" style={{ fontSize: "16px" }}>
                                        Efficiency
                                        </div>
                                        <div className="text">We operate in the most effective way and continuously create value for all stakeholders.</div>
                                    </li>
                                    <li className="list-unstyled">
                                        <div className="text-uppercase font-weight-bold" style={{ fontSize: "16px" }}>
                                            Respect
                                        </div>
                                        <div className="text">We value our relationships with all stakeholders, based on communication, transparency, co-operation, trust and mutual understanding.</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                                <div className="bg-white p-5">
                                    <div className='d-flex align-items-center mb-4'>
                                        <div className='mr-3'>
                                            <img src="/images/Vision.jpg" alt="Vision" width={60} height={60} />
                                        </div>
                                        <h3 className="text-uppercase font-weight-bold mb-0" style={{ letterSpacing: "2px" }}>
                                            Vision
                                        </h3>
                                    </div>
                                    <div>By 2030, to become one of the world’s top five select Metal & Ferroalloys producers, enabling value creation for all stakeholders by adopting sustainable pathways, driven by organizational Excellence.</div>
                                </div>
                                <div className="bg-white p-5 mt-5">
                                    <div className='d-flex align-items-center mb-4'>
                                        <div className='mr-3'>
                                            <img src="/images/Mission.jpg" alt="Mission" width={60} height={60} />
                                        </div>
                                        <h3 className="text-uppercase font-weight-bold mb-0" style={{ letterSpacing: "2px" }}>
                                            Mission
                                        </h3>
                                    </div>
                                    <div>We will achieve our Vision by:
                                    <div className="blue-line mt-2 mb-4"></div>

                                     <div className="mb-5">

                                     <List  data={[
                                      <>
                                      Embedding sustainable and transformative practices,
                                      </>,
                                      <>
                                      Fostering an environment that seeks growth, diversification, and innovation,
                                      </>,
                                      <>
                                      Building a competitive edge through the adoption of new technologies, digitalization, and the optimization of resources,
                                      </>,
                                      <>
                                      Having an agile & resilient workforce,
                                      </>,
                                      <>
                                      Differentiating ourselves in our products, services, ethics, work culture, and societal outreach
                                      </>
                                       ]}
                                        />
                                </div>
                                 </div>
                                </div>
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
					border-left: 10px solid #ef712e;
					box-shadow: 1px 1px 3px 1px #f1f1f1;
					border-radius: 0 10px 10px 0;
				}
			`}</style>
            </SidebarContent>
            <Footer />
        </>
    );
}
