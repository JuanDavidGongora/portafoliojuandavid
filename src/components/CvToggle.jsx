import React, { useState } from "react";

const CvToggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="center">
        <span>
            <b>
                CV File
            </b>
        </span>
        <input
          type="checkbox"
          checked={toggle}
          onChange={(e) => setToggle(e.target.checked)}
        />
      </div>
      <div className="pdfFile">
        {toggle ? (
            <>
            <button>Pdf español</button>
            </>
        ) : (
            <>
            <button>Pdf ingles</button>
            </>
        )}
      </div>

    </>
  );
};

export default CvToggle;
