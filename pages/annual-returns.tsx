import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import { FcList, FcGrid } from "react-icons/fc";
import SidebarContent from "components/layouts/SidebarContent";
import React, { useState, useCallback  } from 'react';
import MasonryPDF from "components/layouts/MasonryPDF";

export default function Page() {
    const [show, setShow] = useState(true);
    const [isvisible, setisVisible] = useState(false);

    
    function toggleShow() {
        setShow(!show);
      }
    function toggleShow1(){
        setisVisible(!isvisible);
    }
    return (
        <>
            <Head>
                <title>{`Annual Returns - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Annual Returns"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Annual Returns", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />
                    
                    <FcList onClick={toggleShow1} title="List View" size={30} />
                   
                </div> */}
                
                {show && (<div className="show">
                <MasonryPDF data={[
                    { name: 'Annual Return 2022-23', link: '/files/Annual-return-2022-2023.pdf' },
                    { name: 'Annual Return 2021-22', link: '/files/Annual Return 2021-22.pdf' },
                    { name: 'Annual Return 2020-21', link: '/files/Annual Return 2020-21.pdf' },
                    { name: 'Annual Return 2019-20', link: '/files/Annual Return 2019-20.pdf' },
                ]} /> 
                </div>
                 )}
                {isvisible && (<div className="table-responsive show">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={80}><p><strong>Download</strong></p></td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Annual Return 2022-23</p>
                                </td>
                                <td>
                                    <Link href="/files/Annual-return-2022-2023.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Annual Return 2021-22</p>
                                </td>
                                <td>
                                    <Link href="/files/Annual Return 2021-22.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Annual Return 2020-21</p>
                                </td>
                                <td>
                                    <Link href="/files/Annual Return 2020-21.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Annual Return 2019-20</p>
                                </td>
                                <td>
                                    <Link href="/files/Annual Return 2019-20.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
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
