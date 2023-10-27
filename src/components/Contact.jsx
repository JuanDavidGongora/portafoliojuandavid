import React from "react";
import phoneImg from "../images/phone.png"
import emailImg from "../images/email.png"
import phoneRingImg from "../images/phoneRing.png"
import emailOpenImg from "../images/openMail.png"


const Contact = () => {
  return (
    <div className="aboutMe" id='s-contact' style={{paddingTop: "4rem"}}>
      <div>
        <h1 className="h1">Contáctame</h1>
      </div>
      <div className="contactColumn">

        <div className="marginContactLeft">
            <div className="cube">
                <div className="top"></div>
                <div>
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                    <span className="four"></span>
                </div>
            </div>
        </div>

        <div className="marginContactRight">

            <a href="tel:+573106583256" target="_blank" className="aButton contactButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i className='bx bxs-phone iconCon'></i>
                +57 (310) 658 3256
            </a>

            <a href="mailto:juandavid.623@gmail.com" target="_blank" className="aButton contactButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i className='bx bxs-envelope iconCon'></i>
                juandavid.623@gmail.com
            </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
