import { appName } from "app-config";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const FollowUs = () => {
	return (
		<div className="d-flex align-items-center">
			<span className="mr-2 text-muted">Follow us on: </span>
			<ul className="m-0 p-0 d-flex align-items-center">
				<li className="list-unstyled mr-2">
					<Link href={"https://www.facebook.com/balasorealloysindia?ref=hl"} passHref>
						<a className="" target="_blank">
							<img src="/images/facebook_icon.jpg" alt="" />
						</a>
					</Link>
				</li>
				<li className="list-unstyled mr-2">
					<Link href={"https://twitter.com/Balasore_Alloys"} passHref>
						<a className="" target="_blank">
							<img src="/images/twitter_icon.jpg" alt="" />
						</a>
					</Link>
				</li>
				<li className="list-unstyled mr-2">
					<Link href={"http://www.youtube.com/channel/UCckh-5BDj1Etkds1vlFE0Tg"} passHref>
						<a className="" target="_blank">
							<img src="/images/youtube_icon.jpg" alt="" />
						</a>
					</Link>
				</li>
				<li className="list-unstyled">
					<Link href={"http://www.linkedin.com/home?trk=nav_responsive_tab_home"} passHref>
						<a className="" target="_blank">
							<img src="/images/linkedin_icon.jpg" alt="" />
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default FollowUs;
