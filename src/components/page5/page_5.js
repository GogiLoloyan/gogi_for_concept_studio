import React from "react";
import { Parallax } from "react-spring/renderprops-addons";

import withScroll from "../../HOC/withScroll";
import Content from "./components/content";

class Page5 extends React.Component {
  render() {
    const { offset, touchEvents } = this.props;
    return (
      <Parallax.Layer className="page-5 common_parallax" speed={0} offset={offset} {...touchEvents}>
        <Content />
      </Parallax.Layer>
    );
  }
}

export default withScroll(Page5, "up and down");
