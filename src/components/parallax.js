import React from "react";
import { Parallax } from 'react-spring/renderprops-addons'

import Page2 from "./page2/page_2";
import Page3 from "./page3/page_3";
import Page4 from "./page4/page_4";
import Page5 from "./page5/page_5";
import Page6 from "./page6/page_6";
import Description from ".//page4/description";

function ParallaxPages(props) {

  const { scroll, parallax } = props;
  const winWidth = window.innerWidth;
  
  return (
    <>
      <Parallax className="parallax" ref={parallax} pages={5} vertically scrolling={winWidth < 1320}>
        <Page2 offset={0} onWheel={scroll}/>
        <Page3 offset={1} onWheel={scroll}/>
        <Page4 offset={2} onWheel={scroll}/>
        <Page5 offset={3} onWheel={scroll}/>
        <Page6 offset={4} onWheel={scroll}/>
      </Parallax>
        {/* for page 4 */}
        <Description />
    </>
  );
}

export default ParallaxPages;