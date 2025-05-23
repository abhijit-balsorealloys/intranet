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
        <title>{`Beneficiation Facilities - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Beneficiation Facilities"
        breadcrumbs={[
          { name: "Facilities", link: "#" },
          { name: "Beneficiation Facilities", link: "" },
        ]}
      />
      <SidebarContent navFor="Facilities">
      <br></br><br></br><br></br>
        <div className="mt-6">
            <h3>Chrome Ore Beneficiation Plant</h3>
            <div className="blue-line mt-2 mb-4"></div>
          <p className="py-3">
          Chromite Ore fines extracted from the mine is fed into the Beneficiation Plant where the entrenched waste is separated from the ore. Waste is separated by dense medium separation and concentrate material is separated through a spiral centrifugal water process. Fine waste is separated in a thickener and the sludge is pumped to a tailings dam. No effluent is discharged out of the plant premises. This is yet another major initiative taken but the company towards environmental protection.
         </p>
         </div>
      </SidebarContent>
      <Footer />
    </>
  );
}