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
				<title>{`Page - ${appName}`}</title>
			</Head>
			<Header />
			<PageHeader title="Page" breadcrumbs={[
				{ name: 'About', link: '#' },
				{ name: 'Profile', link: '' },
			]} />
			<SidebarContent navFor="About Us">
			</SidebarContent>
			<Footer />
		</>
	);
}
