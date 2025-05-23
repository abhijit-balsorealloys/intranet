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
                <title>{`Annual Reports - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Annual Reports"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Annual Reports", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />

                    <FcList onClick={toggleShow1} title="List View" size={30} />

                </div> */}
                {show && (<div className="show">
                    <h2>Year 2024</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Annual Report  2024', link: '/files/ANNUAL REPORT FY 2023-24.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> Year Wise Report</strong></p></td>
                                <td width={60}><span><strong><strong></strong></strong></span></td>
                            </tr>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2024</p></th>
                            </tr>

                            <tr>
                                <td><p>Annual Report  2024</p>	</td>
                                <td>
                                    <Link href="/files/ANNUAL REPORT FY 2023-24.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
                        { name: 'Annual Report  2023', link: '/files/Annual Report  2023.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> Year Wise Report</strong></p></td>
                                <td width={60}><span><strong><strong></strong></strong></span></td>
                            </tr>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2023</p></th>
                            </tr>

                            <tr>
                                <td><p>Annual Report  2023</p>	</td>
                                <td>
                                    <Link href="/files/Annual Report  2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2022</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Annual Report  2022', link: '/files/BAL 2021-22 - ANNUAL REPORT.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> Year Wise Report</strong></p></td>
                                <td width={60}><span><strong><strong></strong></strong></span></td>
                            </tr>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2022</p></th>
                            </tr>

                            <tr>
                                <td><p>Annual Report  2022</p>	</td>
                                <td>
                                    <Link href="/files/BAL 2021-22 - ANNUAL REPORT.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2021</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Annual Report  2021', link: '/files/BAL 2020-21_ANNUAL REPORT.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><span className="text-white"><p>Year 2021</p></span></th>
                            </tr>

                            <tr>
                                <td><p>Annual Report  2021	</p></td>
                                <td width={60}>
                                    <Link href="/files/BAL 2020-21_ANNUAL REPORT.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2020</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Annual Report  2020', link: 'https://balasorealloysltd.sharepoint.com/sites/CloudStorage/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FCloudStorage%2FShared%20Documents%2Fwebsite%20content%2FAnnual%20Reports%2F2020%2FAnnual%20Report%5FBAL%202019%2D2020%20Final%2Epdf&parent=%2Fsites%2FCloudStorage%2FShared%20Documents%2Fwebsite%20content%2FAnnual%20Reports%2F2020&p=true&ga=1' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><span className="text-white"><p>Year 2020</p></span></th>
                            </tr>
                            <tr>
                                <td><p>Annual Report  2020	</p></td>
                                <td width={60}>
                                    <Link href="https://balasorealloysltd.sharepoint.com/sites/CloudStorage/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FCloudStorage%2FShared%20Documents%2Fwebsite%20content%2FAnnual%20Reports%2F2020%2FAnnual%20Report%5FBAL%202019%2D2020%20Final%2Epdf&parent=%2Fsites%2FCloudStorage%2FShared%20Documents%2Fwebsite%20content%2FAnnual%20Reports%2F2020&p=true&ga=1" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2019</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Annual Report  2019', link: '/files/FINAL_Balasore Alloys_Annual Report-2019.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><span className="text-white"><p>Year 2019</p></span></th>
                            </tr>

                            <tr>
                                <td><p>Annual Report  2019</p></td>
                                <td width={60}>
                                    <Link href="/files/FINAL_Balasore Alloys_Annual Report-2019.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2018</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Annual Report  2018', link: '/files/Balasore Alloys Annual Report 2017-18.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2018</p></th>
                            </tr>

                            <tr>
                                <td><p>Annual Report  2018</p></td>
                                <td width={60}>
                                    <Link href="/files/Balasore Alloys Annual Report 2017-18.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
                        { name: 'Annual Report  2017', link: '/files/Annual Report 2016-17. (1).pdf' },
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
                                <td><p>Annual Report  2017</p></td>
                                <td width={60}>
                                    <Link href="/files/Annual Report 2016-17. (1).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
                        { name: 'Annual Report  2016', link: '/files/Annual Report of Balasore Alloys Ltd 2015-16 (1).pdf' },
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
                                <td><p>Annual Report 2016</p></td>
                                <td width={60}>
                                    <Link href="/files/Annual Report of Balasore Alloys Ltd 2015-16 (1).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
                        { name: 'Chairman Speech on 27th AGM', link: '/files/ChairmanSpeech -27th.pdf' },
                        { name: 'Outcome of 27th Annual General Meeting', link: '/files/Outcome of AGM- 29.09.15.pdf' },
                        { name: 'Annual Report 2015', link: '/files/Annual Report 2015.pdf' },
                        { name: '27th AGM Notice', link: '/files/27th AGM Notice.pdf' },
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
                                <td><p>Chairman Speech on 27th AGM</p></td>
                                <td width={60}>
                                    <Link href="/files/ChairmanSpeech -27th.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Outcome of 27th Annual General Meeting</p></td>
                                <td>
                                    <Link href="/files/Outcome of AGM- 29.09.15.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Annual Report 2015</p></td>
                                <td>
                                    <Link href="/files/Annual Report 2015.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>27th AGM Notice</p></td>
                                <td>
                                    <Link href="/files/27th AGM Notice.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
                        { name: 'Chairman Speech on 26th AGM', link: '/files/Chairman Speech -26th AGM-25.09.14.pdf' },
                        { name: '26th AGM Results E-Voting & Poll', link: '/files/AGM_Results (E-Voting & Poll)-26TH.pdf' },
                        { name: 'Annual Report 2014', link: '/files/BAL _Annual Report 2013-14.pdf' },
                        { name: '26th AGM Notice', link: '/files/Notice 2013-14.pdf' },
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
                                <td><p>Chairman Speech on 26th AGM</p></td>
                                <td width={60}>
                                    <Link href="/files/Chairman Speech -26th AGM-25.09.14.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>26th AGM Results E-Voting & Poll</p></td>
                                <td>
                                    <Link href="/files/AGM_Results (E-Voting & Poll)-26TH.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Annual Report 2014</p></td>
                                <td>
                                    <Link href="/files/BAL _Annual Report 2013-14.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>26th AGM Notice</p></td>
                                <td>
                                    <Link href="/files/Notice 2013-14.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
                        { name: 'Annual Report 2013', link: '/files/Annual Report 2013.pdf' },
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
                                <td><p>Annual Report 2013</p></td>
                                <td width={60}>
                                    <Link href="/files/Annual Report 2013.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2012</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Annual Report 2012', link: '/files/Annual Report 2012.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2012</p></th>
                            </tr>
                            <tr>
                                <td><p>Annual Report 2012</p></td>
                                <td width={60}>
                                    <Link href="/files/Annual Report 2012.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2011</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Annual Report 2011', link: '/files/Annual Report 2011.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2011</p></th>
                            </tr>

                            <tr>
                                <td><p>Annual Report 2011</p></td>
                                <td width={60}>
                                    <Link href="/files/Annual Report 2011.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2010</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Annual Report 2010', link: '/files/Annual Report 2010.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2010</p></th>
                            </tr>
                            <tr>
                                <td><p>Annual Report 2010</p></td>
                                <td width={60}>
                                    <Link href="/files/Annual Report 2010.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2009</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Annual Report 2009', link: '/files/Annual Report 2009.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2009</p></th>
                            </tr>

                            <tr>
                                <td><p>Annual Report 2009</p></td>
                                <td width={60}>
                                    <Link href="/files/Annual Report 2009.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {show && (<div className="show">
                    <h2>Year 2008</h2>
                    <div className="blue-line mt-2 mb-4"></div>
                    <MasonryPDF data={[
                        { name: 'Annual Report 2008', link: 'Annual Report 2008.pdf' },
                    ]} />
                </div>
                )}
                {isvisible && (<div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2008</p></th>
                            </tr>

                            <tr>
                                <td><p>Annual Report 2008</p></td>
                                <td width={60}>
                                    <Link href="/files/Annual Report 2008.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
