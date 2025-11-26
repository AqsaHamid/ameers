//ye le hamri kr kamm

import React from "react";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faThreads } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

*/
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h2 className="footer-logo">Ameers</h2>
                    <p className="footer-description">Creative Art Studio & Beauty Lounge - Where Art, Beauty, and Empowerment Unite</p>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Creative Courses</a></li>
                        <li><a href="#">Beauty Services</a></li>
                        <li><a href="#">Gallery</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Contact Info</h3>
                    <div className="location">
                        {/* <FontAwesomeIcon icon={faLocationDot} size="x1" /> */}
                        <p>19-Eden Lane Villas 2, Pine Avenue Road, Lahore</p>
                    </div>
                    <div className="phone">
                        
                    </div>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Follow Us</h3>
                    <div className="social-icons">
                        <a href="" className="social-link">
                            {/* <FontAwesomeIcon icon={faFacebook} size="x1" /> */}
                        </a>
                        <a href="" className="social-link">
                            {/* <FontAwesomeIcon icon={faInstagram} size="x1" /> */}
                        </a>

                        <a href="" className="social-link">
                            {/* <FontAwesomeIcon icon={faThreads} size="x1" /> */}
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer