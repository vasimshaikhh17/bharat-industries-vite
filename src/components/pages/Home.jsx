import React from 'react'
import Hero from './Homecomponent/Hero/Hero'
import Experties from './Homecomponent/Experties/Experties'
import Work from './Homecomponent/Work/Work'
import Portfolio from './Homecomponent/Portfolio/Portfolio'
import People from './Homecomponent/People/People'
import Layout from '../layout/Layout'
import "../../styles/home.css"
import faq from "../../assets/images/faq2.png"

const Home = () => {
  return (
   <>
   <Layout>
      <Hero/>
      <Experties/>
      <Work/>
      <Portfolio/>
      <People/>


      
      <section className="bsb-faq-2 bg-light py-3 py-md-5 py-xl-8">
        <div className="col-12 col-lg-12">
          <div className="row justify-content-xl-center">
            <div className="col-12 col-xl-11 faq-head">
              <h2
                className="  text-capitalize text-center"
        
              >
                Frequently Asked Question's
              </h2>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row gy-5 gy-lg-0">
            <div className="col-12 col-lg-6 faq-img">
              <img
                src={faq}
                style={{ width: "350px", height: "450px" }}
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12 col-xl-11">
                  <div className="accordion accordion-flush" id="accordionExample">
                    <div className="accordion-item mb-4 shadow-sm">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button bg-transparent fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                 How We Can Get Quote?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                          Share your design and requirement document with us. We will check your requirement. We will discuss with you related to requirement for accurate quote purpose. Then We will send you a quote.


                          </p>
       
                        
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-4 shadow-sm">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed bg-transparent fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                       What is Payment Condition?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                      >
                        <div className="accordion-body">
                        It's totally depends on customer relation. Kindly do discussion with us on call.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-4 shadow-sm">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed bg-transparent fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How Does Payment System Work?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                      >
                        <div className="accordion-body">
                          A payment system is a way to transfer money from one
                          person or organization to another. It is a complex
                          process that involves many different parties,
                          including banks, credit card companies, and merchants.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-4 shadow-sm">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed bg-transparent fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          What currency will I be charged in?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                      >
                        <div className="accordion-body">
                          The currency you are charged in when making a purchase
                          will depend on a number of factors, including the
                          merchant you are purchasing from, the country you are
                          purchasing from, and the payment method you are using.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item shadow-sm">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed bg-transparent fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          How Do I Cancel My Account?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                      >
                        <div className="accordion-body">
                          <p>
                            To cancel your account, please follow these steps:
                          </p>
                          <ul>
                            <li>
                              Go to our website and sign in to your account.
                            </li>
                            <li>
                              Click on your profile picture in the top right
                              corner of the page and select "Account Settings."
                            </li>
                            <li>
                              Scroll to the bottom of the page and click on
                              "Cancel Account."
                            </li>
                            <li>
                              Enter your password and click on "Cancel Account."
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 </Layout>
   </>
  )
}

export default Home