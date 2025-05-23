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
				<title>{`HR Practices - ${appName}`}</title>
			</Head>
			<Header />
			<PageHeader title="HR Practices" breadcrumbs={[
				{ name: 'Career', link: '#' },
				{ name: 'HR Practices', link: '' },
			]} />
            
           
			<SidebarContent navFor="Careers">
	
            <h2>Working with us</h2>
            <div className="blue-line mt-2 mb-4"></div>
            <p className="mt-4">We have a culture that is always open and innovative. Such an environment fosters creative thinking and novel ideas to meet the challenges with new zeal and vigour. We have state of the art manufacturing plants and ergonomically designed offices that have open cubicles for all. We believe this reflects our culture and adds to the trust and the bonding we share within the company.</p>
            <p>Balasore Alloys Ltd is an equal opportunity employer. We hire the best talent, emphasizing continuous learning and development, giving every one the chance to develop and enhance their career without compromising on Safety.</p>
            <p>We take pride in adhering to the code of conduct, which is in place across the entire Group. The code is a means of upholding and strengthening the trust reposed on us by our various stakeholders, be it our customers or the society at large.</p>
           <p className="mb-4">With us, everyone will have the opportunity to work with incredible individuals in team situations with amazing challenges. Every individual’s career will grow in an environment that nurtures talent, creates challenging assignments, offers competitive rewards, and fosters constructive communication.</p>
			</SidebarContent>
           
			<Footer />
		</>
	);
}
