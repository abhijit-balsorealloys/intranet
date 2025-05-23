/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import Image from "next/image";
import List from "components/layouts/List";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Zoom from 'react-medium-image-zoom';
import MasonryPDF from "components/layouts/MasonryPDF";

const imgData = [
  '/images/Balasore-Balgopalpur_IMS_Final Certificate_page-0003.jpg',
  '/images/jis.jpg',
  '/images/ISO%209001%202015%20-%20QMS-page-001.jpg',
  '/images/2017_07_25_16_26_27_ISO_27001_2013_Certificate.pdf_SECURED_Adobe_Acrobat_Reader_DC (1).jpg',
  '/images/ISO 14001 2015 - EMS-page-001.jpg',
  '/images/55001.jpg',
  '/images/OHSAS CERTIFICATE.jpg',
  '/images/NABL.jpg',
  '/images/EnMS 50001.jpg',
  '/images/scap-1A.jpg',
  '/images/scap-1.jpg',
  '/images/scap-2.jpg',
  '/images/scap-3.jpg',
  '/images/scap-4.jpg',
  '/images/scap-7.jpg',
  '/images/scap-6.jpg',
  '/images/scap-8.jpg',
  '/images/scap-10.jpg',
  '/images/scap-11.jpg',
  '/images/scap-12.jpg',
  '/images/scap-13.jpg',
  '/images/scap-9.jpg',
]

export default function Page() {
  return (
    <>
      <Head>
        <title>{`Quality Assurance - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Quality Assurance"
        breadcrumbs={[
          { name: "Quality Assurance", link: "#" },
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 py-5">
            <h2>Quality Assurance Features</h2>
            <div className="blue-line mt-2"></div>
          </div>
          <div className="col-sm-12 pb-5">
            <div className="mb-5">
              <List
                data={[
                  <>
                    Involvement of Quality Assurance at every stage as an integrated approach to assure quality.
                  </>,
                  <>
                    In built checks and balances ensure effective controls
                  </>,
                  <>
                    Process and product quality
                  </>,
                  <>
                    Quality assurance and standards
                  </>,
                  <>
                    Quality Planning
                  </>,
                  <>
                    Quality Control
                  </>,
                  <>
                    System of feedback
                  </>,
                  <>
                    Quality system Audits of production and process
                  </>,
                  <>
                    ISO 9001:2015,ISO 14001:2015, OHSAS 18001:2007, ISO 50001:2011 and ISO 55001:2014 certified.
                  </>,
                  <>
                    Well defined vendor assessment system
                  </>,
                  <>
                    Standardisation
                  </>,

                ]}
              />
              <p className="mt-4">Some unique features of bal QA system are elaborated below :</p>
              <List
                data={[
                  <>
                    Right and proven technology
                  </>,
                  <>
                    Right equipment
                  </>,
                  <>
                    Right sources
                  </>,
                  <>
                    Right Systems
                  </>,
                  <>
                    Manufacturing quality
                  </>,
                  <>
                    Field quality in both raw material and finish product
                  </>,
                  <>
                    Best Practices
                  </>,

                ]}
              />
              <p className="mt-5"><strong>ISO CERTIFICATION</strong></p>
              <p>The global adoption of ISO 9001 may be attributable to a number of factors. a number of major purchasers require their suppliers to hold ISO 9001 certification.</p>
              <p><strong>Plant has obtained ISO 9001:2015 (QMS), ISO 14001:2015 (EMS), OHSAS  18001:2007, ISO 50001:2011 (EnMS) & ISO 55001:2014 (AMS)  certifications.</strong></p>
              <p><big>Click Below Link to View  ISO Certifications </big></p>
              <MasonryPDF data={[
                { name: 'ISO 9001_14001_45001', link: '/files/01 ISO 9001_14001_45001 BALASORE ALLOYS LTD.pdf' },
                { name: 'ISO 55001', link: '/files/02 ISO 55001 BALASORE ALLOYS LTD.pdf' },
                { name: 'ISO 50001', link: '/files/03 ISO 50001 BALASORE ALLOYS LTD.pdf' },
                { name: 'SA8000 2014', link: '/files/04 SA8000 2014 - SA.pdf' },
                { name: 'Balasore-Balgopalpur_IMS_Final Certificate', link: '/files/Balasore-Balgopalpur_IMS_Final Certificate.pdf' },
                { name: 'BCB 202 - Conditions for Use of NABCB Accreditation Mark- Feb 2019', link: '/files/BCB 202 - Conditions for Use of NABCB Accreditation Mark- Feb 2019.pdf' },
                { name: 'Terms and Conditions 2022', link: '/files/terms_and_conditions-2022-en.pdf' },
              ]} />

              <h3 className="mt-4"><strong>Our Certifications</strong></h3>
              <div className="blue-line mt-2 mb-4"></div>

              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                className="responsive-masonry"
              >
                <Masonry gutter={'20px'}>
                  {imgData.map((i, k) => <Zoom key={k}>
                    <img style={{ border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 2px 1px #efefef' }} src={i} alt="Image" className="w-100 max-width-100 overflow-hidden" />
                  </Zoom>)}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
