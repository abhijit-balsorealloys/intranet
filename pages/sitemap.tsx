import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import List from "components/layouts/List";

export default function Page() {
  return (
    <>
      <Head>
        <title>{`Sitemap - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Sitemap"
        breadcrumbs={[
          { name: "Sitemap", link: "#" },
        ]}
      />
<div className="container">
    <div className="row">
        <div className="col-sm-4 mt-5">
    <h3><Link href="#" passHref><a target="_blank">About Us</a>
    </Link></h3>
    <div className="blue-line mt-2 mb-4"></div>
    
    <div className="mt-2">
    <List
            data={[
              <>
                <Link href="/profile" passHref><a target="_blank">Profile</a></Link>
              </>,
              <>
                <Link href="/vision-mission-values" passHref><a target="_blank">Vision Mission Values</a></Link>
              </>,
              <>
              <Link href="/board-of-directors" passHref><a target="_blank">Board of Directors
                </a></Link>
              </>,
              <>
              <Link href="/committee-of-board-of-directors" passHref><a target="_blank">Committees of Board of Directors
                </a></Link>
              </>,
               <>
               <Link href="/history-milestones" passHref><a target="_blank">History & Milestones
                 </a></Link>
               </>,

            ]}
          />
          </div>
          </div>
    <div className="col-sm-4 mt-5">
    <h3><Link href="#" passHref><a target="_blank">Facilities</a>
    </Link></h3>
    <div className="blue-line mt-2 mb-4"></div>
    
    <List
            data={[
              <>
                <Link href="/business-activities" passHref><a target="_blank">Business Activities</a></Link>
              </>,
              <>
                <Link href="/technology-adoption" passHref><a target="_blank">Technology Adoption</a></Link>
              </>,
              <>
              <Link href="/production-process" passHref><a target="_blank">Production Process
                </a></Link>
              </>,
              <>
              <Link href="/ore-mining-facilities" passHref><a target="_blank">Ore Mining Facilities
                </a></Link>
              </>,
               <>
               <Link href="/benefication-facilities" passHref><a target="_blank">Benefication Facilities
                 </a></Link>
               </>,
               <>
                <Link href="/metal-recovery-facilities" passHref><a target="_blank">Metal Recovery Facilities
                  </a></Link>
              </>,
              <>
              <Link href="/port-facility" passHref><a target="_blank">Port Facility
                </a></Link>
              </>,
              <>
              <Link href="/research-development" passHref><a target="_blank">Research & Development
                </a></Link>
              </>,

            ]}
          />
        </div>
        <div className="col-sm-4 mt-5">
    <h3><Link href="#" passHref><a target="_blank">Customers</a>
    </Link></h3>
    <div className="blue-line mt-2 mb-4"></div>
    
    <List
            data={[
              <>
                <Link href="/our-valued-customers" passHref><a target="_blank">Valued Customers</a></Link>
              </>,
              <>
                <Link href="/customer-feedback" passHref><a target="_blank">Customer Feedback</a></Link>
              </>,
              <>
              <Link href="/customer-enquiry-products" passHref><a target="_blank">Customer Enquiry Form for  Products
                </a></Link>
              </>,
              <>
              <Link href="/customer-complaint-form" passHref><a target="_blank">Customer Complaint Form
                </a></Link>
              </>,

            ]}
          />
        </div>
        <div className="col-sm-4">
        <h3><Link href="/products" passHref><a target="_blank">Products</a>
    </Link></h3>
    <div className="blue-line mt-2 mb-4"></div>
        </div>
        <div className="col-sm-4">
        <h3><Link href="/quality-assurance" passHref><a target="_blank">Quality Assurance</a>
    </Link></h3>
    <div className="blue-line mt-2 mb-4"></div>
        </div>
        <div className="col-sm-4">
        <h3><Link href="/contact" passHref><a target="_blank">Contact Us</a>
    </Link></h3>
    <div className="blue-line mt-2 mb-4"></div>
        </div>
        <div className="col-sm-4 mt-5">
    <h3><Link href="#" passHref><a target="_blank">Investors</a>
    </Link></h3>
    <div className="blue-line mt-2 mb-4"></div>
    
    <div className="mt-2">
    <List
            data={[
              <>
                <Link href="/board-meeting-intimations" passHref><a target="_blank">
                    Board Meeting Intimation</a></Link>
              </>,
              <>
                <Link href="/shareholder-pattern" passHref><a target="_blank">Shareholding Pattern</a>
                </Link>
              </>,
              <>
              <Link href="/financial-reports" passHref><a target="_blank">Financial Reports
                </a></Link>
              </>,
              <>
              <Link href="/annual-reports" passHref><a target="_blank">
                Annual Reports</a></Link>
              </>,
              <>
               <Link href="/financial-statement-of-milton-holdings-limited" passHref><a target="_blank">
                Financial Statement Of Milton Holdings Limited</a></Link>
              </>,
            <>
            <Link href="/history-milestonesfinancial-statement-of-balasore-metals-pte-limited" passHref><a target="_blank">
             Financial Statement Of Milton Holdings LimitedFinancial Statement Of Balasore 
             Metals Private Limited</a></Link>
            </>,
             <>
             <Link href="/stock-exchange" passHref><a target="_blank">
             Stock Exchange</a></Link>
             </>,
             <>
             <Link href="/letter-sent-to-stock-exchanges" passHref><a target="_blank">
             Letter Sent To Stock Exchange</a></Link>
             </>,
             <>
             <Link href="/corporate-governance" passHref><a target="_blank">
             Corporate Governance</a></Link>
             </>,
             <>
             <Link href="/shareholders-information" passHref><a target="_blank">
             Share Holders Information</a></Link>
             </>,
             <>
             <Link href="/contact-information" passHref><a target="_blank">
             Contact Information</a></Link>
             </>,
             <>
             <Link href="/annual-general-meeting" passHref><a target="_blank">
             Annual General Meeting</a></Link>
             </>,
             <>
             <Link href="/postal-ballot" passHref><a target="_blank">
             Postal Ballot</a></Link>
             </>,
              <>
              <Link href="/corporate-codes-policies" passHref><a target="_blank">
              Corporate Code Policies</a></Link>
              </>,

            ]}
          />
          </div>
          </div>
          <div className="col-sm-4 mt-5">
    <h3><Link href="#" passHref><a target="_blank">SUSTAINABILITY</a>
    </Link></h3>
    <div className="blue-line mt-2 mb-4"></div>
    
    <div className="mt-2">
    <List
            data={[
              <>
                <Link href="/safety" passHref><a target="_blank">
                Safety</a></Link>
              </>,
              <>
                <Link href="/occupational-health" passHref><a target="_blank">Occupational Health</a>
                </Link>
              </>,
              <>
              <Link href="/csr" passHref><a target="_blank">CSR
                </a></Link>
              </>,
              <>
              <Link href="/environmental-policy" passHref><a target="_blank">
              Environmental Policy</a></Link>
              </>,
            ]}
          />
          </div>
          <h3 className="mt-4"><Link href="#" passHref><a target="_blank">MEDIA</a>
    </Link></h3>
    <div className="blue-line mt-2 mb-4"></div>
    
    <div className="mt-2">
    <List
            data={[
              <>
                <Link href="/current-news" passHref><a target="_blank">
                News</a></Link>
              </>,
              <>
                <Link href="/events" passHref><a target="_blank">Events</a>
                </Link>
              </>,
    
            ]}
          />
          </div>

          <h3 className="mt-4"><Link href="#" passHref><a target="_blank">CAREERS</a>
    </Link></h3>
    <div className="blue-line mt-2 mb-4"></div>
    
    <div className="mt-2">
    <List
            data={[
              <>
                <Link href="/hr-practices" passHref><a target="_blank">
                HR Practices</a></Link>
              </>,
              <>
                <Link href="/current-openings" passHref><a target="_blank">Current Openings</a>
                </Link>
              </>,
    
            ]}
          />
          </div>

          </div>

          </div>
    </div>
      <Footer />
    </>
  );
}
