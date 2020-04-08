import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import data from "./data";
import Description from "./description";

class Page4 extends React.Component {
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
        <Parallax.Layer
          className="p4-description"
          offset={this.props.offset + 0.1}
          speed={0.2}
          {...events}
        >
          <h1>How<br />Partnership<br />works</h1>
          <div className="arrow">
            <div className="arrow__line"></div>
            <div className="arrow__triangle"></div>
          </div>
          <p>
            The digitization of everyday products continues to accelerate - With
            no end in sight. Traditional companies that failed to innovate are
            pushed out of their industries while doors opened for the industry
            disruptors. We can help you pivot wisely to e-textile technology and
            create new innovative solutions for your customers.
          </p>
          <p>
            As your manufacturing solutions partner, Myant helps you create
            custom solutions that bring innovation to your industry, and provide
            your customers with the connectivity, tech, and new experiences they
            desire.
          </p>
        </Parallax.Layer>
      </>
    );
  }
}

export default Page4;
