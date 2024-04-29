import React from 'react'
import Layout from '../layout/Layout'
import "../pages/About.css";
import cert2 from '../.././assets/images/certificate.png'
import slider from "../../assets/images/welcome.png"
// import cert3 from '../../assets/img/cert-3.jpg'
const About = () => {
  return (
   
    <>
    <Layout>
        <section className='hero-about'>
            <h1 style={{color:'White'}}>About Us</h1>
        </section>

<section className='section-about'>
  <div className="">
    <div className="row">
      <div className="col-md-12 col-12">
        <div className="">
          <h1 className="abt-heading" style={{color:"#02b0f3"}}>Bharat Industries</h1> <br />
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-12 order-2 order-lg-1"style={{textAlign:"justify"}}>
      <p>Founded in the year 2015, Bharat Industries has emerged as a premier manufacturer and supplier specializing in an extensive array of Precision Forged and Metal Stamped Components. Our unwavering commitment has always been to deliver unparalleled quality to our clientele. Employing top-notch raw materials in our manufacturing process ensures that our products deliver optimal performance and functionality.</p>
      <p>Over the last two decades, our company has earned a sterling reputation among our clientele for providing top-notch, cost-effective solutions. Our products find extensive applications across both industrial and household sectors. Our diverse product portfolio encompasses Precision Machined Components, Metal Stamped Parts, Custom Tooling, Electrical Components, Brass Fittings, Copper Connectors, Stainless Steel Hardware, Mild Steel Components, and Deep Drawing Components.</p>
      <p>At Bharat Industries, we pride ourselves on delivering innovative solutions for even the most intricate components, leveraging advanced manufacturing techniques and cutting-edge technology. Our state-of-the-art production facility is equipped with the latest machinery to ensure precision and efficiency in every aspect of our operations. Continuously striving for excellence, we constantly integrate new production methodologies to provide our customers with an unparalleled selection of machinery parts. Moreover, we prioritize offering our product range at competitive prices and ensuring timely delivery to our valued customers.</p>
      <p>Our skilled workforce boasts extensive experience in this industry, coupled with an in-depth comprehension of market dynamics. They continuously motivate team members to collaborate effectively and actively contribute to the company's expansion.</p>
    </div>
      <div className="col-md-6 col-lg-6 col-12 order-1 order-lg-2 d-flex justify-content-center align-items-center">
  <div className="img-box img-fluid about-img">
    <img src={slider} alt="" className="img-fluid" />
  </div>
</div>

    </div>
  </div>
</section>


{/* <section style={{background: '#e8e8e8', padding: '2rem'}}>
  <div className="container">
    <div className="heading-text heading-section text-center" style={{padding:'5rem'}}>
      <h4 style={{fontSize:'2rem'}}>Company Profile</h4>
      <hr />
    </div>
    <div className="row" style={{}}>
          <div className="col-lg-3 bgcol">
            <h4><i className="fa fa-building" /> Business Type</h4>
            <ul style={{marginLeft: 0}}>
              <li>Manufacturer</li>
            </ul>
          </div>
          <div className="col-lg-3 bgcol">
            <h4> <i className="fa fa-building" /> Year Of establishment</h4>
            <ul style={{marginLeft: 0}}>
              <li>2000</li>
            </ul>
          </div>
          <div className="col-lg-3 bgcol">
            <h4> <i className="fa fa-building" /> Legal Status of firm</h4>
            <ul style={{marginLeft: 0}}>
              <li>Proprietorship Firm</li>
            </ul>
          </div>
          <div className="col-lg-3 bgcol">
            <h4> <i className="fa fa-building" /> Major Markets</h4>
            <ul style={{marginLeft: 0}}>
              <li>USA</li>
              <li>East Asia</li>
              <li>South East Asia</li>
            </ul>
          </div>
          <div className="col-lg-3 bgcol">
            <h4> <i className="fa fa-building" /> Annual Turnover</h4>
            <ul style={{marginLeft: 0}}>
              <li>US$ 1-10 Million (or Rs. 4-40 Crore Approx)</li>
            </ul>
          </div>
          <div className="col-lg-3 bgcol">
            <h4> <i className="fa fa-building" /> Location Type</h4>
            <ul style={{marginLeft: 0}}>
              <li>Urban</li>
            </ul>
          </div>
          <div className="col-lg-3 bgcol">
            <h4> <i className="fa fa-building" /> Building Infrastructure</h4>
            <ul style={{marginLeft: 0}}>
              <li>Permanent</li>
            </ul>
          </div>
          <div className="col-lg-3 bgcol">
            <h4> <i className="fa fa-building" /> Size of Premises</h4>
            <ul style={{marginLeft: 0}}>
              <li>1,000 square feet</li>
            </ul>
          </div>
          <div className="col-lg-3 bgcol">
            <h4><i className="fa fa-building" /> Number of Employee</h4>
            <ul style={{marginLeft: 0}}>
              <li>25 to 40 People</li>
            </ul>
          </div>
          <div className="col-lg-3 bgcol">
            <h4><i className="fa fa-building" /> Banker</h4>
            <ul style={{marginLeft: 0}}>
              <li>Union bank of India</li>
            </ul>
          </div>

    </div>
  </div>
</section> */}


<section id="page-content">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-12">
        <div className="heading-text heading-section text-center mt-5">
          <h4>Our Vision</h4>
          <span className="lead">Striving for excellence in quality, affordability, timeliness, environmental stewardship, operational efficiency, and customer contentment on a global scale.</span>
        </div>
      </div>
      <div className="col-md-6 col-12">
        <div className="heading-text heading-section text-center mt-5">
          <h4>Why Choose Us?</h4>
          <span className="lead">The following factors have empowered us to maintain our competitive edge alongside industry peers:</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="box-fancy section-fullwidth text-light p-b-40" id="page-content">
  <div className="container">
    <div className="row text-center abt-content justify-content-center">
      <div style={{backgroundColor: '#16A5DC', textAlign:'center', padding:'5rem 0rem',marginLeft:"30px"}} className="col-lg-4 quality mt-5">
        <h3>Quality range of
          <br />sheet metal components</h3>
      </div>
      <div style={{backgroundColor: '#2DAEDF', textAlign:'center', padding:'5rem 0rem',marginLeft:"30px"}} className="col-lg-4 quality mt-5">
        <h3>Sound <br /> Infrastructure</h3>
      </div>
      <div style={{backgroundColor: '#47B8E3', textAlign:'center', padding:'5rem 0rem',marginLeft:"30px"}} className="col-lg-4 quality mt-5">
        <h3>Qualified <br /> Team</h3>
      </div>
    </div>
    <div className="row p-t-10 justify-content-center"style={{paddingBottom:"20px"}} id="market">
      <div style={{backgroundColor: '#61C2E7', textAlign:'center', padding:'5rem 0rem',marginLeft:"30px"}} className="col-lg-4 quality mt-5">
        <h3>Market<br /> Leading Prices</h3>
      </div>
      <div style={{backgroundColor: '#61c2e7d4', textAlign:'center', padding:'5rem 0rem',marginLeft:"30px"}} className="col-lg-4  quality mt-5">
        <h3>Timely <br />Delivery</h3>
      </div>
    </div>  
  </div>
</section>

<div>
  <section id="page-content" style={{background: '#e8e8e8',  paddingTop:"1px",marginLeft:"30px"}}>
    <div className="container">
      <div className="heading-text heading-section text-center mt-5">
        <h4>Research &amp; Development</h4>
      </div>
      <div className="col-md-12 col-12 text-center"style={{paddingBottom:"30px"}}>
        <div className=""style={{textAlign:"justify"}}>
          <span>Within our company, we are supported by a dedicated team of seasoned R&D professionals. Their regular research endeavors enable the organization to acquire advanced technology and process insights. By gathering firsthand market intelligence and customer feedback, they synthesize these findings with the diverse operational needs of the business. Through this collaborative effort, we continually innovate and enhance our existing product range.</span>
        </div>
      </div>
    </div>
  </section>
  <section id="page-content"style={{marginLeft:"30px"}}>
  <div className="container">
    <div className="heading-text heading-section text-center mt-5">
      <h4>Client Satisfaction</h4>
    </div>
    <div className="row justify-content-center">
      <div className="text-center"> {/* Changed col-md-12 col-sm-12 to col-12 */}
        <div className="descset col-12"style={{textAlign:"justify"}}>
          <span>In the realm of customer satisfaction, our organization stands out by consistently surpassing expectations, evident in the increasing volume of orders we receive daily. Our diligent customer research underscores the high level of satisfaction our products deliver. To uphold this position, we continuously innovate our machinery components, ensuring they remain at the forefront of quality and performance. Furthermore, we offer these parts at highly competitive prices, while also guaranteeing timely delivery as per our customers' specified timeframes. These efforts have propelled our organization to remarkable growth and reputation, establishing us as a leader in our field.</span>
        </div>
      </div>
    </div>
  </div>
</section>


  <section id="page-content" style={{background: '#e8e8e8',marginLeft:"30px"}} >
    <div className="container "style={{paddingBottom:"10px"}}>
      <div className="heading-text heading-section text-center mt-5 "style={{paddingTop:"40px"}}>
        <h4>Quality Assurance</h4>
      </div>
      <div className="col-md-12 col-sm-12 text-center">
        <div className="descset"style={{paddingBottom:"10px"}}>
          <h3 />
          <span>In our company, we prioritize the adherence of our machinery components to industry standards, ensuring their quality is consistently upheld. To achieve this, we rely on a team of seasoned quality controllers equipped with extensive industry experience. These professionals conduct rigorous inspections on our products to guarantee their integrity. Before final dispatch, our machinery components undergo meticulous testing on the following criteria:</span>
          <ul className="container" style={{display: 'flex', paddingLeft: 40, paddingTop: 10, justifyContent: 'center'}}>
            <li style={{paddingRight: 30}}>Tensile strength</li>
            <li style={{paddingRight: 30}}>Corrosion resistance</li>
            <li>Wear &amp; tear resistance</li>
          </ul>
          <p>By taking all these parameters into consideration, we not only provide our customers with a flawless range but also gain their immense trust.</p>
        </div>
      </div>
    </div>
  </section>
</div>

<section className="box-fancy section-fullwidth text-light p-b-0" id="page-content">
  <div className="container">
    <div className="heading-text heading-section text-center"style={{paddingTop:"30px"}}>
      <h2 style={{color: '#000', fontSize:'3rem'}}>Certification &amp; Membership</h2>
    </div>
    <div className="row about-content" style={{marginTop:'5rem', marginBottom:'3rem'}}>
      <div className="col-lg-6 col-12 order-lg-1 order-2 about-section"style={{marginTop:'2rem'}}>
        <span style={{color: '#000'}}><strong>Certification Name :</strong> ISO Certification </span>
        <span style={{color: '#000'}}><strong>Certification Type: </strong>ISO 9001:2015 </span>
        <span style={{color: '#000'}}><strong>Start Date: </strong>12-September-2023</span>
        <span style={{color: '#000'}}><strong>Expiry Date: </strong>11-September-2026</span>
        {/* <span style={{color: '#000'}}><strong>Issued By: </strong> Absolute Quality Certification Pvt. Ltd (AQC)</span> */}
      </div>
      <div className="col-lg-6 col-12 order-lg-2 order-1 text-center">
        <img loading="lazy" src={cert2} style={{height: '30rem', width:'20rem'}} />
      </div>
    </div>
  </div>
</section>



    </Layout>
    </>




  )
}

export default About