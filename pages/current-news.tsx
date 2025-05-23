/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Link from "next/link";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import List from "components/layouts/List";
import Zoom from 'react-medium-image-zoom';

export default function Page() {
    return (
        <>
            <Head>
                <title>{`News - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader title="News" breadcrumbs={[
                { name: 'Media', link: '#' },
                { name: 'News', link: '' },
            ]} />
            <SidebarContent navFor="Media">
                <div className="row">
                    <div className="col-sm-12">
                        <fieldset className="article-box-border">
                            <h3>Balasore Alloys wins Greentech CSR Award 2018</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/pics-Snagram.jpg" className="w-100 max-width-100 mb-3" height="350" alt="Pics Sangram" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-6">
                                    <p>Jan 26, 2018: India's leading Ferro Chrome manufacturer Balasore Alloys Limited, operating under the ISPAT Brand name, has been conferred with the prestigious Greentech Silver CSR Award 2018.</p>
                                    <p>Jan 26, 2018: India’s leading Ferro Chrome manufacturer Balasore Alloys Limited, operating under the ISPAT Brand name, has been conferred with the prestigious <strong>Greentech Silver CSR Award 2018</strong> for its successful safe drinking water, sanitation and hygiene project in Orissa’s Chirgunia Village in Jajpur District. </p>
                                    <p>The Greentech Foundation, a non-profit organization recognizes and honours outstanding companies for their CSR contribution, which are capable of demonstrating the highest level of commitment to environmental sustainability and improving the life of the community. Over 50 top Indian companies participated in the CSR category which consisted of an application process followed by jury rounds.</p>
                                </div>
                                <div className="col-sm-12">

                                    <p>On behalf of Balasore Alloys, the CSR Silver Award 2018 was received by Sangram Mohanty, Head CSR, at a glittering Award ceremony at Hotel Panaji, Goa on February 26, 2019 amidst who’s who of India’s Corporate world , CEOs and environmentalist. The award was conferred in the presence of the following Chief Guests: Mr Deepak Hota, CMD of BEML, Mr S.K Acharya, former CMD of Neveli Lignite Corporation Ltd and Ms Alka Mittal, Director HR at ONGC.</p>
                                    <p>“The reason why Balasore Alloys was conferred the CSR Silver Award 2018 is because the Company initiated a sustainable approach to implementing its safe drinking water projects within its health-hygiene-sanitation (WASH) programme and by adopting the Total Village Methodology (TVM). This has allowed Balasore Alloys to contribute to the implementation of the United Nations Sustainable Development Goals (UNSDG) by contributing to the transformation of the lives of 1440 residents at Chirgunia Village at Jajpur District, Orissa. Our WASH programme further serves to empower women who can now learn new skills supported by Balasore Alloys, such as tailoring to supplement their family income, rather than spend long hours collecting water ” said Anil Sureka, Managing Director, Balasore Alloys Ltd.</p>
                                    <p>“Balasore Alloys  has facilitated water supply to the Chirgunia village  community through pipeline network by constructing an overhead tank of 20,000 liters capacity and having 110 numbers of water access next door to  the community living in this area. Based on the WASH programme success story the Company is now replicating this model in neighboring villages, amongst them Rankia, Kohila and Kabata, and in the Balasore Alloys adopted village  of Baragaji in Jajpur District of Orissa ” he said.</p>
                                    <p>Expressing happiness on receiving the Award, Sangram Mohanty, Head CSR, said “This award is a recognition of our sincerity to change the life of our community by first building access to  clean and safe water with a planned distribution supply system, which is a fundamental right and a prerequisite for the realization of communal development. Today, the women, children and residents of Chirgunia Village no longer walk for miles to secure drinking water, nor do they suffer from frequent diarrheal disease and intestinal parasites. A key innovation aspect of this CSR WASH project initiated by the Company is its scalability and sustainability which can be replicated by other Grampanchayats”.</p>
                                    <p>“This award would not have been possible without the trust and support given to us by the villagers of Chirgunia and the local government authorities by agreeing to be a party in this transformative journey” he added.</p>
                                    {/* <p className="text-primary"><strong>Background:</strong></p>
                                        <p>Balasore Alloys Ltd India’s leading integrated Ferrochrome manufacturer having a sales turnover of Rs 1271 Crore wherein 80% of its product is meant for exports having manpower strength of over 985 personnel. The company uses some of the worlds best CSR standards and tracking system to evaluate corporate social performance including weight and scoring factors that reflects both the importance and as per rules of IBM.</p>
                                        <p className="text-primary"><strong>For Media contacts:</strong></p>

                                        <List
                                            data={[
                                                <p key={1}><>
                                                    <strong>Phone No :</strong> +91-7381695555, <br></br><strong> Email:</strong> sangram.mohanty@balasorealloys.com
                                                </></p>,
                                                <p key={2}><>
                                                    <strong>Phone No :</strong> +91-7381095829  , <br></br><strong> Email:</strong> manoranjan.sahoo@balasorealloys.com
                                                </></p>
                                            ]}
                                        /> */}
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    {/* <div className="col-sm-12 mt-2">
                            <fieldset className="article-box-border">
                                <h3>Balasore Alloys Ltd. met local businesses during the "Connect2Industries" Conference in Jaipur</h3>
                                <div className="blue-line mt-2 mb-4"></div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p>Mr. Nihar Ranjan Nayak, Officer from the Supply Chain Management department of Balasore Alloys Ltd., member of CII Odisa Zonal Council, Jaipur, joined the "Connect2Industries" conference organized by the Council on 24 February 2019. MSME Additional Chief Secretary explained that 50% of contribution to GDP and 45% exports of the state can be credited to Micro, Small & Medium Enterprises.</p>
                                        <p>The professional gathering stimulated efficient ideas and updates exchange between local Micro, Small & Medium Enterprises and delegates from large industries. "This is an appropriate platform for interaction with the nearby manufacturers. It helps understand the items created nearby our company and to meet the active interest from the side of MSMEs and startups whilst communicating particular expectations from our side", the delegate from the Orissa - based ferrochrome producer commented.</p>
                                    </div>

                                    <div className="col-sm-6">
                                        <img src="/images/DSC_2390.jpg" className="w-100" height={350} alt="" />
                                    </div>
                                    <div className="col-sm-12">
                                        <p>"Balasore Alloys Ltd., one of India’s leading integrated world class manufacturers of Ferro Alloys with a capacity to produce 160,000 MT of High Carbon Ferrochrome per year, has traditional market approach spanning across three continents due to high quality and consistency. It is the only company in the ferrochrome business globally to have DIN, a German Quality Conformity and JIS, a Japanese Quality Standard Certification", Mr. VK Jodhani, President of CRM in Balasore Alloys Ltd. commented. "We are open to discover shared spaces for positive impact between our productivity one side and innovative and competitive ideas from local MSMEs and startups on the other", Mr. Nayak added whilst appraising particular opportunities including regular spare and consumables to be manufactured and supplied by local businesses.</p>
                                    </div>
                                </div>
                            </fieldset>
                        </div> */}
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Chief Minister Naveen Pattnaik Bestowed The Sambad Corporate Excellence Silver Award Upon Balasore Alloys Ltd.</h3>
                            <div className="blue-line mt-2 mb-4"></div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/Sambad-pic4.jpg" className="w-100 max-width-100" height="350" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-6">
                                    <p>The Sambad Corporate Excellence Silver Award in large industries category was bestowed upon Balasore Alloys Ltd. at the "Brands of Odisha. Pride of India. Sambad Corporate Excellence Awards 2019" ceremony on 19.01.2019 in Bhubaneswar, Orissa State. Mr. Anil Sureka, Managing Director of the company received the prestigious award from the Chief Minister of Odisha Mr. Naveen Pattnaik in the presence of eminent personalities from industry and business. The Sambad Corporate Excellence Awards are instituted by Sambad Daily, part of Sambad Group to excel Orissa grown brands with distinguishable recognizability in the state and beyond.</p>
                                    <p>"In the age of market economy and globalization both challenges and opportunities for corporate sector are among us. Developing a brand, making it acceptable with continuous strive for value addition is a great challenge. In this context people who successfully develop respectable brands are inspirational leaders. I commend their efforts", Chief Minister Mr. Pattnaik said in his address. Over  the last several  years Orissa has been the name for itself in the area of business and industry, he highlighted.</p>
                                </div>
                                <div className="col-sm-12">
                                    <p>Mr. Anil Sureka expressed his delight over the recognition. He commented that Balasore Alloys, a major local employer has been a lead performer in provision of high carbon ferro chrome round the globe due to consistency in quality and high after sales service standards.</p>
                                </div>

                            </div>
                        </fieldset>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Balasore Alloys Ltd. in Active Cooperation on Cleanliness Awareness Campaign</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Balasore Alloys Ltd. has, in line with company's long-standing CSR strategy in "Youth development" category, subsequently introduced an awareness campaign bringing an intense focus on Barajaji, Chirigunja and Birsa Nagar Schools in January 2019. The campaign has involved on site practical activities such as cleaning school premises,   comprehensive debates with proactive involvement from students' side and open quizes on "Swachhta" /"Cleanliness"/. As Dr. Giri from Balasore Alloys Ltd. Medical Center pointed out, cleaning was one of the preventive mechanisms which should be applied as a preventive habit against a number of diseases including Dengue fever.</p>
                                    <p>"Swachhta" was encouraged as an effective behavior by Hon'ble Prime Minister, Shri Narendra Modi who called upon institutions towards supporting the Swachh Bharat achievement. “We believe that the awareness on ‘’SWACHHATA AMA DAITWA’’ is our joint responsibility.</p>
                                </div>
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/IMG-20190123.jpg" className="w-100 max-width-100" height="350" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-12">
                                    <p> We were thriled to have witnessed many enthusiastic and supportive young people at all three schools we had partnered in their awareness improvement programme for clean environment", Mr. Manoranjan Sahoo commented whilst also crediting the active contribution from the team of "Action for Women  Helpage and Awareness" (AWHAN), company volunteers, school managements and teaching personnel involved in the successful completion of the initiative. Mr. Sahoo announced that the awareness program will be expanded to the villages of Barajaji, Chirugunia and Birsa Nagar by the end of January with cleaning activities and hygienic materials and fruit bearing samples trees distribution arranged by Balasore Alloys Ltd.</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    {/* <div className="col-sm-12 mt-2">
                            <fieldset className="article-box-border">
                                <h3>Marketing Experts from Balasore Alloys Ltd at a Business-to-Business Conference in Lisbon</h3>
                                <div className="blue-line mt-2 mb-4"></div>
                                <p>Mr. V K Jodhani (President – Customer Relationship Management) and Mr. Deepak Rungta (Deputy General Manager – Customer Relationship Management) from Balasore Alloys Ltd. are in attendance at the 34 International Ferroalloys Conference which is set to connect professionals from global ferroalloys and stainless steelmaking communities in in-depth discussions panels and meetings on subject of some of the trends with potentially major impact on the global trade landscape. Some of the themes referring the ferroalloys industry prospects included ferroalloys and stainless steel dynamics outlook, applicability of digital opportunities across the ferro-alloys value chain and global steel market overview are among the points of the professional interest of Balasore Alloys Ltd.'s experts.</p>
                                <p>“Engaging with regular insights from industry’s experts and customers is potentially a very efficient approach”, Mr. VK Jodhani comments on the traditional interest of the company in joining this conference; - “Our company logically pays attention on how to innovatively excel our live communication with these important segments of our corporate stakeholders.” While he reminded that the company has in 2018 been scored highest average rating amid comprehensive analysis of the parameters of brand capacity by BARC Asia including brand availability and reach, functional utility and users’ satisfaction, Mr. VK Jodhani explained that encouraging partners’ feedback was subject to continuing approach for BAL.</p>

                            </fieldset>
                        </div> */}
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Balasore Alloys Ltd. With a Star Performer Award</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/export award (1)-min.jpg" className="w-100 max-width-100" height="350" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-6">
                                    <p>The "Star Performer" Award for the year 2015-16 in the product group -  Ferro alloys, Large Enterprise was bestowed upon Balasore Alloys Ltd. by EEPC Eastern Region, branch of EEPC India, trade and investment promotion organisation sponsored by the Ministry of Commerce & Industry, Government of India. </p>
                                    <p>The prestigious award  was  handed over on 28.11.2018 by Shri Keshari Nath Tripathi, Hon’ble Governor of West Bengal.</p>
                                    <p>"We in Customer Relations Management office acknowledge this honor especially as it has been received from a reputed Indian instituion with over six decades of professional presence", said Mr. VK Jodhani /Head of CRM Department/ who underlined the integrated efforts by the team in achieving the recognition. </p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    {/* <div className="col-sm-12 mt-2">
                            <fieldset className="article-box-border">
                                <h3>Public Hearing over Expansion Project Took Place</h3>
                                <div className="blue-line mt-2 mb-4"></div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p>Pursuant to a statutory requirement as per Environmental Impact Assessment (EIA) Notification 2006 of Ministry of Environment and Forest MOEF & Climate Change, Government of India a public hearing over BAL expansion project of Sukinda Plant was conducted at Sukinda Bhawan on 09.11.2018 by Regional office of State Pollution Control Board under chairpersonship by Additional District Magistrate(ADM) of Jajpur district Mr. Mihir Kumar Mohanty. Mr. Ranjay Kumar, director of the Sukinda Plant was in attendance. Over 1000 Sukinda Valley residents actively joined the event.</p>
                                        <p>Mr. Manmohan Murmu of State Pollution Control Board initiated the proceeding followed by brief introduction by ADM Mr. Mohanty. Mr. BK Parida has briefed the gathering on the subject matter. 53 persons from the host community around the Sukinda Plant made statements.</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <img src="/images/IMG_20181109_121819.jpg" className="w-100" height={350} alt="" />
                                    </div>
                                    <div className="col-sm-12">
                                        <p>42 attendants expressed their support while there were eight conditional approvals and three opposing statements.  8 supported with some conditions and 3 opposed. Nearly 80 people gave written consent. Dr. Swarup Panda (Senior Vice President – Corporate Affairs) replied to the points raised by the participants in the public hearing including health facility, public infrastructure development, environment protection and local employment.</p>
                                        <p>Additional District Magistrate (ADM) of Jajpur district Mr. Mihir Kumar Mohanty expressed appreciation to all participants over their active engagement in conclusion.</p>
                                    </div>
                                </div>
                            </fieldset>
                        </div> */}
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Delegation from Balasore Alloys Ltd. at an International Technical Fest for Mining and Geoscience</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/Picture45.jpg" className="w-100 max-width-100" height="350" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-6">
                                    <p>Balasore Alloys Ltd. partnered the “Great Step 2018” International Technical Fest for Mining and Geoscience students hosted in Kharagpur, West Bengal by the Technology Mining Engineering Society IIT Kharagpur between 2 and 4 November 2018. The 11 edition of the annual technical festival established in 2008 by the Mining Engineering Department of IIT Kharagpur was open to students on all India basis. Flagship events featured various events including Mining and Environment case studies and National Mining Innovation Challenge. The large integrity of online and offline activities provided by the programme also welcomed innovative ideas in a quiz pertaining to mining & related subjects, thematically designated photography contest and attire designing competition. Students were encouraged to share their creative insights towards mining industry improvement. The platform enabled their upgraded knowledge, analytical approach and technical skills.</p>
                                </div>
                                <div className="col-sm-12">
                                    <p>“BAL readily supports events that sustain and advance the vivid links between academia with society and with business in particular”, Mr. Anil Sureka, MD explained; - “In any industry which is as definitely resources-intensive as ore mining extraction and processing, pragmatic human’s creativity is vital no matter how progressive automation is applied into the manufacturing process. Our company is honored to be partnering a platform which enhances creativity and sound expertise in a competitive environment”, he added.</p>
                                    <p>Balasore Alloys Ltd. partnering the “Great Step 2018” could symbolically be referred to the World Science Day for Peace and Development marked under “Science, a Human Right” 2018 Theme in November, as Mr. Sureka underscored. He acknowledged the merits of the professional team of “Great Step” and Professor Aditya Kumar Patra (President) in welcoming the productive partnership with Balasore Alloys Ltd. IIT – Kgp is supporting BAL in looking beyond the conventional methodology and coming out with innovative working in the Mine for production from both opencast and underground.</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Balasore Alloys Ltd. Plant is the 2018 Recipient of "Kalinga Safety Award" - Silver</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">

                                <div className="col-sm-6">
                                    <p>Balasore Alloys Ltd. Plant is the 2018 recipient of the prestigious “Kalinga Safety Award” (Silver) on achieving excellence in the SHE area in the calendar year 2017.  His Excellency Governor of Odisha Prof. Ganeshi Lal bestowed the award   at an Inaugural ceremony hosted on 2.11.2018 by the “ODISHA STATE SAFETY CONCLAVE-2018” in Bhubaneswar, Odisha state. Dr. Swarup Panda, Sr. Vice President - Corporate Affairs and Mr. Sandeep Kumar Das, Dy. Manager – Safety collected it on behalf of Balasore Alloys Ltd.</p>
                                    <p>‘Kalinga Safety Award’ is reputed recognition established in 2010 by the Institute of Quality and Environment Management Services (IQEMS), an Odisha– based Training and Consulting firm with over 20 years of experience in enhancing best practices in Quality, Safety and Environment. In applying to be evaluated in “Medium and Small Scale Industries”, “Large Scale Industries”, “Mining Sector” and “Construction Sector”, organizations in Mining, Construction, Ports and Hospitals Service Sector were invited to showcase their Best Safety Practices. </p>
                                </div>
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/OSC 2018.jpg" className="w-100 max-width-100" height="350" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-12">
                                    <p>“BAL believes that the wellbeing and development of society is every stakeholder’s joint responsibility, which needs to be fulfilled with utmost dedication. Accordingly, we are implementing a CSR plan to provide broad-based help and medical assistance to all villagers, especially pregnant women and infants,” said <strong>Mr S. V. Bhavani Varma, Sr Vice-President – Operations</strong> adding that healthy society is utmost priority for the company.</p>
                                    <p>Balasore Alloys Ltd. had undergone an extensive application process on objective grading of the applicable aspects to SHE management in the category of “Large Scale Enterprises” during the calendar year 2017. They were assessed by the expert panel from the field of safety, health and environment and Directorate of factories & boilers, Government of Odisha assessed the different aspects of the SHE management.</p>
                                    <p> “I would like to extend my heartiest congratulations to the entire team of Balasore Alloys Ltd. for the remarkable efforts in supporting company’s determination towards sustaining safe and healthy work environment. We hope you all will continue to move ahead on the path of excellence in Occupational Health & Safety”, Mr. Dhiren Kumar Nath, Director (Operations) commented.</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Certificate of Excellence for Export Performance</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/IMG-20181011-WA0016.jpg" className="w-100 max-width-100" height="350" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-6">
                                    <p>Balasore Alloys Ltd. received the Certificate of Excellence for the year 2016-17 for export performance. The prestigious award of the Directorate of Export Promotion and Marketing Odisha, an institution which was established in promotion of quality & standardization of products and export activities of the state, was bestowed on the company whose wide product basket is on demand by stainless steel producers and allied industries for over three decades.</p>
                                    <p>The certificate was presented by the Micro, Small and Medium Scale Enterprises Department, Government of Odisha. The department was represented by the Hon'ble Minister of MSME, Government of Odisha, Mr Prafulla Kumar Samal, the Additional Chief Secretary to the Government of Odisha, Mr. LN Gupta and the IAS Director of Industry Mr. Nath who bestowed it on Balasore Alloys Ltd. at a function held in Bhubaneswar on 11th October 2018. </p>
                                </div>
                                <div className="col-sm-12">
                                    <p>“Balasore Alloys Ltd., one of India’s world class manufacturers of Ferro Alloys enjoys international customers’ loyalty even on remote markets”, commented Dr. Swarup Panda (Vice President – Corporate Affairs) who was joined by Mr. Basant Parida (DGM- Corporate Affairs) in receiving the certificate on behalf of the company. “We believe that this recognition will further enhance our business share and in turn impact positively on stakeholders and society”, explained Dr. Panda.</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Kaliapani Mines Was Awarded a First Prize in Waste Dump Management</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <p>In appreciation of its integrated efforts in waste dump management, Balasore Alloys Ltd, Kaliapani Mines, has been awarded a First Prize in the category of fully mechanized mine by Indian Bureau of Mines (IBM).</p>
                            <p>The 20th Mines Environment and Mineral Conservation (MEMC) week was organized under the aegis of Regional Office of IBM, Bhubaneswar, from 19.02.2018 to 25.02.2018. The prestigious recognition was received by Mr. Abhinav Kumar, Deputy Manager- Environment on behalf of Balasore Alloys Ltd. at the concluding ceremony of 20th MEMC on 01.09.2018.</p>
                            <p>Our performance in this category has been evaluated by inspection team, set up by IBM during the celebration of MEMC week. Members comprised from different Mines have visited Kaliapani Mines amid around 70 other industries. The purpose of their visits was to evaluate the performance on afforestation, waste dump management, top soil management, reclamation and rehabilitation, management of sub grade mineral, installation and use of mechanical beneficiation facilities including crushing, air quality management, sedimentation and water management and aesthetic image of the Mines. Environment department was supported by Mining, Geology, Civil and Electrical departments in Balasore Alloys Ltd. in assembling the application prior to the performance audit. Preparations comprehensively involved statutory documentation activities related to mineral conservation and environmental compliances such as plantation in safety zone and dead dumps, monitoring of environmental parameters, scientific studies and implementation of innovative ideas. </p>
                            <p><Link href="/files/certificate.pdf" passHref><a target="_blank"><strong>Click Here</strong> For Certificate</a></Link></p>
                        </fieldset>
                    </div>

                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Balasore Alloys Ltd. Extends Support to Five Students</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">

                                <div className="col-sm-6">
                                    <p>In addition to the traditional flag hoisting ceremony which can be watched at Balasore Alloys Ltd.’s premises every year on 15 August, our company accepted the honour to have three experts sharing the festive moments with academic staff and students at Sukinda College in Sukinda, Jaipur district. Prof. Krushna Ballava Satpathy (Principal), Prof. Sarat Nayak (Economics), Dr. Deepak Pradhan, Prof- Shivram Nanda, Prof. Jyotirmayee Sahoo  also joined the ceremony hosted by the college. He quoted “Freedom can occur only through Education”. Five students of Sukinda College known for their good results in their areas of education namely Arts, Science and Commerce had been selected to receive a gesture of support by the company in a touching part of the ceremony. Mr. Tarini Prasad Mohanty, GM Opeartion did in his speech refer fighters for national independence as stressing: “Their efforts brought India to a whole new level.” </p>
                                </div>
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/Flag-hosting.jpg" className="w-100 max-width-100" height="350" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-12">
                                    <p>He expressed his hope that young people would discover that independence is a matter of diligence and hard work. “As students, you need to respect the freedom. Involve in constructive work. Always have thirst for knowledge, try to make something new. There is no substitute for diligence, hard work and will power. Enjoy the freedom by reaching new arena of thinking and utilizing it for good. And I hope that you will take your time to discover that independence is a matter of responsibility. Schooling isn’t about ready answers; it navigates us between career and careerism, self-respect and ego, team work and solitude. Our peaks are our choices!”, said he.</p>
                                    <p>“Our sons and daughters should never be discouraged from pursuing their dream for a better tomorrow when skills and knowledge are rewarded and when one is able to bring them back to society”, Mr. Manoranjan Sahoo, Deputy Manager of Business Excellence commented after the ceremony.</p>
                                    <p>Sustainable interest in higher education as an individual option is cultivated within earlier years, at the primary and secondary school inclusively. Prevention of school dropout as social phenomenon with lasting economic consequences has therefore an important role to play.   Balasore Alloys Ltd. is abiding by CSR policy aimed at school dropout prevention through supporting comfortable and child-friendly environment at school. The company is committed to providing infrastructural improvements and innovations to enhance equal access of pupils at as early stage of their journey to the college as primary and secondary schools are.</p>
                                    <p> It will be reminded that Balasore Alloys Ltd. organized a School level Talent Search Competition among the school students of Refugee Colony School and Nuapadhi Nodal High School in April.</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>An Award in "Safety" Category for the Mines</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/safety-award.jpg" className="w-100 max-width-100" height="350" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-6">
                                    <p> Kaliapani Chromite Mines of Balasore Alloys Ltd. received  third prize in mines safety at  Half yearly safety week ceremony hosted by Directory of Directorate General of Mines Safety, Bhubaneswar region. The recognition was extended on 10 August 2018 by the Regulatory Agency under the Ministry of labour and employment, Government of India. The company’s performance was assessed in “emergency preparedness in mines” and “welfare activities for contract workers” categories.</p>
                                    <p>Balasore alloys Ltd. has adopted a fully integrated production cycle by being one of the few industries in the country to own captive Chrome ore mine. Based in Sukinda Valley in Jajpur District of Orissa, the facility secures the Chrome ore requirement of the company.</p>
                                </div>
                                <div className="col-sm-12 mt-2">
                                    <p>The company promotes productive ambient aimed at OHS risk minimization. Protection of health of employees and contractors is taken care of through primary prevention of hazards on the production site. Relevant programmes and initiatives are conducted within regulatory requirement in promotion of adequate awareness and attention on the working places. Occupational health related risks are subject to professional assessment.</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    {/* <div className="col-sm-12 mt-2">
                            <fieldset className="article-box-border">
                                <h3>"Prevention is Treasure" : Mega Health Camp is activated by Balasore Alloys Ltd.</h3>
                                <div className="blue-line mt-2 mb-4"></div>
                                <div className="row">

                                    <div className="col-sm-6">
                                        <p>1026 number of employees and local residents have arrived at the opening of the traditional Mega health camp on 28.07.2018. The initiative under “Prevention is Treasure” motto took place from 8.00 o’clock to 2.00 PM in Remuna Degree College of Balasore district.</p>
                                        <p>The service will be active until 28.07.2018 for staff, their families and all residents of all age category who intend to do their annual medical examination. The in house Medical Department of the company has joined their outside colleagues in performing free checkup and consultancy package in distribution of Medicines. Registrations are accepted on the spot.   Comprehensive regular physical exams are advocated by medical groups as a step of prevention in benefit of early diagnosis which can save lives.</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <img src="/images/health-camp.jpg" className="w-100" height="350" alt="" />
                                    </div>
                                    <div className="col-sm-12 mt-3">
                                        <p>Our team of physicians is committed to keep no visitor unattended. Strict protection of individual data is guaranteed.</p>
                                        <p>Univocal importance has to be assigned to safety for efficient environment. Health and hygiene promoting mechanisms constitute traditional component into the corporate social responsibility strategy which Balasore Alloys Ltd. has adopted in helping organize the necessary changes for the society. The company has built lasting contacts with professional institutions and NGOs on purpose of earning and analyzing first-hand awareness about staff and peripheral villages’ priority requirements.</p>
                                        <p>Preventive culture established as a strict internal standard at the company premises is pursued into raising healthy habits among local residents, especially youngsters.</p>
                                        <p>Malaria eradication program is currently ongoing amid mosquito medicine spraying in Chirguina, Ransol and in Kaliapani Mines. These practical measures are supported by acting awareness program designed to identify sources and natural methods of these diseases prevention.</p>
                                        <p>The company is equally as determined to help enable and encourage healthy habits through improving vast spectrum of ambient factors including clean water use and open defecation free zones. Employees are regularly involved in safety promotional activities. In house training session has been delivered to remind staff about preventive behavior principles during rainy season. A growing number of professionals employed with Balasore Alloys Ltd. has been certified under successful completion of first-aid delivery training.</p>
                                    </div>
                                </div>
                            </fieldset>
                        </div> */}
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Balasore Alloys Ltd. Received an Award in "Occupational Health & Safety" category</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/health-safety.jpg" className="w-100 max-width-100" height="350" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-6">
                                    <p> Balasore Alloys Ltd. was excelled at the “2nd Annual EKDKN EXCEED AWARD 2018” under “Occupational Health & Safety” category in Mining & Metallurgy Sector from Ek Kaam Desh Ke Naam (EKDKN). The all-India based competition in occupational health and safety, Human Resources, Environment or CSR categories provided several criteria including safety budget, accident statistic, hazard identification, management and control of accidents and disasters, fire prevention and other emergencies and safety awareness programs. Safety Department and IMS departments at Balasore Alloys Ltd. have been focused on collection and compilation of data and documents related to accident statistics, health check up, environment data, safety procedure, training and emergency preparedness. </p>

                                </div>
                                <div className="col-sm-12 mt-2">
                                    <p>The two departments have been working on the preparations for a sophisticated application process wherein fundamental factors such as safety budget, accident statistic of last three years, hazard identification, management and control of accidents and disasters, fire prevention and safety awareness programs were to be assessed, Dr Girish Sharma, General Manager explained. </p>
                                    <p>The successful completion of the competition was marked at an award ceremony hosted on 21 July in Dehradun, Uttarakhand by the “Ek Kaam Desh Ke Naam” (EKDKN). The NGO was founded in 2007 by Mr Rajiv Babbar to accomplish social changing mission. The event was regarded by Mr Dharam Singh Ravat, Hon'ble Minister of Education, Govt of Uttarakhand, India, Mr Harak Singh Ravat, Minister of Forests, Wildlife, Environmental and Solid Waste Management, Labour and Employment, Govt of Uttarakhand, India, Mr O.P, Babbar (former MLA), Mr Khajan Das (MLA, Uttarakhand), India as well as leading business and industry houses. Dr Girish K Sharma and Mr Sandeep Das, Deputy Manager- Safety represented Balasore Alloys Ltd. at the ceremony.</p>
                                    <p> „I was privileged to have joined the audience of professionals applauding our company over being bestowed the “Silver” award under “Occupational Health & Safety” Category in Mining & Metallurgy Sector", Dr. Sharma commented.</p>
                                    <p>As he recalled during the ceremony, safety does not happen by incident.  The application process did set an opportunity for the team to inspect their overall efficiency in assigning priority to the continuous conduction of safety promotional activities for secure and ethical ambient in the company.</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>World Day for Safety and Health at Work : A Notice of Everyday Validity</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <p>World Day for Safety and Health at Work is observed by initiative of the International Labour Organization (ILO) on April 28th since 2003. It is believed that adequate information and training would, along with availability of protective materials, ensure prevention of occupational diseases and accidents. As highlighted on the web site of the United Nations, technical innovation and organizational changes can be linked to the potential existence of new occupational hazards. Balasore Alloys Ltd.’s Medical and HR specialists explain why prevention is of utmost importance and which measures are undertaken by one of the large Ferro chrome producers in Orissa state, India.</p>
                            <p><strong>What should everyone know about occupational diseases: what is BAL doing to prevent them?</strong></p>
                            <p><strong>Dr. Geeta Giri:</strong> As per the Indian Factory Act, 1948 there are 29 notified Occupational diseases.</p>
                            <p>As far as our factory is concerned in particular, out of those 29 diseases, 4 are potentially possible to emerge including Chrome ulceration or its sequelae, silicosis, occupational or contact dermatitis and noise induced hearing loss.</p>
                            <p>Having this into consideration, we make sure generic care is applied to eliminate hazards. Health and safety training like "Safety and law”, “Induced noise level and hearing loss”, “Use of Personal Protection Equipment (PPEs)” are conducted for all workers especially those at occupational diseases prone areas in regular interval. Awareness programs are organized at the company to keep staff aware regarding the Occupational diseases.</p>
                            <p><strong>As per recent estimates quoted by ILO, 2,78 mln workers are losing their lives every year over occupational accidents whereas 86,3% is due to occupational diseases and 13.7% due to accidents at work. How is prevention of hazards organized at BAL's plant and mines areas?</strong></p>
                            <p><strong>Dr. Giri: </strong>We value the proactive role of prevention as an individual habit and collective culture. An adequate number of PPEs such as ear plug/ear muffs are provided in noises prone areas. Dust masks are made available in dust prone areas. Gloves are in place to facilitate work with chromium metals.</p>
                            <p>Examinations of every single regular or contractual worker are done every year by certified medical team. We organize these examinations to check the health condition of the employees and to be prepared to keep occupational diseases detected on time, if any. We are proud to acknowledge that this preventive approach really works.</p>
                            <p>Environmental monitoring like ambient air quality, work zone monitoring, water quality and noise level monitoring are conducted every month.</p>
                            <p><strong>As ILO informed, the 2018 Day should have been observed to mark the World Day against Child Labour (WDACL).  Which measures are undertaken by BAL to ensure child labour is not encouraged?</strong></p>
                            <p><strong>Mr. Vikas Sahu (HR): </strong>Balasore Alloys Ltd. abides by strict intolerance against child labour by never supporting such unethical and improper practices in its own recruitment policy. No fake or forged identification documents are accepted during the recruitment process. We ensure verifiable proof of age documentation is maintained for every single employee. ID proof of contractor labours is carried upon new joining. Checking of ID proof at gate entry is strictly applied.</p>
                            <p><strong>How important is the personal contribution to maintaining and securing high standards industrial hygiene?</strong></p>
                            <p><strong>Mr. Vikas Sahu: </strong>Test methods are there to measures relevance in recognizing, assessing and controlling the physical, chemical, and environmental hazards on the workplace to ensure every worker's health and well-being are not disrupted. These standards include guides for the proper handling, transportation and storage of specified substances and equipment.</p>
                            <p>Licenses, permits and certificates are maintained as required by law. They are renewed in order to retain their validity. These documents are issued by a valid and recognized legal entity to the organization possessing them, with the appropriate location, scope and validity date. These documents include business and operating permits, fire safety and electrical certificates, permits for equipment such as boilers, generators, elevators, fuel and chemical storage tanks; and building, emissions and waste-disposal permits.</p>
                        </fieldset>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Balasore Alloys Ltd. Expert speaks on occasion of the World Laboratory Day</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">

                                <div className="col-sm-6">
                                    <p> Quality Control Laboratory at Balasore Alloys Ltd. opened up on the importance of processes carried out by the experts in this strategic department and the overall impact on product quality.</p>
                                    <p>Dr. Utpal Kumar Banerjee, Head of Department QC-R Lab & Process Improvement at the company since 2015, holds B SC Eng Metallurgy, M Tech Ferrous M Tech Ferrous Process Metallurgy IIT and PhD Ferrous Process Metallurgy  IIT. He explains the massive role of continuous testing and analytical measurements of all incoming raw materials, in process taping samples and finished product samples in the company facility.</p>
                                    <p>“Laboratory is in many senses a special area”, Dr. Baneree notes – “The very Latin word means “to labor”. Apparently it’s the place where concepts and inventions do start their way on”. Emphasis is laid on accuracy and precision of measurements, application of standard sampling methods, and reliability of results by adopting good laboratory practices and high quality testing services.</p>

                                </div>
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/BAL00107.jpg" className="w-100 max-width-100" height="450" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <p>The laboratory is committed to safe working environment and has been accredited by the National Accreditation Board for Testing and Calibration Laboratories (NABL) making it proudly the first Ferrochrome NABL certified Laboratory in India.</p>
                                    <p><strong>The kitchen where products excellence is refined to millimetres</strong></p>
                                    <p>The Laboratory is equipped with high precision Super Mini 200 WDXRF, LECO CS-744 for Carbon and Sulphur Analyser and UV/VIS Spectrophotometer.</p>
                                    <p>A team of chemists with over 20 years of experience in analytical line are conducting wet chemical analysis to check the trend of receipt of incoming raw material quality and compare their suitability with specifications.</p>
                                    <p>What makes adhering to specifications crucial? “Consistency of chemical composition and size has to be strictly maintained”, Dr. Banerjee explains – “No compromise on any of the quality parameters is acceptable as quality of raw materials determines the output quality which may affect the customer directly.”</p>
                                    <p>Raw material quality maintenance is an approach to Zero defects by reducing abnormalities in furnace input and improving understanding of furnace production.</p>
                                    <p>Product quality compliance is proven important in assuring the grade desired by customer can be tailored, Marketing department confirms.</p>
                                    <p>It is not only the right  input of required raw materials but also the control of process parameter during smelting t in Submerge arc furnace that  determine the right grade of Ferro chrome  as planned.</p>
                                    <p>The production of low silicon Ferro Chrome requires the right control of furnace operation with maintaining MgO/Al2O3 and bacisity  of (CaO+MgO)/SiO2 with lower operating temperature.</p>
                                    <p>At Balasore Alloys Limited’s laboratory one operates with semi closed submerge arc furnace which turns the control of operating temperature knotty to maintain due to the varied charge mix composition and different types of reductants and fluxes.</p>
                                    <p>Size of Ferro Chrome is important. In the finished product stage apart from the chemical composition, the company addresses the different size requirement of the customer by manual breaking with minimum fines generation.</p>
                                    <p>A close network between Quality Control, raw material handling and Marketing forces is apparently required in making sure every single demand is processed with no compromise on quality, regardless of the volume ordered. Communication process is continuous right from collecting the order to feeding the raw material into bunker for quality checking. Material balance is made on the basis of day to day feed material composition to furnace. “Standard operating procedures are followed during every stage for achieving the right grade with regular internal audit for assessment of quality compliance”, Dr. Banerjee specifies.</p>
                                    <p><strong>To whom these preparations are concerned</strong></p>
                                    <p>95% of the Ferro Chrome is used in Stainless steel and alloy grade steel production. Other application is for chrome paint for corrosion resistance and in Chrome plating. Steel maker would like to know the Carbon, Chromium and Silicon label along with Phosphorus, Sulphur and Titanium.</p>
                                    <p>Balasore Alloys Ltd. has its Laboratory open to faculty visits upon preliminary requests.</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Balasore Alloys Mirror Issue-II-2017</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/Ispat-news-letter.jpg" className="w-100 max-width-100" height="350" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-6 mt-4">
                                    <p> <Link href="/files/Ispat news letter-July- 31.07.17 (1).pdf" passHref><a target="_blank" className="text-primary"><strong>Download PDF</strong></a></Link> </p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    {/* <div className="col-sm-12 mt-2">
                            <fieldset className="article-box-border">
                                <h3>Mr. Jodhani, Sr. VP of Balasore Alloys Ltd Interview with The Tex Report Japan</h3>
                                <div className="blue-line mt-2 mb-4"></div>
                                <div className="row">

                                    <div className="col-sm-6">
                                        <p> Mr. V. K. Jodhani, Sr. Vice President of Balasore Alloys Limited, a ferro-chrome producer in India has visited Japan, and proceeded with the business promotion with the customers like steel manufacturing companies in Japan. As part of regular visit, he will this time call on the persons concerned in Tokyo, Osaka and Nagoya following an itinerary from 13th to 18th of this month. Balasore Alloys holds a long-term mining lease for chrome ore mines in the Sukinda Valley, Jajpur, Odisha. The Company not only enhances the competing power by the stable procurement of raw materials and the stable supply of the products but also proceeds with the expansion of the annual mining volume to 1.4 million tons from the existing 600,000 tons.  </p>

                                    </div>
                                    <div className="col-sm-6">
                                        <img src="/images/text-report.jpg" className="w-100" height="350" alt="" />
                                    </div>
                                    <div className="col-sm-12 mt-3">
                                        <p>The plant in Balgopalpur, Balasore, Odisha as the Company’s flagship plant is the first producer in the world that got the prestigious certifications such as JIS (Japanese Industrial Standard), DIN (Deutsche Industrie Normen) and BIS (Bureau of Indian Standards), and is supplying chrome-containing products to more than 30 countries. Besides, the Company is developing the proactive strategies like increasing the production of ferro-chrome. The current production is 160,000 tons, but the annual total production will go up to a total of 370,000 tons by the end of 2017 as the Company is trying to acquire an existing running plant in Jajpur (Odisha).</p>
                                        <p>Sr. Vice President Jodhani made such comments in an interview with TEX Report as the Company has a business relationship for ferro-alloys with Japanese customers for more than 28 years. Albeit Japanese customers have a severe and strict attitude toward quality, the Company can produce high-chromium, high-silicon and low-phosphorus high-carbon ferro-chrome, and can supply products with a high-grade quality. The Company referred to maintaining a long-term relationship with Japan like the Company will continue to make utmost efforts to supply products with high values on a long-term basis.</p>

                                    </div>
                                </div>
                            </fieldset>
                        </div> */}
                    <div className="col-sm-12 mt-2">
                        <fieldset className="article-box-border">
                            <h3>Balasore Alloys Ltd. recertified under ISO 9001:2015(QMS), ISO 14001:2015 (EMS) and certified under ISO 55001:2014 (AMS)</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/Bureau_Veritas.jpg" className="w-100 max-width-100" height="350" alt="" />
                                    </Zoom>
                                </div>
                                <div className="col-sm-6">
                                    <p>Balasore Alloys Ltd. has its management system certificates upgraded in accordance with the requirements of latest revised versions of ISO 9001:2015 (QMS) and ISO 14001:2015 (EMS) and its asset management system is now certified on ISO 55001:2014 (AMS), following a precise audit by Bureau Veritas (India) Private LTD.</p>
                                    <p>ISO standards related to Quality (ISO 9001:2015), Environment (ISO 14001:2015) and Asset Management (ISO 55001:2014) apply to manufacture of various grades of ferrochrome. ISO 55001:2014 comprehends all critical assets which are directly associated with it.</p>
                                    <p>All three certificates have 3-years validity under continuous satisfactory operation of the Management System applied by the company.</p>
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <p>BAL is already certified to OHSAS 18001:2007 (Occupational, Health & Safety Assessment Series) and ISO 50001:2011 (Energy Management System)</p>
                                    <p>Balasore Alloys Ltd. enjoys reputation of traditionally large international brand’s acceptance. “We massively understand the inclusiveness of the process preceding the positive outcome of our Management System being officially certified”, Mr. Gurjeet Singh (VP - Business Excellence) explains; - “Competitive brands obviously mean impeccable quality, and quality requires environment which is safe in every aspect - in full compliance with standards”.</p>
                                </div>
                                <div className="col-sm-4">
                                    <p> <Link href="/files/ISO 9001 2015 - QMS.pdf" passHref><a target="_blank" className="text-primary"><span className="text-left"><strong>Download ISO 9001:2015</strong></span></a></Link></p>
                                </div>
                                <div className="col-sm-4">
                                    <p><Link href="/files/ISO 14001 2015 - EMS.pdf" passHref><a target="_blank" className="text-primary"><span className="text-center"><strong>Download  ISO 14001:2015</strong></span></a></Link></p>
                                </div>
                                <div className="col-sm-4">
                                    <p><Link href="/files/ISO 55001 2014 - AMS.pdf" passHref><a target="_blank" className="text-primary"><span className="text-right"><strong>Download  ISO 55001:2014</strong></span></a></Link> </p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    {/* <div className="col-sm-12 mt-2">
                            <fieldset className="article-box-border">
                                <h3>President and Deputy General Manager - Customer Relationship Management from Balasore Alloys Ltd. Attended the 20th Asian Ferroalloys Conference</h3>
                                <div className="blue-line mt-2 mb-4"></div>
                                <p>V K Jodhani (President – Customer Relationship Management) and Deepak Rungta (Deputy General Manager – Customer Relationship Management) from Balasore Alloys Ltd. joined senior industry experts, market and industry analysts and minors, ores and alloys pricing reporter at the 20th Asian Ferroalloys Conference which took place on 10-12 March 2019 in Hong Kong.Mr. Jodhani and Mr. Rungta attended the Chrome Ore and Ferro Chrome market overview 2018 along with Chrome Panel wherein ferrochrome market dynamics was discussed in global economic context. The Chrome Panel provided an extensive platform for Ferrochrome supply and demand trends to be deliberated upon by professional community."Being distinguishably a holder of DIN, a German Quality Conformity and JIS, a Japanese Quality Standard Certification, today the company is capable to offer a tailored ferroalloys portfolio with different grades of Ferro Chrome as per unique requirement of practically each customer. Developing the broad contact with other market and industry experts is continuously on focus in Balasore Alloys Ltd.", Mr. VK Jodhani commented; - "Our attendance at the 20th Asian Ferroalloys Conference provided us with another prestigious opportunity to involve in an open and informative exchange of  insights on matters of importance to the future of ferrochrome industry and also on business practices by industry experts", he explained.</p>
                            </fieldset>
                        </div> */}
                </div>
            </SidebarContent>
            <Footer />
        </>
    );
}
