import React from "react";
import Layout from "../layout/Layout";
import "../pages/About.css";
import { Link } from "react-router-dom";

import p1 from "../../assets/img/products/2.webp";
import p2 from "../../assets/img/products/6.webp";
import p3 from "../../assets/img/products/17.webp";
import p4 from "../../assets/img/products/19.webp";
import p5 from "../../assets/img/products/22.webp";
import p6 from "../../assets/img/products/38.webp";

const Sheetmeataltools = () => {



  return (
    <>

      <Layout>


         {/* image coming from about.css */}
         <section className="hero-about">
          <h1>Stamped Metal Parts</h1>
        </section>

      <div>
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-text heading-section py-5">
            <h2>Materials for Metal Stamping Parts</h2>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12 lh-">
              <p className="lh-lg">Our company offers components as per customers drawing specifications all dimension are controlled with perfect dies and tools. Quality is controlled by special inspection gauges, for their critical assembly needs. These components are manufactured by experienced engineers and skilled workers thus providing complete satisfaction to our clients. These sheet metal components are available at most competitive prices.</p>
            </div>
            <div className="col-lg-6 py-4">
              <ul className="list-style">
                <li className="mb-2"><i className="fa fa-check" /> Small Metal Parts</li>
                <li className="mb-2"> <i className="fa fa-check" />Deep Drawing Parts</li>
                <li className="mb-2"> <i className="fa fa-check" />Rivet Parts</li>
                <li className="mb-2"> <i className="fa fa-check" />Contact Pin</li>
              </ul>
            </div>
            <div className="col-lg-6 py-4">
              <div className="col-lg-6">
                <ul className="list-style">
                  <li className="mb-2"><i className="fa fa-check" />Contact Clips</li>
                  <li className="mb-2"> <i className="fa fa-check" />Spring Clips</li>
                  <li className="mb-2"> <i className="fa fa-check" />Shielding Case</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></section>
  <section id="page-content">
    <div className="container">
      <div id="blog" className="row" data-item="post-item">
          {/* <div className="post-item-wrap">
            <div className="post-image"> */}
        
        {
  Array.from({ length: 55 }).map((_, i) => {
    const imagePath = `../../../public/new.images/${i + 1}.jpeg`;
    console.log('Image Path:', imagePath); // Debugging line
    
    return (
      <div key={i} className="col-md-2 col-lg-4 text-center border py-3">
        <img src={imagePath} className='img-fluid' alt={`Image ${i + 5}`} />
        {/* <h5 className="card-title">Image {i + 1}</h5> */}
      </div>
    );
  })
}


{/* 
         <div className="col-md-4 col-lg-4 py-3">
        <img src={p1} className='img-fluid'/>
      </div>

      <div className="col-md-4 col-lg-4 py-3">
        <img src={p2} className='img-fluid'/>
      </div>

      <div className="col-md-6 col-lg-4 py-3">
        <img src={p3} className='img-fluid'/>
      </div>
          
        <div className=" col-lg-3 col-6">
              <Link to="#">
                <img loading="lazy" alt src={p8} />
              </Link>
          
        </div>        
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p9} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p10} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p11} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p12} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p13} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p14} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p15} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p16} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p17} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p19} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p21} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p22} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p23} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p25} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p26} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p27} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p28} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p29} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p31} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p32} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p33} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p32} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p33} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p34} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p35} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p36} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p37} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p38} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p39} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p40} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p41} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p42} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p43} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p44} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p45} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p46} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p47} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p48} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p49}/>
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p50} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p51} />
              </Link>
            </div> 
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p52} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p53} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p1}  />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p2} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p3} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p4} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p5} />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-item border">
          <div className="post-item-wrap">
            <div className="post-image">
              <Link to="#">
                <img loading="lazy" alt src={p6} />
              </Link>
            </div>
          </div>
        </div> */}
     
        
     
        
      </div>
    </div>
  </section>
</div>

        </Layout>
    </>
  );
};

export default Sheetmeataltools;