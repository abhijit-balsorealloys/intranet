import Head from "next/head";
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
				<title>{`Occupational Health - ${appName}`}</title>
			</Head>
			<Header />
			<PageHeader title="Occupational Health" breadcrumbs={[
				{ name: 'Sustainability', link: '#' },
				{ name: 'Occupational Health', link: '' },
			]} />
			<SidebarContent navFor="Sustainability">
				<p> Occupational Health at BAL has a strong focus on primary prevention of hazards & is directed towards protecting the health of its employees and contractors working within our facilities. Deterrent and remedial health is promoted through programmes and initiatives compliant within regulatory requirement. We have a well equipped Ambulance room with dedicated doctor & other medical staffs. One well equipped ambulance is provided round the clock.These staffs are dedicatedly aimed to.</p>
                <div className="mb-5">
          <List
            data={[
              <>
                <span className="list-mobile">Ensuring that the health of the employees (Own & contractors) remains sound.</span>
              </>,
              <>
                <span className="list-mobile">Monitoring health status to determine and advice concerned for adopting preventive measures.</span>
              </>,
              <>
              <span className="list-mobile">Mandating Pre-employment health check-up for new employees & periodic occupational health check up.</span>
            </>,
             <>
            <span className="list-mobile">Ensuring emergency response in case of any eventuality.</span>
            </>,
             <>
             <span className="list-mobile">Accessing occupational Health related risks to employees and contractors Counseling and advising.</span>
             </>,
              <>
             <span className="list-mobile">Monitoring canteen hygiene.</span>
              </>,
             <>
               <span className="list-mobile">Conducting training relating to occupational health, first-aid, etc.</span>
             </>,
            ]}
          />
        </div>
			</SidebarContent>
			<Footer />
		</>
	);
}
