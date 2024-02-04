import React from "react";
import "./navbar.css";
import { FcHome } from "react-icons/fc";
import { IoMdMenu } from "react-icons/io";
const Nanvar = () => {
  return (
      <>
          <div className="header">
              <section id="part_one">
                  <IoMdMenu />
                  <FcHome />
              </section>
              <section id="part_two">
                  <span>आपातकालीन नंबर : 112</span>
                  <span>गरिमा हेल्पलाइन : 1090</span>
                  <span>चाइल्ड हेल्पलाइन : 1098</span>
                  <span>एम्बुलेंस नंबर : 108</span>
                  <span>साइबर क्राइम हेल्पलाइन : 1930</span>
                  <span>राज्य केन्द्रीकृत कॉल सेंटर नं. : 181</span>
              </section>
              <div className="login_dep">
                  <button>कार्यालय लॉगिन</button>
              </div>
      </div>
      <div className="news">
<marquee behavior="" direction="">Latest news update</marquee>
      </div>
      </>
  );
};

export default Nanvar;
