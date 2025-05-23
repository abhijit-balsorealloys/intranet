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
					<div className="col-sm-12 mt-3">
						<h2>Tender</h2>
						<div className="blue-line mt-2 mb-4"></div>
					</div>

					<SidebarContent navFor="Customers">
						<p>M/S Balasore Alloys Limited, a leading manufacturer of Ferro Chrome in India, located at Balasore, Odisha is looking for experienced and established agencies/contractors for Raw Materials and Ferro Chrome handling with the deployment of the necessary equipment on long term basis. Interested agencies/contractors having experience in a similar line of jobs may submit their offers within 7 days of the publication of the Advertisement.</p>
						<p><strong>For More Details:<Link href="/files/Tender_details.pdf" passHref><a target="_blank"><strong>ISO 55001</strong></a></Link></strong></p>
					</SidebarContent>
				</div>
			</div>
			<Footer />
		</>
	);
}
