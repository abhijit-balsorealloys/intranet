import { appName } from "app-config";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const TwoTabs = () => {
	const [selTab, setSelTab] = useState(1);
	return (
		<div className="two-tabs-container">
			<ul
				className={classNames("two-tabs m-0 p-0 mb-3", {
					"active-first": selTab === 1
				})} 
				>	
			</ul>
			{selTab === 1 ? <>
				<div className="col-md-12">
        <div className="side-box mb-3">
          <h6>My Top Sites</h6>
          <div className="blue-line mt-2 mb-4"></div>
          <ul>
            <li>Organizational Changes</li>
            <li>Telephone Directory</li>
            <li>Careers (OPR)</li>
            <li><a href="http://192.168.10.12:3000/" target="_blank">IT Service Portal</a></li>
            <li><a href="https://vhbsyws3wd01.sap.balasorealloys.com:44300/sap/bc/ui2/flp?sap-client=100&sap-language=EN" target="_blank">Fiori Portal</a></li>
            <li><a href="http://192.168.10.16/balasore-alloys/" target="_blank">KM Portal</a></li>
          </ul>
		  
        </div>
        <div className="side-box2 mb-3">
          <h6>Internal Communication</h6>
          <div className="blue-line mt-2 mb-4"></div>
          <ul>
            <li>Thought Of The Day</li>
            <li>Holiday Notice</li>
            <li>Night Duty Roster</li>
            <li>Reporting Restructuring</li>
           
          </ul>
        </div>
      </div>
		</> : <></>
				}
		</div>
	);
};

export default TwoTabs;
