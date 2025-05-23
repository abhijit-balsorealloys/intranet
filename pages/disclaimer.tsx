import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import List from "components/layouts/List";

export default function Page() {
  return (
    <>
      <Head>
        <title>{`Disclaimer - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Disclaimer"
        breadcrumbs={[
          { name: "Disclaimer", link: "#" },
        ]}
      />
<div className="container">
    <div className="row">
        <div className="col-sm-12 mt-5">
    <h3>Disclaimer</h3>
    <div className="blue-line mt-2 mb-4"></div>
    <p>The information, material, images, illustrations etc. are collectively stated "the content" in this website. If the said content contains any mistakes, omissions, inaccuracies and typographical errors, etc. Balasore Alloys Ltd (BAL) assumes no responsibility thereof. Any resemblance of any content of this website to other websites is purely coincidental. BAL makes no warranty or representation regarding any content provided through this website and disclaims its liabilities in respect thereof. Any action on your part on the basis of the said content is at your own risk and responsibility. BAL reserves its right to correct any part of the said content at any time as and when required at its sole discretion. The content of this website shall not be displayed or printed in any form in part or whole without the prior written approval of BAL.</p>
    </div>
    </div>
    </div>
      <Footer />
    </>
  );
}
