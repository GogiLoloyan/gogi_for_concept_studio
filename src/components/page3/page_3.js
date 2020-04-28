import React from "react";
import { Parallax } from "react-spring/renderprops-addons";

import withScroll from "../../HOC/withScroll";
import slides from "../../pictures/page_3/images";
import "./slide";

class Page3 extends React.Component {
  render() {
    const { offset, touchEvents } = this.props;
    return (
      <>
        <Parallax.Layer className="common_parallax" offset={offset} {...touchEvents} />
        <Parallax.Layer className="page-3__header common_parallax " speed={0.2} offset={offset} {...touchEvents}>
          <div className="header">
            <h1>Industries we<br />help</h1>
          </div>
        </Parallax.Layer>
        <Parallax.Layer className="page-3__slide-outer common_parallax" speed={0.4} offset={offset + 0.4} {...touchEvents}>
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
}

export default withScroll(Page3, "up and down");