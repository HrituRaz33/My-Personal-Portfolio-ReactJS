import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>razhritu@gmail.com</span>
        <div className="f-icons">
          <a _blank href="https://www.instagram.com/hritu_raz/"><Insta color="white" size={"3rem"} /></a>
          <a _blank href="https://www.facebook.com/hrituraz.banik"><Facebook color="white" size={"3rem"} /></a>
          <a _blank href="https://github.com/HrituRaz33"> <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
