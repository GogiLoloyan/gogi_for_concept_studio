import React from "react";
import {Link} from 'react-scroll'

class Page1 extends React.Component {
  componentDidUpdate(){
    this.refs.header_text.style.setProperty("--play", "running");
  }
  componentDidMount(){
    // this.refs.header_text.style.setProperty("--play", "running");
  }
  
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
              <li><Link to="page_2" smooth={true}  duration={500} isDynamic={true} onClick={()=>this.props.hanleResize("page_2")}><span>01.</span> vIsion</Link></li>
              <li><Link to="page_3" smooth={true}  duration={500} isDynamic={true} onClick={()=>this.props.hanleResize("page_3")}><span>02.</span> about us</Link></li>
              <li><Link to="page_4" smooth={true}  duration={500} isDynamic={true} onClick={()=>this.props.hanleResize("page_4")}><span>03.</span> blog</Link></li>
              <li><Link to="page_5" smooth={true}  duration={500} isDynamic={true} onClick={()=>this.props.hanleResize("page_5")}><span>04.</span> contact</Link></li>
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

export default Page1;
