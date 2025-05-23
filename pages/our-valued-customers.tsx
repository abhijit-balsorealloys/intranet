import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import Zoom from 'react-medium-image-zoom';

export default function Page() {
    return (
        <>
            <Head>
                <title>{`Our Valued Customers - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader title="Our Valued Customers" breadcrumbs={[
                { name: 'Customers', link: '#' },
                { name: 'Our Valued Customers', link: '' },
            ]} />

            <SidebarContent navFor="Customers">
                <h2>Our Valued Customers</h2>
                <div className="blue-line mt-2 mb-4"></div>

                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/posco.jpg" width={250} height={100} alt="" className="max-width-100" /></div></td>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/mukand.jpg" width={250} height={100} alt="" className="max-width-100" /></div></td>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/aichi.jpg" width={250} height={100} alt="" className="max-width-100" /></div></td>
                            </tr>
                            <tr>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/mittal.jpg" width={250} height={100} alt="" className="max-width-100" /></div></td>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/kores.jpg" width={250} height={100} alt="" className="max-width-100" /></div></td>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/vardhman.jpg" width={250} height={100} alt="" className="max-width-100" /></div></td>
                            </tr>
                            <tr>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/pos.jpg" width={250} height={100} alt="" className="max-width-100" /></div></td>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/yusco.jpg" width={250} height={100} alt="" className="max-width-100" /></div></td>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/seah.jpg" width={250} height={100} alt="" className="max-width-100" /></div></td>
                            </tr>
                            <tr>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/sail.jpg" alt="" className="max-width-100" /></div></td>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/baosteel.jpg" alt="" className="max-width-100" /></div></td>
                                <td><div className="border border-1 text-secondary text-center"><img src="/images/customers/chin.jpg" alt="" className="max-width-100" /></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <p className="mt-4 text-center"><strong>"The Map indicating the parts of the globe to which Balasore supplies its product."</strong></p>
                <p>
                    <div className="d-flex justify-content-center">
                        <Zoom>
                            <img src="/images/map_new.jpg" width={800} height={400} className="max-width-100" />
                        </Zoom>
                    </div>
                </p>


            </SidebarContent>

            <Footer />
        </>
    );
}
