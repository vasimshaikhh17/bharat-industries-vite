import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import cert2 from '../../../../assets/img/cert-2.jpg'
import heroback from '../../../../assets/img/18.png'
import '../../../pages/About.css'
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper} herobac` }>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            WELCOME TO,
            <br />
            BHARAT INDUSTRIES
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            High speed progressive and pricision 
            <br />
            sheet metal stamping solution provider{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          {/* <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src={heroback} alt="" /> */}
        </motion.div>

        

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">23</div>
            <div className="secondaryText">
              <div>Years of</div>
              <div>Experience</div>
            </div>
          </motion.div>

        
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
