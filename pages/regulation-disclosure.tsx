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
                <title>{`Regulation 46 Disclosure - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Regulation 46 Disclosure"
                breadcrumbs={[
                    { name: "Investors", link: "#" },
                    { name: "Regulation 46 Disclosure", link: "" },
                ]}
            />
            <SidebarContent navFor="Investors">
                {/* <div className="text-right py-3">
                    <FcGrid onClick={toggleShow} title="Grid View" size={30} />
                    
                    <FcList onClick={toggleShow1} title="List View" size={30} />
                   
                </div> */}
                {show && (<div className="table-responsive show">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> File Name</strong></p></td>
                                <td width={80}><p><strong>Download</strong></p></td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Details of its business</p>
                                </td>
                                <td>
                                    <Link href="/profile" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Memorandum of Association and Articles of Association</p>
                                </td>
                                <td>
                                    <Link href="/files/BAL_ MOA & AOA.pdf" passHref><a target="_blank"><p><strong>Download Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Terms and conditions of appointment of independent directors</p>
                                </td>
                                <td>
                                    <Link href="/files/terms-and-conditions-of-appointment-of-independent-directors.pdf" passHref><a target="_blank"><p><strong>Download Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Composition of various committees of board of directors</p>
                                </td>
                                <td>
                                    <Link href="/committee-of-board-of-directors" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Code of conduct of board of directors and senior management personnel</p>
                                </td>
                                <td>
                                    <Link href="/files/Code of Conduct.pdf" passHref><a target="_blank"><p><strong>Download Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Details of establishment of vigil mechanism/ Whistle Blower policy</p>
                                </td>
                                <td>
                                    <Link href="/files/Whistle Blower Policy_14.02.2018.pdf" passHref><a target="_blank"><p><strong>Download Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Criteria of making payments to non-executive directors, if the same has not been disclosed in annual report</p>
                                </td>
                                <td>
                                    <Link href="/files/Remuneration Policy.pdf" passHref><a target="_blank"><p><strong>Download Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Policy on dealing with related party transactions</p>
                                </td>
                                <td>
                                    <Link href="/files/Policy on Related Party Transaction.pdf" passHref><a target="_blank"><p><strong>Download Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Policy for determining ‘material’ subsidiaries</p>
                                </td>
                                <td>
                                    <Link href="/files/Policy for Determination of Material Subsidiaries.pdf" passHref><a target="_blank"><p><strong>Download Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Details of familiarization programmes imparted to independent directors including the following details:</p>
                                    <p>(i) Number of programmes attended by independent directors (during the year and on a cumulative basis till date)</p>
                                    <p>(ii) Number of hours spent by independent directors in such programmes (during the year and on cumulative basis till date), and</p>
                                    <p>(iii) Other relevant details</p>
                                </td>
                                <td className="py-6">
                                    <p></p><br></br>
                                    <Link href="/files/Familarisation Policy.pdf" passHref><a target="_blank"><p><strong>Download Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>The email address for grievance redressal and other relevant details	</p>
                                </td>
                                <td >
                                    <Link href="/contact-information" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances</p>
                                </td>
                                <td >
                                    <Link href="/contact-information" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Financial information including:</p>
                                    <p>(i) Notice of meeting of the board of directors where financial results shall be discussed</p>
                                    <p>(ii) Financial results, on conclusion of the meeting of the board of directors where the financial results were approved</p>
                                    <p>(iii) Complete copy of the annual report including balance sheet, profit and loss account, directors report, corporate governance report etc</p>
                                </td>
                                <td>
                                    <p></p><br></br>
                                    <p><Link href="/board-meeting-intimations" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link></p><br></br>
                                    <p><Link href="/financial-reports" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link></p>
                                    <p><Link href="/annual-reports" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Shareholding Pattern</p>
                                </td>
                                <td>
                                    <Link href="/shareholder-pattern" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Details of agreements entered into with the media companies and/or their associates, etc.</p>
                                </td>
                                <td>
                                    <Link href="" passHref><a target="_blank"><p><strong></strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change</p>
                                </td>
                                <td>
                                    <Link href="" passHref><a target="_blank"></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Items in sub-regulation (1) of regulation 47</p> 
                                </td>
                                <td>
                                    <p><Link href="/financial-reports" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link></p>
                                    <p><Link href="/letter-sent-to-stock-exchanges" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link></p>
                                    <p><Link href="/board-meeting-intimations" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Separate audited financial statements of each subsidiary of the listed entity in respect of a relevant financial year, uploaded at least 21 days prior to the date of the annual general meeting which has been called to inter alia consider accounts of that financial year: Provided that a listed entity, which has a subsidiary incorporated outside India-</p>
                                    <p>(a) Where such subsidiary is statutorily required to prepare consolidated financial statement under any law of the country of its incorporation, the requirement of this proviso shall be met if consolidated financial statement of such subsidiary is placed on the website of the listed entity</p>
                                    <p>(b) Where such subsidiary is not required to get its financial statement audited under any law of the country of its incorporation and which does not get such financial statement audited, the holding Indian listed entity may place such unaudited financial statement on its website and where such financial statement is in a language other than English, a translated copy of the financial statement in English shall also be placed on the website</p>
                                  
                                </td>
                                <td>
                                    <p></p><br></br><br></br><br></br><br></br>
                                    <p><Link href="/financial-statement-of-milton-holdings-limited" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link></p><br></br><br></br><br></br>
                                    <p><Link href="/financial-statement-of-balasore-metals-pte-limited" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Secretarial compliance report as per sub-regulation (2) of regulation 24A of these regulations</p>
                                </td>
                                <td>
                                    <Link href="/secretarial-compliance-report" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Disclosure of the policy for determination of materiality of events or information required under clause	</p>
                                </td>
                                <td>
                                    <Link href="/files/Policy to determine the material event.pdf" passHref><a target="_blank"><p><strong>Download Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Disclosure of contact details of key managerial personnel who are authorized...</p>
                                </td>
                                <td>
                                    <Link href="/files/Contact Details Under Reg 30(5).pdf" passHref><a target="_blank"><p><strong>Download Here</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Disclosures under sub-regulation (8) of regulation 30 of these regulations	</p>
                                </td>
                                <td>
                                    <Link href="#" passHref><a target="_blank"></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Statements of deviation(s) or variation(s) as specified in regulation 32of these regulations</p>
                                </td>
                                <td>
                                    <Link href="#" passHref><a target="_blank"></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Dividend distribution policy by listed entities based on market capitalization as specified in sub-regulation (1) of regulation 43A</p>
                                </td>
                                <td>
                                    <Link href="#" passHref><a target="_blank"></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Annual return as provided under section 92 of the Companies Act,2013 and the rules made thereunder</p>
                                </td>
                                <td>
                                    <Link href="/annual-returns" passHref><a target="_blank"><p><strong>Click Here</strong></p></a></Link>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                )}
                
                {isvisible && (<div className="show">
                <MasonryPDF data={[
                    { name: 'Details of its business', link: '/profile' },
                    { name: 'Memorandum of Association and Articles of Association', link: '/files/BAL_ MOA & AOA.pdf' },
                    { name: 'Terms and conditions of appointment of independent directors', link: '/files/terms-and-conditions-of-appointment-of-independent-directors.pdf' },
                    { name: 'Composition of various committees of board of directors', link: '/committee-of-board-of-directors' },
                    
                ]} /> 
                </div>
                 )}
            </SidebarContent>
            <Footer />
        </>
    );
}
