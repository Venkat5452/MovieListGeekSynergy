import React from "react";
import {BsLinkedin,BsTwitter} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'

import './Footer.css'
function Footer() {
    return (
        <footer className="section_footer py-2 text-white">
			<div className="container__footer">
				<div className="flex row">
					<div className="footer-col mx-auto px-3">
						<h6>Movies List</h6>
						<ul>
							<li>
								<a id="GFG" href="https://www.geeksynergy.com/about-us.html">About Us</a>
							</li>
							<li>
								<a id="GFG" href="https://www.geeksynergy.com/contact-us.html">Contact us </a>
							</li>
                            <li>
								<a id="GFG" rel="noreferrer" target="_blank" href="https://www.geeksynergy.com/" >Official Website</a>
							</li>
						</ul>
					</div>
					<div className="footer-col mx-auto px-5">
						<h6>Follow us</h6>
						<div >
							<a  rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/geeksynergy-technologies-pvt--ltd-/" >
                           <h3><BsLinkedin/></h3>
							</a>
							<a  rel="noreferrer" target="_blank" href="https://www.instagram.com/geeksynergy/" >
                           <h3><FaInstagram/></h3>
							</a>
							<a rel="noreferrer" target="_blank" href="https://twitter.com/geek_synergy"  >
                              <h3><BsTwitter/></h3>
							</a>
					    </div>
					</div>
				</div>
			</div>
		</footer>
		
    );
}

export default Footer;