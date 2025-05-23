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
        <title>{`Environmental Policy - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Environmental Policy"
        breadcrumbs={[
          { name: "Sustainability", link: "#" },
          { name: "Environmental Policy", link: "" },
        ]}
      />
      <SidebarContent navFor="Sustainability">
      <h3>M/s Balasore Alloys Ltd, Plant, Balgopalpur </h3>
        <div className="blue-line mt-2 mb-4"></div>
            <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><span><strong> Statutory Documents for Balasore </strong></span></td>
                                <td width={60}></td>
                            </tr>
                            <tr>
                            <td>BMW Authorisation Balasoer plant</td>
                            <td>
                            <Link href="/files/BMW Authorisation Balasoer plant.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                            </td>
                            </tr>
                            <tr>
                            <td>Environmental Clerance Balasore Plant</td>
                            <td>
                            <Link href="/files/Environmental Clerance Balasore Plant.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                            </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <h3>M/s Balasore Alloys Ltd KALIAPANI CHROMITE MINES </h3>
        <div className="blue-line mt-2 mb-4"></div>
            <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><span><strong>Statutory documents for Kaliapani Mines </strong></span></td>
                                <td width={60}></td>
                            </tr>
                            <tr>
                            <td>Biomedical waste handling Authorization KCM</td>
                            <td>
                            <Link href="/files/BIomedical waste handling Authorization KCM.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                            </td>
                            </tr>
                            <tr>
                            <td>CTO KALIAPANI CHROMITE MINES</td>
                            <td>
                            <Link href="/files/CTO KALIAPANI CHROMITE MINES.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                            </td>
                            </tr>
                            <tr>
                            <td>Environmental Clerance KCM Mines</td>
                            <td>
                            <Link href="/files/Environmental Clerance KCM Mines.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                            </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <h3>M/s Balasore Alloys Ltd Sukinda Plant </h3>
        <div className="blue-line mt-2 mb-4"></div>
            <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><span><strong>Statutory documents for Sukinda Plant </strong></span></td>
                                <td width={60}></td>
                            </tr>
                            <tr>
                            <td>Biomedical Authorization Sukinda Plant</td>
                            <td>
                            <Link href="/files/Biomedical Authorization Sukinda Plant.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                            </td>
                            </tr>
                            <tr>
                            <td>CTO SUKINDA PLANT</td>
                            <td>
                            <Link href="/files/CTO SUKINDA PLANT.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                            </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        <h3>M/s Balasore Alloys Ltd, Plant, Balgopalpur </h3>
        <div className="blue-line mt-2 mb-4"></div>
      <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><span><strong> Half Yearly  Environment Clearance Compliance </strong></span></td>
                                <td width={60}></td>
                            </tr>
                            <tr>
                                <td>October 2023 to March 2024</td>
                                <td>
                                <Link href="/files/Balasore Plant Oct,23 to March,24.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>October 2019 to March 2020</p>
                                </td>
                                <td>
                                <a>Click Here</a>
                                </td>
                            </tr>
                            <tr>
                                <td>April 2019 to September 2019</td>
                                <td>
                                <a>Click Here</a>
                                </td>
                            </tr>
                            <tr>
                                <td>October 2018 to March 2019</td>
                                <td>
                                <Link href="/files/EC COMPLIANCE REPORT.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>April 2018 to September 2018</td>
                                <td>
                                <Link href="/files/EC COMPLIANCE REPORT (1).pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td> October 2017 to March 2018</td>
                                <td>
                                <Link href="/files/Acrobat Document (1).pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td> April 2017 to September 2017</td>
                                <td>
                                <Link href="/files/Half-Yearly-EC-compiance-April-2017-to-September-2017.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td> October 2016 to March 2017</td>
                                <td>
                                <Link href="/files/Half-yearly-EC-compliance-OCT2016-MARCH2017.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>  April 2016 to September 2016</td>
                                <td>
                                <Link href="/files/Half-yearly-EC-compliance-APRIL2016-SEPT16.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>  October 2015 to March 2016</td>
                                <td>
                                <Link href="/files/Acrobat Document-half.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>  April 2015 to September 2015</td>
                                <td>
                                <Link href="/files/Half yearly EC compliance APR 15 TO SEP 15 (1).pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td> October 2014 to March 2015</td>
                                <td>
                                <Link href="/files/Half-yearly-EC-compliance-Oct14-March15.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                         </tbody>
                        </table>
                        <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="bg-primary text-white">
                                <td><span><strong> Yearly Environment Statement</strong></span></td>
                                <td width={60}></td>
                            </tr>
                            <tr>
                                <td>
                                    <p>2023-2024</p>
                                </td>
                                <td>
                                <a>Click Here</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>2019-2020</p>
                                </td>
                                <td>
                                <a>Click Here</a>
                                </td>
                            </tr>
                            <tr>
                                <td> 2018-2019</td>
                                <td>
                                <a>Click Here</a>
                                </td>
                            </tr>
                            <tr>
                                <td>2017-2018</td>
                                <td>
                                <Link href="/files/Balsore plant Forme-v.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2016-2017</td>
                                <td>
                                <Link href="/files/Environmental Statement 2016-17.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2015-2016</td>
                                <td>
                                <Link href="/files/Environment statement 2015-16.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td> 2014-2015</td>
                                <td>
                                <Link href="/files/Acrobat Document-2.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2013-2014</td>
                                <td>
                                <Link href="/files/Acrobat Document-3.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>  <span className="text-primary"><strong>Contact Person,<br></br>
                                Dr. Ranjeet Kumar<br></br>Deputy General Manager, Environment<br></br>E-MAIL: ranjeet.kumar@balasorealloys.com
                                <br></br>Mob-+91-8093153853</strong></span></td>
                            </tr>
                         </tbody>
                        </table>
                        <h3>M/s Balasore Alloys Ltd  KALIAPANI CHROMITE MINE </h3>
                        <div className="blue-line mt-2 mb-4"></div>
                            <table className="table table-bordered table-hover">
                            <tbody>
                            <tr className="bg-primary text-white">
                                <td><span><strong> Half Yearly  Environment Clearance Compliance </strong></span></td>
                                <td width={60}><span><strong></strong></span></td>
                            </tr>
                            <tr>
                                <td>October 2023 to March 2024</td>
                                <td>
                                <Link href="/files/Kaliapani Mine Oct,23 to March,24.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>October 2019 to March 2020</td>
                                <td>
                                Click Here
                                </td>
                            </tr>
                            <tr>
                                <td>April 2019 to September 2019</td>
                                <td>
                                Click Here
                                </td>
                            </tr>
                            <tr>
                                <td> Oct 2018 to March 2019	</td>
                                <td>
                                Click Here
                                </td>
                            </tr>
                            <tr>
                                <td>April 2018 to September 2018</td>
                                <td>
                                Click Here
                                </td>
                            </tr>
                            <tr>
                                <td> October 2017 to March 2018</td>
                                <td>
                                <Link href="/files/Oct_17_to_march_18.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td> April 2017 to September 2017</td>
                                <td>
                                <Link href="/files/KCM_April-Sept_17.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td> October 2016 to March 2017</td>
                                <td>
                                <Link href="/files/Half yearly EC compliance Oct 2016-March 2017.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td> April 2016 to September 2016</td>
                                <td>
                                <Link href="/files/Half yearly EC compliance april-sept-16.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>  October 2015 to March 2016</td>
                                <td>
                                <Link href="/files/Half yearly EC compliance Oct 15 TO mar 16.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>  April 2015 to September 2015</td>
                                <td>
                                <Link href="/files/Half yearly EC compliance APR 15 TO SEP 15 (2).pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>  October 2014 to March 2015</td>
                                <td>
                                <Link href="/files/Half yearly EC compliance Oct.2014- March.2015.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            </tbody>
                            </table>
                            <table className="table table-bordered table-hover">
                            <tbody>
                           
                            <tr className="bg-primary text-white">
                                <td><span><strong> Yearly Environment Statement</strong></span></td>
                                <td width={60}><span><strong></strong></span></td>
                            </tr>
                            <tr>
                                <td>2023-2024</td>
                                <td>
                               Download
                                </td>
                            </tr>
                            <tr>
                                <td>2019-2020</td>
                                <td>
                               Download
                                </td>
                            </tr>
                            <tr>
                                <td>2018-2019</td>
                                <td>
                            <Link href="/files/Annual Environment Statement Report 2018-19.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2017-2018</td>
                                <td>
                            <Link href="/files/KCM_ENVT STATEMENT 2017-18.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2016-2017</td>
                                <td>
                            <Link href="/files/Envt Statement 2016-17.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2015-2016</td>
                                <td>
                            <Link href="/files/Envt Stemet 15-16.pdf" passHref><a target="_blank"><strong>Download</strong></a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2014-2015</td>
                                <td>
                                 Download 
                                </td>
                            </tr>
                            <tr>
                                <td>2013-2014 </td>
                                <td>
                                 Download 
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}> <span className="text-primary"><strong>Contact Person:Mr. Suryakanta Pradhan,
                                <br></br>General Manager, Environment,<br></br>EMAIL:suryakanta.pradhan@balasorealloys.com<br></br>
                                Mob : 8093247904</strong></span></td>
                            </tr>
                            </tbody>
                            </table>
                </div>
      </SidebarContent>
      <Footer />
    </>
  );
}
