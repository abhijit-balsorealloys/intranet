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
        <title>{`Postal Ballot - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Postal Ballot"
        breadcrumbs={[
          { name: "Investors", link: "#" },
          { name: "Postal Ballot", link: "" },
        ]}
      />
      <SidebarContent navFor="Investors">
        {/* <div className="text-right py-3">
          <FcGrid onClick={toggleShow} title="Grid View" size={30} />
          <FcList onClick={toggleShow1} title="List View" size={30} />
        </div> */}
        {show && (<div className="show">
          <h2>Postal Ballot Reports Year Wise</h2>
          <MasonryPDF data={[
            { name: 'Postal Ballot Voting Results 07.03.2025', link: '/files/Postal Ballot Voting Results-07.03.2025.pdf' },
            { name: 'Postal Ballot Notice Dated 27.01.2025', link: '/files/Postal Ballot Notice_27.01.2025.pdf' },
            { name: 'Postal Ballot Voting Results-02.07.2023', link: '/files/Postal Ballot Voting Results-02.07.2023.pdf' },
            { name: 'Postal Ballot Notice Dated 30.05.2023', link: '/files/POSTAL BALLOT NOTICE DTD 30.5.2023.pdf' },
            { name: 'Postal Ballot Voting Results-2017', link: '/files/Result of Postal Ballot_10.01.2018.pdf' },
            { name: 'Postal Ballot Notice 2017', link: '/files/Postal Ballto Notice 2017.pdf' },
            { name: 'Postal Ballot Notice 2016', link: '/files/Postal Ballto Notice 2015-16 (Final Copy).pdf' },
            { name: 'Notice of Postal Ballot & Ballot Form - 2009', link: '/files/Result_of_Postal_Ballot.pdf' },
            { name: 'Postal Ballot Voting Results-2016', link: '/files/Outcome - Postal Ballot_26.09.16 (2).pdf' },
          ]} />
        </div>
        )}
        {isvisible && (<div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tbody>
              <tr className="bg-primary text-white">
                <td><p><strong> Postal Ballot Reports Year Wise</strong></p></td>
                <td width={60}><span><strong></strong></span></td>
              </tr>
              <tr>
                <td>
                  <p>Postal Ballot Voting Results 07.03.2025</p>
                </td>
                <td>
                  <Link href="/files/Postal Ballot Voting Results-07.03.2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Postal Ballot Notice Dated 27.01.2025</p>
                </td>
                <td>
                  <Link href="/files/Postal Ballot Notice_27.01.2025.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Postal Ballot Voting Results-02.07.2023</p>
                </td>
                <td>
                  <Link href="/files/Postal Ballot Voting Results-02.07.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Postal Ballot Notice Dated 30.05.2023</p>
                </td>
                <td>
                  <Link href="/files/POSTAL BALLOT NOTICE DTD 30.5.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                </td>
              </tr>
              <tr>
                <td><p>Postal Ballot Voting Results-2017</p></td>
                <td>
                  <Link href="/files/Result of Postal Ballot_10.01.2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                </td>
              </tr>
              <tr>
                <td><p>Postal Ballot Notice 2017</p></td>
                <td>
                  <Link href="/files/Postal Ballto Notice 2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                </td>
              </tr>
              <tr>
                <td><p>Postal Ballot Notice 2016</p></td>
                <td>
                  <Link href="/files/Postal Ballto Notice 2015-16 (Final Copy).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                </td>
              </tr>
              <tr>
                <td><p>Notice of Postal Ballot & Ballot Form - 2009</p></td>
                <td>
                  <Link href="/files/Result_of_Postal_Ballot.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
                </td>
              </tr>
              <tr>
                <td><p>Postal Ballot Voting Results-2016</p></td>
                <td>
                  <Link href="/files/Outcome - Postal Ballot_26.09.16 (2).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
