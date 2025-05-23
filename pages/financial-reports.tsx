import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import { FcList, FcGrid } from "react-icons/fc";
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
                <title>{`Financial Reports - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Financial Reports"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Financial Reports", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />
                    <FcList onClick={toggleShow1} title="List View" size={30} />

                </div> */}
                 {show && (<div className="show">
                    <h2>Year 2025</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited_Financial Results_31-03-2025', link: '/files/Audited_Financial Results_31-03-2025.pdf' },
                        { name: 'Unaudited Financial Results-31.12.2024', link: '/files/Outcome of Board Meeting_27.01.25.pdf' },
                        { name: 'Unaudited Financial Results-30.09.2024', link: '/files/Unaudited Financial Result-30-09-2024.pdf' },
                        { name: 'Unaudited Financial Results-30.06.2024', link: '/files/Outcome of BM_13.08.24.pdf' },
                        
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive show">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2024</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Audited_Financial Results-31-03-2025</p>
                                </td>
                                <td>
                                    <Link href="/files/Audited_Financial Results_31-03-2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Unaudited Financial Results-31.12.2024</p>
                                </td>
                                <td>
                                    <Link href="/files/Outcome of Board Meeting_27.01.25.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Unaudited Financial Results-30.09.2024</p>
                                </td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-30-09-2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Unaudited Financial Results-30.06.2024</p>
                                </td>
                                <td>
                                    <Link href="/files/Outcome of BM_13.08.24.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2024</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited Financial Result-31-03-2024', link: '/files/Financial Results quarter ended 31.03.2024.pdf' },
                        { name: 'Unaudited Financial Results-31-12-2023', link: '/files/Financialresults_Dec_Qtr.pdf' },
                        { name: 'Unaudited Financial Result-30-09-2023', link: '/files/Unaudited Financial Result-30-09-2023.pdf' },
                        { name: 'Unaudited Financial Result-30-06-2023', link: '/files/Unaudited Financial Result-30-06-2023.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive show">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2024</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Audited Financial Result-31-03-2024</p>
                                </td>
                                <td>
                                    <Link href="/files/Financial Results quarter ended 31.03.2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Unaudited Financial Results-31-12-2023</p>
                                </td>
                                <td>
                                    <Link href="/files/Financialresults_Dec_Qtr.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-30-09-2023</p></td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-30-09-2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-30-06-2023</p></td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-30-06-2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2023</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited Financial Result-31-03-2023', link: '/files/Audited Financial Result-31-03-2023.pdf' },
                        { name: 'Unaudited Financial Result-31-12-2022', link: '/files/Unaudited Financial Result-31-12-2022.pdf' },
                        { name: 'Unaudited Financial Result-30-09-2022', link: '/files/Unaudited Financial Result-30-09-2022.pdf' },
                        { name: 'Unaudited Financial Result-30-06-2022', link: '/files/Unaudited Financial Result-30-06-2022.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive show">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2023</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Audited Financial Result-31-03-2023</p>
                                </td>
                                <td>
                                    <Link href="/files/Audited Financial Result-31-03-2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-31-12-2022</p></td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-31-12-2022.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-30-09-2022</p></td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-30-09-2022.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-30-06-2022</p></td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-30-06-2022.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2022</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited Financial Result as on 31.03.2022', link: '/files/Audited Financial Result-31-03-2022.pdf' },
                        { name: 'Unaudited Financial Result-31-12-2021', link: '/files/Unaudited Financial Result-31-12-2021.pdf' },
                        { name: 'Unaudited Financial Result-30-09-2021', link: '/files/Unaudited Financial Result-30-09-2021.pdf' },
                        { name: 'Unaudited Financial Result-30-06-2021', link: '/files/Unaudited Financial Result-30-06-2021 (2).pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive show">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2022</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result as on 31.03.2022 </p></td>
                                <td>
                                    <Link href="/files/Audited Financial Result-31-03-2022.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-31-12-2021</p></td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-31-12-2021.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-30-09-2021</p></td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-30-09-2021.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-30-06-2021</p></td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-30-06-2021 (2).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2021</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited Financial Result as on 31.03.2021', link: '/files/Audited Financial Result-31-03-2021.pdf' },
                        { name: 'Unaudited Financial Result-31-12-2020', link: '/files/Unaudited Financial Result-31-12-2020.pdf' },
                        { name: 'Unaudited Financial Result-30-09-2020', link: '/files/Unaudited Financial Result-30-09-2020.pdf' },
                        { name: 'Unaudited Financial Result-30-06-2020', link: '/files/Unaudited Financial Result-30-06-2020.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive show">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2021</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result as on 31.03.2021</p></td>
                                <td>
                                    <Link href="/files/Audited Financial Result-31-03-2021.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-31-12-2020</p></td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-31-12-2020.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-30-09-2020</p></td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-30-09-2020.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-30-06-2020</p></td>
                                <td>
                                    <Link href="/files/Unaudited Financial Result-30-06-2020.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2020</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited Financial Result as on 31.03.2020', link: 'https://www.slideshare.net/balasorealloysltd/audited-financial-result-as-on-31032020' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">

                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2020</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result as on 31.03.2020</p></td>
                                <td>
                                    <Link href="https://www.slideshare.net/balasorealloysltd/audited-financial-result-as-on-31032020" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2019</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Unaudited Financial Result-31-12-2019', link: '/files/Financial Result - 31.12.2019 (Website Upload)_compressed.pdf' },
                        { name: 'Unaudited Financial Result-30-09-2019', link: '/files/BAL Outcome of 171st Board Meeting - 13.11.2019.pdf' },
                        { name: 'Unaudited Financial Result-30-06-2019', link: '/files/UAFR.pdf' },
                        { name: 'Audited Financial Result-31-03-2019', link: '/files/AFR- 31.03.2019_compressed.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2019</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-31-12-2019</p></td>
                                <td>
                                    <Link href="/files/Financial Result - 31.12.2019 (Website Upload)_compressed.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-30-09-2019</p></td>
                                <td>
                                    <Link href="/files/BAL Outcome of 171st Board Meeting - 13.11.2019.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Unaudited Financial Result-30-06-2019</p></td>
                                <td>
                                    <Link href="/files/UAFR.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2019</p></td>
                                <td>
                                    <Link href="/files/AFR- 31.03.2019_compressed.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2018</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'UAFR For the Quarter Ended 31-12-18', link: '/files/UAFR - 31.12.2018- Final.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-09-18', link: '/files/UAFR 30.09.18.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-06-18', link: '/files/UFAR.pdf' },
                        { name: 'Audited Financial Result-31-03-2018', link: '/files/AFR 31.03.2018.compressed.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2018</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-12-18</p></td>
                                <td>
                                    <Link href="/files/UAFR - 31.12.2018- Final.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-09-18</p></td>
                                <td>
                                    <Link href="/files/UAFR 30.09.18.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-06-18</p></td>
                                <td>
                                    <Link href={'/files/UFAR.pdf'} passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2018</p></td>
                                <td>
                                    <Link href={'/files/AFR 31.03.2018.compressed.pdf'} passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2017</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'UAFR For the Quarter Ended 31-12-17', link: '/files/Outcome- UAFR 31.12.2017.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-09-17', link: '/files/UAFR- 30.09.2017.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-06-17', link: '/files/UAFR- 30.06.2017.pdf' },
                        { name: 'Audited Financial Result-31-03-2017', link: '/files/AUDITED FINANCIAL RESULT- 31.03.2017.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2017</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-12-17</p></td>
                                <td>
                                    <Link href="/files/Outcome- UAFR 31.12.2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-09-17</p></td>
                                <td>
                                    <Link href="/files/UAFR- 30.09.2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-06-17</p></td>
                                <td>
                                    <Link href="/files/UAFR- 30.06.2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2017</p></td>
                                <td>
                                    <Link href="/files/AUDITED FINANCIAL RESULT- 31.03.2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2016</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'UAFR For the Quarter Ended 31-12-16', link: '/files/UAFR311216.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-09-16', link: '/files/UAFR- 30.09.16.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-06-16', link: '/files/UFR- 30-06-16.pdf' },
                        { name: 'Audited Financial Result-31-03-2016', link: '/files/Statement of Accounts - March 2016.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2016</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-12-16</p></td>
                                <td>
                                    <Link href="/files/UAFR311216.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-09-16</p></td>
                                <td>
                                    <Link href="/files/UAFR- 30.09.16.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-06-16</p></td>
                                <td>
                                    <Link href="/files/UFR- 30-06-16.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2016</p></td>
                                <td>
                                    <Link href="/files/Statement of Accounts - March 2016.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2015</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'UAFR For the Quarter Ended 31-12-15', link: '/files/UNFR-31122015.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-09-15', link: '/files/Balasore UFR 14.11.15.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-06-15', link: '/files/UAFR_JUN-15.pdf' },
                        { name: 'Audited Financial Result-31-03-2015', link: '/files/Balasore Alloys UFR - 28 x 30 Final.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2015</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-12-15</p></td>
                                <td>
                                    <Link href="/files/UNFR-31122015.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-09-15</p></td>
                                <td>
                                    <Link href="/files/Balasore UFR 14.11.15.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-06-15</p></td>
                                <td>
                                    <Link href="/files/UAFR_JUN-15.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2015</p></td>
                                <td>
                                    <Link href="/files/Balasore Alloys UFR - 28 x 30 Final.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2014</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'UAFR For the Quarter Ended 31-12-14', link: '/files/UAFR_31.12.2014.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-09-14', link: '/files/UAFR- 30.09.2014.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-06-14', link: '/files/UAFR- 30.06.14.pdf' },
                        { name: 'Audited Financial Result-31-03-2014', link: '/files/Audited Financial Results_31.03.2014 (F).pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2014</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong> Action </strong></p></td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-12-14</p></td>
                                <td>
                                    <Link href="/files/UAFR_31.12.2014.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-09-14</p></td>
                                <td>
                                    <Link href="/files/UAFR- 30.09.2014.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-06-14</p></td>
                                <td>
                                    <Link href="/files/UAFR- 30.06.14.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2014</p></td>
                                <td>
                                    <Link href="/files/Audited Financial Results_31.03.2014 (F).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2013</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'UAFR For the Quarter Ended 31-12-13', link: '/files/Balasore_Alloys_UFR_FINAL.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-09-13', link: '/files/UAFR For the Quarter Ended 30-09-13.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-06-13', link: '/files/UAFR For the Quarter Ended 30-06-13.pdf' },
                        { name: 'Audited Financial Result-31-03-2013', link: '/files/Audited Financial Result-31-03-2013.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2013</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong> Action </strong></p></td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-12-13</p></td>
                                <td>
                                    <Link href="/files/Balasore_Alloys_UFR_FINAL.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-09-13</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 30-09-13.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-06-13</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 30-06-13.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2013</p></td>
                                <td>
                                    <Link href="/files/Audited Financial Result-31-03-2013.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2012</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'UAFR For the Quarter Ended 31-12-12', link: '/files/UAFR For the Quarter Ended 31-12-12.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-09-12', link: '/files/UAFR For the Quarter Ended 30-09-12.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-06-12', link: '/files/UAFR For the Quarter Ended 30-06-12.pdf' },
                        { name: 'Audited Financial Result-31-03-2012', link: '/files/Audited Financial Result-31-03-2012.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2012</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong> Action </strong></p></td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-12-12</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 31-12-12.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-09-12</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 30-09-12.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-06-12</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 30-06-12.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2012</p></td>
                                <td>
                                    <Link href="/files/Audited Financial Result-31-03-2012.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2011</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'UAFR For the Quarter Ended 31-12-11', link: '/files/UAFR For the Quarter Ended 31-12-11.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-09-11', link: '/files/UAFR For the Quarter Ended 30-09-11.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-06-11', link: '/files/UAFR For the Quarter Ended 30-06-11.pdf' },
                        { name: 'UAFR For the Quarter Ended 31-03-2011', link: '/files/Audited Financial Result-31-03-2011.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2011</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong> Action </strong></p></td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-12-11</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 31-12-11.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-09-11</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 30-09-11.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-06-11</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 30-06-11.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-03-2011</p></td>
                                <td>
                                    <Link href="/files/Audited Financial Result-31-03-2011.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2010</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'UAFR For the Quarter Ended 31-12-10', link: '/files/UAFR For the Quarter Ended 31-12-10.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-09-10', link: '/files/UAFR For the Quarter Ended 30-09-10.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-06-10', link: '/files/UAFR For the Quarter Ended 30-06-10.pdf' },
                        { name: 'Audited Financial Result-31-03-2010', link: '/files/Audited Financial Result-31-03-2010.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2010</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong> Action </strong></p></td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-12-10</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 31-12-10.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-09-10</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 30-09-10.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-06-10</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 30-06-10.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2010</p></td>
                                <td>
                                    <Link href="/files/Audited Financial Result-31-03-2010.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2009</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'UAFR For the Quarter Ended 31-12-09', link: '/files/UAFR For the Quarter Ended 31-12-09.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-09-09', link: '/files/UAFR For the Quarter Ended 30-09-09.pdf' },
                        { name: 'UAFR For the Quarter Ended 30-06-09', link: '/files/UAFR For the Quarter Ended 30-06-09.pdf' },
                        { name: 'Audited Financial Result-31-03-2009', link: '/files/Audited Financial Result-31-03-2009.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2009</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong> Action </strong></p></td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-12-09</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 31-12-09.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-09-09</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 30-09-09.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 30-06-09</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 30-06-09.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2009</p></td>
                                <td>
                                    <Link href="/files/Audited Financial Result-31-03-2009.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2 className="my-4">Year 2008</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'UAFR For the Quarter Ended 31-12-08', link: '/files/UAFR For the Quarter Ended 31-12-08.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2008</p></th>
                            </tr>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong> Action </strong></p></td>
                            </tr>
                            <tr>
                                <td><p>UAFR For the Quarter Ended 31-12-08</p></td>
                                <td>
                                    <Link href="/files/UAFR For the Quarter Ended 31-12-08.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
