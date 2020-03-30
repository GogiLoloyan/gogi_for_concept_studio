import React from "react";

import Page1 from "./components/page_1";
import Video from "./components/Video";
import Page2 from "./components/page_2";
import Page3 from "./components/page_3";
import Cursor from "./components/cursor";
import { handleOnMouseWheel, scrollVertically } from "./components/helper/halper";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ready: false };

    this.video = React.createRef();
    this.cursor = React.createRef();
    this.page_1 = React.createRef();
    this.page_2 = React.createRef();
  }

  handleOnResize = e => {
    e === "page_2" &&
      this.page_2.current.style.setProperty("--play", "running");
    console.log("r");
    Object.assign(this.video.current.style, {
      position: "relative",
      top: 0,
      width: "100vw",
      height: "100vh",
      opacity: 1,
      background:
        "#000e1a linear-gradient(to right, rgba(1, 155, 224, 0.34), rgba(1, 76, 137, 0.34))"
    });

    const _html = document.documentElement;
    window.removeEventListener("wheel", this.stepByStep);
    _html.addEventListener("mousewheel", scrollVertically.bind(_html));
  };

  componentDidMount() {
    const winAddEvent = window.addEventListener.bind(window);
    this.generator = handleOnMouseWheel.bind(this)();

    winAddEvent("resize", this.handleOnResize);
    winAddEvent("load", () => this.page_1.current.style.setProperty("--play", "running"));

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
    this.cursor.current.setAttribute(
      "style",
      `top: ${e.nativeEvent.pageY - 7}px; left: ${e.nativeEvent.pageX - 7}px; `
    );
  };

  render() {
    return (
      <div className="main" onMouseMove={this.handlCursor}>
        <Page1 myRef={this.page_1} hanleResize={this.handleOnResize} />
        <Video myRef={this.video} />
        <Page2 myRef={this.page_2} />
        <Page3 />
        <div className="page_4" id="page_4">
          4
        </div>
        <div className="page_5" id="page_5">
          5
        </div>
        <Cursor myRef={this.cursor} />
      </div>
    );
  }
}

export default App;
