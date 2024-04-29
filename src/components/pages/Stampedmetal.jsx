import React from "react";
import Layout from "../layout/Layout";
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
          <div className="heading-text heading-section text-center py-5">
            <h2>Stamped Metal Parts Manufacturer</h2>
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
  Array.from({ length: 42 }).map((_, i) => {
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

        
      </div>
    </div>
  </section>
</div>

        </Layout>
    </>
  );
};

export default Sheetmeataltools;