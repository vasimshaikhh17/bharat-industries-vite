import React from "react";
import { comments, sliderSettings } from "../../../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../../../utils/motion";
import products from '../../../../assets/img/19.jpg/'
import procurement from '../../../../assets/img/products.png'
import Technicians from '../../../../assets/img/wide.png'
import MarketingRepresentative from '../../../../assets/img/thirdparty.png'
import ResearchandDevelopement from '../../../../assets/img/world.png'
import product2 from "../../../../../public/new.images/23.jpeg"
import product3 from "../../../../../public/new.images/2.jpeg"
import product4 from "../../../../../public/new.images/5.jpeg"
import product5 from "../../../../../public/new.images/52.jpeg"
import product6 from "../../../../../public/new.images/41.jpeg"
import product7 from "../../../../../public/new.images/48.jpeg"
import product8 from "../../../../../public/new.images/31.jpeg"
import product9 from "../../../../../public/new.images/41.jpeg"

import fac1 from "../../../../assets/images/fac1.png"
import fac2 from "../../../../assets/images/fac2.png"
import fac3 from "../../../../assets/images/fac3.png"
import fac4 from "../../../../assets/images/fac4.png"
import "../../../../styles/home.css"

import { Link } from "react-router-dom";


const People = () => {
  return (
    <div className="prod-content">
    {/* <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0 }}
    section className={`paddings ${css.wrapper}`}>

      <Link className="anchor" id="people"></Link> */}



  



        <section style={{paddingTop:'2rem'}}>
  <div className="container fac-img">
    <div className=" text-center">
      <h2 >Manufacturing Facility</h2>
      <span className="lead">Acknowledging the pivotal role of teamwork in organizational success, we emphasize the significance of collaborative efforts within our ranks. With a steadfast commitment to fostering team synergy, we boast a dedicated workforce dedicated to maximizing customer
       satisfaction across all fronts. This cohesive team comprises the following individuals:</span>
    </div>
    <div className="row icon-boxes" style={{marginTop:'2rem', paddingTop:'5rem', boxShadow:' 1px 1px 36px #d5d5d5', backgroundColor:"#fff"}}> 
      <div className="icon-boxx col-md-6 col-sm-12" >
        <div className="icon-box-content text-center mt-5">
          <img loading="lazy" src={fac1} alt="products" />
          <h3>Procurement Agents</h3>
          <p>Our representatives are dedicated to ensuring the procurement of optimal products, services, and resources at the most competitive rates Striving for excellence in quality, affordability, timeliness, environmental stewardship,.</p>
        </div>
      </div>
      <div className="icon-boxx col-md-6 col-sm-12" style={{padding:'0rem 2rem'}}>
        <div className="icon-box-content text-center mt-5 ">
          <img loading="lazy" src={fac3} alt="Technicians" />
          <h3>Technicians </h3>
          <p>Our skilled engineers and technicians possess the expertise to fabricate machinery components utilizing state-of-the-art equipment. Moreover, we prioritize cultivating a conducive work environment for our team members.</p>
        </div>
      </div>
      <div className="icon-boxx col-md-6 col-sm-12" style={{padding:'5rem 2rem'}}>
        <div className="icon-box-content text-center">
          <img loading="lazy" src={fac2} alt="Marketing" />
          <h3>Marketing Representatives</h3>
          <p>We are supported with a team of marketing professionals, who routinely carry out different market research activities like understanding the market trends, customer preferences, creating marketing strategy and budgets, and performing other relevant tasks essential for increasing the sales.</p>
        </div>
      </div>
      <div className="icon-boxx col-md-6 col-sm-12" style={{padding:' 2rem'}}>
        <div className="icon-box-content text-center mt-5">
          <img loading="lazy" src={fac4} alt="Research & Development" />
          <h3>Research &amp; Development Experts </h3>
          <p>Within our organization, we are supported by a team of proficient R & D specialists. Their methodology involves gathering primary market data and soliciting customer feedback. Subsequently, these insights are amalgamated with the demands of various business tiers. Consequently, their endeavors facilitate innovation within our
             current product spectrum.</p>
        </div>
      </div>
      
      </div>
    </div>
  
</section>  

    {/* </motion.section> */}
    </div>
  );
};

export default People;
