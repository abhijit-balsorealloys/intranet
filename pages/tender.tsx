import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";

export default function Page() {
	return (
		<>
			<Head>
				<title>{`Tender - ${appName}`}</title>
			</Head>
			<Header />
			<PageHeader title="Tender" breadcrumbs={[
				{ name: 'Customers', link: '#' },
				{ name: 'Tender', link: '' },
			]} />
            <div className="container">
            <div className="row">
			<SidebarContent navFor="Customers">
            <div className="col-sm-12 mt-3">
            <h2>Tender</h2>
            <div className="blue-line mt-2 mb-4"></div>
            </div>
            <p>M/S Balasore Alloys Limited, a leading manufacturer of Ferro Chrome in India, located at Balasore, Odisha is looking for experienced and established agencies/contractors for Raw Materials and Ferro Chrome handling with the deployment of the necessary equipment on long term basis. Interested agencies/contractors having experience in a similar line of jobs may submit their offers within 7 days of the publication of the Advertisement.</p>
            <p><strong>For More Details:<Link href="/files/Tender_details.pdf" passHref><a target="_blank"><strong>Download Here</strong></a></Link></strong></p>

            <p>Please Submit your Details along With Attached Documents :<Link href="https://www.balasorealloys.com/vendor_registration_form.php" passHref><a className="text-primary" target="_blank"> https://www.balasorealloys.com/vendor_registration_form.php</a></Link> </p>
            <p>KYC Form : <Link href="/files/KYC- General.pdf" passHref><a className="text-primary" target="_blank">DownLoad Here</a></Link>, You can submit the fill-up KYC  form and send mail to "<Link href='mailto:durga.das@balasorealloys.com' passHref><a className='text-primary'>durga.das@balasorealloys.com</a></Link>" along with attached KYC documents. </p>
            <h3>Contact Details:</h3>
            <div className="blue-line mt-2 mb-4"></div>
            <p><strong>REGISTERED OFFICE & WORKS :</strong></p>
            <p className="mb-5">Balgopalpur - 756 020,<br></br>Dist. Balasore, Odisha, India<br></br>Tel. Nos. +91-6782-275781-85<br></br>Fax No. +91-6782-275724<br></br>E-mail: mail@balasorealloys.com</p>
			</SidebarContent>
            </div>
                </div>
			<Footer />
		</>
	);
}
