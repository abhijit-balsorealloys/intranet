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
        <title>{`Privacy Policy - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[
          { name: "Privacy Policy", link: "#" },
        ]}
      />
<div className="container">
    <div className="row">
        <div className="col-sm-12 mt-5">
    <h3>Privacy Policy</h3>
    <div className="blue-line mt-2 mb-4"></div>
    <p>This policy describes the types of information Balasore Alloys gathers from its users of the Balasore Alloys Web site at www.balasore.com and how that information is used. Please read this policy carefully before you provide us with any personal information. If you have questions about this policy, please email us at mail@balasorealloys.com</p>
    <p>Balasore Alloys does not share, rent or sell personal information about you with other people or companies except as described in this privacy policy. For example, when you fill out a "contact the agent" form on a property listing page, or other "contact" form available on the site, the information you submit will be passed on to the agent, or the other party you have requested to contact. We reserve the right to use in any manner and also to disclose any non-personal information that we collect, including but not limited to cookie and traffic data (see "Cookies and Tracking Technologies"). We do not combine personal information with any of the non-personal information gathered on our site.</p>
    <p>We may release personal information when we believe that doing so is appropriate to comply with the law (for example, to respond to a lawful subpoena, warrant or court order); to enforce or apply our policies; to initiate, render, bill, and collect for amounts owed to us; to protect our rights or property; to protect our users from fraudulent, abusive, or unlawful use of, our site or services; or if we reasonably believe that an emergency involving immediate danger of death or serious physical injury to any person requires disclosure of communications or justifies disclosure of records without delay. We may use third party service providers to assist us with the administration of the site or otherwise perform services on our behalf, including payment transaction processing and sending email. Such third parties may be supplied with or have access to your personal information solely to provide services to us or on our behalf.</p>
    <p>We may use third-party ad servers (or ad networks) to deliver ads to you on our behalf. These third-party ad servers may collect and use non-personally identifiable information about your visits to our site in order to present advertisements that may be of interest to you. Information about our users and the site is a business asset of Balasore Alloys. Consequently, information about our users, including personal information, will be disclosed as part of any merger or acquisition, creation of a separate business to provide the site, our services or fulfill products, sale or pledge of company assets as well as in the event of an insolvency, bankruptcy or receivership in which personal information would be transferred as one of the business assets of the company.</p>
    <h3>ACCESS TO PERSONALLY IDENTIFIABLE INFORMATION</h3>
    <div className="blue-line mt-2 mb-4"></div>
    <p>If your personally identifiable information changes, or if you no longer desire our service, you may correct, update, delete or deactivate it by logging into your account or by emailing our Customer Support at mail@balasorealloys.com or by contacting us by postal mail at the contact information listed below.</p>
    <h3>POLICY CHANGES</h3>
    <div className="blue-line mt-2 mb-4"></div>
    <p className="mb-5">We reserve the right to change this policy should we deem it advisable to do so. If we make significant changes that affect the use or disclosure of your personal information, we will make reasonable efforts to notify you of the changes such as notifying you here, by email, or by means of a notice on our home page and will give you the opportunity to cancel your registration.</p>
    </div>
    </div>
    </div>
      <Footer />
    </>
  );
}
