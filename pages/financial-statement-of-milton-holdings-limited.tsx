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
        <title>{`Financial Statement Of Milton Holdings Limited - ${appName}`}</title>
      </Head>
      <Header />
      <PageHeader
        title="Financial Statement Of Milton Holdings Limited"
        breadcrumbs={[
          { name: "Investors", link: "#" },
          { name: "Financial Statement Of Milton Holdings Limited", link: "" },
        ]}
      />
      <SidebarContent navFor="Investors">
        {/* <div className="text-right py-3">
          <FcGrid onClick={toggleShow} title="Grid View" size={30} />

          <FcList onClick={toggleShow1} title="List View" size={30} />

        </div> */}
        {show && (<div className="show">
          <h2>Year 2023</h2>
          <div className="blue-line mt-2 mb-4"></div>
          <MasonryPDF data={[
            { name: 'Audited Financial Result-31-03-2023', link: '/files/MILTON HOLDINGS LTD- AFS 31.03.2023.pdf' },
          ]} />
        </div>
        )}
        {isvisible && (<div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tbody>
              <tr className="bg-primary text-white">
                <td><p><strong> Year Wise Report</strong></p></td>
                <td width={60}><span><strong></strong></span></td>
              </tr>
              <tr>
                <th colSpan={2} className="bg-secondary"><p className="text-white">Year 2023</p></th>
              </tr>

              <tr>
                <td><p>Audited Financial Result-31-03-2023</p></td>
                <td>
                  <Link href="/files/MILTON HOLDINGS LTD- AFS 31.03.2023.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
            { name: 'Audited Financial Result-31-03-2018', link: '/files/MILTON - 31 MAR 2018.pdf' },
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
                <td><p>Audited Financial Result-31-03-2018</p></td>
                <td width={60}>
                  <Link href="/files/MILTON - 31 MAR 2018.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
            { name: 'Audited Financial Result-31-03-2017', link: '/files/MILTON - 31 MAR 2017.pdf' },
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
                <td><p>Audited Financial Result-31-03-2017</p></td>
                <td width={60}>
                  <Link href="/files/MILTON - 31 MAR 2017.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
            { name: 'Audited Financial Result-31-03-2016', link: '/files/MILTON - 31 MAR 2016.pdf' },
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
                <td><p>Audited Financial Result-31-03-2016</p></td>
                <td width={60}>
                  <Link href="/files/MILTON - 31 MAR 2016.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
            { name: 'Audited Financial Result-31-03-2015', link: '/files/Financial Statement - 31.03.2015.pdf' },
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
                <td><p>Audited Financial Result-31-03-2015</p></td>
                <td width={60}>
                  <Link href="/files/Financial Statement - 31.03.2015.pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
            { name: 'Audited Financial Result-31-03-2014', link: '/files/Financial Statements 2014_MIlton Holdings Ltd. (1).pdf' },
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
                <td><p>Audited Financial Result-31-03-2014</p></td>
                <td width={60}>
                  <Link href="/files/Financial Statements 2014_MIlton Holdings Ltd. (1).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
            { name: 'Audited Financial Result-31-03-2013', link: '/files/Financial Statements - 31.03.2013- Milton Holdings Ltd. (1).pdf' },
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
                <td><p>Audited Financial Result-31-03-2013</p></td>
                <td width={60}>
                  <Link href="/files/Financial Statements - 31.03.2013- Milton Holdings Ltd. (1).pdf" passHref><a target="_blank"><p><strong>Download</strong></p></a></Link>
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
