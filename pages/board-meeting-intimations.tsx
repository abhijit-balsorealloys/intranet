import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import { FcList, FcGrid } from "react-icons/fc";
import SidebarContent from "components/layouts/SidebarContent";
import React, { useState, useCallback } from 'react';
import MasonryPDF from "components/layouts/MasonryPDF";
import ListPDF from "components/layouts/ListPDF";

const filesData = [
    { name: 'Intimation of BM 29.04.2025_ 12.30 PM', link: '/files/Board meeting intimation_St Ex 21.04.2025.pdf' },
    { name: 'Intimation of BM 27.01.2025_ 12.15 PM', link: '/files/Intimation of BM 27.01.2025_12.15 PM.pdf' },
    { name: 'Intimation of BM 05.11.2024_ 11.45 AM', link: '/files/Intimation of BM 05.11.2024_11.45 AM.pdf' },
    { name: 'Intimation for BM 13.08.2024_ 01:00 PM', link: '/files/BM notice.pdf' },
    { name: 'Intimation for BM 30.05.2024_ 12.45 PM (Rescheduled)', link: '/files/NOTICE_dated_28.05.2024.pdf' },
    { name: 'Intimation for BM 29.05.2024_ 12.45 PM', link: '/files/Board Meeting Intimation.pdf' },
    { name: 'Intimation for BM 13.02.2024_ 12.15PM', link: '/files/Intimation for BM 13.02.2024_ 12.15PM.pdf' },
    { name: 'Intimation for BM 14.11.2023_ 11.30AM', link: '/files/Intimation for BM 14.11.2023_ 11.30AM.pdf' },
    { name: 'Intimation for BM 11.08.2023_ 11.45AM', link: '/files/Intimation for BM 11.08.2023_ 11.45AM.pdf' },
    { name: 'Intimation to BSE for BM 23.06.2023_ 11.30AM', link: '/files/Intimation%20to%20BSE%20for%20BM%2023.06.2023_%2011.30AM.pdf' },
    { name: 'Intimation to BSE for BM 30.05.2023_ 11.00AM', link: '/files/Intimation%20to%20BSE%20for%20BM%2030.05.2023_%2011.00AM.pdf' },
    { name: 'Intimation to BSE for BM 26.04.2023_ 4.00 PM', link: '/files/Intimation to BSE for BM 26.04.2023_ 4.00 PM.pdf' },
    { name: 'Intimation to BSE for BM 26.04.2023 - 12 NOON', link: '/files/Intimation to BSE for BM 26.04.2023 - 12 NOON.pdf' },
    { name: 'Intimation to CSE for BM 26.04.2023 - 4.00 PM', link: '/files/Intimation to CSE for BM 26.04.2023 - 4.00 PM.pdf' },
    { name: 'Intimation to CSE for BM 26.04.2023- 12 NOON', link: '/files/Intimation to CSE for BM 26.04.2023- 12 NOON.pdf' },
    { name: 'Board Meeting Intimation Notice - 20.07.2020', link: '/files/BM Intimation - SE (Word file) -SIGNED.pdf' },
    { name: 'Board Meeting dt. 30.06.2020 Cancellation Intimation', link: '/files/174 BM Cancellation Notice.pdf' },
    { name: 'Board Meeting Intimation Notice - 30.06.2020', link: '/files/Notice - Board Meeting.pdf' },
    { name: 'Board Meeting Intimation Notice - 13.08.2019', link: '#' },
    { name: 'Board Meeting Intimation Notice - 30.05.2019', link: '/files/BM - Intimation 300519.pdf' },
    { name: 'Board Meeting Intimation Notice - 14.02.2019', link: '/files/BM Notice 14.02.2019.pdf' },
    { name: 'Board Meeting Intimation Notice - 13.11.2018', link: '/files/BM Notice 13.11.2018.pdf' },
    { name: 'Board Meeting Intimation Notice - 04.08.2018', link: '/files/BM Notice 14.02.2019.pdf' },
    { name: 'Board Meeting Intimation Notice - 28.05.2018', link: '/files/SE letter - BM Intimation.pdf' },
    { name: 'Board Meeting Intimation Notice - 14.02.2018', link: '/files/Notice of BM- 14.02.18.pdf' },
    { name: 'Board Meeting Intimation Notice - 12.09.2017', link: '/files/Notice.pdf' },
    { name: 'Board Meeting Intimation Notice - 02.05.2017', link: '/files/Board Meeting Intimation Notice dated 02.05.2017.pdf' },
    { name: 'Board Meeting Intimation Notice - 23.01.2017', link: '/files/BM Intimation- 06.02.17.pdf' },
    { name: 'Board Meeting Intimation Notice - 02.11.2016', link: '/files/Notice of Board Meeting.pdf' },
    { name: 'Board Meeting Intimation Notice - 28.07.2016', link: '/files/BMNotice28-07-2016.pdf' },
    { name: 'Board Meeting Intimation Notice - 30.05.2016', link: '/files/BM Notice- 30.05.2016.pdf' },
    { name: 'Board Meeting Intimation Notice - 12.02.2016', link: '/files/BMNotice-12.02.16.pdf' },
]

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
                <title>{`Board Meeting Intimation - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Board Meeting Intimation"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Board Meeting Intimation", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />

                    <FcList onClick={toggleShow1} title="List View" size={30} />

                </div> */}
                <MasonryPDF data={filesData} />
            </SidebarContent>
            <Footer />
        </>
    );
}