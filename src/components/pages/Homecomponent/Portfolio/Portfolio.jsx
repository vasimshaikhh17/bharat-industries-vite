import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../../../utils/motion";
import y1 from "../../../../assets/img/icon/icon-why02.png";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <Link className="anchor" id="portfolio"></Link>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div style={{ textAlign: "center" }}>
            <span className="primaryText">Why Choose Us</span>
            <p style={{ marginTop: "10px" }}>
              Following reasons have enabled us to remain at par with our
              competitors:
            </p>
          </div>
          {/* <span className="secondaryText">Explore More Works</span> */}
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            style={{ backgroundColor: "#F8F7F1", display: "block", color:'#61677A' }}
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="https://www.khyatiindustries.in/img/icon/icon5.webp"
              alt="project"
              style={{ padding: "2rem" }}
            />
            <br />
            <center className="">
              {" "}
              <span  style={{ fontSize: "2rem", }}>
                Product <br /> Qulaity
              </span>{" "}
            </center>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            style={{ backgroundColor: "#F8F7F1", display: "block", color:'#61677A' }}
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="https://www.khyatiindustries.in/img/icon/icon3.webp"
              alt="project"
              style={{ padding: "2rem" }}
            />
            <br />
            <center>
              {" "}
              <span style={{ fontSize: "2rem" }}>
                Sound <br /> Infrastructure
              </span>{" "}
            </center>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            style={{ backgroundColor: "#F8F7F1", display: "block", color:'#61677A' }}
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="https://www.khyatiindustries.in/img/icon/icon2.webp"
              alt="project"
              style={{ padding: "2rem" }}
            />
            <br />
            <center>
              {" "}
              <span  className="" style={{ fontSize: "2rem" }}>
                Qualified <br /> Team
              </span>{" "}
            </center>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            style={{ backgroundColor: "#F8F7F1", display: "block", color:'#61677A' }}
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="https://www.khyatiindustries.in/img/icon/icon1.webp"
              alt="project"
              style={{ padding: "2rem" }}
            />
            <br />
            <center>
              {" "}
              <span style={{ fontSize: "2rem" }}>
                Market <br /> Best Price
              </span>{" "}
            </center>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            style={{ backgroundColor: "#F8F7F1", display: "block", color:'#61677A' }}
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src={y1}
              alt="project"
              style={{ padding: "1.4rem" }}
            />
            <br />
            <center>
              {" "}
              <span style={{ fontSize: "2rem" }}>
                Timely <br /> Dilivery
              </span>{" "}
            </center>
          </motion.div>

          {/* previously held images */}
          {/* <motion.img variants={fadeIn("up", "tween", .7, .6)} src= {y1} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src= {y1} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src= {y1} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src= {y1} alt="project" /> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
