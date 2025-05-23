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
        <title>{`Production Process - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Production Process"
        breadcrumbs={[
          { name: "Facilities", link: "#" },
          { name: "Production Process", link: "" },
        ]}
      />
      <SidebarContent navFor="Facilities">
        <div className="mb-5">
          <p>
          Ferrochrome (FeCr) is a corrosion-resistant alloy of chrome and iron containing between 50% and 70% chrome.
          Ferrochrome production is essentially a carbothermic reduction operation taking place at high temperatures. 
          Cr Ore, an oxide of chromium and iron, is reduced by coal and coke to form the iron-chromium alloy. 
          The heat for this reaction comes typically from the electric arc formed between the tips of the electrodes in the bottom of the furnace and the furnace hearth. 
          This arc creates temperatures of about 2800°C. In the process of smelting, huge amounts of electricity is consumed.
          </p>
          <p>
          The material is tapped from the furnace intermittently. When enough smelted ferrochrome has accumulated in the hearth of the furnace, the tap hole is drilled open and the molten metal and slag are rushed down to a sand bed or cast iron ladles. Once the metal solidifies into cakes, these are shifted to the handling yard where they are cooled down, cleaned and further broken into pieces as per specification of the Customers and packed for dispatch after thorough quality checks.
          </p>
          <fieldset>
          <div className="col-md-7 my-8">
            <Zoom>
          <img src="/images/Production-Process.png" className="w-100 mb-4 max-width-100" alt="" />
          </Zoom>
          </div>
          </fieldset>
        </div>
      </SidebarContent>
      <Footer />
    </>
  );
}
