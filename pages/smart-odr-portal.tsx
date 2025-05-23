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
                <title>{`Smart ODR Portal - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Smart ODR Portal"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Smart ODR Portal", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />
                    <FcList onClick={toggleShow1} title="List View" size={30} />
                </div> */}
                <h2>Smart ODR Portal</h2><br></br>

                <p>Please Login this link : <Link href="https://smartodr.in/login" passHref><a target="_blank">Smart ODR Login</a></Link></p>
            </SidebarContent>
            <Footer />
        </>
    );
}
