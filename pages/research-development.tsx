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
        <title>{`Research & Development - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Research & Development"
        breadcrumbs={[
          { name: "Facilities", link: "#" },
          { name: "Research & Development", link: "" },
        ]}
      />
      <SidebarContent navFor="Facilities">
        <div className="mb-5">
          <p>
            The company has a well equipped R & D division with Sophisticated Analytical Equipment like XRF (Regaku-Supermini200), Atomic absorption spectrometer, LECO analyzers (for carbon & sulphur analysis) and UV spectro photometer, which assures quality of incoming raw material, process output and finish products.
          </p>
          <h3>Research & Development Activities :</h3>
          <div className="blue-line mt-2 mb-4"></div>
          <p>
            Qualified & experienced Chemists ensure that the desired quality standards of the customers are fulfilled.</p>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <List
                  data={[
                    <>
                      Improve the process control
                    </>,
                    <>
                      Increase metal recovery
                    </>,
                    <>
                      Optimization of reductant consumption
                    </>,
                    <>
                      Minimize flux consumption
                    </>,
                    <>
                      Reuse of solid waste
                    </>,
                    <>
                      Improving and optimizing furnace efficiency
                    </>,
                    <>
                      Developing processes for pre-heating and pre-reduction of mineral inputs
                    </>,
                    <>
                      Constant process improvement for increasing output quality to customers specifications
                    </>,
                    <>
                      Upgrading & developing new products
                    </>,
                  ]}
                />
              </div>
              <div className="col-sm-6">
                <Zoom>
                  <img src="/images/rd1.jpg" className="w-100 mb-4" alt="" />
                </Zoom>
                <Zoom>
                <img src="/images/rd2.jpg" className="w-100 mb-4" alt="" />
                </Zoom>
              </div>
            </div>
          </div>
          <fieldset className="border border-secondary">
            <div className="col-md-12 mt-4">
              <p>Analyzing complex matrix materials with a wide range of light and heavy elements, from trace to high concentration levels, is the instrument's core competency. Rigaku Supermini200 delivers high sensitivity for light elements with superior spectral resolution for resolving line overlaps in complex matrices without the need for deconvolution. Analyzing low concentration levels of light elements (F, Na, Mg, Ca, Si, Al, and P) is easy.
              </p>
            </div>
          </fieldset>
        </div>
      </SidebarContent>
      <Footer />
    </>
  );
}
