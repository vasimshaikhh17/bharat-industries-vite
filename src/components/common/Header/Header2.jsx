import React, { useEffect, useRef, useState } from "react";
import khlogo from "../../../assets/images/logo.png";
import "../Header/Header2.css"
import {useLocation} from "react-router-dom"
import { Link, useNavigate } from "react-router-dom";



const Header2 = ({ theme, toggleTheme }) => {
  let dropdowns = document.querySelectorAll(".dropdown-toggle");
  dropdowns.forEach((dd) => {
    dd.addEventListener("mouseover", function (e) {
      var el = this.nextElementSibling;
      el.style.display = el.style.display === "block" ? "none" : "block";
    });
    dd.addEventListener("mouseout", function (e) {
      var el = this.nextElementSibling;
      el.style.display = el.style.display === "block" ? "block" : "none";
    });
  });

  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const navbarFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navbarRef.current.classList.add("header_shrink");
    } else {
      navbarRef.current.classList.remove("header_shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarFunc);
    return () => window.removeEventListener("scroll", navbarFunc);
  }, []);

  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  const [showServicesBack, setShowServicesBack] = useState(false);

  const toggleServicesBack = () => {
    setShowServicesBack(!showServicesBack);
  };

  const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };


  const location = useLocation();

  useEffect(() => {
 
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggle && navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggle.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
      
    }
  }, [location]);


  return (
    <div className="navbar_wrapper" ref={navbarRef}>
      <div className="container">
        <header className="menu_wrapper">
          <nav className="navbar navbar-expand-lg">
            <div className="container logo-img">
              <Link to="/" className="navbar-brand">
                <img src={khlogo} alt="" />
              </Link>

              <button
                className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon top-bar"></span>
                <span className="toggler-icon middle-bar"></span>
                <span className="toggler-icon bottom-bar"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>

                  <div className="nav-item dropdown dropdown-mega position-static dropdown-hover">
                    <div className=" d-flex justify-content-between align-items-center">
                      <Link
                        className="nav-link"
                        id="navbarDropdown"
                        role="button"
                        to="/ourproducts"
                        aria-expanded="false"
                        data-bs-auto-close="outside"
                      >
                        Our Products
                        <i className="ri-arrow-down-s-line down_arrow"></i>
                      </Link>
                      <div className="plus-toggle" onClick={toggleServices}>
                        {showServices ? (
                          <i className="ri-subtract-line mega_list_icon"></i>
                        ) : (
                          <i className="ri-add-line mega_list_icon"></i>
                        )}
                      </div>
                      <div className="dropdown-menu">
                        <div className="mega-content px-md-0">
                          <div className="container-fluid">
                            <div className="row ">
                              <div
                                className="col-lg-12 col-sm-12  px-xl-2 px-1 "
                                style={{ backgroundColor: "white" }}
                              >
                                <div className="nav-group-item">
                                  <div className="submenu">
                                    <li>
                                      <Link to="/sparts" className="list-group-item"
                                      >
                                        Custom Sheet Metal Parts
                                      </Link>

                                      <div className="dropdown-menus">
                                        <div className="mega-content px-md-0 drop-hover">
                                          <div className="container-fluid">
                                            <div className="row">
                                              <div className="col-lg-12 col-sm-12  px-1">
                                                {/* <!-- Nested dropdown content --> */}
                                                <div className="nav-group-items">
                                                  <Link
                                                    to="/brass"
                                                    className="list-group-item"
                                                  >
                                                    Brass Sheet Metal Parts
                                                  </Link>
                                                  <Link
                                                    to="/ssparts"
                                                    className="list-group-item"
                                                  >
                                                    S S Sheet Metal Parts
                                                  </Link>
                                                  <Link
                                                    to="/msparts"
                                                    className="list-group-item"
                                                  >
                                                    M S Sheet Metal Parts
                                                  </Link>
                                                  <Link
                                                    to="/copper"
                                                    className="list-group-item"
                                                  >
                                                    Copper Sheet Metal Parts
                                                  </Link>
                                                  {/* <!-- Add more subpages as needed --> */}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </div>

                                  <Link to="/stamp" className="list-group-item">
                                    Metal Stamping Parts
                                  </Link>

                                  <Link
                                    to="/fabrication"
                                    className="list-group-item"
                                  >
                                    Sheet Metal Fabrication
                                  </Link>

                                  <Link to="/aluminium" className="list-group-item">
                                    Aluminium Sheet Metal Parts
                                  </Link>
                                  <Link to="/metal" className="list-group-item">
                                    Sheet Metal Components
                                  </Link>
                                  <Link
                                    to="/industrial"
                                    className="list-group-item"
                                  >
                                    Industrial Sheet Metal Parts
                                  </Link>
                                  <Link to="/brackets" className="list-group-item">
                                    Sheet Metal Brackets
                                  </Link>
                                  <Link to="/pressed" className="list-group-item">
                                    Sheet Metal Presssed Components
                                  </Link>
                                  <Link to="/submersible" className="list-group-item">
                                    Submersible Sheet Metal Parts
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {showServices && (
                      <div>
                        <div className="plusicon">
                          <Link
                            to="/sparts"
                            className="mobile-nav-links"
                            id="navbarDropdown"
                            role="button"
                            aria-expanded="false"
                            data-bs-auto-close="outside"
                          >
                            
                           Custom Sheet Metal Parts
                            
                          </Link>

                          <div
                            className="plus-toggle"
                            onClick={toggleServicesBack}
                          >
                            {showServicesBack ? (
                              <i className="ri-subtract-line mega_list_icon "></i>
                            ) : (
                              <i className="ri-add-line mega_list_icon"></i>
                            )}
                          </div>
                        </div>

                        {showServicesBack && (
                          <div>
                            <li>
                              <Link to="/brass"className="mobile-nav-linkss">
                                &gt; Brass Sheet Metal Parts
                              </Link>
                              <Link to="/ssparts" className="mobile-nav-linkss">
                              &gt; SS Sheet Metal Parts
                              </Link>
                              <Link to="/msparts" className="mobile-nav-linkss">
                              &gt; MS Sheet Metal Parts
                              </Link>
                              <Link to="/copper" className="mobile-nav-linkss">
                              &gt; Copper Sheet Metal Parts
                              </Link>
                            </li>
                          </div>
                        )}

                        <li>
                          <Link to="/stamp" className="mobile-nav-links">
                            Metal Stamping Parts
                          </Link>
                        </li>
                        <li>
                          <Link to="/fabrication" className="mobile-nav-links">
                            
                            Sheet Metal Fabrication
                          </Link>
                        </li>
                        <li>
                          <Link to="/aluminium" className="mobile-nav-links">
                            
                            Aluminium Sheet Metal Parts
                          </Link>
                        </li>
                        <li>
                          <Link to="/metal" className="mobile-nav-links">
                            
                            Sheet Metal Components
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial" className="mobile-nav-links">
                            
                            Industrial Sheet Metal Parts
                          </Link>
                        </li>
                        <li>
                          <Link to="/brackets" className="mobile-nav-links">
                            
                            Sheet Metal Brackets
                          </Link>
                        </li>
                        <li>
                          <Link to="/pressed" className="mobile-nav-links">
                            Sheet Metal Presssed Components
                          </Link>
                        </li>
                        <li>
                          <Link to="/submersible" className="mobile-nav-links">
                             Submersible Sheet Metal Parts
                          </Link>
                        </li>
                      </div>
                    )}
                  </div>

                  {/* <li className="dropdown"><a href="product.html">Our Products</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-submenu dropdown"><a href="sheet-metal-parts.html">Sheet Metal Parts</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu"><a href="brass-sheet-metal-parts.html">Brass Sheet Metal Parts</a></li>
                                                <li className="dropdown-submenu"><a href="ss-sheet-metal-parts.html">S S Sheet Metal Parts</a></li>
                                                <li className="dropdown-submenu"><a href="ms-sheet-metal-parts.html">M S Sheet Metal Parts</a></li>
                                                <li className="dropdown-submenu"><a href="copper-sheet-metal-parts.html">Copper Sheet Metal Parts</a></li>
                                            </ul>
                                        </li>
                                        </ul>
                                        </li> */}

                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/industries"
                    >
                      Industries
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="#"
                    >
                      Internships
                    </Link>
                  </li> */}
                </ul>

                {/* <div className="toggle">
                  <span onClick={toggleTheme}>
                    {theme === "light-theme" ? (
                      <span>
                        <i className="ri-moon-line"></i>Dark
                      </span>
                    ) : (
                      <span>
                        <i className="ri-sun-line"></i>Light
                      </span>
                    )}
                  </span>
                 </div> */}
                <button
                  className="button-87"
                  onClick={() => navigate("/contact")}
                  role="button"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header2;
