import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";

export default function Page() {
    return (
        <>
            <Head>
                <title>{`Committees of Board of Directors - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader title="Committees of Board of Directors" breadcrumbs={[
                { name: 'About', link: '#' },
                { name: 'Committees of Board of Directors', link: '' },
            ]} />
            <SidebarContent navFor="About Us">
               <h3><u>Committees Composition as On 30/04/2025 :</u></h3>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td width={'25%'}>
                                    <p><b>Audit Committee:</b></p>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td className="bg-light">Mr. Ramen Ray Mandal</td>
                                                <td className="bg-light">Chair Person</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Pravakar Mohanty</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Paramesh Bhattacharya</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width={'25%'}>
                                    <p><b>Risk Management Committee:</b> </p>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td className="bg-light">Mr. Ketan Vasant Kale</td>
                                                <td className="bg-light">Chair Person</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Ramen Ray Mandal</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Pravakar Mohanty</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Paramesh Bhattacharya</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width={'25%'}>
                                    <p><b>Nomination & Remuneration Committee:</b></p>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td className="bg-light">Mr. Pravakar Mohanty</td>
                                                <td className="bg-light">Chair Person</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Paramesh Bhattacharya</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Ramen Ray Mandal</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width={'25%'}>
                                    <p><b>Stakeholders Relationship Committee:</b></p>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td className="bg-light">Mr. Pankaj Kapoor</td>
                                                <td className="bg-light">Chair Person</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Ramen Ray Mandal</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Paramesh Bhattacharya </td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td width={'25%'}>
                                    <p><b>Project Committee:</b></p>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td className="bg-light">Mr. Pravakar Mohanty</td>
                                                <td className="bg-light">Chair Person</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Ramen Ray Mandal</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Paramesh Bhattacharya </td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width={'25%'}>
                                    <p><b>Corporate Social Responsibilty Committee:</b> </p>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td className="bg-light">Mr. Pravakar Mohanty</td>
                                                <td className="bg-light">Chair Person </td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Ramen Ray Mandal</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Ketan Kale</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width={'25%'}>
                                    <p><b>Finance Committee:</b></p>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td className="bg-light">Mr. Ramen Ray Mandal</td>
                                                <td className="bg-light">Chair Person</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Pravakar Mohanty</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Paramesh Bhattacharya </td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width={'25%'}>
                                    <p><b>Safety, Health & Environment Committee:</b></p>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td className="bg-light">Mr. Ketan Kale</td>
                                                <td className="bg-light">Chair Person</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Pravakar Mohanty</td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light">Mr. Paramesh Bhattacharya </td>
                                                <td className="bg-light">Independent Director</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </SidebarContent>
            <Footer />
        </>
    );
}
