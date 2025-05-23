import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import { FcList, FcGrid } from "react-icons/fc";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import React, { useState, useCallback } from 'react';
import List from "components/layouts/List";
import MasonryPDF from "components/layouts/MasonryPDF";

export default function Page() {
    const [show, setShow] = useState(true);
    const [isvisible, setisVisible] = useState(false);

    function toggleShow() {
        setShow(!show);
    }
    function toggleShow1() {
        setisVisible(!isvisible);
    }
    return (
        <>
            <Head>
                <title>{`Corporate Code Policies - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Corporate Code Policies"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Corporate Code Policies", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />
                    <FcList onClick={toggleShow1} title="List View" size={30} />
                </div> */}
                {show && (<div className="show">
                    <h2>Corporate Policies</h2>
                    <MasonryPDF data={[
                        { name: 'Sexual Harassment Policy', link: '/files/Sexual Harassment Policy 13-08-2024.pdf' },
                        { name: 'Employee Grievance Redressal Policy', link: '/files/Employee Grievance Redressal policy 13-08-2024.pdf' },
                        { name: 'Policy to determine the material event', link: '/files/Policy to determine the material event.pdf' },
                        { name: 'Code of Conduct', link: '/files/code of conduct 13-08-2024.pdf' },
                        { name: 'Company Philosophy', link: '/files/Company_s_philosophy_on_Corporate_Governance.pdf' },
                        { name: 'Corporate Social Responsibility', link: '/files/Corporate Social Responsibility Policy --.pdf' },
                        { name: 'Familiarisation Policy', link: '/files/Familarisation Policy.pdf' },
                        { name: 'Code on Probhibition of Insider Trading', link: '/files/Code of Insider Trading 2019.pdf' },
                        { name: 'Policy on Related Party Transaction', link: '/files/Policy on Related Party Transaction.pdf' },
                        { name: 'Remuneration Policy', link: '/files/Remuneration Policy.pdf' },
                        { name: 'Whistle Blower Policy', link: '/files/Whistle Blower Policy 13-08-2024.pdf' },
                        { name: 'Policy for Determining Material Subsidaries', link: '/files/Policy for Determination of Material Subsidiaries.pdf' },
                        { name: 'CSR Policy', link: '/files/CSR_25_06_2018.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> Corporate Policies</strong></p></td>
                                <td width={60}><p><strong></strong></p></td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Sexual Harassment Policy</p>
                                </td>
                                <td>
                                    <Link href="/files/Sexual Harassment Policy 13-08-2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Employee Grievance Redressal Policy</p>
                                </td>
                                <td>
                                    <Link href="/files/Employee Grievance Redressal policy 13-08-2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Policy to determine the material event</p>
                                </td>
                                <td>
                                    <Link href="/files/Policy to determine the material event.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Code of Conduct</p>
                                </td>
                                <td>
                                    <Link href="/files/code of conduct 13-08-2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Company Philosophy</p></td>
                                <td>
                                    <Link href="/files/Company_s_philosophy_on_Corporate_Governance.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Social Responsibility</p></td>
                                <td>
                                    <Link href="/files/Corporate Social Responsibility Policy --.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Familiarisation Policy</p></td>
                                <td>
                                    <Link href="/files/Familarisation Policy.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Code on Probhibition of Insider Trading </p></td>
                                <td>
                                    <Link href="/files/Code of Insider Trading 2019.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Policy on Related Party Transaction</p>	</td>
                                <td>
                                    <Link href="/files/Policy on Related Party Transaction.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Remuneration Policy</p></td>
                                <td>
                                    <Link href="/files/Remuneration Policy.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>

                            <tr>
                                <td><p>Whistle Blower Policy</p></td>
                                <td>
                                    <Link href="/files/Whistle Blower Policy 13-08-2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Policy for Determining Material Subsidaries</p> </td>
                                <td>
                                    <Link href="/files/Policy for Determination of Material Subsidiaries.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>CSR Policy</p></td>
                                <td>
                                    <Link href="/files/CSR_25_06_2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                )}
            </SidebarContent>
            <Footer />
        </>
    );
}
