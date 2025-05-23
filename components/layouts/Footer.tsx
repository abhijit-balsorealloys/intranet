import { appName } from "app-config";
import Link from "next/link";
import { BsArrowRight, BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { RiLoginCircleFill } from "react-icons/ri";
import FollowUs from "./FollowUs";

const Footer = () => {
	return (
		<footer>
			<div className="container section-copyright">
    <div className="row">
          <div className="col-sm-4">
                  <p className="copyright">Copyright &copy; 2025 Balasore Alloys Limited.</p>
				  </div>
				   <div className="col-md-4">
                  <p className="page-hiter">Page Hit: </p>
				  </div>
				  <div className="col-md-4">
                 <div className="social">Follow Us On:
		<a target="_blank" href="https://www.facebook.com/BalasoreAlloysLtd"><img src="/images/social_icon/facebook.png" className="img-social" /></a>
        <a target="_blank" href="https://x.com/Balasore_Alloys"><img src="/images/social_icon/twitter.png"  className="img-social" /></a>
        <a target="_blank" href="https://www.youtube.com/@BalasoreAlloysOfficial"><img src="/images/social_icon/youtube.png"  className="img-social" /></a>
        <a target="_blank" href="https://www.linkedin.com/company/balasore-alloys-limited/"><img src="/images/social_icon/linkedin.png"  className="img-social" /></a>
		<a target="_blank" href="https://www.instagram.com/balasorealloysltd/"><img src="/images/social_icon/instagram.png"  className="img-social" /></a>
		 </div>
		 </div>
		
				
				 <p><a href="#top"><img src="/images/top-icon.jpg" className="top-icon"></img></a></p>
          </div>
       </div>
		</footer>
	);
};

export default Footer;
