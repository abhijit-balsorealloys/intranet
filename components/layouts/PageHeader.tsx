import { appName } from "app-config";
import Link from "next/link";
import { FcHome } from "react-icons/fc";
import { BiChevronRight } from "react-icons/bi";

const Bli: React.FC<{
	name: string;
	link: string;
	islast: boolean;
}> = ({ name, link, islast }) => {
	return <>
		<li className="list-unstyled mx-2">
			<Link href={link} passHref>
				<a className="">{name}</a>
			</Link>
		</li>
		{!islast && <li><BiChevronRight size={20} /></li>}
	</>
}

const PageHeader: React.FC<{
	title: string;
	breadcrumbs?: Array<{ name: string; link: string; }>;
}> = ({ title, breadcrumbs = [] }) => {
	return (
		<div className="page-header">
			<div className="inner">
				<div className="container-fluid py-5">
					<h5 className="title">{title}</h5>
					{breadcrumbs.length > 0 &&
						<nav>
							<ul className="m-0 p-0 d-flex flex-wrap align-items-center">
								<li className="list-unstyled mr-2">
									<Link href={"/"} passHref>
										<a className="">
											<FcHome size={30} />
										</a>
									</Link>
								</li>
								<li><BiChevronRight size={20} color="#d52017" /></li>
								{breadcrumbs.map((i, k) => <Bli key={k} name={i.name} link={i.link} islast={breadcrumbs.length - 1 === k} />)}
							</ul>
						</nav>}
				</div>
			</div>
		</div >
	);
};

export default PageHeader;
