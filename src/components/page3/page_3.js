import React from "react";
import slides from "../../pictures/page_3/images";
import "./slider";

function Page3() {
  return (
    <section className="page_3" id="page_3" aria-label="Industries we help">
      <div className="back_grid">
        <header className="header">
          <h1>Industries<br />we help</h1>
        </header>
        <div className="slide-outer">
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
        </div>
      </div>
    </section>
  );
}

export default Page3;
