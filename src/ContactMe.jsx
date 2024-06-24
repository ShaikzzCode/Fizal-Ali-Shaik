import React from "react";

import "./css/App.css";

export default function Footer() {
  return (
    <div className="skillsSec footer">
      {/* <h2>Contact Me</h2> */}

      {/* <h2 className='mySkillsH2'>CONTACT ME</h2> */}
      <h2 className='mySkillsH2 conc'>
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
        <span>A</span>
        <span>C</span>
        <span>T&nbsp;</span>
        <span>M</span>
        <span>E</span>
      </h2>

      <div className="linkHolder">
        <img src="./assets/icons/icons8-whatsapp-128.png" alt="cIcon" />
        <p>WhatsApp</p>
        <a href="https://wa.me/+919032145317" target="_blank">+91 90321 45317</a>
      </div>
      <div className="linkHolder">
        <img src="./assets/icons/icons8-mail-100.png" alt="cIcon" />
        <p>Email</p>
        <a href="mailto:developershaikzz@gmail" target="_blank">developershaikzz@gmail</a>
      </div>
      <div className="linkHolder">
        <img src="./assets/icons/icons8-linked-in-100.png" alt="cIcon" />
        <p>LinkedIn</p>
        <a href="https://www.linkedin.com/in/fizal-ali-shaik-0002141b6" target="_blank">Fizal Shaik</a>
      </div>
    </div>
  );
}