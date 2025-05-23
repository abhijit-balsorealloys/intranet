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
        <title>{`Port Facility - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Port Facility"
        breadcrumbs={[
          { name: "Facilities", link: "#" },
          { name: "Port Facility", link: "" },
        ]}
      />
      <SidebarContent navFor="Facilities">

        <div className="mb-5">
          <div className="row">
            <div className="col-md-5">
              <h3>Nearest Ports from the plant are:</h3>
              <div className="blue-line mt-2 mb-4"></div>
              <p><b>Kolkata :</b> 275 Kms from Plant</p>
              <p><b>Haladia :</b> 260 Kms from Plant</p>
              <p><b>Pradeep :</b> 230 Kms from Plant</p>
            </div>
            <div className="col-md-7">
              <Zoom>
                <img src="/images/Nearest-Port.png" className="w-100 mb-4" alt="" />
              </Zoom>
            </div>
          </div>
        </div>
      </SidebarContent>
      <Footer />
    </>
  );
}
