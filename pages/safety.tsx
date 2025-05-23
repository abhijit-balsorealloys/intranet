import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import List from "components/layouts/List";
import Image from "next/image";
import Zoom from 'react-medium-image-zoom';

export default function Page() {
	return (
		<>
			<Head>
				<title>{`Safety - ${appName}`}</title>
			</Head>
			<Header />
			<PageHeader title="Safety" breadcrumbs={[
				{ name: 'Sustainability', link: '#' },
				{ name: 'Safety', link: '' },
			]} />
			<SidebarContent navFor="Sustainability">
				<h2>Policy : </h2>
				<div className="blue-line mt-2 mb-4"></div>
				<p>Balasore alloys limited (bal) shall establish and maintain a productive work environment by assigning high importance to occupational health & safety (ohs) in every sphere of it’s activity.</p>
				<h2>Objective : </h2>
				<div className="blue-line mt-2 mb-4"></div>
				<List
					data={[
						<>
							<span className="list-mobile">To minimize / eliminate occupational health & safety (ohs) risk</span>
						</>,
						<>
							<span className="list-mobile">Total compliance of applicable rules & regulations</span>
						</>,
						<>
							<span className="list-mobile">To bring contineous improvements to sustain accident free operations.</span>
						</>,
						<>
							<span className="list-mobile">To improve production & productivity through adherence to sustainable ohs management system giving priority on   awareness, training & motivation.</span>
						</>,
					]}
				/>
				<h2>Commitment :</h2>
				<div className="blue-line mt-2 mb-4"></div>
				<p>Commited to strive collectively as a team for contineous improvement to reach desired effectiveness of ohs policy.</p>
				<h2>Overview (Safety first... in whatever we do!):</h2>
				<div className="blue-line mt-2 mb-4"></div>
				<p>The safety and health of employees, partners, service providers and the public, the well being of stakeholders and the minimization of impact on the natural environment are a priority at BAL. Health Safety and Environment( HSE) are key focus areas and integrated into our business operations at every level and vertical.</p>
				<p>The main objective of BAL’s HSE programme is to allow teams to attain a healthy and safe work place with highlight on zero injury and environmental protection. “Zero accident” is the ultimate goal. The achievement of “Zero accident” is based on our long-term beliefs that injuries can be prevented, and working safely is a condition of employment. So, we achieved a milestone of 2.35 million accident free man hours. These beliefs find practical implementation through :</p>
				<List
					data={[
						<>
							<span className="list-mobile">Hazard Identification & access the Risk with control measures.</span>
						</>,
						<>
							<span className="list-mobile">Effective employees safety training (On Job & Class room).</span>
						</>,
						<>
							<span className="list-mobile">Regular Safety Inspections.</span>
						</>,
						<>
							<span className="list-mobile">Periodical external & internal Safety audit.</span>
						</>,
						<>
							<span className="list-mobile">Safety Patrol.</span>
						</>,
						<>
							<span className="list-mobile"> Near-miss Management.</span>
						</>,
						<>
							<span className="list-mobile">Stringent monitoring of unsafe Act/ Conditions through different departmental Safety Circles.</span>
						</>,
						<>
							<span className="list-mobile">Zero tolerance policy towards implantation of SOP & work permit system.</span>
						</>,
						<>
							<span className="list-mobile">Emergency preparedness & review through mock drills.</span>
						</>,
						<>
							<span className="list-mobile">Safety Checks for newly installed equipments or any process change. </span>
						</>,
						<>
							<span className="list-mobile">Conducting Safety Promotional Activities for employees involvement & awareness.</span>
						</>,
						<>
							<span className="list-mobile">Complying of Statutory requirement.</span>
						</>,
						<>
							<span className="list-mobile">Implementing contractor’s safety management system</span>
						</>,
					]}
				/>
				<p>Apart from the above the company brings continual improvement in its HSE objective through implementation of Environment, Safety and Health management system as per ISO 14001, ISO 9001 & started initiative for implementation of OHSAS 18001.</p>
				<h2>Events : </h2>
				<div className="blue-line mt-2 mb-4"></div>
				<List
					data={[
						<><span className="list-mobile">Celebration of National Safety Week.</span></>,
						<><span className="list-mobile">Celebration of Road Safety Week.</span></>,
						<><span className="list-mobile">Celebration of Fire Service Week.</span></>,
						<><span className="list-mobile">Celebration of World Environment Day.</span></>,
						<><span className="list-mobile">Celebration of National Disaster Day.</span></>,
					]}
				/>
				<h2>Safety Performance Indicator for last three years :</h2>
				<div className="blue-line mt-2 mb-4"></div>
				<p className="text-center text-primary"><strong>Year - </strong>2010 - 2011 - 2012</p>
				<Zoom>
					<img src="/images/ltifr.jpg" width={700} height={350} className="mb-4 max-width-100" alt="Safety Performance Indicator" />
				</Zoom>
				<p className="text-center text-primary"><strong>LTIFR -</strong>4.01 - 1.026 - 0</p>
			</SidebarContent>
			<Footer />
		</>
	);
}
