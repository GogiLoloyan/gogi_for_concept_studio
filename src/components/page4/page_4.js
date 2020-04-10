import React from "react";
import { Parallax } from "react-spring/renderprops-addons";

import withScroll from "../../HOC/withScroll";

class Page4 extends React.Component {

  render() {
    const { offset, touchEvents} = this.props;
    return (
      <>
        <Parallax.Layer className="common_parallax " offset={offset} {...touchEvents} />
        <Parallax.Layer className="p4-description common_parallax " speed={0.2} offset={offset + 0.1} {...touchEvents}>
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

export default withScroll(Page4, "up and down");
