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
import ScrollAnimation from 'react-animate-on-scroll';

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
               <ScrollAnimation animateIn="lightSpeedInLeft">
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
               </ScrollAnimation>
                <ScrollAnimation animateIn="lightSpeedInRight">
              <p className="csr-text">Focus Areas of Engagement:</p>
              <p>Among various CSR initiatives of the Company, the major focused areas of CSR spending for the Financial Year 2022-23 had been the followings:</p>
         
             
                  <>
                    <p className="csr-heading">(i) Healthcare:</p> 
                    <div className="blue-line mt-2 mb-4"></div>
                    <p>Company is always committed towards CSR at large and as such invested in multiple healthcare projects. Mega Blood Donation camp was organised in collaboration with local community wherein 200 units of blood was collected for benefit of local people. Dengue Awareness programme, First Aid Camp, and Assistance for the Better Treatment for critical and needy patient were other health related awareness/programs organised by BAL.</p>
                     <hr />
                  </>
                  <><p className="csr-heading">(ii) Water Supply:</p>
                   <div className="blue-line mt-2 mb-4"></div>
                   <p>The Company has initiated several Safe water projects and in process of endeavouring such commitment, the Company has started Operation & Maintenance of four safe drinking water supply projects benefiting 560 households of Kaliapani, Ghagiashi, Chinghudipal & Bamanagar villages by having regular access to safe water, thereby reducing the number of cases of water borne diseases.Several Water Purifiers were also installed  in the peripheral areas of Plant providing safe drinking water for all localities.
                   </p>
                   <hr />
                  </>
                  <>
                    <p className="csr-heading">(iii) Environment:</p>
                    <div className="blue-line mt-2 mb-4"></div>
                    <p>With a commitment to make clean and green environment, 9850 saplings were distributed to 2500 families from Remuna & Nilgiri promoting awareness towards environment on World Environment Day.</p>
                     <hr />
                  </>
                  <>
                    <p className="csr-heading">(iv) Infrastructure Development:</p> 
                    <div className="blue-line mt-2 mb-4"></div>
                    <p>BAL has taken various infrastructural projects like construction of School road and boundary wall, Refugee Colony, Extension of Panchayat Road & Protection Wall of the Ponds at Balgopalpur.BAL installed CC Camera near Hatiagand Chhak traffic , Remuna Bazar.</p>
                     <hr />
                  </>
                  <>
                    <p className="csr-heading">(v) Women Empowerment:</p> 
                    <div className="blue-line mt-2 mb-4"></div>
                    <p>Company has taken various initiatives for empowering rural women by providing special training programmes on Tailoring, making serving plates from semi dried leaves, Incense sticks making, etc. resulting into self-employment generation for supporting their families. Further, Women’s Self Help Groups have also been formed to make them self-dependent.</p>
                     <hr />
                  </>
                   <>
                    <p className="csr-heading">(vi) Education Development:</p> 
                    <div className="blue-line mt-2 mb-4"></div>
                    <p>With the view to enhance and support educational facilities, BAL has supplied desk & benches to school in Nuapadhi. Further to minimize teacher to student ratio, BAL is providing remuneration to additional teacher’s. Providing College Bus transportation facilities for Sukinda college. Various skill development programmes were conducted. Sponsoring financial assistance for higher education & establishing Coaching centres for students.</p>
                     <hr />
                  </>
                   <>
                    <p className="csr-heading">(vii) Swachh Bharat Abhiyan:</p> 
                    <div className="blue-line mt-2 mb-4"></div>
                    <p>Installation of six Bio-e toilets in three schools in Kaliapani, construction of toilets alongwith Bathrooms for 90 identified households in Baragali village, sukinda, clening of ponds, construction of pucca ghats etc are some of the projects undertaken by the company to Promote Swachh Bharat Mission.</p>
                     <hr />
                  </>
              </ScrollAnimation>
              <ScrollAnimation animateIn="lightSpeedInLeft">
                 <p className="csr-heading">2. The composition of the CSR Committee: </p>
                <p>We have a CSR Committee of the Board of Directors who overviews the CSR undertakings to ensure that the CSR objectives are met. Our CSR Committee comprises:- NA</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="lightSpeedInLeft">
                 <p className="csr-heading">3. Average Net Profit of the company for last 3 financial years & Prescribed CSR expenditure: </p>
                <p>Section 135 of the Companies Act, 2013 and rules made there under prescribes that every company having a net worth of Rs. 500 Crores or more, or turnover of Rs. 1000 Crores or more or a net profit of Rs. 5 Crores during any financial year shall ensure that the Company spends, in every financial year at least 2% of the average net profit made during the three immediately preceding financial years, in pursuance of its CSR Policy. The provisions pertaining to corporate social responsibility (‘CSR’) as prescribed under the Companies Act, 2013 are not applicable to the company for the financial year 2022-23. </p>
              </ScrollAnimation>
            </fieldset>
          </div><br></br><br></br>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h6>ANNUAL REPORT 2018-19</h6>
              <div className="blue-line mt-2 mb-4"></div>
              <ScrollAnimation animateIn="lightSpeedInLeft">
              <p>Our CSR activities are based on sustainable development and inclusive growth. We are working with our communities to bring about sustainability.</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="lightSpeedInRight">
              <p className="text-right">For more Information, <Link href={"/files//CSR 2018-19.pdf"} passHref><span className="text-primary">Click Here</span></Link></p>
              </ScrollAnimation>
            </fieldset>
          </div><br></br><br></br>
          <div className="col-sm-12 mt-2">
            <fieldset className="article-box-border">
              <h6>Post Fani, Balasore Alloys volunteers at the forefront of Cyclone Relief at Puri</h6>
              <p className="smaller">* Serves 29,000 hungry cyclone victims</p>
              <div className="blue-line mt-2 mb-4"></div>
               <ScrollAnimation animateIn="lightSpeedInLeft">
              <p className="csr-heading">Balasore: 14th May 2019:</p><p>  Balasore Alloys Ltd. (BAL) - India’s leading Ferrochrome manufacturer, post Fani cyclone immediately stepped in resources, deployed volunteers - 17 numbers, 11 cooks and logistical support last weekend to move two truckload  materials and live kitchen apparatus to the worst affected Puri District of Orissa within 24 hours of notice. </p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="lightSpeedInRight">
              <p>The bandobast requirement to get community kitchen functional overnight was a huge challenge for BAL, however, with proper planning and interactions with government officials, all aspects of relief operations and distribution went off smoothly as planned.</p>
              <p>The BAL team has returned today to Balasore satisfied after feeding 29,000 most vulnerable cyclone Fani victims from its live kitchen platform located at Circuit House, Puri.</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="lightSpeedInLeft">
              <p>The objective was to partner and assist Government initiative to provide on-ground relief to assist cyclone victims with freshly cooked meals - three times a day and delivering much loved piped hot Khichadi and water to the people who had little or nothing to eat. The entire food production unit was certified by the District Food Safety Officer.</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="lightSpeedInRight">
              <p>Thanks to Collector, Puri, Mr. Balwant Singh and BMC Commissioner, Mr. C S Rathore’s support and assistance, a large part of Circuit House complex at Puri opposite to District Magistrate’s office was converted to BAL’s large kitchen operations and logistics distribution to slum areas (Nilachakrapur, Herdi Sahi, Jena Sahi, Muslim Basti, Khandia Bandh, Pentha Sahi, ITI areas, Pradhan Sahi and Mallik Sahi) was manned by BAL volunteers assisted by District Municipal officials.</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="lightSpeedInLeft">
              <p>Apart from District Administration support and initiatives, through the active help and participation of Mr. Sanjay Das Burma, MLA Brahmagiri, BAL volunteers were able to extend relief operations to 5,500 people in the remote Brahmagiri’s two outpost islands Berhampur and Mahinsa, where mode of communications is through boat ride only.</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="lightSpeedInRight">
              <p>Commenting on BAL’s initiatives to touch lives at Puri – Brahmagiri area, Mr. Sanjay Das Burma, MLA Brahmagiri said “I am happy to note that Balasore Alloys Ltd. took initiative to assist the people living in inaccessible areas at Brahmagiri who are cut off from the mainstream”.</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="lightSpeedInLeft">
              <p>Madhumita Mohapatra, volunteer Red Cross Society, commented “BAL replaced Akshayapatra kitchen facilities which got blown away due to cyclone Fani by giving planned hot food supply to the surrounding inhabitants of Puri”.</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="lightSpeedInRight">
              <p>“BAL’s participation to impact people’s lives at the time of natural calamity was a social responsibility commitment. Throughout the Company’s 28 years of history, social responsibility commitment has been integral to BAL’s Vision and Value system” said Sangram Mohanty, CSR Head, Balasore Alloys Ltd.</p>
              </ScrollAnimation>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
                className="responsive-masonry"
              >
                <Masonry gutter={'20px'}>
                  {[
                    '/images/csr/cyclone-1.jpg',
                    '/images/csr/cyclone-2.jpg',
                    '/images/csr/cyclone-3.jpg',
                    '/images/csr/csr2.jpg',
                  ].map((i, k) => <Zoom key={k}>
                    <img style={{ border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 2px 1px #efefef' }} src={i} alt="Image" className="w-100 max-width-100 overflow-hidden" />
                  </Zoom>)}
                </Masonry>
              </ResponsiveMasonry>
            </fieldset>
          </div>

        </div>

         </div> 

      </SidebarContent>
      <Footer />
    </>
  );
}
