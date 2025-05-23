import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";

export default function Profile() {
	return (
		<>
			<Head>
				<title>{`Profile - ${appName}`}</title>
			</Head>
			<Header />
			<PageHeader title="Profile" breadcrumbs={[
				{ name: 'About', link: '#' },
				{ name: 'Profile', link: '' },
			]} />
			<SidebarContent navFor="About Us">
				<p>Balasore Alloy's, formerly Ispat Alloys Limited is part of the renowned Ispat group of Companies, a major business house in the country, promoted by the Mittals. The groups companies are spread across several countries besides India.</p>
				<p>Balasore Alloys was incorporated in the year 1984 at Balasore, Odisha and at present it has two plants with total capacity of 160,000 MTPA. With multiple furnaces of different capacities, the company has the flexibility to produce different grades of Ferro Chrome as per market dynamics. This adds to the competitive advantage of the organization as  a range  product mix can be maintained at the same time even with lower quantity requirements.</p>
				<p>The company has captive mines in different locations in Sukinda Valley at Jajpur Road (Odisha).The mines take care of the Chrome ore requirement of the company. BAL is one of the few Ferro Alloys manufacturing companies in the country having captive mines and this is a major competitive advantage since availability of Chrome ore is very uncertain and the price is volatile. Other raw materials are sourced from both Domestic and International Markets. The products of the company enjoy international reputation.</p>
				<p>The company is IMS (Integrated Management System) certified for Plant site at Balasore and its Mines at Sukinda Jajpur, Odisha. Various management excellence initiatives like Six Sigma, TPM, Supply Chain Management and Performance Management Systems are in place to promote excellence in all areas and improve the overall efficiency of the company.</p>
			</SidebarContent>
			<Footer />
		</>
	);
}
