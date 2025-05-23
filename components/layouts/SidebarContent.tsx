import { appName, navLinks } from "app-config";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import SideBarNav from "./SideBarNav";

const SidebarContent: React.FC<{
	navFor: 'About Us' | 'Facilities' | 'Customers' | 'Investors' | 'Sustainability' | 'Media' | 'Careers';
	children: React.ReactNode;
}> = ({ navFor, children }) => {

	return (
		<div className="two-side-content">
			<div className="container-fluid py-5">
				<div className="row">
					<div className="col-md-9">
						{children}
					</div>
					<div className="col-md-3">
						<SideBarNav navFor={navFor} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidebarContent;
