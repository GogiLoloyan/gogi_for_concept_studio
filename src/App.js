import React, { useRef } from "react";

import Page1 from "./components/page1/page_1";
import ParallaxPages from "./components/parallax";
import Cursor from "./components/Cursor/cursor";
import "./onReady/onReady";

function App() {

  const parallax = useRef(null);
  const scroll = to => parallax.current.scrollTo(to);
  
  return (
    <div className="main">
      <Page1 scroll={scroll} />
      <ParallaxPages {...{ parallax, scroll }} />
      <Cursor />
    </div>
  );
}

export default App;
