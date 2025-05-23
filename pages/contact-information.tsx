import Head from "next/head";
import Link from "next/link";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import List from "components/layouts/List";

export default function Page() {
  return (
    <>
      <Head>
        <title>{`Contact Information - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Contact Information"
        breadcrumbs={[
          { name: "Investors", link: "#" },
          { name: "Contact Information", link: "" },
        ]}
      />
      <SidebarContent navFor="Investors">
        <div className="container container-contact">
          <div className="row pb-4">
            <div className="col-sm-6">
              <fieldset className="article-box-border">
                <p><strong>Compliance Officer details</strong></p>
                <p>Name: Mr. Pankaj Agarwal<br></br>
                  Designation: Company Secretary<br></br>
                  Email :<Link href={'mailto:pankaj.agarwal@balasorealloys.com'} passHref><a className="text-primary">pankaj.agarwal@balasorealloys.com</a></Link><br></br>
                  Phone No.: +91-033-4029 7000</p>
              </fieldset>
            </div>
            <div className="col-sm-6">
              <fieldset className="article-box-border">
                <p><strong>Administrative Office</strong></p>
                <p>Park Plaza,<br></br>
                  71, Park Street, 1st Floor,<br></br>
                  Kolkata - 700016<br></br>
                  Phone No.: +91-033-4029 7000<br></br>
                  Fax No.: +91-033-2229 5693<br></br>
                  Email :<Link href={'pankaj.agarwal@balasorealloys.com'} passHref><a className="text-primary">pankaj.agarwal@balasorealloys.com,</a></Link><br></br><Link href={'investors.helpline@balasorealloys.com'} passHref><a className="text-primary">investors.helpline@balasorealloys.com</a></Link><br></br>
                  Web site: <Link href={'www.balasorealloys.com'} passHref><a className="text-primary">www.balasorealloys.com</a></Link></p>
              </fieldset>

            </div>
          </div>
          <div className="row pb-4">
            <div className="col-sm-6">
              <fieldset className="article-box-border">
                <p><strong>REGISTERED OFFICE & WORKS</strong></p>
                <p>Balgopalpur - 756 020<br></br>
                  Dist. Balasore, Orissa, India<br></br>
                  Phone No.: +91-6782-275781-85<br></br>
                  Fax No. :+91-6782-275724<br></br>
                  Email :<Link href={'pankaj.agarwal@balasorealloys.com'} passHref><a className="text-primary">pankaj.agarwal@balasorealloys.com,</a></Link><br></br><Link href={'investors.helpline@balasorealloys.com'} passHref><a className="text-primary">investors.helpline@balasorealloys.com</a></Link><br></br>
                  Web site: <Link href={'www.balasorealloys.com'} passHref><a className="text-primary">www.balasorealloys.com</a></Link></p>
              </fieldset>
            </div>
            <div className="col-sm-6">
              <fieldset className="article-box-border">
                <p><strong>Details of Registrar and Transfer Agent. </strong></p>
                <p>MCS Share Transfer Agent Limited<br></br>
                  (Unit: Balasore Alloys Ltd.)<br></br>
                  383, Lake Gardens, 1st floor,<br></br>
                  Kolkata – 700045<br></br>
                  Phone No.: +91-033-4072 4051/+91-033-4072 4052/+91-033-4072 4053<br></br>
                  Fax No.: +91-033-4072 4050<br></br>
                  Email :<Link href={'mcssta@rediffmail.com'} passHref><a className="text-primary">mcssta@rediffmail.com</a></Link></p>
              </fieldset>

            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <fieldset className="article-box-border">
                <p><strong>Mines Office: Chrome Ore</strong></p>
                <p>Plot No. 1003, (Opp. PWD IB)<br></br>
                  Dhabalgiri, Post Sobra<br></br>
                  Jajpur Road - 755 019, Dt. Jajpur<br></br>
                  Phone No.: +91-6726-224384<br></br>
                  Fax No. :+ 91-6726-224384</p>
              </fieldset>
            </div>
            <div className="col-sm-6">
              <fieldset className="article-box-border">
                <p><strong>Mines Office: Manganese Ore </strong></p>
                <p>(a) Ward No. 5, At & PO Katangi,<br></br>
                  District- Balaghat (M.P.)<br></br>
                  pin- 481 445<br></br>
                  (b)Joda, District- Keonjhar<br></br>
                  Odisha - 758 035</p>
              </fieldset>

            </div>
          </div>
        </div>
      </SidebarContent>
      <Footer />
    </>
  );
}
