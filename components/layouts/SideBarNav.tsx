import { appName, navLinks } from "app-config";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const SideBarNav: React.FC<{
	navFor: 'About Us' | 'Facilities' | 'Customers' | 'Investors' | 'Sustainability' | 'Media' | 'Careers';
}> = ({ navFor }) => {
	const router = useRouter()
	const getLinks = () => {
		let res: {
			name: string;
			link: string;
		}[] = []
		let links = navLinks.filter(i => i.name === navFor && i.submenus && i.submenus.length > 0)
		if (links.length > 0 && links[0].submenus) {
			res = links[0].submenus
		}
		return res
	}
	useEffect(() => {
		console.log(router.asPath)
	}, [])


	return (
		<>
			<ul className="sidebar-nav m-0 p-0">
				{getLinks().map((i, k) => <li key={k} className="list-unstyled">
					<Link href={String(i.link)} passHref>
						<a className={classNames({
							active: router.asPath === i.link
						})}>{i.name}</a>
					</Link>
				</li>)}

			</ul>
		</>
	);
};

export default SideBarNav;
