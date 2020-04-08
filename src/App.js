import React, { useRef } from "react";
import { Parallax } from 'react-spring/renderprops-addons'

// import Video from "./components/Video";
import Page1 from "./components/page1/page_1";
import Page2 from "./components/page2/page_2";
import Page3 from "./components/page3/page_3";
import Page4 from "./components/page4/page_4";
import Page5 from "./components/page5/page_5";
import Page6 from "./components/page6/page_6";
import Cursor from "./components/Cursor/cursor";
import "./onReady/onReady";
import Description from "./components/page4/description";

function App() {
  const inputEl = useRef(null);
  const scroll = to => inputEl.current.scrollTo(to);
  return (
    <div className="main">

      <Page1 />
      <Parallax ref={inputEl} pages={5} vertically scrolling={false}>
        <Page2 offset={0} onWheel={scroll}/>
        <Page3 offset={1} onWheel={scroll}/>
        <Page4 offset={2} onWheel={scroll}/>
        <Page5 offset={3} onWheel={scroll}/>
        <Page6 offset={4} onWheel={scroll}/>
      </Parallax>
        <Description />  {/* for page 4 */}

      <Cursor />
      {/* <Video /> */}
    </div>
  );
}

export default App;