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
                <title>{`Other Information - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Other Information"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Other Information", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />
                    
                    <FcList onClick={toggleShow1} title="List View" size={30} />
                   
                </div> */}
                
                {show && (<div className="show">
                <MasonryPDF data={[
                    { name: 'Contact Details Under Reg 30(5)', link: '/files/Contact Details Under Reg 30(5).pdf' },
                    { name: 'Terms and conditions of appointment of independent directors', link: '/files/terms-and-conditions-of-appointment-of-independent-directors.pdf' },
                    { name: 'BAL MOA and AOA', link: '/files/BAL_ MOA & AOA.pdf' }
                    
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
                                    <p>Contact Details Under Reg 30(5)</p>
                                </td>
                                <td>
                                    <Link href="/files/Contact Details Under Reg 30(5).pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Terms and conditions of appointment of independent directors</p>
                                </td>
                                <td>
                                    <Link href="/files/terms-and-conditions-of-appointment-of-independent-directors.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>BAL MOA and AOA</p>
                                </td>
                                <td>
                                    <Link href="/files/BAL_ MOA & AOA.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
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
