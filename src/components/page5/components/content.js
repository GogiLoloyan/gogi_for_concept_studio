import React from "react";
import ArrowSvg from "../../helper/arrow_svg";

function Content() {
  return (
    <div className="page-5__content">
      <div className="header">
        <p>Imagine your customers every interaction with textiles is intelligent.</p>
        <h1>Contact us to learn more today.</h1>
      </div>

      <div className="figur">
        <div className="figur__content">
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>

          <div className="outer-circle">
            <div className="inner-circle">
              <p>connect<br />with myant</p>
              <ArrowSvg
                size="40%"
                style={{ stroke: "rgba(0, 34, 63)" }}
                icon="arrow-forward"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
