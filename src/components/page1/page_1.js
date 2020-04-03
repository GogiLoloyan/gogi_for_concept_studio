import React from "react";
// import withGsapScroll from "./withGsapScroll";

class Page1 extends React.Component { 
  render() {
    return (
      <div className="page_1" id="page_1">
        <div className="back_grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="header">
          <div className="menu_list">
            <ul>
              <li><a href="#page_2"><span className="menuIndex">01.</span><span className="menuText">vIsion</span></a></li>
              <li><a href="#page_3"><span className="menuIndex">02.</span><span className="menuText">about us</span></a></li>
              <li><a href="#page_4"><span className="menuIndex">03.</span><span className="menuText">blog</span></a></li>
              <li><a href="#page_5"><span className="menuIndex">04.</span><span className="menuText">contact</span></a></li>
            </ul>
          </div>

          <div className="header_text" ref="header_text">
            <h2>
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>n</span>
              <span>e</span>
              <span>c</span>
              <span>t</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
              <br />
              <span>h</span>
              <span>u</span>
              <span>m</span>
              <span>a</span>
              <span>n</span>
              <span>i</span>
              <span>t</span>
              <span>y</span>
            </h2>
            <h1>
              <span>T</span>
              <span>h</span>
              <span>r</span>
              <span>o</span>
              <span>u</span>
              <span>g</span>
              <span>h </span>

              <span>t</span>
              <span>e</span>
              <span>x</span>
              <span>t</span>
              <span>i</span>
              <span>l</span>
              <span>e</span>
              <br />
              <span>c</span>
              <span>o</span>
              <span>m</span>
              <span>p</span>
              <span>u</span>
              <span>t</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </h1>
          </div>

          <div className="paragraf_text">
            <p>
              Discover how we are building a better connection between you, your
              body, your community and the world around you.
            </p>
          </div>
        </div>
        <section></section>
      </div>
    );
  }
}

// export default withGsapScroll(Page1);
export default Page1;

