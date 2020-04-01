import React from "react";
import { initCursorAnimate, initHoversAnimate } from "./cursorAnimate";

class Cursor extends React.Component {
  componentDidMount() {
    setTimeout( () => {
      initCursorAnimate.call(this.refs);
      initHoversAnimate.call(this.refs);
    }, 500);
  }
  render() {
    return (
      <div className="cursor">
        <div ref="small_cursor" className="small_cursor"></div>
        <div ref="big_cursor" className="big_cursor"></div>
      </div>
    );
  }
}

export default Cursor;
