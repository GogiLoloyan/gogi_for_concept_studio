import React from "react";

import Page1 from "./components/page1/page_1";
// import Video from "./components/Video";
import Page2 from "./components/page2/page_2";
import Page3 from "./components/page3/page_3";
import Cursor from "./components/Cursor/cursor";
import "./onReady/onReady";

function App() {
  return (
    <div className="main">
      <Page1 />
      {/* <Video /> */}
      <Page2 />
      <Page3 />
      <div className="page_4" id="page_4">4</div>
      <div className="page_5" id="page_5">5</div>
      <Cursor />
    </div>
  );
}

export default App;
