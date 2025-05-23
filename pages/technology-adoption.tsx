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
        <title>{`Technology Adoption - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Technology Adoption"
        breadcrumbs={[
          { name: "Facilities", link: "#" },
          { name: "Technology Adoption", link: "" },
        ]}
      />
      <SidebarContent navFor="Facilities">
        <div className="mb-5">
          <p>
            The company adopts the most advanced technologies into its
            manufacturing process to ensure desired quality of its products. The
            advanced process technology and sophisticated equipment have been
            acquired from World leaders of Metals & Ferro Alloy equipment like
            ELKEM, MINTEK, Tenova-Pyromet.
          </p>
          <p>
            The manufacturing process is fully automated using advanced control
            systems acquired from Rockwell Automation. SCADA systems were
            introduced way back in 1989 and same has been upgraded to new
            generation “control Logix” system of Rockwell Automation 2007 to
            facilitate operation of furnace electrode, weighing and batching
            system to maintain the consistency of the operation.
          </p>
          <p>
            A highly sophisticated real-time computerized system enables better
            monitoring and control of all aspects of furnace operation.
            Sophisticated web-based real-time monitoring systems enable the
            production team to monitor the process from anywhere across the
            globe.
          </p>
          <p>
            The manufacturing process is power intensive and power is sourced
            from the regional grid. The company has a full fledged automated
            “Metal Recovery Plant” to extract the entrapped metal from slag
            which is a major initiative in waste recovery and environmental
            protection. The company also has an automated Chrome Ore
            Beneficiation plant to enrich low grade Chromite ore with a
            throughput of 20 MT/Hr at its Mines.
          </p>
          <p>
            Closed Circuit TVs has been installed at various strategic locations
            of the plant not only to monitor the processes but also to monitor
            the safety of man and machine.
          </p>
          <p>
            In the area of business process, the company has implemented SAP ECC
            6.0 and BI/BO to meet the changing & growing needs of the business.
          </p>
        </div>
      </SidebarContent>
      <Footer />
    </>
  );
}
