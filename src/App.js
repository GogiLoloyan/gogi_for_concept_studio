import React from "react";

import Page1 from "./components/page1/page_1";
import Video from "./components/Video";
import Page2 from "./components/page2/page_2";
import Page3 from "./components/page3/page_3";
import Cursor from "./components/Cursor/cursor";
import { handleOnMouseWheel, scrollVertically } from "./components/helper/halper";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ready: false };

    this.video = React.createRef();
    this.page_1 = React.createRef();
    this.page_2 = React.createRef();
  }

  handleOnResize = e => {
    const _html = document.documentElement;
    window.removeEventListener("wheel", this.stepByStep);
    _html.addEventListener("mousewheel", scrollVertically.bind(_html));
  };

  componentDidMount() {
    const winAddEvent = window.addEventListener.bind(window);
    this.generator = handleOnMouseWheel.bind(this)();

    // winAddEvent("resize", this.handleOnResize);
    window.innerWidth > 1320 && winAddEvent("load", () => this.page_1.current.style.setProperty("--play", "running"));

    if (window.innerWidth > 1320) {
      winAddEvent("wheel", this.stepByStep, { once: true });
    } else {
      this.handleOnResize();
    }
   
  }

  stepByStep = e => {
    this.generator.next();
  };

  handlCursor = e => {
    // this.big_cursor.current.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`
    // this.small_cursor.current.style.transform=`translate(${e.clientX + 7}px, ${e.clientY + 7}px)`
    // this.setProp(
    //   "--clientX", `${e.clientX - 7}px`
    // );
    // this.setProp(
    //   "--clientY", `${e.clientY - 7}px`
    // );
  };

  render() {
    return (
      <div className="main">
        <Page1 myRef={this.page_1} hanleResize={this.handleOnResize} />
        <Video myRef={this.video} />
        <Page2 myRef={this.page_2} />
        <Page3 />
        <div className="page_4" id="page_4">4</div>
        <div className="page_5" id="page_5">5</div>
        <Cursor />
      </div>
    );
  }
}

export default App;
