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
                <title>{`Corporate Governance - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Corporate Governance"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Corporate Governance", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />
                    <FcList onClick={toggleShow1} title="List View" size={30} />
                </div> */}
                {show && (<div className="show">
                    <h2>Corporate Governance Report</h2>

                    <MasonryPDF data={[
                        { name: 'Corporate Governance Report for the quarter ended 31.03.2025', link: '/files/Corporate Governance Report for the quarter ended 31.03.2025.pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 31.12.2024', link: '/files/Corporate Governance Report for the quarter ended 31.12.2024.pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 30.09.2024', link: '/files/CGR_Sep_2024_ Q2.pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 30.06.2024', link: '/files/CGR_june 24 Q1.pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 31.03.2024', link: '/files/Corporate Governance_31.03.2024.pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 31.12.2023', link: '/files/Corporate Governance Report for the quarter ended 31.12.2023 (1).html' },
                        { name: 'Corporate Governance Report for the quarter ended 30.09.2023', link: '/files/Corporate Governance Report for the quarter ended 30.09.2023.pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 30.06.2023', link: '/files/Corporate Governance Report for the Quarer ended 30.06.2023.pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 30.09.2019', link: '/files/CG Report 30.09.2019 (pdf).pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 30.06.2019', link: '/files/Corporate Governance Report 30.06.2019 (1).pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 31.03.2019', link: '/files/C G Report 31.03.2019 (1).pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 31.12.2018', link: '/files/CG Report as on 31.12.2018.pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 30.09.2018', link: '/files/Corp. Gov. Report 30.09.2018.pdf' },
                        { name: 'Corporate Governance Report for the quarter ended 30.06.2018', link: '/files/CG Report 30.06.2018.pdf' },
                        { name: 'Corporate Governance Report for F.Y ended 31.03.2018', link: '/files/Corporate Governance Report 31.03.2018.pdf' },
                        { name: 'Corporate Governance Report for the quarter ended on 31.12.2017', link: '/files/Corp. Governance Report 31.12.2017.pdf' },
                        { name: 'Corporate Governance Report for the quarter ended on 30.09.2017', link: '/files/Corporate Governance Report for the Quarter ended on 30.09.2017.pdf' },
                        { name: 'Compliance of Corporate Governance as on 30.06.2017', link: '/files/Compliance of Corporate Governance Report as on 30.06.2017.pdf' },
                        { name: 'Compliance of Corporate Governance as on 31.03.2017', link: '/files/Compliance of Corporate Governance as on 31.03.2017.pdf' },
                        { name: 'Compliance of Corporate Governance as on 31.12.2016', link: '/files/Corp. Gov. Report - 31.12.16.pdf' },
                        { name: 'Compliance of Corporate Governance as on 30.09.2016', link: '/files/Corp. Gov. Report - 30.09.16.pdf' },
                        { name: 'Compliance of Corporate Governance as on 30.06.2016', link: '/files/Corp. Gov. Report- 30.06.16.pdf' },
                        { name: 'Compliance of Corporate Governance as on 31.03.2016', link: '/files/CGReport31.03.2016.pdf' },
                        { name: 'Compliance of Corporate Governance as on 31.12.2015', link: '/files/ComplReport-31.12.15.pdf' },
                        { name: 'Compliance of Corporate Governance as on 30.09.2015', link: '/files/CG Report_30.09.2015.pdf' },
                        { name: 'Compliance of Corporate Governance as on 30.06.2015', link: '#' },

                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> Corporate Governance Report</strong></p></td>
                                <td width={60}><p><strong></strong></p></td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 31.03.2025</p></td>
                                   <td>
                                    <Link href="/files/Corporate Governance Report for the quarter ended 31.03.2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 31.12.2024</p></td>                               
                                <td>
                                    <Link href="/files/Corporate Governance Report for the quarter ended 31.12.2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 30.09.2024</p></td>
                                <td>
                                    <Link href="/files/CGR_Sep_2024_ Q2.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 30.06.2024</p></td>
                                <td>
                                    <Link href="/files/CGR_june 24 Q1.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 31.03.2024</p></td>
                                <td>
                                    <Link href="/files/Corporate Governance_31.03.2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 31.12.2023</p></td>
                                <td>
                                    <Link href="/files/Corporate Governance Report for the quarter ended 31.12.2023 (1).html" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 30.09.2023</p></td>
                                <td>
                                    <Link href="/files/Corporate Governance Report for the quarter ended 30.09.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 30.06.2023</p></td>
                                <td>
                                    <Link href="/files/Corporate Governance Report for the Quarer ended 30.06.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 30.09.2019</p></td>
                                <td>
                                    <Link href="/files/CG Report 30.09.2019 (pdf).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 30.06.2019</p></td>
                                <td>
                                    <Link href="/files/Corporate Governance Report 30.06.2019 (1).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 31.03.2019</p></td>
                                <td>
                                    <Link href="/files/C G Report 31.03.2019 (1).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 31.12.2018</p>	</td>
                                <td>
                                    <Link href="/files/CG Report as on 31.12.2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 30.09.2018</p>	</td>
                                <td>
                                    <Link href="/files/Corp. Gov. Report 30.09.2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended 30.06.2018</p>	</td>
                                <td>
                                    <Link href="/files/CG Report 30.06.2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for F.Y ended 31.03.2018</p></td>
                                <td>
                                    <Link href="/files/Corporate Governance Report 31.03.2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended on 31.12.2017 </p> </td>
                                <td>
                                    <Link href="/files/Corp. Governance Report 31.12.2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Corporate Governance Report for the quarter ended on 30.09.2017</p></td>
                                <td>
                                    <Link href="/files/Corporate Governance Report for the Quarter ended on 30.09.2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Compliance of Corporate Governance as on 30.06.2017</p> </td>
                                <td>
                                    <Link href="/files/Compliance of Corporate Governance Report as on 30.06.2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Compliance of Corporate Governance as on 31.03.2017</p></td>
                                <td>
                                    <Link href="/files/Compliance of Corporate Governance as on 31.03.2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Compliance of Corporate Governance as on 31.12.2016 </p></td>
                                <td>
                                    <Link href="/files/Corp. Gov. Report - 31.12.16.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Compliance of Corporate Governance as on 30.09.2016</p> </td>
                                <td>
                                    <Link href="/files/Corp. Gov. Report - 30.09.16.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Compliance of Corporate Governance as on 30.06.2016</p></td>
                                <td>
                                    <Link href="/files/Corp. Gov. Report- 30.06.16.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Compliance of Corporate Governance as on 31.03.2016</p></td>
                                <td>
                                    <Link href="/files/CGReport31.03.2016.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Compliance of Corporate Governance as on 31.12.2015 </p></td>
                                <td>
                                    <Link href="/files/ComplReport-31.12.15.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Compliance of Corporate Governance as on 30.09.2015 </p></td>
                                <td>
                                    <Link href="/files/CG Report_30.09.2015.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td> <p>Compliance of Corporate Governance as on 30.06.2015</p></td>
                                <td>

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
