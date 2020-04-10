import React from "react";
import withNavScroll from "../../HOC/withNavScrollTo";
import withReactScrollWheelHandler from "../../HOC/withReactScrollWheelHandler";
import Video from "../Video";

class Page1 extends React.Component { 
  render() {
    const { pageRef, listRef, onWheel } = this.props;
    return (
      <div className="page_1" id="page_1" ref={pageRef} onWheel={onWheel}>  
        <div className="back_grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="header">
          <div className="menu_list">
            <ul  ref={listRef}>
              <li><a href="#page-2"><span className="menuIndex">01.</span><span className="menuText">vIsion</span></a></li>
              <li><a href="#page-3"><span className="menuIndex">02.</span><span className="menuText">about us</span></a></li>
              <li><a href="#page-4"><span className="menuIndex">03.</span><span className="menuText">blog</span></a></li>
              <li><a href="#page-5"><span className="menuIndex">04.</span><span className="menuText">contact</span></a></li>
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
            <br />
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
        <Video />
      </div>
    );
  }
}


// export default window.innerWidth > 1320 ? withReactScrollWheelHandler(withNavScroll(Page1)): withNavScroll(Page1);
export default  withReactScrollWheelHandler(withNavScroll(Page1));