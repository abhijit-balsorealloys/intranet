import { appName } from "app-config";
import ScrollAnimation from 'react-animate-on-scroll';
import { FaVideo } from "react-icons/fa";

const Stories = () => {
	return (
		<div>
			<div className="container section-stories">
				<div className="row">
				<div className="col-sm-4 sec-str">
				<h6>Stories</h6>
				<div className="blue-line mt-2 mb-4"></div>
				<div className="text-vision">Content Is Not Available</div>
				</div>
					
					<div className="col-sm-4 sec-vid">
						<h6>Videos</h6>
				<div className="blue-line mt-2 mb-4"></div>
						
				<video className="video" controls >
              <source src="/images/videos/xibo-hb.mp4" type="video/mp4"  />
          </video>
					</div>
					<div className="col-sm-4 sec-poll">
						<h6>Poll</h6>
						<div className="blue-line mt-2 mb-4"></div>
                    <div className="container">
				<div className="row">
				<div className="col-sm-4 poll">
				<form id="poll-form" className="poll-form">
						<p>
						<input type="radio" name="vote" value={'Excellent'} />Excellent
						</p>
						<p>
							<input type="radio" name="vote" value={'Very Good'} /> Very Good
						</p>
						<p>
							<input type="radio" name="vote" value={'Good'} /> Good
						</p>
						<p>
							<input type="radio" name="vote" value={'Satisfactory'} /> Satisfactory
						</p>
						<p>
							<input type="radio" name="vote" value={'Poor'} /> Poor
						</p>
						
						<button type="submit" className="vote-button">Vote</button>
					</form>
					</div>
						<div className="col-sm-6 results">
							<h6>
							Results
							</h6>
							<div className="blue-line mt-2 mb-4"></div>
							<div className="results-count">
								<p>Poor: 
								<span id="yes-count" 
										className="count">0
								</span>
								</p>
								<p>Average: 
								<span id="no-count" 
											className="count">0
								</span>
								</p>
								<p>Good: 
								<span id="no-count" 
											className="count">0
								</span>
								</p>
								<p>Very Good: 
								<span id="no-count" 
											className="count">0
								</span>
								</p>
								<p>Excellent: 
								<span id="no-count" 
											className="count">0
								</span>
								</p>
							</div>
						</div>
						</div>


					</div>
					</div>
				</div>
			</div>

		</div >
	);
};

export default Stories;
