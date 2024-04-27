import React, { useRef, useState } from "react";
import Layout from "../layout/Layout";
import "../pages/About.css";
import cert2 from "../../assets/img/cert-2.jpg";
import cert3 from "../../assets/img/cert-3.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactus = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    user_name: "",
    mail: "",
    phone: "",
    location: "",
    message: "",
    subject: "sheet",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {

    // alert('True')
    console.log(
      formData.user_name,
      "name",
      formData.location,
      "location",
      formData.mail,
      "mail",
      formData.message,
      "msg",
      formData.phone,
      "phone",
      formData.subject,
      "subject"
    );
    e.preventDefault();
    if (
      !formData.user_name ||
      !formData.mail ||
      !formData.phone ||
      !formData.subject ||
      !formData.location ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    // Email validation
    if (!validateEmail(formData.mail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Phone number validation
    if (!validatePhoneNumber(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return;
    }
    emailjs
      .sendForm(
        "service_hgvvfgfgfgf",
        "template_hygyhghghg",
        form.current,
        "jhgjgjhghg-ghgfhfgfgf"
      )
      .then(
        (result) => {
          toast.success("Message Sent successFull", {
            position: "top-right",
          });
        },
        (error) => {
          console.log(error)
          toast.error("Something went Wrong", {
            position: "top-right",
          });
        }
      );
  };

  // Email validation function

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone number validation function
  const validatePhoneNumber = (phone) => {
    // Regular expression to match 10-digit phone numbers
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };
  return (
    <>
      <Layout>
        {/* image coming from about.css */}
        <section className="hero-about">
          <h1 style={{ color: "White" }}>Contact Us</h1>
        </section>

        <section>
          <div className="container">
            <div className="row" style={{ paddingTop: "2rem" }}>
              <div className="col-lg-6">
                <h3 className="text-uppercase">Get In Touch</h3>
                <p>
                  Thank you for your interest in our company. If you have any
                  questions or concerns about our products, please do not
                  hesitate to contact us. We look forward to hearing from you
                  soon!
                </p>
                <div className="m-t-30">
                  <form ref={form} method="post" id="form" name="form">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          className="form-control"
                          placeholder="Name"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="mail"
                          className="form-control"
                          name="mail"
                          placeholder="Email"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="subject">Your Phone No</label>
                        <input
                          type="text"
                          id="subj"
                          name="phone"
                          placeholder="Phone"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="subject">Your Location</label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          placeholder="Location"
                          className="form-control"
                          onChange={handleChange}
                        />
                        {/* <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="subject"
                          className="form-control"
                          onChange={handleChange}
                        /> */}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        placeholder="Enter Your Message"
                        defaultValue={""}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      style={{
                        backgroundColor: "#02b0f3",
                        padding: "10px 20px",
                        borderRadius: "2rem",
                        margin: "1rem 0rem",
                        width: "100%",
                      }}
                      type="button"
                      name="submit"
                      onClick={sendEmail}
                      className="btn"
                    >
                      SEND MESSAGE
                    </button>
                    <ToastContainer />
                  </form>
                </div>
              </div>
              <div className="col-lg-6"style={{paddingTop:"10px"}}>
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14689.414718028105!2d72.6249257!3d23.0107827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e877e7df16e53%3A0x76094bd392c9d3d7!2sKhyati%20Industries!5e0!3m2!1sen!2sin!4v1680867610327!5m2!1sen!2sin"
                  width="100%"
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                /> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.190219566063!2d72.6146837144421!3d23.016786922321316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85d4c0000001%3A0x5eccff238c5fe84c!2sBHARAT+INDUSTRIES!5e0!3m2!1sen!2sin!4v1497247770275"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contactus;
