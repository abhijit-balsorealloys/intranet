import Head from "next/head";
import { appName } from "app-config";
import Link from "next/link";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import List from "components/layouts/List";
import { Option, isSome, none, some } from "fp-ts/lib/Option";
import { useState } from "react";
import Zoom from 'react-medium-image-zoom';

const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    /*  '/images/slider-3.jpg',
     '/images/Product2.jpg',
     '/images/Product3.jpg', */
]

export default function Page() {

    const [imgIndex, setImgIndex] = useState<Option<number>>(none)

    return (
        <>
            <Head>
                <title>{`Products - ${appName}`}</title>
            </Head>
            <Header />
            <PageHeader
                title="Products"
                breadcrumbs={[
                    { name: "Products", link: "#" },
                ]}
            />
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Products Overview</h3>
                        <div className="blue-line mt-2 mb-4"></div>
                        <p>Ferrochrome (FeCr) is an alloy of chromium and iron containing between 50% and 70% chromium. The Producer od stainless steel & tool steel are the largest consumer of ferrochrome and charge chrome.It is chromium that confers upon stainless steel its remarkable corrosion resistance. </p>
                        <p>Out of the total world chrome ore output about 95% is used to produce ferrochrome for the metallurgical industry, with 2% used in chemical industry and the balance 3% in the refractory and foundry industry. Later majority of which is used in Cast Iron, Alloy Steels & Stainless Steel.</p>
                    </div>
                    <div className="col-sm-12">
                        <fieldset className="">
                            <div className="row">
                                <div className="col-sm-6">
                                    <Zoom>
                                        <img src="/images/slider-3.jpg" className="w-100 max-width-100 mb-4" height={350} alt="" />
                                    </Zoom>
                                    <h5 className="text-center mb-4"><span className="text-danger text-center mb-4"> HIGH CARBON FERRO CHROME LUMPS</span></h5>
                                </div>

                                <div className="col-sm-3">
                                    <h6 className="text-center text-primary"><strong>HIGH CARBON LOW TYPE -1</strong></h6>
                                    <table className="table table-bordered table-hover">
                                        <tbody>
                                            <tr>
                                                <th colSpan={2} className="bg-secondary"><span className="text-white">High Carbon Low Si</span></th>
                                            </tr>

                                            <tr>
                                                <td width={30}> cr</td>
                                                <td>
                                                    65% minimum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Si</td>
                                                <td>
                                                    1.0% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> C</td>
                                                <td>
                                                    9.5% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> S</td>
                                                <td>
                                                    0.06% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Phos</td>
                                                <td>
                                                    0.30% / 0.35% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Size</td>
                                                <td>
                                                    <strong>As Per Requirement</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div className="col-sm-3">
                                    <h6 className="text-center text-primary"><strong>CARBON NORMAL TYPE -1</strong></h6>
                                    <table className="table table-bordered table-hover">
                                        <tbody>
                                            <tr>
                                                <th colSpan={2} className="bg-secondary"><span className="text-white">High Carbon Normal Si</span></th>
                                            </tr>

                                            <tr>
                                                <td width={30}> cr</td>
                                                <td>
                                                    60% minimum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Si</td>
                                                <td>
                                                    2.5% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> C</td>
                                                <td>
                                                    9.0% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> S</td>
                                                <td>
                                                    0.05% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Phos</td>
                                                <td>
                                                    0.30% / 0.35% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Size</td>
                                                <td>
                                                    <strong>As Per Requirement</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="text-center text-primary"><strong>HIGH CARBON LOW TYPE -2</strong></h6>
                                    <table className="table table-bordered table-hover">
                                        <tbody>
                                            <tr>
                                                <th colSpan={2} className="bg-secondary"><span className="text-white">High Carbon Low Si</span></th>
                                            </tr>

                                            <tr>
                                                <td width={30}> cr</td>
                                                <td>
                                                    65% minimum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Si</td>
                                                <td>
                                                    1.5% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> C</td>
                                                <td>
                                                    9.5% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> S</td>
                                                <td>
                                                    0.06% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Phos</td>
                                                <td>
                                                    0.30% / 0.35% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Size</td>
                                                <td>
                                                    <strong>As Per Requirement</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm-3">
                                    <h6 className="text-center text-primary"><strong>CARBON NORMAL TYPE -2</strong></h6>
                                    <table className="table table-bordered table-hover">
                                        <tbody>
                                            <tr>
                                                <th colSpan={2} className="bg-secondary"><span className="text-white">High Carbon Normal Si</span></th>
                                            </tr>

                                            <tr>
                                                <td width={30}> cr</td>
                                                <td>
                                                    60% minimum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Si</td>
                                                <td>
                                                    3.0% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> C</td>
                                                <td>
                                                    8.5% /9.0% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> S</td>
                                                <td>
                                                    0.05% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Phos</td>
                                                <td>
                                                    0.30% / 0.35% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Size</td>
                                                <td>
                                                    <strong>As Per Requirement</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm-3">
                                    <h6 className="text-center text-primary"><strong>HIGH CARBON LOW TYPE -3</strong></h6>
                                    <table className="table table-bordered table-hover">
                                        <tbody>
                                            <tr>
                                                <th colSpan={2} className="bg-secondary"><span className="text-white">High Carbon Low Si</span></th>
                                            </tr>

                                            <tr>
                                                <td width={30}> cr</td>
                                                <td>
                                                    60% minimum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Si</td>
                                                <td>
                                                    2.0% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> C</td>
                                                <td>
                                                    9.0% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> S</td>
                                                <td>
                                                    0.05% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Phos</td>
                                                <td>
                                                    0.30% / 0.35% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Size</td>
                                                <td>
                                                    <strong>As Per Requirement</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm-3">
                                    <h6 className="text-center text-primary"><strong>CARBON NORMAL TYPE -3</strong></h6>
                                    <table className="table table-bordered table-hover">
                                        <tbody>
                                            <tr>
                                                <th colSpan={2} className="bg-secondary"><span className="text-white">High Carbon Normal Si</span></th>
                                            </tr>

                                            <tr>
                                                <td width={30}> cr</td>
                                                <td>
                                                    60% minimum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Si</td>
                                                <td>
                                                    4% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> C</td>
                                                <td>
                                                    8.5% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> S</td>
                                                <td>
                                                    0.05% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Phos</td>
                                                <td>
                                                    0.30% / 0.35% maximum
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width={30}> Size</td>
                                                <td>
                                                    <strong>As Per Requirement</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <hr />
                <fieldset className="mt-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <Zoom>
                                <img src="/images/Product2.jpg" className="w-100 max-width-100 mb-4" height={350} alt="" />
                            </Zoom>
                            <h5 className="text-center"><span className="text-danger text-center mb-4"> HIGH CARBON FERRO CHROME CHIPS</span></h5>
                        </div>
                        <div className="col-sm-6">
                            <h6 className="text-center text-primary"><strong>HIGH CARBON FERRO CHROME CHIPS</strong></h6>
                            <table className="table table-bordered table-hover">
                                <tbody>
                                    <tr>
                                        <th colSpan={2} className="bg-secondary"><span className="text-white">High Carbon Normal Si</span></th>
                                    </tr>

                                    <tr>
                                        <td width={30}> cr</td>
                                        <td>
                                            60% minimum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={30}> Si</td>
                                        <td>
                                            4% maximum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={30}> C</td>
                                        <td>
                                            8.5% maximum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={30}> S</td>
                                        <td>
                                            0.05% maximum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={30}> Phos</td>
                                        <td>
                                            0.30% / 0.35% maximum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={30}> Size</td>
                                        <td>
                                            <strong>10 - 30 mm</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </fieldset>
                <hr />
                <fieldset className="mt-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <Zoom>
                                <img src="/images/Product3.jpg" className="w-100 max-width-100 mb-4" height={350} alt="" />
                            </Zoom>
                            <h5 className="text-center"><span className="text-danger text-center mb-4">HIGH CARBON FERRO CHROME FINES</span></h5>
                        </div>
                        <div className="col-sm-6">
                            <h6 className="text-center text-primary"><strong>HIGH CARBON FERRO CHROME FINES</strong></h6>
                            <table className="table table-bordered table-hover">
                                <tbody>
                                    <tr>
                                        <th colSpan={2} className="bg-secondary"><span className="text-white">High Carbon Normal Si</span></th>
                                    </tr>

                                    <tr>
                                        <td width={30}> cr</td>
                                        <td>
                                            60% minimum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={30}> Si</td>
                                        <td>
                                            4% maximum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={30}> C</td>
                                        <td>
                                            8.5% maximum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={30}> S</td>
                                        <td>
                                            0.05% maximum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={30}> Phos</td>
                                        <td>
                                            0.30% / 0.35% maximum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={30}> Size </td>
                                        <td>
                                            <strong>0 - 10 mm / 0 - 3 mm </strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </fieldset>



            </div>
            <Footer />
            {/* {isSome(imgIndex) && (
                <Lightbox
                    mainSrc={images[0]}
                    nextSrc={images[(imgIndex.value + 1) % images.length]}
                    prevSrc={images[(imgIndex.value + images.length - 1) % images.length]}
                    onCloseRequest={() => setImgIndex(none)}
                    onMovePrevRequest={() =>
                        setImgIndex(some((imgIndex.value + images.length - 1) % images.length))
                    }
                    onMoveNextRequest={() =>
                        setImgIndex(some((imgIndex.value + 1) % images.length))
                    }
                />
            )} */}
        </>
    );
}
