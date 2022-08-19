import React, { useState } from "react";
import espCV from '../docs/espCV.pdf'

const CvToggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="center">
        {/* <span>
            <b>
                CV File
            </b>
        </span> */}
        <input
          type="checkbox"
          checked={toggle}
          onChange={(e) => setToggle(e.target.checked)}
        />
      </div>
      <div className="pdfFile">
        {toggle ? (
            <>
            <a href={espCV} download={"CV Español"} className="aButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                CV Eng
            </a>
            </>
        ) : (
            <>
            <a href={espCV} download={"CV Español"} className="aButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                HV Esp
            </a>
            </>
        )}
      </div>

    </>
  );
};

export default CvToggle;
