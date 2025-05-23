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
                <title>{`Board of Directors - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader title="Board of Directors" breadcrumbs={[
                { name: 'About', link: '#' },
                { name: 'Board of Directors', link: '' },
            ]} />
            <SidebarContent navFor="About Us">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td width={80}><span><strong> Sl No</strong></span></td>
                                <td ><span><strong>Name</strong></span></td>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>
                                    <p><strong>Mr. Ramen Ray Mandal</strong></p>
                                    <p>Independent Director</p>
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>
                                    <p><strong>Mr. Rajib Das</strong></p>
                                    <p>Non-Independent Non-Executive Director</p>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>3.</td>
                                <td>
                                    <p><strong>Mr. Pravakar Mohanty</strong></p>
                                    <p>Independent Director</p>
                                </td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>
                                    <p><strong>Mr. Paramesh Bhattacharyya</strong></p>
                                    <p>Independent Director</p>
                                </td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>
                                    <p><strong>Mr. Ketan Vasant Kale</strong></p>
                                    <p>Independent Director</p>
                                </td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td>
                                    <p><strong>Mr. Pankaj Kapoor</strong></p>
                                    <p>Independent Director</p>
                                </td>
                            </tr>
                            <tr>
                                <td>7.</td>
                                <td>
                                    <p><strong>Mr. Arun Kumar Jain</strong></p>
                                    <p>Managing Director</p>
                                </td>
                            </tr>
                            <tr>
                                <td>8.</td>
                                <td>
                                    <p><strong>Mr. Chikali Nagaraju</strong></p>
                                    <p>Executive Director - Operation &amp; Mines</p>
                                </td>
                            </tr>
                          
                            <tr>
                                <td colSpan={2}><span><strong>Company Secretary</strong></span></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <p><strong>Mr. Pankaj Agarwal</strong>,&nbsp;Company Secretary</p>
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
