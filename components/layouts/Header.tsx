import { appName, navLinks } from "app-config";
import { some } from "fp-ts/lib/Option";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FcHome, FcMenu } from "react-icons/fc";
import { HiMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import { Option, isSome, none } from "fp-ts/lib/Option";
import { useForm } from 'react-hook-form';
import { FormButton, FormInput, FormSelect, FormTextarea } from "uiComponents/Form";

const Header = () => {

  interface IsearchForm {
    searchInput: string;
  }
 const {
     register,
     watch,
     handleSubmit,
     formState: { errors },
   } = useForm<IsearchForm>({
     defaultValues: {
      searchInput: '',
     },
   });
  const [isProcessing, setIsProcessing] = useState<Option<boolean>>(none)
  
  const [showMobMenu, setShowMobMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleMobileMenu = () => setShowMobMenu(!showMobMenu);
  
  const formSubmit = (data: IsearchForm) => {
      setIsProcessing(some(true))
      console.log(data)
     
      setIsProcessing(none)
    };
  watch;
  return (
    <>
      <MobileMenu showMobMenu={showMobMenu} handleMobileMenu={handleMobileMenu} />
      <div className="header-wrapper">
      <div className="top-bar d-flex justify-content-between">
          <div className="eng">English | Hindi</div>
          <form onSubmit={handleSubmit(formSubmit)} className="mb-5">
          <input {...register("searchInput", { required: "Search Field is  required" })} className="form-control" id="searchInput" placeholder="Enterprise Search" />
         
          {errors.searchInput && <p className="error">{errors.searchInput.message}</p>}
          </form>
          </div>
        <header className={`navbar navbar-expand-lg navbar-dark`}>
          <div className="container">
           
              <Link href={"/home"} passHref>
                <a className="logo">
                  <img src="/images/balasore_logo-removebg-preview.png" alt={appName} />
                </a>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                <li className="nav-item">
                  <Link href={"/home"} passHref>
                    <a className="home nav-link">
                      <FcHome size={20} />
                      <span>Home</span>
                    </a>
                  </Link>
                </li>
                {navLinks.map((i, k) => {
                  if (i.submenus && i.submenus.length > 0) {
                    return (
                      <li key={k} className={`nav-item dropdown`}>
                        <Link href={'#'} passHref>
                          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{i.name}</a>
                        </Link>
                        <ul className={`dropdown-menu`}>
                          {i.submenus.map((j, x) => (
                            <li key={x}>
                              <Link href={String(j.link)} passHref>
                                <a className="dropdown-item">{j.name}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  } else {
                    return (
                      <li key={k} className="nav-item">
                        <Link href={String(i.link)} passHref>
                          <a className="nav-link">{i.name}</a>
                        </Link>
                      </li>
                    );
                  }
                })}
                <li className="profile-text">Welcome, Harsh</li> 
              </ul>
            <div className="profile-photo position-relative">
              <div onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: "pointer" }}>
                <img src="/images/Profile.jpg" className="rounded-circle me-2 profile-img"
                  alt="profile" />
              </div>

              <ul className={`dropdown-menu dropdown-menu-end ${showDropdown ? 'show' : ''}`}>
                <li><a className="dropdown-item" href="#">Change Password</a></li>

                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
              </ul>
            </div>
            </div>
            <div className="mobile-header justify-content-between align-items-center">
              <Link href={"/"} passHref>
                <a>
                  <img src="/images/balasore_logo-removebg-preview.png" alt={appName} />
                </a>
              </Link>
              <div className="openMenu" onClick={() => handleMobileMenu()}>
                <HiMenu size={26} />
              </div>
            </div>
          </div>
        </header>
      </div>      
    </>
  );
};

export default Header;
