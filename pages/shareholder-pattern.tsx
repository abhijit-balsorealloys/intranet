import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import { FcList, FcGrid } from "react-icons/fc";
import SidebarContent from "components/layouts/SidebarContent";
import List from "components/layouts/List";
import React, { useState, useCallback } from 'react';
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
                <title>{`Shareholding Pattern - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Shareholding Pattern"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Shareholding Pattern", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />

                    <FcList onClick={toggleShow1} title="List View" size={30} />

                </div> */}
                {show && (<div className="show">
                    <MasonryPDF data={[
                        { name: 'Shareholding Pattern as on 31.03.2025', link: '/files/Shareholding Pattern for the quarter ended 31.03.2025.pdf' },
                        { name: 'Shareholding Pattern as on 31.12.2024', link: '/files/Shareholding Pattern_31122024.pdf' },
                        { name: 'Shareholding pattern as on 30.09.2024', link: '/files/SHP_Q2_2024-2025.pdf' },
                        { name: 'Shareholding pattern as on 30.06.2024', link: '/files/SHP_30.06.2024.pdf' },
                        { name: 'Shareholding pattern as on 31.03.2024', link: '/files/SHP_31.03.2024.pdf' },
                        { name: 'Shareholding pattern as on 31.12.2023', link: '/files/shareholding pattern as on 31.12.2023.pdf' },
                        { name: 'Shareholding pattern as on 30.09.2023', link: '/files/Shareholding pattern as on 30.09.2023.pdf' },
                        { name: 'Shareholding pattern as on 30.06.2023', link: '/files/Shareholding Pattern as on 30.06.2023.pdf' },
                        { name: 'Shareholding pattern as on 31.03.2023', link: '/files/Shareholding pattern as on 31.03.2023.pdf' },
                        { name: 'Shareholding pattern as on 31.12.2022', link: '/files/ial_REG31_310322.pdf' },
                        { name: 'Shareholding Pattern as on 31.03.2022', link: '/files/Shareholding Pattern as on 31.03.2022.pdf' },
                        { name: 'Shareholding Pattern as on 31.12.2021', link: '/files/Shareholding Pattern as on 31.12.2021.pdf' },
                        { name: 'Shareholding Pattern as on 30.09.2021', link: '/files/Share Holding Pattern 30.09.2021.pdf' },
                        { name: 'Shareholding Pattern as on 30.06.2021', link: '/files/Share Holding Pattern 30.06.2021.pdf' },
                        { name: 'Shareholding Pattern as on 31.03.2021', link: '/files/Share Holding Pattern 31.03.2021.pdf' },
                        { name: 'Shareholding pattern as on 31.12.2020', link: '/files/Share Holding Pattern 31.12.2020.pdf' },
                        { name: 'Shareholding Pattern as on 30.09.2020', link: '/files/Share Holding Pattern 30.09.2020.pdf' },
                        { name: 'Shareholding pattern as on 30.06.2020', link: '/files/Share Holding Pattern 30.06.2020.pdf' },
                        { name: 'Shareholding pattern as on 31.03.2020', link: '/files/Share Holding Pattern 31.03.2020.pdf' },
                        { name: 'Shareholding pattern as on 31.12.2019', link: '/files/Shareholding Pattern 31-12-2019.pdf' },
                        { name: 'Shareholding pattern as on 30.09.2019', link: '/files/Shareholding Pattern 30.09.2019.pdf' },
                        { name: 'Shareholding pattern as on 30.06.2019', link: '/files/Shareholding Pattern 30-06-2019.pdf' },
                        { name: 'Shareholding pattern as on 31.03.2019', link: '/files/Shareholding Pattern 31.03.2019.pdf' },
                        { name: 'Shareholding pattern as on 31.12.2018', link: '/files/SHP 31.12.2018.pdf' },
                        { name: 'Shareholding pattern as on 30.09.2018', link: '/files/Sahre Holder Parttern.pdf' },
                        { name: 'Shareholding pattern as on 30.06.2018', link: '/files/Shareholding Pattern 30.06.2018.pdf' },
                        { name: 'Shareholding pattern as on 31.03.2018', link: '/files/Shareholding Pattern 31.03.2018 (1).pdf' },
                        { name: 'Shareholding pattern as on 31.12.2017', link: '/files/Shareholding Pattern 31.12.2017.pdf' },
                        { name: 'Shareholding pattern as on 30.09.2017', link: '/files/Shareholding Pattern_30.09.2017.pdf' },
                        { name: 'Shareholding pattern as on 30.06.2017', link: '/files/Shareholding Pattern as on 30.06.2017.pdf' },
                        { name: 'Shareholding pattern as on 31.03.2017', link: '/files/Shareholding Pattern as on 31.03.2017.pdf' },
                        { name: 'Shareholding Pattern as on 31.12.2016', link: '/files/Shareholding Pattern as on 31.12.2016.pdf' },
                        { name: 'Shareholding Pattern as on 30.09.2016', link: '/files/Shareholding Pattern_ 30.0916.pdf' },
                        { name: 'Shareholding Pattern as on 30.09.2016', link: '/files/Shareholding Pattern 30.06.16.pdf' },
                        { name: 'Shareholding Pattern as on 31.03.2016', link: '/files/SHPattern31.03.2016.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive show">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={60}><p><strong>Action</strong></p></td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Shareholding Pattern as on 31.03.2025</p>
                                </td>
                                <td>
                                    <Link href="/files/Shareholding Pattern for the quarter ended 31.03.2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Shareholding Pattern as on 31.12.2024</p>
                                </td>
                                <td>
                                    <Link href="/files/Shareholding Pattern_31122024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Shareholding pattern as on 30.09.2024</p>
                                </td>
                                <td>
                                    <Link href="/files/SHP_Q2_2024-2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Shareholding pattern as on 30.06.2024</p>
                                </td>
                                <td>
                                    <Link href="/files/SHP_30.06.2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Shareholding pattern as on 31.03.2024</p>
                                </td>
                                <td>
                                    <Link href="/files/SHP_31.03.2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Shareholding pattern as on 31.12.2023</p>
                                </td>
                                <td>
                                    <Link href="/files/shareholding pattern as on 31.12.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Shareholding pattern as on 30.09.2023</p>
                                </td>
                                <td>
                                    <Link href="/files/Shareholding pattern as on 30.09.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Shareholding pattern as on 30.06.2023</p>
                                </td>
                                <td>
                                    <Link href="/files/Shareholding Pattern as on 30.06.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Shareholding pattern as on 31.03.2023</p>
                                </td>
                                <td>
                                    <Link href="/files/Shareholding pattern as on 31.03.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Shareholding pattern as on 31.12.2022</p>
                                </td>
                                <td>
                                    <Link href="/files/ial_REG31_310322.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding Pattern as on 31.03.2022</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern as on 31.03.2022.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding Pattern as on 31.12.2021</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern as on 31.12.2021.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding Pattern as on 30.09.2021</p></td>
                                <td>
                                    <Link href="/files/Share Holding Pattern 30.09.2021.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding Pattern as on 30.06.2021</p></td>
                                <td>
                                    <Link href="/files/Share Holding Pattern 30.06.2021.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding Pattern as on 31.03.2021</p></td>
                                <td>
                                    <Link href="/files/Share Holding Pattern 31.03.2021.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 31.12.2020</p></td>
                                <td>
                                    <Link href="/files/Share Holding Pattern 31.12.2020.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding Pattern as on 30.09.2020</p></td>
                                <td>
                                    <Link href="/files/Share Holding Pattern 30.09.2020.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 30.06.2020</p></td>
                                <td>
                                    <Link href="/files/Share Holding Pattern 30.06.2020.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 30.12.2019</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern 31-12-2019.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 30.09.2019</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern 30.09.2019.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 30.06.2019</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern 30-06-2019.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 31.03.2019</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern 31.03.2019.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 31.12.2018</p></td>
                                <td>
                                    <Link href="/files/SHP 31.12.2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 30.09.2018</p></td>
                                <td>
                                    <Link href="/files/Sahre Holder Parttern.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 30.06.2018</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern 30.06.2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 31.03.2018</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern 31.03.2018 (1).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 31.12.2017</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern 31.12.2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 30.09.2017</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern_30.09.2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 30.06.2017</p></td>
                                <td>
                                    <Link href={'/files/Shareholding Pattern as on 30.06.2017.pdf'} passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding pattern as on 31.03.2017</p></td>
                                <td>
                                    <Link href={'/files/Shareholding Pattern as on 31.03.2017.pdf'} passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding Pattern as on 31.12.2016</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern as on 31.12.2016.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding Pattern as on 30.09.2016</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern_ 30.0916.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding Pattern as on 30.06.2016</p></td>
                                <td>
                                    <Link href="/files/Shareholding Pattern 30.06.16.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholding Pattern as on 31.03.2016</p></td>
                                <td>
                                    <Link href="/files/SHPattern31.03.2016.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
