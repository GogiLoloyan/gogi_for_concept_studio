import React from "react";
import { Parallax } from "react-spring/renderprops-addons";

import { images, man, images_hover } from "../../pictures/list_body/images.js";
import ScrollLockMixin from "./ScrollLockMixin";
import Description from "./components/description";
import ImgsForBody from "./components/imgsForBody.js";
import ManBody from "./components/manBody.js";

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.man_body = React.createRef();
    this.man_images = React.createRef();

    this.scroll = to => this.refs.descParralax.scrollTo(to);
  }

  handleOnWheel = e => {
    e.deltaY > 0 && this.props.onWheel(1);
  };

  // componentDidMount = () => ScrollLockMixin.scrollLock();
  // componentWillUnmount = () => ScrollLockMixin.scrollRelease();

  handleMouseEnter = id => {
    this.man_body.current.style.opacity = 0.3;
    this.man_images.current.children[id].style.opacity = 1;
  }

  handleMouseLeave = id => {
    this.man_body.current.style.opacity = 0.9;
    this.man_images.current.children[id].style.opacity = 0;
  }

  render() {
    const propsBody = { images,  handleMouseEnter: this.handleMouseEnter, handleMouseLeave: this.handleMouseLeave };
    const propsMan = { man, images_hover, bRef: this.man_body,  imgsRef: this.man_images };
    const events = {onTouchMove: this.handleOnWheel, onWheel: this.handleOnWheel};
    return (
      <>
        <Parallax.Layer offset={this.props.offset} {...events}></Parallax.Layer>
        <Parallax.Layer className="page-2" id="page-2" ref={this.props.myRef} offset={this.props.offset} speed={0.2}  {...events}>
          <div className="back-grid">

            <ManBody {...propsMan}/>
            <ImgsForBody {...propsBody} />
            <Description />

          </div>
        </Parallax.Layer>
      </>
    );
  }
}

export default Page2;
