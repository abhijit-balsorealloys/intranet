import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import ContactUsForm from "components/layouts/ContactUsForm";



export default function Page() {

    return (
        <>
            <Head>
                <title>{`Contact Form - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader title="Contact Form" breadcrumbs={[
                { name: 'Contact Form', link: '#' },
            ]} />

            <div className="container mt-5 mb-3">
                <h3>Our Branch</h3>
                <span className="text-center"><div className="blue-line mt-2 mb-4"></div></span>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tbody>
                                    <tr className="bg-primary text-white">
                                        <td><span><strong> REGISTERED OFFICE & WORKS : </strong></span></td>
                                    </tr>
                                    <tr>
                                        <td>Balgopalpur - 756 020</td>
                                    </tr>
                                    <tr>
                                        <td>Dist. Balasore, Odisha, India</td>
                                    </tr>
                                    <tr>
                                        <td>Tel. Nos. +91-6782-275781-85</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail: mail@balasorealloys.com, investorshelpline@balasorealloys.com</td>
                                    </tr>
                                    <tr>
                                        <td>Website : www.balasorealloys.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tbody>
                                    <tr className="bg-primary text-white">
                                        <td><span><strong> ADMINISTRATIVE OFFICE : </strong></span></td>
                                    </tr>
                                    <tr>
                                        <td>Park Plaza, 71, Park Street, 1st Floor</td>
                                    </tr>
                                    <tr>
                                        <td>Kolkata - 700 016</td>
                                    </tr>
                                    <tr>
                                        <td>Phone No. + 91-33-2217 8192 / 4029 7000</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail: mail@balasorealloys.com, investorshelpline@balasorealloys.com</td>
                                    </tr>
                                    <tr>
                                        <td>Website : www.balasorealloys.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tbody>
                                    <tr className="bg-primary text-white">
                                        <td><span><strong> MUMBAI OFFICE : </strong></span></td>
                                    </tr>
                                    <tr>
                                        <td>802, 8th Floor, Plot No.214, Raheja Center Premises Co-operative Society Ltd,Free Press Journal Marg, Nariman Point</td>
                                    </tr>
                                    <tr>
                                        <td>Mumbai - 400021</td>
                                    </tr>
                                    <tr>
                                        <td>Phone No. + 91-22-6179 0419</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail: mail@balasorealloys.com, investorshelpline@balasorealloys.com</td>
                                    </tr>
                                    <tr>
                                        <td>Website : www.balasorealloys.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <hr className="bg-dark"></hr>
                <div className="row">
                    <div className="col-sm-12">
                        <ContactUsForm />
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );




}

