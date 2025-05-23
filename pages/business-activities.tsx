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
        <title>{`Business Activities - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Business Activities"
        breadcrumbs={[
          { name: "Facilities", link: "#" },
          { name: "Business Activities", link: "" },
        ]}
      />
      <SidebarContent navFor="Facilities">
        <h2>Mines Resources</h2>
        <div className="blue-line mt-2 mb-4"></div>
        <div className="mb-5">
          <List
            data={[
              <>
                Captive Chrome ore mines with proven resources of ~34 Million MT
              </>,
              <>
                Mines are situated in Sukinda valley, Odisha, which is around
                176 kms from Company’s Ferro chrome plant at Balasore and 28 kms
                from Company’sFerro chrome Plant at Sukinda
              </>,
            ]}
          />
        </div>
        <h2>Manufacturing Ferro Chrome</h2>
        <div className="blue-line mt-2 mb-4"></div>
        <div className="mb-5">
          <p>Company produces two types of FerroChrome:</p>
          <List
            data={[
              <>High Carbon Ferro Chrome</>,
              <>Low Silicon Ferro Chrome</>,
            ]}
          />
          <p>Current capacity of Ferro Chrome is~160,000 MTPA</p>
        </div>
        <h2>Used in Stainless Steel Industry</h2>
        <div className="blue-line mt-2 mb-4"></div>
        <div className="mb-5">
          <p>
            ~75% of the Ferro Chrome produced is used in Stainless Steel
            Industry▪ Chrome content increase toughness, heat resistance,
            increases hardness penetrability and provides corrosion resistance
          </p>
        </div>
      </SidebarContent>
      <Footer />
    </>
  );
}
