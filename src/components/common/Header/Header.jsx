import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../../utils/motion";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../../hooks/useHeaderShadow";
import { Link } from "react-router-dom";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}> <Link to="/" style={{textDecoration:'none' , color:'black'}}>Bharat</Link></div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={{marginBottom:'0', fontSize:'13px'}}
          // style={getMenuStyles(menuOpened)}
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/Ourproducts">Our Product</Link></li>
          <li><Link to="/industries">Industries</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li  className={`flexCenter ${css.phone}`} >
            <p style={{marginBottom:'0px'}}>+001 (313) 345 678</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;





