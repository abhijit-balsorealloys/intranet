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
        <title>{`Stock Exchange - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Stock Exchange"
        breadcrumbs={[
          { name: "Investors", link: "#" },
          { name: "Stock Exchange", link: "" },
        ]}
      />
      <SidebarContent navFor="Investors">
       
      <p><strong>Bombay Stock Exchange Limited</strong></p>
				<p>Phiroze Jeejeebhoy Towers</p>
				<p>Dalal Street,</p>
                <p>Mumbai - 400 023</p>
                <p>Stock Code : 513142</p>

                <p><strong>The Calcutta Stock Exchange Association Limited</strong></p>
				<p>Limited 7, Lyons Range,</p>
				<p>Kolkata - 700001</p>
                <p>Stock Code : 10019059</p>
                <img src="/images/exchangeimage.jpg" width={300} height={300} alt="" />
                <img src="/images/2000px-Bombay_Stock_Exchange_logo.png" width={300} alt="" />
               
      </SidebarContent>
      <Footer />
    </>
  );
}
