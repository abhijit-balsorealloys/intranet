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
                <title>{`Financial Statement Of Balasore Metals Private Limited - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Financial Statement Of Balasore Metals Private Limited"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Financial Statement Of Balasore Metals Private Limited", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />

                    <FcList onClick={toggleShow1} title="List View" size={30} />

                </div> */}
                {show && (<div className="show">
                    <h2>Year 2018</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited Financial Result-31-03-2018', link: '/files/Audited Financial Result-31-03-2018.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> Year Wise Report</strong></p></td>
                                <td width={60}><p><strong></strong></p></td>
                            </tr>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2018</p></th>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2018</p></td>
                                <td>
                                    <Link href="/files/Audited Financial Result-31-03-2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2017</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited Financial Result-31-03-2017', link: '/files/Audited Financial Result-31-03-2017.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2017</p></th>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2017</p></td>
                                <td width={60}>
                                    <Link href="/files/Audited Financial Result-31-03-2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2016</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited Financial Result-31-03-2016', link: '/files/Audited Financial Result-31-03-2016.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2016</p></th>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2016</p></td>
                                <td width={60}>
                                    <Link href="/files/Audited Financial Result-31-03-2016.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2015</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited Financial Result-31-03-2015', link: '/files/15.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2015</p></th>
                            </tr>

                            <tr>
                                <td><p>Audited Financial Result-31-03-2015</p></td>
                                <td width={60}>
                                    <Link href="/files/15.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2014</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited Financial Result-31-03-2014', link: '/files/14.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2014</p></th>
                            </tr>
                            <tr>
                                <td><p>Audited Financial Result-31-03-2014</p></td>
                                <td width={60}>
                                    <Link href="/files/14.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2013</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Audited Financial Result-31-03-2013', link: '#' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2013</p></th>
                            </tr>

                            <tr>
                                <td> <p>Audited Financial Result-31-03-2013</p></td>
                                <td width={60}>
                                    <Link href="#" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
