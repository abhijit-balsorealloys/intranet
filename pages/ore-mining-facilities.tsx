import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import List from "components/layouts/List";
import Zoom from 'react-medium-image-zoom';

export default function Page() {
  return (
    <>
      <Head>
        <title>{`Ore Mining Facilities - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Ore Mining Facilities"
        breadcrumbs={[
          { name: "Facilities", link: "#" },
          { name: "Ore Mining Facilities", link: "" },
        ]}
      />
      <SidebarContent navFor="Facilities">
        <div className="mb-5">
            <div className="col-sm-9">
              <Zoom>
        <img src="/images/3oremining.jpg" className="w-100 mb-4" alt="" />
        </Zoom>
        </div>
        
        <h3>Chromite Ore Mines:</h3>
        <div className="blue-line mt-2 mb-4"></div>
          <p>
          The Company has a Captive Chrome Ore Mine in Sukinda Valley in Jajpur District of Odisha which is about 170 kms. from our plant. The mine takes care of the Chrome Ore requirement of the Company.
           </p>
        </div>
      </SidebarContent>
      <Footer />
    </>
  );
}
