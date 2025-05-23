import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Link from "next/link";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import Zoom from 'react-medium-image-zoom';

export default function Page() {
    return (
        <>
            <Head>
                <title>{`Events - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader title="Events" breadcrumbs={[
                { name: 'Media', link: '#' },
                { name: 'Events', link: '' },
            ]} />
            <SidebarContent navFor="Media">
                <div className="row">
                    <div className="col-sm-12">
                        <fieldset className="article-box-border">
                            <h3> Balasore Alloys Ltd. Celebrates the 48th National safety week - 2019 under "Cultivate and Sustain a Safety Culture for Building Nation" Theme</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/pic.jpg" className="w-100 max-width-100 mb-3" height="350" alt="" />
                                    </Zoom>
                                    <p><span className="text-primary text-center"><h6>Date: 11th March 2019</h6></span></p>
                                </div>
                                <div className="col-sm-6">

                                    <p>In a motion to efficiently join conscious peer industries and institutions concerned in а national movement towards promoting safety awareness at and beyond workplace, Balasore Alloys Ltd. organized a weeklong observation of the 48 National Safety Week - 2019 in March.Safety flag hosting and safety oath taking ceremony made a reference to Balasore Alloys Ltd.'s input to the widespread campaigning for industrial safety. A quiz programme and safety poster and slogan competitions in the company featured the “Cultivate and Sustain a Safety Culture for Building Nation” theme of the event this year. Children were encouraged to learn about road and home safety by expressing their creative ideas in a poster competition. Employees took active participation in safety awareness training programmes on emergency preparedness and mock drill, fire extinguisher use, near miss identification and reporting. Mr. D. K. Nath, Director of Operations addressed the team with emphasis on the importance of compliance with safety standards on the productions site. </p>
                                </div>
                                <div className="col-sm-12">

                                    <p> Occupational health is treated among the core values pursued by the Orissa-based Ferrochrome producer. The company is determined to establish prevention culture by providing regular training  to occupational health and safety practices with new improved safe methods and technology, Mr. Sandeep Das /Deputy Manager of Safety/ explained.</p>
                                    <p><strong>Text FOR LINKEDIN</strong></p>
                                    <p>A rich programme on industrial safety  marking the #48NationalSafetyWeek was organized at Balasore Alloys Ltd. Amid great interest in joining the event, we saw professionals representing their departments and teaming up with colleagues from various other offices in the Orissa based ferrochrome company. Winners were celebrated by the competent assessment of a special jury at the closing ceremony in Balasore Alloys Ltd. on 11.03.2019. "Occupational health is treated among the core values pursued by our company. We are pleased to have successfully hosted another weeklong programme in marking the importance of safety on our production site", D. K. Nath, Director of Operations comments.</p>
                                </div>
                            </div>
                            <p className="text-primary text-right"><h5>Published On Date: 11th March 2019</h5></p>
                        </fieldset>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Experts from Balasore Alloys Ltd. Joined the Vibrant Gujarat Global Summit 2019</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Balasore Alloys Ltd. took part in the Vibrant Gujarat Global Summit 2019 which was inaugurated by Hon’ble Prime Minister of India on 17 January 2019. Heads of States, business and industrial professionals were in attendance at the event joined by Balasore Alloys Ltd.'s  professionals Sankar Narayan (GM Marketing), Pravat Samal (Executive Marketing) and Aditya Bhaumik (Executive Marketing).</p>
                                    <p>Balasore Alloys Ltd. delegates attended discussions on nationally and globally essential socio-economic topics between 18-Jan-2019 and 22-Jan-2019.</p>
                                    <p>Mr. Nitinbhai Patel, Deputy Chief Minister of Gujarat explained that the 9th Vibrant Gujarat Summmit "epitomized the commitment to shaping a New India".</p>
                                </div>

                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/vivrant.jpg" className="w-100 mb-3" height={350} alt="" />
                                    </Zoom>
                                    <p><span className="text-primary text-center"><h6>Date: 18th January 2019</h6></span></p>
                                </div>
                                <div className="col-sm-12">
                                    <p>"16 years since this event was established, today we believe it is one of the essential  international business platforms that genuinely enhances productive brainstorming and experience sharing on high professional level and is logically on our agenda with the networking opportunities it facilitates", Mr. Sankar Narayan said. </p>
                                </div>
                            </div>
                            <p className="text-primary text-right"><h5>Published On Date: 18th January 2019</h5></p>
                        </fieldset>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>"Quality Month" traditionally celebrated by BAL in November</h3>
                            <div className="blue-line mt-2 mb-4"></div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/Quality-month.jpg" className="w-100 mb-4" height="350" alt="" />
                                    </Zoom>
                                    <p><span className="text-primary text-center"><h6>Date: 23rd November 2018</h6></span></p>
                                </div>
                                <div className="col-sm-6">
                                    <p>“Quality Month” has been declared open on 02.11.2018 at a flag hoisting ceremony and speech on Kaizen by Mr. Dhiren Kumar Nath (Director of Operations).</p>
                                    <p>The monthlong event at Balasore Alloys Ltd. will be marked for a third year in a row with a series of sessions at overall plant area which will be coordinated by theme leaders. The event will culminate in innovative and cost efficient improvements presentation and award ceremony at the end of the month.</p>
                                    <p>Excelling in process and product quality is subject to an integrated approach from planning to control in the company which is certified under ISO 9001:2015 (QMS), ISO 14001:2015 (EMS), OHSAS 18001:2007, ISO 50001:2011 (EnMS), ISO 55001:2014 (AMS) and SA8000:2015.</p>
                                </div>
                                <div className="col-sm-12">
                                    <p>“Quality Assurance at BAL encompasses several steps to be undertaken from inputs to dispatch where the final inspection takes care of chemical composition and required size of the product.・, RK Nanda, Head of Quality states. Every division within the company would therefore aim at ensuring it’s a “quality month” spent every single month of BAL’s integrated production process, Mr. Dhiren Nath stresses on the continuous nature of quality assurance. He  explains that innovative improvements invented by own staff on purpose of creating a safer and increasingly productive working ambient should be encouraged.</p>
                                    <p>In line with Balasore Alloys Ltd. attempt to showcase some of the key stages in quality assurance adopted by the company, our laboratory is set to welcome local students on occasion of the World Laboratory Day in April. Young scientists will be able to achieve practical understanding on chemical testing process of various raw materials and Ferro chrome within a workshop to be conducted by the laboratory professionals at Balasore Alloys Ltd.</p>
                                </div>

                            </div>
                            <p className="text-primary text-right"><h5>Published On Date: 23rd November 2018</h5></p>
                        </fieldset>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Safety Flag Hoisted at Kaliapani Chromite Mines in honor of the 39th Annual Mines Safety Week</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Under the agies of Directorate General of Mines Safety, Bhubaneswar Region, the 39th Annual Mines Safety Week 2018-19 was officially declared open on 19 November 2018 at Kaliapani Chromite Mines of Balasore Alloys Ltd. in the presence of all sections of the mines. Mr. RR Kumar, President (Mines) officiated the opening ceremony which started with the traditional safety flag hoisting. Employees received specially designed safety badges and were invited to share oath taking in symbolic expression of loyalty and commitment to adherence to safety standards as mandatory prerequisite of the company’s prevention culture on all working places. Mines officials and experts took the floor to express thoughts on safety. The official opening ceremony was ended with a speech delivered by President (Mines) who addressed the integrity of mines specialists of Balasore Alloys Ltd. on the importance of adhering to safety norms of the Directorate General of Mines Safety. He guided the mining team about personal and operational safety. “It is a matter of everyone’s personal responsibility and culture that starts at home”, Mr. RR Kumar underlined.</p>
                                </div>
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/safety-week.jpg" className="w-100 mb-4" height="350" alt="" />
                                    </Zoom>
                                    <p><span className="text-primary text-center"><h6>Date: 20th November 2018</h6></span></p>
                                </div>

                                <div className="col-sm-12">
                                    <p>A weeklong programme is scheduled to mark Mines Safety Week 2018-19 at Balasore Alloys Ltd. including on-site inspections, exhibition stall inauguration and prizes distribution to distinguished in house performers. The event is marked by mines personnel of Balasore Alloys Ltd. in promotion of professional practices for human and environmental safety in mining.</p></div>


                            </div>
                        </fieldset>
                    </div>
                </div>
            </SidebarContent>
            <Footer />
        </>
    );
}
