import React from "react";
import { Parallax } from "react-spring/renderprops-addons";

import Footer from "./components/Footer";
import withScroll from "../../HOC/withScroll";


class Page6 extends React.Component {
  render() {
    const { offset, touchEvents } = this.props;
    return (
      <Parallax.Layer className="page-6 common_parallax " speed={0} offset={offset} {...touchEvents}>
        <Footer />
      </Parallax.Layer>
    );
  }
}

export default withScroll(Page6, "up");
