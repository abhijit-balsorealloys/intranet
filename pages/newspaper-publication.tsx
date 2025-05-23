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
                <title>{`Newspaper Publication - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Newspaper Publication"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Newspaper Publication", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />
                    
                    <FcList onClick={toggleShow1} title="List View" size={30} />
                   
                </div> */}
                
                {show && (<div className="show">
                <MasonryPDF data={[
                    { name: 'Publication of extracts of Audited financial results for the quarter and Financial year ended 31.03.2025', link: '/files/Publication of Audited Financials.pdf' },
                    { name: '06th February, 2025 - Publication of Postal Ballot Notice', link: '/files/Newspaper Publication_Postal ballot Notice.pdf' },
                    { name: '28th January 2025 Publication of extracts of Financial results for the 3rd quarter and nine months ended 31.12.2024', link: '/files/Newspaper Publication_FR_31.12.24.pdf' },
                    { name: '06th November 2024 Publication of extracts of Financial results for the 2nd quarter and half year ended 30.09.2024', link: '/files/06th November 2024 Publication of extracts of Financial results for the 2nd quarter and half year ended 30.09.2024.pdf' },
                    { name: 'Post dispatch newspaper advertisement of notice of 36th AGM to be held on 27th September, 2024', link: '/files/reg 47_post publication notice.pdf' },
                    { name: '29th August,2024 -Pre-despatch notice of 36th AGM to be held on 27.09.2024', link: '/files/36th AGM Notice Pre Newspaper Ad.pdf' },
                    { name: '14th August 2024 Publication of extracts of Unaudited financial results for the quarter ended 30.06.2024.', link: '/files/Newspaper Publication_14.08.2024.pdf'},
                    { name: '1st June 2024 Publication of extracts of Audited financial results for the quarter and Financial year ended 31.03.2024.', link: '/files/Newspaper_Publication.pdf' },
                    { name: '14th February, 2024 Publication of extracts of financial results for the quarter and nine months ended 31.12.2023', link: '/files/newspaperpublicationFR_Decqtr23.pdf' },
                    { name: '15th November, 2023 Publication of extracts of financial results for the quarter and half year ended 30.09.2023', link: '/files/15th November, 2023 Publication of extracts of financial results for the quarter and half year ended 30.09.2023.pdf' },
                    { name: '12th August 2023, Publication of extracts of financial results for the quarter ended 30.06.2023', link: '/files/12th August 2023, Publication of extracts of financial results for the quarter ended 30.06.2023.pdf' },
                    { name: '01st June, 2023 Postal Ballot Notice Pursuant to Regulation 47 of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.', link: '/files/01st June, 2023 Postal Ballot Notice Pursuant to Regulation 47 of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.pdf' },
                    { name: '01st June, 2023 PUBLICATION OF FINANCIAL RESULTS FOR QUARTER ENDED JUNE`22 , SEP`22, DEC`22 AND MAR`23', link: '/files/01st June, 2023 PUBLICATION OF FINANCIAL RESULTS FOR QUARTER ENDED JUNE22, SEP22, DEC22 AND MAR23.pdf' },
                    { name: '06th July, 2023- Pre-despatch notice of 35th AGM to be held on 31st July, 2023.', link: '/files/06th July, 2023- Pre-despatch notice of 35th AGM to be held on 31st July, 2023.pdf' },
                    { name: '08th May, 2023 - PUBLICATION FOR 33RD AND 34TH ANNUAL GENERAL MEETING RESPECTIVELY TO BE HELD ON 29 MAY, 2023', link: '/files/08th May, 2023 - PUBLICATION FOR 33RD AND 34TH ANNUAL GENERAL MEETING RESPECTIVELY TO BE HELD ON 29 MAY, 2023.pdf' },
                    { name: '09th July, 2023- Post-dispatch newspaper advertisement of notice of 35th AGM to be held on 31st July, 2023', link: '/files/09th July, 2023- Post-dispatch newspaper advertisement of notice of 35th AGM to be held on 31st July, 2023.pdf' },
                    { name: '12th August, 2023- Newspaper publication of extracts of financial results for the quarter ended 30th June, 2023', link: '/files/12th August, 2023- Newspaper publication of extracts of financial results for the quarter ended 30th June, 2023.pdf' },
                    { name: '28th April, 2023 PUBLICATION OF FINANCIAL RESULTS FOR QUARTER ENDED JUNE`21, SEP`21, DEC`21 AND MAR`22', link: '/files/28th April, 2023 PUBLICATION OF FINANCIAL RESULTS FOR QUARTER ENDED JUNE21, SEP21, DEC21 AND MAR22.pdf' },
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
                                    <p>Publication of extracts of Audited financial results for the quarter and Financial year ended 31.03.2025</p>
                                </td>
                                <td>
                                    <Link href="/files/Publication of Audited Financials.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>06th February, 2025 - Publication of Postal Ballot Notice</p>
                                </td>
                                <td>
                                    <Link href="/files/Newspaper Publication_Postal ballot Notice.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>28th January 2025 Publication of extracts of Financial results for the 3rd quarter and nine months ended 31.12.2024</p>
                                </td>
                                <td>
                                    <Link href="/files/Newspaper Publication_FR_31.12.24.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>06th November 2024 Publication of extracts of Financial results for the 2nd quarter and half year ended 30.09.2024</p>
                                </td>
                                <td>
                                    <Link href="/files/06th November 2024 Publication of extracts of Financial results for the 2nd quarter and half year ended 30.09.2024.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Post dispatch newspaper advertisement of notice of 36th AGM to be held on 27th September, 2024</p>
                                </td>
                                <td>
                                    <Link href="/files/reg 47_post publication notice.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>29th August,2024 -Pre-despatch notice of 36th AGM to be held on 27.09.2024</p>
                                </td>
                                <td>
                                    <Link href="/files/36th AGM Notice Pre Newspaper Ad.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>14th August 2024 Publication of extracts of Unaudited financial results for the quarter ended 30.06.2024.</p>
                                </td>
                                <td>
                                    <Link href="/files/Newspaper Publication_14.08.2024.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>1st June 2024 Publication of extracts of Audited financial results for the quarter and Financial year ended 31.03.2024.</p>
                                </td>
                                <td>
                                    <Link href="/files/Newspaper_Publication.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>14th February, 2024 Publication of extracts of financial results for the quarter and nine months ended 31.12.2023</p>
                                </td>
                                <td>
                                    <Link href="/files/newspaperpublicationFR_Decqtr23.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>15th November, 2023 Publication of extracts of financial results for the quarter and half year ended 30.09.2023</p>
                                </td>
                                <td>
                                    <Link href="/files/15th November, 2023 Publication of extracts of financial results for the quarter and half year ended 30.09.2023.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>12th August 2023, Publication of extracts of financial results for the quarter ended 30.06.2023</p>
                                </td>
                                <td>
                                    <Link href="/files/12th August 2023, Publication of extracts of financial results for the quarter ended 30.06.2023.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>01st June, 2023 Postal Ballot Notice Pursuant to Regulation 47 of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.</p>
                                </td>
                                <td>
                                    <Link href="/files/01st June, 2023 Postal Ballot Notice Pursuant to Regulation 47 of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>01st June, 2023 PUBLICATION OF FINANCIAL RESULTS FOR QUARTER ENDED JUNE'22, SEP'22, DEC'22 AND MAR'23</p>
                                </td>
                                <td>
                                    <Link href="/files/01st June, 2023 PUBLICATION OF FINANCIAL RESULTS FOR QUARTER ENDED JUNE22, SEP22, DEC22 AND MAR23.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>06th July, 2023- Pre-despatch notice of 35th AGM to be held on 31st July, 2023.</p></td>
                                <td>
                                    <Link href="/files/06th July, 2023- Pre-despatch notice of 35th AGM to be held on 31st July, 2023.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>08th May, 2023 - PUBLICATION FOR 33RD AND 34TH ANNUAL GENERAL MEETING RESPECTIVELY TO BE HELD ON 29 MAY, 2023</p></td>
                                <td>
                                    <Link href="/files/08th May, 2023 - PUBLICATION FOR 33RD AND 34TH ANNUAL GENERAL MEETING RESPECTIVELY TO BE HELD ON 29 MAY, 2023.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>09th July, 2023- Post-dispatch newspaper advertisement of notice of 35th AGM to be held on 31st July, 2023</p></td>
                                <td>
                                    <Link href="/files/09th July, 2023- Post-dispatch newspaper advertisement of notice of 35th AGM to be held on 31st July, 2023.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>12th August, 2023- Newspaper publication of extracts of financial results for the quarter ended 30th June, 2023</p></td>
                                <td>
                                    <Link href="/files/12th August, 2023- Newspaper publication of extracts of financial results for the quarter ended 30th June, 2023.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>28th April, 2023 PUBLICATION OF FINANCIAL RESULTS FOR QUARTER ENDED JUNE'21, SEP'21, DEC'21 AND MAR'22</p></td>
                                <td>
                                    <Link href="/files/28th April, 2023 PUBLICATION OF FINANCIAL RESULTS FOR QUARTER ENDED JUNE21, SEP21, DEC21 AND MAR22.pdf" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
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
