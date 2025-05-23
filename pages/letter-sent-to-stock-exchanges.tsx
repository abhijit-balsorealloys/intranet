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
                <title>{`Letter Sent To Stock Exchange - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Letter Sent To Stock Exchange"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Letter Sent To Stock Exchange", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />
                    <FcList onClick={toggleShow1} title="List View" size={30} />
                </div> */}
                {show && (<div className="show">
                    <h2>Letter Sent to Stock Exchanges</h2>
                    <MasonryPDF data={[
                        { name: 'Resignation of Directors 29-04-2025', link: '/files/Resignation of Directors_29-04-2025.pdf' },
                        { name: 'Outcome of BM MD', link: '/files/Outcome of BM_MD.pdf' },
                        { name: 'Compliance Certificate Reg 74(5)_31.03.2025', link: '/files/Compliance Certificate Reg 74(5)_31.03.2025.pdf' },
                        { name: 'Regulation 13(1) & 13(3) of SEBI (LODR) for the quarter ended 31.03.2025', link: '/files/Regulation 13(1) & 13(3) of SEBI (LODR) for the quarter ended 31.03.2025.pdf' },
                        { name: 'Closure of Trading Window for the quarter ended March 2025', link: '/files/Closure of Trading Window for the quarter ended March2025.pdf' },
                        { name: 'Regulation 74(5) of SEBI (DP) Regulations 2018 for the quarter ended December 24', link: '/files/Compliance Certificate Reg 74(5)_31122024.pdf' },
                        { name: 'Regulation 13(1)&13(3) of SEBI (LODR) Regulations 2015 for the quarter ended December 24', link: '/files/Statement of Investors Complaints_31122024.pdf' },
                        { name: 'Closure of Trading Window for the quarter ended Dec 2024', link: '/files/Closure of Trading window_31122024.pdf' },
                        { name: 'Regulation 76 of SEBI (DP) Regulations 2018 for the quarter ended September 24', link: '/files/Reg 76_Q2_2024-2025.pdf' },
                        { name: 'Regulation 74(5) of SEBI (DP) Regulations 2018 for the quarter ended September 24', link: '/files/74(5)_Q2_2024-2025.pdf' },
                        { name: 'Regulation 13(1)& 13(3) of SEBI (LODR) Regulations 2015 for the quarter ended September 24', link: '/files/13(1) and 13(3)_Q2_2024-2025.pdf' },
                        { name: 'Closure of Trading Window for the quarter ended Sept 2024', link: '/files/Closure of Trading Window for the quarter ended Sept 2024.pdf' },
                        { name: 'Outcome of 36th AGM- ST Ex', link: '/files/ROutcome of 36th AGM- ST Ex.pdf' },
                        { name: 'Intimation under Regulation 42 of SEBI (LODR) 2015, Book Closure Dates', link: '/files/Reg 42 Intimation.pdf' },
                        { name: 'Intimation under Reg. 30 of SEBI (LODR) Reg. 2015_13.08.2024', link: '/files/Intimation under Reg. 30.pdf' },
                        { name: 'Regulation 13(1)&13(3) of SEBI (LODR) Regulations 2015 for the quarter ended June 24', link: '/files/13(3).pdf' },
                        { name: 'Regulation 74(5) of SEBI (DP) Regulations 2018 for the quarter ended June 24', link: '/files/74(5).pdf' },
                        { name: 'Closure of Trading Window for the Quarter ended June 2024', link: '/files/Closure of trading window Q1.pdf' },
                        { name: 'Related Party Transactions for the Financial Year ended 31.03.2024', link: '/files/RPT _BSE.pdf' },
                        { name: 'SEBI Circular dated 31.07.2023 on Online Resolution of Disputes in the Indian Securities Market read with circular dated 04.08.2023', link: '/files/SEBIORDR_circular31st_July_2023.pdf' },
                        { name: 'Regulation 7(3) of SEBI (LODR) Regulations 2015 for the Financial Year ended March 24', link: '/files/Regulation 7(3).pdf' },
                        { name: 'Regulation 40(10) of SEBI (LODR) Regulations 2015 for the Financial Year ended March 24', link: '/files/Regulation 40(9).pdf' },
                        { name: 'Regulation 76 of SEBI (DP) Regulations 2018 for the quarter ended March 24', link: '/files/Regulation 76 of DP Regulations.pdf' },
                        { name: 'Regulation 74(5) of SEBI (DP) Regulations 2018 for the quarter ended March 24', link: '/files/Regulation 74(5) of SEBI DP Reg.pdf' },
                        { name: 'Regulation 13(1)&13(3) of SEBI (LODR) Regulations 2015 for the quarter ended March 24', link: '/files/Reg. 13(1) and 13(3).pdf' },
                        { name: 'Disclosure under Regulation 31(4) of SEBI (SAST) Regulations, 2011', link: '/files/Reg. 31(4) of SEBI SAST.pdf' },
                        { name: 'Disclosure under Reg. 39(3) of SEBI (LODR) Regulations, 2015', link: '/files/Reg. 39(3) loss of share certificate.pdf' },
                        { name: 'Reason for resignation of Directors dated 30.03.2024', link: '/files/Reason for resignation.pdf' },
                        { name: 'Reappointment of Mr. Paramesh Bhattacharya as Independent Director on the Board', link: '/files/Appt. of ID.pdf' },
                        { name: 'Closure of trading Window for the Quarter ended March 24 dated 30.03.2024', link: '/files/closure of trading window.pdf' },
                        { name: 'Intimation of change in Management', link: '/files/intimation of change in management.pdf' },
                        { name: 'Resignation of Mr. R.K Parakh, Managing Director', link: '/files/Intimation of Resignation of R.K Parakh.pdf' },
                        { name: 'Reg. 30 Mines related disclosure', link: '/files/Reg. 30 Mines Disc. signed.pdf' },
                        { name: 'corporate announcement 25.1.24', link: '/files/corporate announcement 25.1.24.pdf' },
                        { name: 'Outcome of 35th AGM dated 31.07.2023', link: '/files/Outcome of 35th AGM dated 31.08.2023.pdf' },
                        { name: 'Outcome of 34th AGM on dated 29.05.2023', link: '/files/Outcome of 34th AGM dated 29.05.2023.pdf' },
                        { name: 'Outcome of 33rd AGM on dated 29.05.2023', link: '/files/Outcome of 33rd AGM dated 29.05.2023.pdf' },
                        { name: 'Outcome of 32nd AGM on dated 30.03.2023', link: '/files/Outcome of AGM.pdf' },
                        { name: 'Letter to Stock Exchanges-ED  Dated 20.04.2019', link: '/files/SE Letter - 20.04.2019.pdf' },
                        { name: 'Letter to Stock Exchanges-ED  Dated 03.04.2019', link: '/files/Regulation 30 - 03.04.2019.pdf' },
                        { name: 'Letter to Stock Exchanges-ED  Dated 09.03.2019', link: '/files/SE Letter 09.03.19.pdf' },
                        { name: 'Letter to Stock Exchanges-ED  Dated 27.05.2018', link: '/files/ED Letter dtd. 27.05.18 (F).pdf' },
                        { name: 'Letter to Stock Exchanges -Divident Dated 25.05.2018', link: '/files/SE Letter- Dividend.pdf' },
                        { name: 'Intimation of Schedule of Analyst/Institutional Investors meetings', link: '/files/Stock Exchange Letter.pdf' },
                        { name: 'Investor Presentation', link: '/files/Investors_Presentations.pdf' },
                        { name: 'Letter to Stock Exchanges -Divident Dated 27.05.2018', link: '#' },
                        { name: 'Letter to Stock Exchanges  Dated 09.01.2018', link: '/files/BSE Letter 09.01.2018.pdf' },
                        { name: 'letter to Stock Exchanges  Dated 23.12.2017', link: '/files/IMG (1).pdf' },
                        { name: 'Outcome of 162nd Board Meeting', link: '/files/Outcome of 162nd Board Meeting.pdf' },
                        { name: 'Clarification letter to Stock Exchanges', link: '/files/SE Clarification Letter- 17.12.17.pdf' },

                    ]} />
                </div>
                )}

                {isvisible && (<div className="table-responsive show">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> Letter Sent to Stock Exchanges</strong></p></td>
                                <td width={60}><span><strong></strong></span></td>
                            </tr>
                            <tr>
                                <td><p>Resignation of Directors 29-04-2025</p></td>
                                <td>
                                    <Link href="/files/Resignation of Directors_29-04-2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Outcome of BM MD</p></td>
                                <td>
                                    <Link href="/files/Outcome of BM_MD.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Compliance Certificate Reg 74(5)_31.03.2025</p></td>
                                <td>
                                    <Link href="/files/Compliance Certificate Reg 74(5)_31.03.2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 13(1) & 13(3) of SEBI (LODR) for the quarter ended 31.03.2025</p></td>
                                <td>
                                    <Link href="/files/Regulation 13(1) & 13(3) of SEBI (LODR) for the quarter ended 31.03.2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Closure of Trading Window for the quarter ended March 2025</p></td>
                                <td>
                                    <Link href="/files/Closure of Trading Window for the quarter ended March2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 74(5) of SEBI (DP) Regulations 2018 for the quarter ended December 24</p></td>
                                <td>
                                    <Link href="/files/Compliance Certificate Reg 74(5)_31122024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 13(1)&13(3) of SEBI (LODR) Regulations 2015 for the quarter ended December 24</p></td>
                                <td>
                                    <Link href="/files/Statement of Investors Complaints_31122024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Closure of Trading Window for the quarter ended Dec 2024</p></td>
                                <td>
                                    <Link href="/files/Closure of Trading window_31122024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 76 of SEBI (DP) Regulations 2018 for the quarter ended September 24</p></td>
                                <td>
                                    <Link href="/files/Reg 76_Q2_2024-2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 74(5) of SEBI (DP) Regulations 2018 for the quarter ended September 24</p></td>
                                <td>
                                    <Link href="/files/74(5)_Q2_2024-2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 13(1)&13(3) of SEBI (LODR) Regulations 2015 for the quarter ended September 24</p></td>
                                <td>
                                    <Link href="/files/13(1) and 13(3)_Q2_2024-2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Closure of Trading Window for the quarter ended Sept 2024</p></td>
                                <td>
                                    <Link href="/files/Closure of Trading Window for the quarter ended Sept 2024.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Outcome of 36th AGM- ST Ex</p></td>
                                <td>
                                    <Link href="/files/ROutcome of 36th AGM- ST Ex.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Intimation under Regulation 42 of SEBI (LODR) 2015, Book Closure Dates</p></td>
                                <td>
                                    <Link href="/files/Reg 42 Intimation.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Intimation under Reg. 30 of SEBI (LODR) Reg. 2015_13.08.2024</p></td>
                                <td>
                                    <Link href="/files/Intimation under Reg. 30.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 13(1)&13(3) of SEBI (LODR) Regulations 2015 for the quarter ended June 24</p></td>
                                <td>
                                    <Link href="/files/13(3).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 74(5) of SEBI (DP) Regulations 2018 for the quarter ended June 24</p></td>
                                <td>
                                    <Link href="/files/74(5).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Closure of Trading Window for the Quarter ended June 2024</p></td>
                                <td>
                                    <Link href="/files/Closure of trading window Q1.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Related Party Transactions for the Financial Year ended 31.03.2024</p></td>
                                <td>
                                    <Link href="/files/RPT _BSE.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>SEBI Circular dated 31.07.2023 on Online Resolution of Disputes in the Indian Securities Market read with circular dated 04.08.2023</p></td>
                                <td>
                                    <Link href="/files/SEBIORDR_circular31st_July_2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 7(3) of SEBI (LODR) Regulations 2015 for the Financial Year ended March 24</p></td>
                                <td>
                                    <Link href="/files/Regulation 7(3).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 40(10) of SEBI (LODR) Regulations 2015 for the Financial Year ended March 24</p></td>
                                <td>
                                    <Link href="/files/Regulation 40(9).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 76 of SEBI (DP) Regulations 2018 for the quarter ended March 24</p></td>
                                <td>
                                    <Link href="/files/Regulation 76 of DP Regulations.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 74(5) of SEBI (DP) Regulations 2018 for the quarter ended March 24</p></td>
                                <td>
                                    <Link href="/files/Regulation 74(5) of SEBI DP Reg.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Regulation 13(1)&13(3) of SEBI (LODR) Regulations 2015 for the quarter ended March 24</p></td>
                                <td>
                                    <Link href="/files/Reg. 13(1) and 13(3).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Disclosure under Regulation 31(4) of SEBI (SAST) Regulations, 2011</p></td>
                                <td>
                                    <Link href="/files/Reg. 31(4) of SEBI SAST.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Disclosure under Reg. 39(3) of SEBI (LODR) Regulations, 2015</p></td>
                                <td>
                                    <Link href="/files/Reg. 39(3) loss of share certificate.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Reason for resignation of Directors dated 30.03.2024</p></td>
                                <td>
                                    <Link href="/files/Reason for resignation.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Reappointment of Mr. Paramesh Bhattacharya as Independent Director on the Board</p></td>
                                <td>
                                    <Link href="/files/Appt. of ID.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Closure of trading Window for the Quarter ended March 24 dated 30.03.2024</p></td>
                                <td>
                                    <Link href="/files/closure of trading window.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Intimation of change in Management</p></td>
                                <td>
                                    <Link href="/files/intimation of change in management.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Resignation of Mr. R.K Parakh, Managing Director</p></td>
                                <td>
                                    <Link href="/files/Intimation of Resignation of R.K Parakh.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Reg. 30 Mines related disclosure</p></td>
                                <td>
                                    <Link href="/files/Reg. 30 Mines Disc. signed.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Reg. 30 Mines related disclosure</p></td>
                                <td>
                                    <Link href="/files/Reg. 30 Mines Disc. signed.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>corporate announcement 25.1.24</p></td>
                                <td>
                                    <Link href="/files/corporate announcement 25.1.24.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Outcome of 35th AGM dated 31.07.2023</p></td>
                                <td>
                                    <Link href="/files/Outcome of 35th AGM dated 31.08.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Outcome of 34th AGM on dated 29.05.2023</p></td>
                                <td>
                                    <Link href="/files/Outcome of 34th AGM dated 29.05.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Outcome of 33rd AGM on dated 29.05.2023</p></td>
                                <td>
                                    <Link href="/files/Outcome of 33rd AGM dated 29.05.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Outcome of 32nd AGM on dated 30.03.2023</p></td>
                                <td>
                                    <Link href="/files/Outcome of AGM.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Letter to Stock Exchanges-ED  Dated 20.04.2019</p></td>
                                <td>
                                    <Link href="/files/SE Letter - 20.04.2019.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Letter to Stock Exchanges-ED  Dated 03.04.2019</p></td>
                                <td>
                                    <Link href="/files/Regulation 30 - 03.04.2019.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Letter to Stock Exchanges-ED  Dated 09.03.2019</p></td>
                                <td>
                                    <Link href="/files/SE Letter 09.03.19.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Letter to Stock Exchanges-ED  Dated 27.05.2018</p></td>
                                <td>
                                    <Link href="/files/ED Letter dtd. 27.05.18 (F).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Letter to Stock Exchanges -Divident Dated 25.05.2018</p></td>
                                <td>
                                    <Link href="/files/SE Letter- Dividend.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Intimation of Schedule of Analyst/Institutional Investors meetings</p></td>
                                <td>
                                    <Link href="/files/Stock Exchange Letter.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Investor Presentation</p> </td>
                                <td>
                                    <Link href="/files/Investors_Presentations.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Letter to Stock Exchanges -Divident Dated 27.05.2018</p></td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td><p>Letter to Stock Exchanges  Dated 09.01.2018</p></td>
                                <td>
                                    <Link href="/files/BSE Letter 09.01.2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>letter to Stock Exchanges  Dated 23.12.2017 </p></td>
                                <td>
                                    <Link href="/files/IMG (1).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Outcome of 162nd Board Meeting</p></td>
                                <td>
                                    <Link href="/files/Outcome of 162nd Board Meeting.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Clarification letter to Stock Exchanges</p> </td>
                                <td>
                                    <Link href="/files/SE Clarification Letter- 17.12.17.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
