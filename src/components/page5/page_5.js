import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import ArrowSvg from "../helper/arrow_svg";

class Page5 extends React.Component {
  minDistance = 50;

  _OnWheel = e => {
    const delta = e.deltaY || e;
    delta > 0 && this.props.onWheel(this.props.offset + 1);
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
        <Parallax.Layer className="page-5" offset={this.props.offset} speed={0} {...events}>
          <div  className="page-5__content">
            <div className="header">
              <p>Imagine your customers every interaction with textiles is intelligent. </p>
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
                    <ArrowSvg size="40%" style={{ stroke: "rgba(0, 34, 63)"}} icon="arrow-forward" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Parallax.Layer>
      </>
    );
  }
}

export default Page5;
