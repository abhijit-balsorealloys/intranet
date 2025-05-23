import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import HeroSlider from "components/layouts/HeroSlider";
import MdSection from "components/layouts/MdSection";
import TwoTabs from "components/layouts/TwoTabs";
import Stories from "components/layouts/Stories";
import Employee from "components/layouts/Employee";
import NoticeSection from "components/layouts/NoticeSection";
import Footer from "components/layouts/Footer";


export default function Page() {
	return (
		<>
			<Head>
				<title>{`Home - ${appName}`}</title>
			</Head>
			<Header />
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8">
						<HeroSlider />
					</div>
					<div className="col-md-4">
						<TwoTabs />
					</div>
				</div>
			</div>
			<MdSection />
			<NoticeSection />
			<Stories />
			<Employee />
			<Footer />
		</>
	);
}
