import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Link from "next/link";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import List from "components/layouts/List";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Zoom from 'react-medium-image-zoom';

export default function Page() {
  return (
    <>
      <Head>
        <title>{`CSR - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader title="CSR" breadcrumbs={[
        { name: 'Company Policy', link: '#' },
        { name: 'CSR Policy', link: '' },
      ]} />
      <SidebarContent navFor="Company Policy">
        <div className="container section-csr-policy"> 
        <div className="row">
          <div className="col-sm-12">
            <fieldset className="article-box-border">
              <h6>ANNUAL REPORT ON CORPORATE SOCIAL RESPONSIBILITY (CSR) ACTIVITIES/ INITIATIVES FOR THE FINANCIAL YEAR 2022-23</h6>
              <div className="blue-line mt-2 mb-4"></div>
              <div className="csr-text">
               [Pursuant to Section 135 of the Companies Act, 2013 Read with Companies (Corporate Social Responsibility Policy), Rules, 2014]
              </div>
                <p className="csr-heading">1.	A brief outline of the Company’s CSR policy, including overview of the projects or programs proposed to be undertaken: </p>
                <p>Corporate Social Responsibility (‘CSR’) Policy of Balasore Alloys Ltd. (‘BAL’) encompasses the company’s philosophy for delineating its responsibility as a corporate citizen and lays down the guidelines and mechanism for undertaking socially useful programmes for welfare & sustainable development of the community at large.</p>

                <p>Corporate Social Responsibility (‘CSR’) has been embedded in the long term business strategy of the Company. For BAL, business priorities co-exist with social commitments to drive holistic development of people and communities. The Company’s CSR initiative helps in elevating the quality of life, especially to the disadvantaged sections of the society. It aims to continue its efforts to build on its tradition of social responsibility to empower people and deepen its social engagements.</p>

               <p>The Corporate Social Responsibility (CSR) Committee has formulated and recommended to the Board, this Corporate Social Responsibility Policy (CSR Policy) indicating the activities to be undertaken by the Company, which has been approved by the Board. The CSR Policy may be accessed on the Company’s website at a link as mentioned below:</p>
              <p><Link href={"http://www.balasorealloys.com/upload/media/csr-policy/CSR_25_06_2018.pdf"} passHref>http://www.balasorealloys.com/upload/media/csr-policy/CSR_25_06_2018.pdf</Link>
               </p>

              <p>The key philosophy of all CSR initiatives of the Company is guided by three core commitments of Scale, Impact and Sustainability.   
              </p>
              <p className="csr-text">Focus Areas of Engagement:</p>
              <p>Among various CSR initiatives of the Company, the major focused areas of CSR spending for the Financial Year 2022-23 had been the followings:</p>
         
              <List
                data={[
                  <>
                    <h6>Healthcare:</h6> <p>Company is always committed towards CSR at large and as such invested in multiple healthcare projects. Mega Blood Donation camp was organised in collaboration with local community wherein 200 units of blood was collected for benefit of local people. Dengue Awareness programme, First Aid Camp, and Assistance for the Better Treatment for critical and needy patient were other health related awareness/programs organised by BAL.</p>
                   
                  </>,
                  <><h6>Medicine:</h6> <p className="list-text">Further, distribution of free medicines, health awareness & promotion programmes, programme for physically challenged person, free ambulance facility, distribution of blankets & mosquito nets, etc., are among various initiatives taken towards health care in the financial year 2022-23</p>
                  </>,
                  <><h6>Water Supply:</h6> <p>The Company has initiated several Safe water projects and in process of endeavouring such commitment, the Company has started Operation & Maintenance of four safe drinking water supply projects benefiting 560 households of Kaliapani, Ghagiashi, Chinghudipal & Bamanagar villages by having regular access to safe water, thereby reducing the number of cases of water borne diseases.Several Water Purifiers were also installed  in the peripheral areas of Plant providing safe drinking water for all localities.</p>
                  </>,
                  <>
                    <h6>10th March :</h6> Water project inauguration as part of our Water and Sanitation drive
                  </>,
                  <>
                    <h6>21st March :</h6> Water project inauguration as part of our Water and Sanitation drive
                  </>,
                ]}
              />
              <p className="text-right text-success">#whatcanwedotohelp2019</p>
            </fieldset>
          </div><br></br><br></br>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h3>SUPPORTING SUSTAINABLE COMMUNITIES</h3>
              <div className="blue-line mt-2 mb-4"></div>

              <p>Our CSR activities are based on sustainable development and inclusive growth. We are working with our communities to bring about sustainability.</p>
              <p>Our CSR activities are based on sustainable development and inclusive growth. We are working with our communities to bring about sustainability. We listen to our communities and prioritise the needs ranked highly by them by supporting a sustainable local economy, which is continuously enhanced through access to social infrastructure; that is inclusive and equitable; and that is built on the foundations of trusting relationships and partnerships in continuous strategic engagement with all stakeholders.</p>

              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                className="responsive-masonry"
              >
                <Masonry gutter={'20px'}>
                  {[
                    '/images/Pic1_1.jpg',
                    '/images/Picture2.jpg',
                    '/images/Picture3.jpg'
                  ].map((i, k) => <Zoom key={k}>
                    <img style={{ border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 2px 1px #efefef' }} src={i} alt="Image" className="w-100 max-width-100 overflow-hidden" />
                  </Zoom>)}
                </Masonry>
              </ResponsiveMasonry>
            </fieldset>
          </div><br></br><br></br>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h3>WATER</h3>
              <div className="blue-line mt-2 mb-4"></div>

              <p>Access to water and the availability of clean water is an essential precondition for sustainable development.</p>
              <p>Access to water and the availability of clean water is an essential precondition for sustainable development and one of the key objectives of the United Nations Sustainable Development Goals over the next decade. For years, Balasore Alloys has been listening to its communities and each year delivers projects that contribute towards the attainment of this sustainable goal.</p>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
                className="responsive-masonry"
              >
                <Masonry gutter={'20px'}>
                  {[
                    '/images/Enviornment.jpg',
                    '/images/tubewel-1.jpg'
                  ].map((i, k) => <Zoom key={k}>
                    <img style={{ border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 2px 1px #efefef' }} src={i} alt="Image" className="w-100 max-width-100 overflow-hidden" />
                  </Zoom>)}
                </Masonry>
              </ResponsiveMasonry>
            </fieldset>
          </div>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h3>HEALTH & SANITATION</h3>
              <div className="blue-line mt-2 mb-4"></div>
              <div className="text-center">
                <Zoom>
                  <img src="/images/pic45.jpg" className="w-100 max-width-100" height="350" alt="" />
                </Zoom>
              </div><br></br>
              <p>Health and sanitation impact food security, livelihood choices and long-term opportunities. Balasore Alloys has responded to community requests through the provision of health camps, mosquito nets and toilets, including smart toilets. Our projects support India's ambitious targets for sanitation.</p>
              <p>Health and sanitation impact food security, livelihood choices and long-term opportunities. Balasore Alloys has responded to community requests through the provision of health camps, mosquito nets and toilets, including smart toilets. Our projects support India’s ambitious targets for sanitation.</p>
            </fieldset>
          </div>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h3>EDUCATION, SKILLS & EMPOWERMENT</h3>
              <div className="blue-line mt-2 mb-4"></div>
              <p>Infrastructure for education and skills is not only a way out of poverty but it is the path to sustainability. Over the years, Balasore Alloys has supported schools, teachers, training centres and trainers in order to promote community growth. We are better together and in our deep belief in this, we are now ambitiously pursuing making our skills projects circular, whilst empowering communities.</p>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
                className="responsive-masonry"
              >
                <Masonry gutter={'20px'}>
                  {[
                    '/images/Student.jpg',
                    '/images/student-2.jpg'
                  ].map((i, k) => <Zoom key={k}>
                    <img style={{ border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 2px 1px #efefef' }} src={i} alt="Image" className="w-100 max-width-100 overflow-hidden" />
                  </Zoom>)}
                </Masonry>
              </ResponsiveMasonry>
            </fieldset>
          </div>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h3>ROADS & INFRASTRUCTURE</h3>
              <div className="blue-line mt-2 mb-4"></div>
              <div className="text-center">
                <Zoom>
                  <img src="/images/Panchayat_road.jpg" className="w-100 max-width-100" height="250" alt="" />
                </Zoom>
              </div><br></br>
              <p>Roads enable connectivity and safety and ensure that communities find it easier to be mobile and access a greater number of social and economic opportunities.</p>
            </fieldset>
          </div>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h3>CULTURE</h3>
              <div className="blue-line mt-2 mb-4"></div>
              <div className="text-center">
                <Zoom>
                  <img src="/images/culture.jpg" className="w-100 max-width-100" height="250" alt="" />
                </Zoom>
              </div><br></br>
              <p>Culture is important to our communities. We approach our communities with sensitization and feel honoured to be a small part of their spiritual wellbeing. </p>
            </fieldset>
          </div>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h3>ENVIRONMENT</h3>
              <div className="blue-line mt-2 mb-4"></div>
              <div className="text-center">
                <Zoom>
                  <img src="/images/student-4.jpg" className="w-100 max-width-100" height="250" alt="" />
                </Zoom>
              </div><br></br>
              <p>At Balasore Alloys, we celebrate the importance of the environment by being conscious of our impact and constantly working towards sustainable afforestation, which not only contributes to the maintenance of environmental standards but also directly supports the communities’ food chain. We also strive to bring about continuous awareness and this will be supported by a CSR Month dedicated to events that strengthen and enhance our community engagement.</p>
            </fieldset>
          </div>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h3>More than 500 patients treated at Balasore Alloys Free Medical Camp</h3>
              <div className="blue-line mt-2 mb-4"></div>
              <p><strong>Balasore, 10 August 2013:</strong> Living up to its motto, ‘People First’, <strong>Balasore Alloys Ltd (BAL)</strong> once again organized a mega free medical check up camp in Remuna Refugee Colony UP ME School in Balgopalpur village of Balasore district. Doctors at the camp treated a total of -562 patients, who received attention from a special team of gynaecologists. In 2013, BAL has organized three free camps related to health segment for various stakeholders till date.</p>
              <p>The mega health check up camp was inaugurated by <strong>Hon’ble Remuna MLA, Shri Sudarshan Jena in presence of CDMO, Dr Anup Ghosh and other dignitaries and company officials.</strong></p>
              <p>“BAL believes that the wellbeing and development of society is every stakeholder’s joint responsibility, which needs to be fulfilled with utmost dedication. Accordingly, we are implementing a CSR plan to provide broad-based help and medical assistance to all villagers, especially pregnant women and infants,” said <strong>Mr S. V. Bhavani Varma, Sr Vice-President – Operations</strong> adding that healthy society is utmost priority for the company.</p>
              <p>The camp was organized in Balgopalpur village. After consultations with the medical officer at the BAL plant and eight doctors from Medicine, Gynocology, Skin, Paediatric, ENT and Surgery segment attended the camp and treated the patients.</p>
              <p><strong>Mr Varma also said</strong>, “Our preliminary interactions and informal surveys highlighted the need of medical assistance. It was therefore decided to hold a medical camp here. These free camps have helped some patients that needed treatment.” Besides the regular checkups, maternity-related issues and infant healthcare, the team of doctors advised villagers on how to maintain proper hygiene at all times.</p>
            </fieldset>
          </div>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h3>Water Project inauguration as part of our Water and Sanitation drive</h3>
              <div className="blue-line mt-2 mb-4"></div>
              <div className="text-center">
                <Zoom>
                  <img src="/images/sanitation_drive.jpg" className="w-100 max-width-100" height="250" alt="" />
                </Zoom>
              </div><br></br>
              <p>Balasore Alloys Ltd. handed over the key to the newly inaugurated Rankia village water project on 15th March 2019. Due to shortages of this vital resource, especially during the height of the dry season, women had hitherto to walk miles to harness it. The new water tank is thus not only a source of sustainable development in the village which contributes to our water and sanitation drive, but we hope that it will contribute to the empowerment of the people and notably, the women, of Rankia village who are both the beneficiaries and the beholden. </p>
            </fieldset>
          </div>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h3>CSR POLICY</h3>
              <div className="blue-line mt-2 mb-4"></div>
              <p><Link href="/files/CSR_25_06_2018.pdf" passHref><a target="_blank"><strong>Click Here To Download</strong></a></Link></p>
            </fieldset>
          </div>

        </div>

         </div> 

      </SidebarContent>
      <Footer />
    </>
  );
}
