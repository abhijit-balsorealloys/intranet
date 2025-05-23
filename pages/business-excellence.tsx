import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";

export default function Page() {
  return (
    <>
      <Head>
        <title>{`Business Excellence - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Business Excellence"
        breadcrumbs={[
          { name: "About", link: "#" },
          { name: "Business Excellence", link: "" },
        ]}
      />
      <SidebarContent navFor="About Us">
        <h2>Business Excellence  : Six Sigma, TPM, Lean Management, Q1Ford</h2>
        <div className="blue-line mt-2 mb-4"></div>
       <p>Our organization always believes in implementing world best practices covering entire business stream. The prime objective is to remain competitive in all respects i.e. productivity, quality, cost and delivery including employee morale.</p>
       <p>To meet the twin objective i.e. to benefit the organization along all performance parameters and also to benefit the employees in terms of enhanced knowledge and exposure to world best practices, our organization has implemented various initiatives from time to time like TPM, Six sigma, Lean Management and Q1Ford.</p>
       <p>Our organization is practising TPM as per JIPM philosophy w.r.t. 8 Pillar structure. We have already achieved level-2 certification. Now we are preparing for TPM Special award.</p>
       <p>We are into Six Sigma for last about 10 years. More than 60 employees have so far been trained as Black Belts and about 300 trained as Green Belts. So far about 80 Six Sigma projects have been successfully accomplished thereby gaining a quantum jump in quality and productivity through usage of Six Sigma statistical tools.</p>
       <p>In the month of March 2013, we launched Lean Management as a new initiative across the organization. So far 25 employees at HOD level have been given Champions training and about 50 have been given detail training on Lean Principles. About 20 lean projects for reduction in wastages, reduction in lead time and reduction in non-value added efforts are underway and progressing very fast.</p>
       <p>We are also in the process of implementing the requirements of Quality system Q1Ford. All the operating procedures across the organization are likely to go a major change to make that equivalent to world class.</p>
       
      </SidebarContent>
      <Footer />
    </>
  );
}
