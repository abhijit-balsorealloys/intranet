import { appName } from "app-config";
import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Zoom from 'react-medium-image-zoom';
import { Modal, Button } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

const MdSection = () => {
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	return (
		<>
			<div className="container section-md">
				<div className="row">
					<div className="col-sm-4">
						<div className="card-container">
						<div className="card">
							<div className="row">
							<div className="col-md-4">
								<ScrollAnimation animateIn="lightSpeedInLeft">
							<Zoom>
						     <img src="/images/Md.jpg" className="img-md" ></img>
						    </Zoom>
							</ScrollAnimation>
						</div>
						<div className="col-md-8">
					    <ScrollAnimation animateIn="lightSpeedInLeft">
						<h6>MD's Message</h6>
						<div className="blue-line mt-2 mb-4"></div>
						<p>A warm welcome to the Intranet Portal of Balasore Alloys Limited! Knowledge, Excellence and Innovation are key drivers behind the Vision of our Organization.</p>
						<p><a href="#" className="readMore" onClick={handleShow}>Read More</a></p>
						</ScrollAnimation>
						</div>
						</div>
						</div>
						</div>
						<Modal show={show} onHide={handleClose}>
						<Modal.Header>
							<div className="container-fluid">
								<div className="row">
							
							<div className="col-sm-12">
						<Modal.Title>MD's Message<div className="blue-line mt-2 mb-4"></div></Modal.Title>
						</div>
						</div>
						</div>
						</Modal.Header>
						<Modal.Body>
						<div className="container-fluid">
						<div className="row">
						<div className="col-sm-4">

							<Zoom>
						     <img src="/images/Md.jpg" className="img-modal" ></img>
						    </Zoom>
							</div>
							<div className="col-sm-8 md-msg">
							<p>A warm welcome to the Intranet Portal of Balasore Alloys Limited!
							Knowledge, Excellence and Innovation are key drivers behind the Vision of our Organization. Our Mission is to be amongst the World’s Top Five Ferro Chrome Producers. To achieve this, we must constantly learn, train and develop our ability to turn information and data into effective action.</p>
							</div>
							<hr />
							<div className="col-sm-12 md-msg">
							<p>On the Intranet Portal you will find online (Train the Trainer) TTT programmes, on-line tutorials, voice-over tutorials and complete training calendars by location.</p>
							<p> All of our core business excellence programmes, such as Six Sigma, TPM, IMS, Engineering and CSR, are accessible for just-in-time, on line and distance training. Site level documents, circulars and BAL Happening are also available here for your study and reference. The Intranet Portal’s Forum will enable us to stay connected and exchange expert views, founded on the core values of our Company - Safety, Integrity, Excellence, Cost Consciousness, Caring and Respect. I hope that the Intranet Portal’s friendly environment will enable each member of the Organization to explore their strength and develop new strengths. Every employee is part of the training and development community, where the individual approach to learning enables linkages between programs.</p>
							</div>
							</div>
							</div>
						</Modal.Body>
						<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={handleClose}>
							Save Changes
						</Button>
						</Modal.Footer>
					</Modal>
					</div>
					<div className="col-sm-4">
						<div className="card-container">
						<div className="card"> 
							<h6>Current Happenings</h6>
							<div className="blue-line mt-2 mb-4"></div>
								<li>New CRM implementation launched</li>
								<li>Factory visit by Chairman</li>
								<li>Annual Safety Drill scheduled</li>
							</div>
							</div>
							</div>
					<div className="col-sm-4">
					    <div className="card-container">
						    <div className="card"> 
						       <div className="col-md-12">
								<ScrollAnimation animateIn="lightSpeedInRight">
							<h6>News</h6>
							<div className="blue-line mt-2 mb-4"></div>
							<ul>
							<li>16-Mar-2020: Collaterals on coronavirus</li>
							<li>06-Mar-2020: Moving Machinery Safety Quiz</li>
							</ul>
							</ScrollAnimation>
						</div>
						</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				li {
					padding-bottom: 15px;
				}
				.text {
					color: antiquewhite;
				}
			`}</style>
		</>
	);
};

export default MdSection;
