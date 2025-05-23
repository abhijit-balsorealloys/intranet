import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import CustomerEnquiryProduct from "components/layouts/CustomerEnquiryProduct";



export default function Page() {

    return (
        <>
            <Head>
                <title>{`Customer Enquiry For Products - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader title="Customer Enquiry For Products" breadcrumbs={[
                { name: 'Customers', link: '#' },
                { name: 'Customer Enquiry For Products', link: '' },
            ]} />

            <SidebarContent navFor="Customers">
                <h2>Customer Enquiry For Products</h2>
                <div className="blue-line mt-2 mb-4"></div>

                <div className="table-responsive col-sm-12">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td><p><strong>KAM</strong></p></td>
                                <td><p><strong>EMAIL ID</strong></p></td>
                                <td><p><strong>MOBILE NO.</strong></p></td>
                                <td><p><strong>LOCATION</strong></p></td>
                                <td><p><strong>REGION</strong></p></td>
                            </tr>
                            <tr>
                                <td width={20}><p>V. K. JODHANI</p></td>
                                <td width={20}><p><Link href={'mailto:vk.jodhani@balasorealloys.com'} passHref>
                                    <a className="text-primary">vk.jodhani@balasorealloys.com</a></Link></p></td>
                                <td width={20}><p>+91 9831794860</p></td>
                                <td width={20}><p>Kolkata</p></td>
                                <td width={20}><p>Japan, Korea</p></td>
                            </tr>
                            <tr>
                                <td><p>V. SINGH</p></td>
                                <td><p><Link href={'mailto:vijaysingh@ispat-china.com'} passHref>
                                    <a className="text-primary">vijaysingh@ispat-china.com</a></Link></p></td>
                                <td><p>+86 13911798016</p></td>
                                <td><p>China</p></td>
                                <td><p>China</p></td>
                            </tr>
                            <tr>
                                <td><p>K. SANKAR</p></td>
                                <td><p><Link href={'mailto:sankar.k@balasorealloys.com'} passHref>
                                    <a className="text-primary">sankar.k@balasorealloys.com</a></Link></p></td>
                                <td><p>+91 9867783706</p></td>
                                <td><p>Mumbai</p></td>
                                <td><p>CIS(UKRAINE),<br></br> India(Central & North)</p></td>
                            </tr>
                            <tr>
                                <td><p>D. RUNGTA</p></td>
                                <td><p><Link href={'mailto:deepak.rungta@balasorealloys.com'} passHref>
                                    <a className="text-primary">deepak.rungta@balasorealloys.com</a></Link></p></td>
                                <td><p>+91 9007030830</p></td>
                                <td><p>Kolkata</p></td>
                                <td><p>EUROPE</p></td>
                            </tr>
                            <tr>
                                <td><p>D.BISWAS</p></td>
                                <td><p><Link href={'mailto:debajyoti.biswas@balasorealloys.com'} passHref>
                                    <a className="text-primary">debajyoti.biswas@balasorealloys.com</a></Link></p></td>
                                <td><p>+91 9874322454</p></td>
                                <td><p>Kolkata</p></td>
                                <td><p>Taiwan,<br></br> ASEAN(Thailand,Indonesia, <br></br> Malasysia,Vietnama,Philippines)</p></td>
                            </tr>
                            <tr>
                                <td><p>S. CHATTERJEE</p></td>
                                <td><p><Link href={'mailto:sabyasachi.chatterjee@balasorealloys.com'} passHref>
                                    <a className="text-primary">sabyasachi.chatterjee@balasorealloys.com</a></Link></p></td>
                                <td><p>+91-9073934641</p></td>
                                <td><p>Kolkata</p></td>
                                <td><p>Eastern Europe</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <CustomerEnquiryProduct />

            </SidebarContent>

            <Footer />
        </>
    );




}

