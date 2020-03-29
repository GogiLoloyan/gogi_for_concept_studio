import React from "react";

class Cursor extends React.Component {
  render() {
    return <div ref={this.props.myRef} className="cursor"></div>;
  }
}

export default Cursor;
