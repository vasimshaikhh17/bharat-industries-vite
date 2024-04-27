import React from "react";
import { footerVariants, staggerChildren } from "../../../utils/motion";

import css from "./Footer.module.scss";
import { motion } from "framer-motion";
// import footerlogo from '../../../../public/new.images/logo.png'
import { Link } from "react-router-dom";
import "../../../styles/footer.css"
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        {/* <div className={css.left}>
          <span className="primaryText">
            Just call at +001 (313) 345 678<br />
            to make a quotation. <br />
            
            <span style={{textAlign:"center"}}>or</span>
       </span>
          <span className="primaryText">
            	&#8594; <Link to="mailto:zainkeepscode@gmail.com">Email me</Link>
          </span>
        </div> */}

        {/* previously held footer part */}

        {/* <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>145 New York, FL 5467, USA</p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </ul>
        </div> */}

        <footer id="footer">
          <div className="footer-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 lblcenter">
                  <div className="widget">
                    <div className="widget-title">
                      <img
                        loading="lazy"
                        src={'new.images/logo.png'}
                        alt="Bharat Industries"
                        style={{height:'4rem', paddingBottom:'1rem'}}
                      />
                    </div>
                    <p
                      className="mb-5 "
                      style={{ padding: "0.5rem 0rem", lineHeight: "2", textAlign:"justify"}}
                    >
                      Bharat Industries is one of the longest established fabrication and erection businesses. We are able to offer a wide range of Fabrications.

Bharat Industries started its business operations in the year 1990 and hold a nationwide presence as the pioneering Manufacturer and Supplier firm of next generation Ducting and Air Diffuser
                      <Link
                        to="about-us.html"
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-lg-9 lblcenter">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="widget">
                        <div className="widget-title"style={{color:"#02b0f3"}}>Quick Links </div>
                        <ul
                          className="list"
                          style={{
                            listStyle: "none",
                            padding: "0.5rem 0rem",
                            lineHeight: "2",
                          }}
                        >
                          <li>
                            <Link
                              to="/"
                              style={{ textDecoration: "none", color: "#000" }}
                              className="footer-link"
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about"
                              style={{ textDecoration: "none", color: "#000" }}
                              className="footer-link"
                            >
                              About Us{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/ourproducts"
                              style={{ textDecoration: "none", color: "#000" }}
                              className="footer-link"
                            >
                              Our Product
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/industries"
                              style={{ textDecoration: "none", color: "#000" }}
                              className="footer-link"
                            >
                              Industries
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/contact"
                              style={{ textDecoration: "none", color: "#000" }}
                              className="footer-link"
                            >
                              Contact Us{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="widget ">
                        <div className="widget-title footr"style={{color:"#02b0f3"}}>Our Products</div>
                        <ul
                          className="list"
                          style={{
                            listStyle: "none",
                            padding: "0.5rem 0rem",
                            lineHeight: "2",
                          }}
                        >
                          <li className="footer-link">
                            <Link
                              to="/sheetmetalpart"
                              style={{ textDecoration: "none", color: "#000" }}
                              className="footer-link"
                            >
                              Sheet Metal Parts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/sheetmetaltool"
                              style={{ textDecoration: "none", color: "#000" }}
                              className="footer-link"
                            >
                              Sheet Metal Tools
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/switchgear"
                              style={{ textDecoration: "none", color: "#000" }}
                              className="footer-link"
                            >
                              Switchgear Components &amp; Parts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/metalstamping"
                              style={{ textDecoration: "none", color: "#000" }}
                              className="footer-link"
                            >
                              Metal Stamping
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/materialsformetalstamping"
                              style={{ textDecoration: "none", color: "#000" }}
                              className="footer-link"
                            >
                              Materials for Metal Stamping Parts{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/stampedmetal"
                              style={{ textDecoration: "none", color: "#000" }}
                              className="footer-link"
                            >
                              Stamped Metal Parts
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-5 col-12 "style={{marginLeft:""}}>
                      <div className="widget">
                        <div className="widget-title"style={{color:"#02b0f3"}}>Contact Us </div>
                        <ul
                          className="list"
                          style={{
                            listStyle: "none",
                            padding: "0.5rem 0rem",
                            lineHeight: "2",
                          }}
                        >
                          <li style={{ display: "flex" }}>
                            <i className="fa fa-building" />
                            <p> Bharat Industries</p>
                          </li>
                          <li style={{ display: "flex" }}>
                            <i className="fa fa-map-marker-alt" />
                            <span >
                            <i className="ri-map-pin-line"></i>&nbsp;
                            <span className="footer-adress">
                            Bharat Industries Chhikniwala Estate, B/H Amprapali Cinema, Opp Jain Temple, Gomtipur,{" "}
                            </span>
                              <span
                                to="/contactus"
                                style={{ textDecoration: "none" }}
                              >
                                <b>Ahmedabad</b>
                              </span>
                              , Gujarat, India - 380026
                            </span>
                          </li>
                          <li style={{ display: "flex" }}>
                            <i className="fa fa-envelope" />
                            <p>
                            <i className="ri-mail-line"></i>&nbsp;
                              <Link
                                to="mailto:Khyatiinds@gmail.com"
                                style={{ textDecoration: "none" }}
                              >
                                bharatinds@gmail.com
                              </Link>
                            </p>
                          </li>
                          <li style={{ display: "flex" }}>
                            <i className="fa fa-mobile" />
                            <p>
                            <i className="ri-phone-line"></i>&nbsp;
                              <Link
                                to="tel:+91 9925042627"
                                style={{ textDecoration: "none" }}
                              >
                                +91 9925042627
                              </Link>
                            </p>
                          </li>

                          <li style={{ display: "flex" }}>
                            <i className="fa fa-mobile" />
                            <p>
                            <i className="ri-phone-line"></i>&nbsp;
                              <Link
                                to="tel:+91 98 25 03 17 07"
                                style={{ textDecoration: "none" }}
                              >
                                +91 98 25 03 17 07
                              </Link>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="container">
            <div className="row">
  <div className="col-lg-6 d-flex justify-content-start mb-3">
    <span>
      Copyrights © 2023 Bharat Industries.
    </span>
  </div>
  <div className="col-lg-6 d-flex justify-content-end">
  <span className="powered-by">
    Powered By{" "}
    
    <span className="inline-link">
    <br className="d-lg-none" />
      <Link to="https://www.bytefaze.com" target="_blank" className="inline-link" style={{ color: "#0D2F3F" }}>
  &nbsp; <span style={{color:"black"}}>   	&#124;  </span>&nbsp;ByteFaze Web Solution
      </Link>
    </span>
    <br className="d-lg-none" />
    <span className="inline-link">
      <Link to="https://www.bytefaze.com/website-designing" target="_blank" className="inline-link" style={{ color: "#0D2F3F" }}>
      &nbsp; <span style={{color:"black"}}>   	&#124;    </span>&nbsp; Website Designing Company
      </Link>
    </span>
  </span>
</div>



</div>

            </div>
          </div>
        </footer>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
