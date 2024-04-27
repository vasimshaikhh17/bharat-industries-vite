import React from "react";
import Layout from "../layout/Layout";
import "../pages/About.css";
import { Link } from "react-router-dom";
import cert2 from "../../assets/img/cert-2.jpg";
import cert3 from "../../assets/img/cert-3.jpg";
import p1 from "../../assets/img/products/2.webp";
import p2 from "../../assets/img/products/6.webp";
import p3 from "../../assets/img/products/17.webp";
import p4 from "../../assets/img/products/19.webp";
import p5 from "../../assets/img/products/22.webp";
import p6 from "../../assets/img/products/38.webp";

// import p47 from "../../../public/new.images/41.jpeg"
// import p48 from "../../../public/new.images/42.jpeg"
// import p49 from "../../../public/new.images/43.jpeg"
// import p50 from "../../../public/new.images/44.jpeg"
// import p51 from "../../../public/new.images/45.jpeg"
// import p52 from "../../../public/new.images/46.jpeg"
// import p53 from "../../../public/new.images/47.jpeg"
// import p54 from "../../../public/new.images/48.jpeg"
// import p56 from "../../../public/new.images/54.jpeg"
// import p55 from "../../../public/new.images/55.jpeg"


const Ourproducts = () => {
  return (
    <>
      <Layout>
        {/* image coming from about.css */}
        <section className="hero-about">
          <h1 style={{color:'white'}}>Our Products</h1>
        </section>

        <section id="page-content">
          <div className="container">
            <div
              id="blog"
              className="grid-layout post-3-columns m-b-30 m-t-30 O-links"
              data-item="post-item"
              style={{display:'flex', flexDirection:'column', gap:'1rem'}}
            >
              <div className="post-item border">
                <div className="post-item-wrap" style={{display:'flex', alignItems:'center', gap:'2rem'}}>
                  <div className="post-image">
                    <Link to="/Sheetmetalpart">
                      <img loading="lazy" alt src={p3} />
                    </Link>
                  </div>
                  
                  <div className="post-item-description">
                  <p>Precision sheet metal parts can be made from a variety of materials, including stainless steel, aluminum, copper, brass, and various alloys. The choice of material depends on factors such as strength, corrosion resistance, and conductivity. We are provide Brass Sheet Metal Parts, S S Sheet Metal Parts, M S Sheet Metal Parts, Deep Draw Parts and Copper Sheet Metal Parts.</p>
                    <h2>
                      <Link to="/Sheetmetalpart">Sheet Metal Parts </Link>
                    </h2>
                    <Link to="/Sheetmetalpart" className="item-link">
                      Read More &rarr; <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-item border">
                <div className="post-item-wrap" style={{display:'flex', alignItems:'center', gap:'2rem'}}>
                  <div className="post-image">
                    <Link to="/Sheetmetaltool">
                      <img loading="lazy" alt src={p4} />
                    </Link>
                  </div>
                  <div className="post-item-description">
                    <p>Sheet metal tools are specialized tools used for cutting, shaping, and manipulating sheet metal, which is a thin and flat piece of metal often used in various industries for construction, manufacturing, automotive, and HVAC (Heating, Ventilation, and Air Conditioning) applications. These tools are essential for fabricating and working with sheet metal to create various products and structures.</p>
                    <h2>
                      <Link to="/Sheetmetaltool">Sheet Metal Tools </Link>
                    </h2>
                    <Link to="/Sheetmetaltool" className="item-link">
                      Read More &rarr; <i className="icon-chevron-right" />
                    </Link>
                  </div>
                  
                </div>
                
              </div>
              
              <div className="post-item border">
                <div className="post-item-wrap" style={{display:'flex', alignItems:'center', gap:'2rem'}}>
                  <div className="post-image">
                    <Link to="/Switchgear">
                      <img loading="lazy" alt src={p6} />
                    </Link>
                  </div>
                  <div className="post-item-description">
                    <p>Switchgear sheet metal parts refer to the metal components and enclosures used in the construction of switchgear assemblies and panels. These parts are typically fabricated from various types of sheet metal, such as steel or aluminum, and are designed to provide protection, support, and organization for the electrical components and wiring within the switchgear.</p>
                    <h2>
                      <Link to="/Switchgear">
                        Switchgear Components &amp; Parts
                      </Link>
                    </h2>
                    <Link to="/Switchgear" className="item-link">
                      Read More &rarr; <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-item border">
                <div className="post-item-wrap" style={{display:'flex', alignItems:'center', gap:'2rem'}}>
                  <div className="post-image">
                    <Link to="/Metalstamping">
                      <img loading="lazy" alt src={p5} />
                    </Link>
                  </div>
                  <div className="post-item-description">
                <p> Our company offers components as per customers drawing specifications all dimension are controlled with perfect dies and tools. Quality is controlled by special inspection gauges, for their critical assembly needs. These components are manufactured by experienced engineers and skilled workers thus providing complete satisfaction to our clients.</p>  
                    <h2>
                      <Link to="/Metalstamping">Metal Stamping </Link>
                    </h2>
                    <Link to="/Metalstamping" className="item-link">
                      Read More &rarr; <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-item border">
                <div className="post-item-wrap" style={{display:'flex', alignItems:'center', gap:'2rem'}}>
                  <div className="post-image">
                    <Link to="/Materialsformetalstamping">
                      <img loading="lazy" alt src={p2} />
                    </Link>
                  </div>
                  <div className="post-item-description">
                    <p>Our company offers components as per customers drawing specifications all dimension are controlled with perfect dies and tools. Quality is controlled by special inspection gauges, for their critical assembly needs. These components are manufactured by experienced engineers and skilled workers thus providing complete satisfaction to our clients. </p>
                    <h2>
                      <Link to="/Materialsformetalstamping">
                        Materials for Metal Stamping Parts
                      </Link>
                    </h2>
                    <Link to="/Materialsformetalstamping" className="item-link">
                      Read More &rarr; <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-item border">
                <div className="post-item-wrap" style={{display:'flex', alignItems:'center', gap:'2rem'}}>
                  <div className="post-image">
                    <Link to="Stampedmetal">
                      <img
                        style={{ height: "15rem" }}
                        loading="lazy"
                        alt
                        src={p1}
                      />
                    </Link>
                  </div>
                  <div className="post-item-description">
                    <p>Our company offers components as per customers drawing specifications all dimension are controlled with perfect dies and tools. Quality is controlled by special inspection gauges, for their critical assembly needs. These components are manufactured by experienced engineers and skilled workers thus providing complete satisfaction to our clients. </p>
                    <h2>
                      <Link to="/Stampedmetal">Stamped Metal Parts</Link>
                    </h2>
                    <Link to="/Stampedmetal" className="item-link">
                      Read More &rarr; <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              
            
            
             
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Ourproducts;
