import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import ArrowSvg from "../helper/arrow_svg";

class Page6 extends React.Component {
  minDistance = 50;

  _OnWheel = e => {
    const delta = e.deltaY || e;
    delta < 0 && this.props.onWheel(this.props.offset - 1);
  };

  _onTouchStart = e => {
    this.swiping = e.changedTouches[0].clientY;
  }

  _onTouchEnd = e => {
    const diff = this.swiping - e.changedTouches[0].clientY;
    diff && Math.abs(diff) > this.minDistance && this._OnWheel(diff);
  }

  render() {
    
    const events = {
      onWheel: this._OnWheel,
      onTouchStart: this._onTouchStart,
      onTouchEnd: this._onTouchEnd
    };

    return (
      <>
        <Parallax.Layer offset={this.props.offset} speed={0} {...events}></Parallax.Layer>
        <Parallax.Layer className="page-6" offset={this.props.offset} speed={0} {...events}>
          <div className="footer">
            
            <div className="header">
              <div className="footer__input">
                <h1>Sign up for<br />news letter</h1>
                <label for="email">Lorem ipsum dolor sit amet, consetetur sadipscing eitr, sed diam nonumy eirmod</label>
                <input id="email" type="email" name="email" placeholder="E-mail address" aria-describedby="E-mail address"/>
                <div className="svg-container">
                  <svg viewBox="0 0 951 69">
                    <polyline points= "0,0 950,0 950,50 934,69 0,69"/>
                  </svg>
                </div>
              </div>
              <div className="footer__menu">
                <div className="menu">
                  <ul>
                    <li>vision</li>
                    <li>blog</li>
                    <li>about us</li>
                    <li>contact</li>
                    <li>terms</li>
                    <li>privacy</li>
                    <li>purchasing</li>
                  </ul>
                </div>
                <div className="contacts">
                  <ul>
                    <li>Phone:</li>
                    <li>416.423.7906</li>
                    <li>Email:</li>
                    <li>Info@Myant.Ca</li>
                    <li>Media/PR:</li>
                    <li>Pr@Myant.Ca</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer__info">
              <p>© 2019 MYANT. ALL RIGHTS RESERVED</p>
              <p>Made By The Fifty One Studio</p>
            </div>
          </div>
        </Parallax.Layer>
      </>
    );
  }
}

export default Page6;
