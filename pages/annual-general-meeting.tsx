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
                <title>{`Annual General Meeting - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Annual General Meeting"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Annual General Meeting", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />
                    <FcList onClick={toggleShow1} title="List View" size={30} />
                </div> */}
                {show && (<div className="show">
                    <h2>AGM Notice/Voting Results Year Wise</h2>
                    <MasonryPDF data={[
                        { name: 'AGM Voting Result -  2023-2024', link: '/files/AGM_Voting Results_2023-2024.pdf' },
                        { name: 'AGM Notice -  2023-2024', link: '/files/AGM Notice FY2023-24.pdf' },
                        { name: 'AGM Voting Result -  2022-2023', link: '/files/AGM Voting Result -  2022-23.pdf' },
                        { name: 'AGM Notice -  2022-2023', link: '/files/AGM Notice  2022-23.pdf' },
                        { name: 'AGM Voting Result -  2021-2022', link: '/files/AGM Voting results fy 2021-22.pdf' },
                        { name: 'AGM Notice -  2021-2022', link: '/files/AGM NOTICE 21-22.pdf' },
                        { name: 'AGM Voting Result -  2020-2021', link: '/files/AGM Voting results fy 2020-21.pdf' },
                        { name: 'AGM Notice -  2020-2021', link: '/files/AGM NOTICE 20-21.pdf' },
                        { name: 'AGM Voting Result -  2019-2020', link: '/files/Scrutinizers Report.pdf' },
                        { name: 'AGM Notice 2019-2020', link: '/files/Notice of AGM 2019-2020.pdf' },
                        { name: 'AGM Voting Result -  2018-2019', link: '#' },
                        { name: 'AGM Voting Result -  2017-2018', link: '/files/AGM-2018-19.pdf' },
                        { name: 'AGM Notice  2017-2018', link: '/files/Balasore Notice 2018.pdf' },
                        { name: 'AGM Voting Results  2016-2017', link: '/files/Outcome of AGM (1).pdf' },
                        { name: 'AGM Notice  2016-2017', link: '/files/Notice 2016-17- FINAL.pdf' },
                        { name: 'AGM Voting Results 2015-2016', link: '/files/AGM Outcome - 28.09.16 (1).pdf' },
                        { name: 'AGM Notice 2015-2016', link: '/files/AGM Notice 2015-16.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> AGM Notice/Voting Results Year Wise</strong></p></td>
                                <td width={60}><p><strong></strong></p></td>
                            </tr>
                            <tr>
                                <td>
                                    <p>AGM Voting Result -  2023-2024</p>
                                </td>
                                <td>
                                    <Link href="/files/AGM_Voting Results_2023-2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>AGM Notice -  2023-2024</p>
                                </td>
                                <td>
                                    <Link href="/files/AGM Notice FY2023-24.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>AGM Voting Result -  2022-2023</p>
                                </td>
                                <td>
                                    <Link href="/files/AGM Voting Result -  2022-23.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>AGM Notice -  2022-2023</p>
                                </td>
                                <td>
                                    <Link href="/files/AGM Notice  2022-23.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>AGM Voting Result -  2021-2022</p>
                                </td>
                                <td>
                                    <Link href="/files/AGM Voting results fy 2021-22.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>AGM Notice -  2021-2022</p>
                                </td>
                                <td>
                                    <Link href="/files/AGM NOTICE 21-22.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>AGM Voting Result -  2020-2021</p></td>
                                <td>
                                    <Link href="/files/AGM Voting results fy 2020-21.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>AGM Notice -  2020-2021</p>
                                </td>
                                <td>
                                    <Link href="/files/AGM NOTICE 20-21.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>AGM Voting Result -  2019-2020</p></td>
                                <td>
                                    <Link href="/files/Scrutinizers Report.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>AGM Notice 2019-2020</p></td>
                                <td>
                                    <Link href="/files/Notice of AGM 2019-2020.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>AGM Voting Result -  2018-2019</p></td>
                                <td>
                                    <p>Download</p>
                                </td>
                            </tr>
                            <tr>
                                <td><p>AGM Voting Result -  2017-2018</p></td>
                                <td>
                                    <Link href="/files/AGM-2018-19.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>AGM Notice  2017-2018</p></td>
                                <td>
                                    <Link href="/files/Balasore Notice 2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>AGM Voting Results  2016-2017</p></td>
                                <td>
                                    <Link href="/files/Outcome of AGM (1).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>

                            <tr>
                                <td><p>AGM Notice  2016-2017</p></td>
                                <td>
                                    <Link href="/files/Notice 2016-17- FINAL.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>AGM Voting Results 2015-2016</p></td>
                                <td>
                                    <Link href="/files/AGM Outcome - 28.09.16 (1).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>

                            <tr>
                                <td><p>AGM Notice 2015-2016</p></td>
                                <td>
                                    <Link href="/files/AGM Notice 2015-16.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
