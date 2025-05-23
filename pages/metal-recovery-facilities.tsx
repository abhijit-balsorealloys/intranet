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
        <title>{`Metal Recovery Facilities - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Metal Recovery Facilities"
        breadcrumbs={[
          { name: "Facilities", link: "#" },
          { name: "Metal Recovery Facilities", link: "" },
        ]}
      />
      <SidebarContent navFor="Facilities">
        <div className="mb-5">  
          <p>
          The Company has developed state-of-the-art ‘Metal Recovery Plant’ with imported as well as indigenous technology (Jigging Systems) controlled by Programmable Logic Controllers. These metal recovery plants are used to recover the entrapped metal (ferrochrome) from the slag generated during the production of Ferro Chrome and Charge Chrome.
         </p>
         <p>
         The slag, which has a metallic content of approximately 4 percent, is passed through crushing units and broken down to minus 15 mm material. This crushed material then passes through the jigging plant where the chrome and slag are separated by means of gravity. The slag chips known as tailings are sold away for pit filling or road building or even for construction purpose. This facility is a major initiative taken by the company towards waste recovery and environmental protection.
         </p>
         </div>
      </SidebarContent>
      <Footer />
    </>
  );
}
