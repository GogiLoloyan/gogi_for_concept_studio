import React from "react";
import { Parallax } from "react-spring/renderprops-addons";

import withScroll from "../../HOC/withScroll";
import BodyPageContent from "./components/bodyPageContent";


class Page2 extends React.Component {
  render() {
    const { offset, touchEvents } = this.props;
    return (
      <Parallax.Layer className="page-2 common_parallax" speed={0.2} offset={offset} {...touchEvents}>
        <BodyPageContent />
      </Parallax.Layer>
    );
  }
}

export default withScroll(Page2, "down");