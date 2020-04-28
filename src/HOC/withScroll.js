import React from "react";
import changeMainPageTop from "../components/page1/changePageTop";

function withScroll(Component, up_down) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.minDistance = 50;
      switch (up_down) {
        case "up":
          this._onWheel = this._onWheelUp;
          break;
        case "down":
          this._onWheel = this._onWheelDown;
          break;
        case "up and down":
          this._onWheel = this._onWheelUpAndDown;
          break;
        default:
      }
    }

    /// wheel events
    _onWheelUp = e => {
      const { onWheel, offset } = this.props;
      const { deltaY } = e;
      deltaY < 0 && onWheel(offset - 1);
    };
    _onWheelDown = e => {
      const { onWheel, offset } = this.props;
      const { deltaY } = e;
      deltaY > 0 && onWheel(offset + 1);
      deltaY < 0 && changeMainPageTop();
    };
    _onWheelUpAndDown = e => {
      const { onWheel, offset } = this.props;
      const { deltaY } = e;
      deltaY > 0 && onWheel(offset + 1);
      deltaY < 0 && onWheel(offset - 1);
    };

    /// touch events
    _onTouchStart = e => {
      this.swiping = e.changedTouches[0].clientY;
    };
    _onTouchEnd = e => {
      const touches = e.changedTouches[0];
      const deltaY = this.swiping - touches.clientY;
      Math.abs(deltaY) > this.minDistance && this._onWheel({ deltaY });
    };

    render() {
      const events = {
        onWheel: this._onWheel,
        onTouchStart: this._onTouchStart,
        onTouchEnd: this._onTouchEnd
      };
      return <Component touchEvents={events} offset={this.props.offset} />;
    }
  };
}

export default withScroll;