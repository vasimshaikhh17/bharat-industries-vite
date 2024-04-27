import React from "react";
import Layout from "../layout/Layout";
import "../pages/About.css";
const Sheetmeataltools = () => {
  return (
    <>
      <Layout>
        {/* image coming from about.css */}
        <section className="hero-about">
          <h1>Materials For Metal Stamping</h1>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-text heading-section">
                  <h2 className="py-4">Materials for Metal Stamping Parts</h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12 py-4 lh-lg">
                    Our company offers components as per customers drawing
                    specifications all dimension are controlled with perfect
                    dies and tools. Quality is controlled by special inspection
                    gauges, for their critical assembly needs. These components
                    are manufactured by experienced engineers and skilled
                    workers thus providing complete satisfaction to our clients.
                    These sheet metal components are available at most
                    competitive prices.
                  </div>
                  <div className="col-lg-6 py-4 ">
                    <ul className="list-style">
                      <li className="mb-2">
                        <i className="fa fa-check" /> M.S. Stamped Parts
                      </li>
                      <li className="mb-2">
                        {" "}
                        <i className="fa fa-check" /> Stainless Steel Stamped
                        Parts
                      </li>
                      <li className="mb-2">
                        {" "}
                        <i className="fa fa-check" /> Aluminium Stamped Parts
                      </li>
                      <li className="mb-2">
                        {" "}
                        <i className="fa fa-check" />
                        Brass Stampings
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 py-4">
                    <div className="col-lg-6">
                      <ul className="list-style">
                        <li className="mb-2">
                          <i className="fa fa-check" />
                          Copper Stampings
                        </li>
                        <li className="mb-2">
                          {" "}
                          <i className="fa fa-check" />
                          Spring Steel Stamping Parts
                        </li>
                        <li className="mb-2">
                          {" "}
                          <i className="fa fa-check" />
                          Copper Berrilium Parts
                        </li>
                        <li className="mb-5" >
                          {" "}
                          <i className="fa fa-check" /> Galvanized Stamped Parts
                        </li>
                      </ul>
                    </div>
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

export default Sheetmeataltools;
