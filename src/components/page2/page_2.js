import React from "react";
import data from './data'
import { images, man, images_hover } from "../../pictures/list_body/images.js";

class Page2 extends React.Component {
  constructor(props) {
    super(props);

    this.man = React.createRef();
    this.man_images = React.createRef();
  }

  handleMouseEnter(id) {
    this.man.current.style.opacity = 0.3;
    this.man_images.current.children[id].style.opacity = 1;
  }

  handleMouseLeave(id) {
    this.man.current.style.opacity = 0.9;
    this.man_images.current.children[id].style.opacity = 0;
  }

  render() {
    return (
      <div className="page_2" id="page_2" ref={this.props.myRef}>
        <div className="back_grid">
          <div className="img-man" ref={this.man_images}>
            <img src={man.url} alt={man.id} ref={this.man} />
            {images_hover.map(img => (
              <img src={img.url} alt={img.id} key={img.id} />
            ))}
          </div>

          <div className="body_images">
            {images.map(img => (
              <img
                src={img.url}
                alt={img.id}
                onMouseEnter={() => this.handleMouseEnter(img.id.slice(-1))}
                onMouseLeave={() => this.handleMouseLeave(img.id.slice(-1))}
                key={img.id}
              />
            ))}
          </div>

          <div className="description">
            {data.map(sec => (
              <section className={sec.id + " sec"} id={`p_2_${sec.id}`} key={sec.id}>
                <header>
                  <h1>{sec.header_1}</h1>
                  <h2>{sec.header_2[0]}<br />{sec.header_2[1]}</h2>
                </header>
                <p>{sec.description}</p>
              </section>
            ))}
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#p_2_sec_1">01.</a></li>
              <li><a href="#p_2_sec_2">02.</a></li>
              <li><a href="#p_2_sec_3">03.</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Page2;
