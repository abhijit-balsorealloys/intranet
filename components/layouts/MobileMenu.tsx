import { navLinks } from "app-config";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

const MobileMenu: React.FC<{
    showMobMenu: boolean;
    handleMobileMenu: () => void;
}> = ({ showMobMenu, handleMobileMenu }) => {
    return (
        <>
            <div className="mobile-menu-container">
                <div className="overlay" style={{ width: showMobMenu ? "100%" : "0" }}></div>
                <div className="inner" style={{ transform: showMobMenu ? "scaleX(1)" : "scaleX(0)" }}>
                    <div className="closebtn" onClick={() => handleMobileMenu()}>
                        <CgClose size={18} />
                    </div>
                    <div className="logo">
                        <Link href={"/"} passHref>
                            <a>
                                <img src="/images/logo.png" alt="Logo" />
                            </a>
                        </Link>
                        <div className="slogan">A Leading  Manufacturer Of Ferro Chrome</div>
                    </div>
                    <div className="links">
                        <ul className="main">
                            {navLinks.map((i, k) => {
                                if (i.submenus && i.submenus.length > 0) {
                                    return (
                                        <li key={k} className={`d-flex flex-column list-unstyled d-flex position-relative`}>
                                            <div>
                                                <Link href={'#'} passHref>
                                                    <a>{i.name}</a>
                                                </Link>
                                            </div>
                                            <ul className={`sub-menu m-0 p-2`}>
                                                {i.submenus.map((j, x) => (
                                                    <li key={x} className="list-unstyled d-flex position-relative">
                                                        <Link href={String(j.link)} passHref>
                                                            <a className="text-muted">{j.name}</a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={k} className="list-unstyled d-flex align-items-center position-relative">
                                            <Link href={String(i.link)} passHref>
                                                <a className="text-muted">{i.name}</a>
                                            </Link>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileMenu