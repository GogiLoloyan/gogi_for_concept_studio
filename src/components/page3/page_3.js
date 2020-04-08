import React from "react";
import { Parallax } from 'react-spring/renderprops-addons'

import slides from "../../pictures/page_3/images";
import "./slide";

function Page3(props) {

  let swiping;
  const minDistance = 50;

  const _OnWheel = e => {
    const delta = e.deltaY || e;
    delta > 0 && props.onWheel(props.offset + 1)
    delta < 0 && props.onWheel(props.offset - 1)
  };

  const _onTouchStart = e => {
    swiping = e.changedTouches[0].clientY;
  }

  const _onTouchEnd = e => {
    const diff = swiping - e.changedTouches[0].clientY;
    diff && Math.abs(diff) > minDistance && _OnWheel(diff);
  }

  const events = { 
    onWheel: _OnWheel, 
    onTouchStart: _onTouchStart, 
    onTouchEnd: _onTouchEnd
  };

  return (
    <>
      <Parallax.Layer offset={props.offset} {...events}></Parallax.Layer>
      <Parallax.Layer className="page-3__header" offset={props.offset} speed={0.5} {...events}>
        <div className="header">
          <h1>Industries we<br />help</h1>
        </div>
      </Parallax.Layer> 
      <Parallax.Layer className="page-3__slide-outer" offset={props.offset + 0.4} speed={0.8} {...events}>
        <div className="slide-inner">
          <div className="draggable"></div>
          <div className="slide">
            {slides.map((slide, index) => (
              <section className="slide__item" key={slide.id}>
                <img className="img" src={slide.url} alt={slide.id} />
                <div className="description">
                  <h3>{`0${index + 1}`}</h3>
                  <p>{slide.description}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </Parallax.Layer>
    </>
  );
}

export default Page3;
