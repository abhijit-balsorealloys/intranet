import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import List from "components/layouts/List";

export default function Page() {
  return (
    <>
      <Head>
        <title>{`Share Holders Information - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Share Holders Information"
        breadcrumbs={[
          { name: "Investors", link: "#" },
          { name: "Share Holders Information", link: "" },
        ]}
      />
      <SidebarContent navFor="Investors">
      <div className="table-responsive">
                    
                            <table className="table table-bordered table-hover">
                            <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> Share Holders Information</strong></p></td>
                                <td width={130}><span><strong></strong></span></td>
                            </tr>
                            <tr>
                                <td><p>Message to the Shareholders of Balasore Alloys Limited.(16/06/2021)</p></td>
                                <td>
                                <Link href="/files/final letter to shareholder.pdf" passHref><a target="_blank"><p><strong>View Message</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Familiarization Programme</p></td>
                                <td>
                                <Link href="/files/Familiarisation Programme (1).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Details of Authorised KMP</p></td>
                                <td>
                               <p> Download</p>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Sock Exchange Information</p></td>
                                <td>
                                <Link href={'/stock-exchange'} passHref><a target="_blank"><p><strong>Click to Know More</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Shareholders Reference</p></td>
                                <td>
                                <Link href="/files/shareholders_reference.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Contact Details</p>	</td>
                                <td>
                                <Link href={'/contact-information'} passHref><a target="_blank"><p><strong>Click to Know More</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td> <p>Query Form</p>	</td>
                                <td>
                                <Link href="/files/QUERY_FORM.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Nomination Form</p>  </td>
                                <td>
                                <Link href="/files/Nomination_Form.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Registration of e-mail address - "Green initiative form" </p></td>
                                <td>
                                <Link href="/files/BAL_GI_Form.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            </tbody>
                            </table>
                            <h3>Details of Unclaimed Dividend / Transfer of Equity Share</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <p>In terms of provisions of Section 124(6) of the Companies Act, 2013, read with the Investor Education and Protection Fund Authority (Accounting, Audit, Transfer and Refund) Rules, 2016,  details of Shareholders and their corresponding shares liable to be transferred to Demat Account of IEPF Authority in respect of which dividend remained unclaimed or unpaid for seven consecutive years or more, are furnished herewith.</p>
                            <h3>Details of Shares liable to be transferred to IEPF - Year 2011-12</h3>
                            <p><Link href="/files/IEPF - 23-08-2019 (2).pdf" passHref><a target="_blank" className="text-primary"><strong>Click here to Download</strong></a></Link></p>
                            <h3>Details of Shares liable to be transferred to IEPF - Year 2010-11</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <p><Link href="/files/ial_iepf_4_300618_PHY_DEMAT-output.pdf" passHref><a target="_blank" className="text-primary"><strong>Click here to Download</strong></a></Link></p>
                            <h3>Shareholder Infromation</h3>
                            <div className="blue-line mt-2 mb-4"></div>
                            <table className="table table-bordered table-hover">
                            <tbody>
                            <tr>
                                <td><p> 1. Notice to Shareholder - Transfer of Equity Shares to IEPF</p> </td>
                                <td>
                                <Link href="/files/Balasore (Notice) - 10.07.18.pdf" passHref><a target="_blank"><p><strong>Click Here 2010-2011</strong></p></a></Link>
                                </td>
                                <td>
                                <Link href="/files/Balasore_IEPF.pdf" passHref><a target="_blank"><p><strong>Click Here 2011-2012</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>2. News Paper Publication - Transfer of Equity Shares to IEPF </p>	</td>
                                <td>
                                <Link href="/files/News Paper Publication - Tr. of Shares to IEPF (1).pdf" passHref><a target="_blank"><p><strong>Click Here </strong></p></a></Link>
                                </td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                            </table>
                <h3>Details of Unclaimed / Unpaid Dividend</h3>
                <div className="blue-line mt-2 mb-4"></div>
                <table className="table table-bordered table-hover">
                            <tbody>
                            <tr className="bg-primary text-white">
                                <td><p><strong> Financial Year Wise</strong></p></td>
                                <td width={130}><span><strong></strong></span></td>
                            </tr>
                            <tr>
                                <td><p>Financial Year (2015-2016)</p></td>
                                <td>
                                <Link href="/files/FINAL-2015-16.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Financial Year (2014-2015)</p></td>
                                <td>
                                <Link href="/files/FINAL-2014-15.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Financial Year (2013-2014)</p></td>
                                <td>
                                <p>Download</p>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Financial Year (2012-2013)</p></td>
                                <td>
                                <p>Download</p>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Financial Year (2011-2012)</p></td>
                                <td>
                               <p>Download</p>
                                </td>
                            </tr>
                            <tr>
                                <td> <p>Financial Year (2010-2011)</p>	</td>
                                <td>
                                <p>Download</p>
                                </td>
                            </tr>
                            </tbody>
                            </table>
             
                </div>
                <h3>Details of Nodal Officer</h3>
             <div className="blue-line mt-2 mb-4"></div>
             <p><strong>Name:</strong> Mr. Pankaj Kumar Agarwal</p>
             <p><strong>E-mail id:</strong> investorshelpline@balasorealloys.com</p>
             <p><strong>Phone No:</strong> 033 4029 7000</p>
                <h3>Refund of unclaimed / unpaid dividend and shares from the IEPF Authority:</h3>
                <div className="blue-line mt-2 mb-4"></div>
                <p>In terms of provisions of Section 125(3) of the Companies Act, 2013 read with the Investor Education and Protection Fund Authority (Accounting, Audit, Transfer and Refund) Rules, 2016 as amended, any shareholder whose unclaimed / unpaid dividend or shares have been / are being transferred to the demat account of IEPF Authority, may claim the same from the IEPF Authority by making an online application in Form IEPF-5 and following the stipulated process as available under the link:<Link href={'http://www.iepf.gov.in/IEPFA/refund.htm'} passHref><a target="_blank"><span className="text-primary">http://www.iepf.gov.in/IEPFA/refund.htm</span></a></Link></p>
      </SidebarContent>
      <Footer />
    </>
  );
}
