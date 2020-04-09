import React from "react";

import Description from "./components/description";
import ImgsForBody from "./components/imgsForBody.js";
import ManBody from "./components/manBody.js";
import { images, man, images_hover } from "../../../pictures/list_body/images.js";

class BodyPageContent extends React.Component {
  man_body = React.createRef();
  man_images = React.createRef();

  handleMouseEnter = id => {
    this.man_body.current.style.opacity = 0.3;
    this.man_images.current.children[id].style.opacity = 1;
  };

  handleMouseLeave = id => {
    this.man_body.current.style.opacity = 0.9;
    this.man_images.current.children[id].style.opacity = 0;
  };

  render() {
    const bodyImages = {
      images,
      handleMouseEnter: this.handleMouseEnter,
      handleMouseLeave: this.handleMouseLeave
    };
    const manImages = {
      man,
      images_hover,
      bRef: this.man_body,
      imgsRef: this.man_images
    };
    return (
      <div className="back-grid">
        <ManBody {...manImages} />
        <ImgsForBody {...bodyImages} />
        <Description />
      </div>
    );
  }
}

export default BodyPageContent;
